<template>
  <div id="map" style="height: 100%;width: 100%"></div>
  <Dialog v-model:visible="showModal"
          class="popup"
          :show-header="false"
          :modal="true">
    <div class="scene">
      <p v-for="feature of features">
        <a :href="'/commission/' + feature.getProperties().id">
          {{feature.getProperties().code}}|{{feature.getProperties().name}} {{feature.getProperties().description}}
        </a>
      </p>
    </div>
  </Dialog>
</template>
<script>
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import {Cluster, OSM} from "ol/source";
import View from "ol/View";
import {fromLonLat} from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON"
import {Circle, Fill, Icon, Style, Text} from 'ol/style';
import Dialog from './Modal.vue';
import {ref} from "vue";

const features = ref(null)
const showModal = ref(false)

export default {
  components: {
    Dialog
  },
  props: {
    feature: Object
  },
  setup() {

      return {
        features,
        showModal
      }
  },
  mounted() {
    document.getElementById('map').innerHTML = '';
    let map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        zoom: 6.8,
        center: fromLonLat([
          27.7834,
          53.7098
        ]),
      })
    });
    map.on('click', e => {
      e.preventDefault();
      map.forEachFeatureAtPixel(e.pixel, baseFeature => {
        if (baseFeature.getProperties().features.length === 0) {
          return
        }
        showModal.value = true;
        features.value = baseFeature.getProperties().features
      });
    });
    const cluster = new Cluster({
      distance: 40,
      source: new VectorSource({
        url: 'commissions/2020.json',
        format: new GeoJSON()
      }),
    });
    const styleCache = {};
    let marker = new VectorLayer({
      source: cluster,
      style(feature) {

        const size = feature.get('features').length;
        let style = styleCache[size];

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

    map.addLayer(marker);
  }
}
</script>
