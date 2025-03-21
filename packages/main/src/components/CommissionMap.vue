<template>
    <div id="map" style="height: 100%;width: 100%"></div>
    <el-dialog v-model="showModal" :custom-class="'popup'" :top="'10vh'" :width="'100%'">
        <div class="scene pdng-0 pdng-l-15px">
            <ul>
                <li v-for="feature of features" class="pdng-10px">
                    <strong>{{ feature.getProperties().code }} &nbsp;</strong>
                    <a :href="'/commission/' + feature.getProperties().id">
                        {{ feature.getProperties().name }} {{ feature.getProperties().address }}
                    </a>
                </li>
            </ul>
        </div>
    </el-dialog>
</template>
<script>
//TODO маркеры
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import {Cluster, OSM} from "ol/source";
import View from "ol/View";
import {fromLonLat} from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON"
import {Circle, Fill, Icon, Style, Text} from 'ol/style';
import {ElDialog} from 'element-plus';
import {ref, onMounted} from "vue";
import 'ol/ol.css'
import {defaults} from "ol/interaction";
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';

const features   = ref(null)
const showModal  = ref(false)
const styleCache = {};

export default {
    components: {
        ElDialog
    },
    props: {
        initCampaign: {
            type: String,
            default: '2020-08-presidential'
        },
        initCenter: {
            type: Array,
            default: []
        },
        initZoom: {
            type: Number,
            default: 7.3
        },
        wheel: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const cluster = new Cluster({
            distance: 30,
            source: new VectorSource({
                url: `/commissions/${props.initCampaign}.json`,
                format: new GeoJSON()
            }),
        });


        let marker = new VectorLayer({
            source: cluster,
            style(feature) {

                const size = feature.get('features').length;
                let style  = styleCache[size];

                if (!style) {

                    style = new Style({
                        image: new Icon({
                            src: '/img/icon/commission.svg',
                            scale: 0.8,
                        }),
                    });

                    if (size > 1) {
                        style = [new Style({
                            image: new Circle({
                                radius: 20,
                                fill: new Fill({
                                    color: 'rgb(250,127,37, 0.65)',
                                }),
                            }),
                            text: new Text({
                                text: size.toString(),
                                font: '14px sans-serif',
                                fill: new Fill({
                                    color: '#fff',
                                }),
                            }),
                        })];
                    }

                    styleCache[size] = style;

                }

                return style;
            },
        });

        onMounted(() => {
            let i         = new MouseWheelZoom();
            if (props.wheel) {
                var oldFn     = i.handleEvent;
                i.handleEvent = function (e) {
                    let type = e.type;
                    if (type !== "wheel" && type !== "wheel") {
                        return true;
                    }

                    if (!e.originalEvent.ctrlKey) {
                        return true
                    }

                    oldFn.call(this, e);
                }
            }
            document.getElementById('map').innerHTML = '';
            let map                                  = new Map({
                interactions: props.wheel
                    ? defaults({mouseWheelZoom: false}).extend([i])
                    : defaults(),
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    }),
                ],
                target: 'map',
                view: new View({
                    zoom: props.initZoom,
                    center: fromLonLat(props.initCenter.length === 0 ? [
                        27.7834,
                        53.7098
                    ] : props.initCenter),
                })
            });
            map.on('click', e => {
                e.preventDefault();
                map.forEachFeatureAtPixel(e.pixel, baseFeature => {
                    if (baseFeature.getProperties().features.length === 0) {
                        return
                    }
                    setTimeout(() => {
                        showModal.value = true;
                        features.value  = baseFeature.getProperties().features
                    }, 100)

                });
            });
            map.addLayer(marker);
        })
        return {
            features,
            showModal,
            changeLayer(campaign) {
                cluster.setSource(
                    new VectorSource({
                        url: `commissions/${campaign}.json`,
                        format: new GeoJSON()
                    })
                )
                marker.getSource().refresh()
            }
        }
    },

}
</script>
