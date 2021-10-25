<template>
  <div id="map" style="height: 100%;width: 100%"></div>
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

export default {
  props: {
    feature: Object
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
              scale: 0.3,
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
