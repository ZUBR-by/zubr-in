<template>
  <div id="map" style="height: 100%;width: 100%"></div>
</template>
<script>
import Map          from "ol/Map";
import TileLayer    from "ol/layer/Tile";
import {Cluster, OSM}          from "ol/source";
import View         from "ol/View";
import {fromLonLat} from "ol/proj";
import VectorLayer  from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {Feature}    from "ol";
import Point        from "ol/geom/Point";
import { Circle, Fill, Icon, Style, Text } from 'ol/style';

export default {
  props: {
    feature  : Object
  },
  mounted() {
    document.getElementById('map').innerHTML = '';
    let map                                  = new Map({
      layers      : [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target      : 'map',
      view        : new View({
        zoom  : 6.8,
        center: fromLonLat([
          27.7834,
          53.7098
        ]),
      })
    });

    const cluster = new Cluster({
      distance: 40,
      source:  new VectorSource({
        features: [
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                27.6308768,
                53.8753372
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                27.5696487,
                53.8753159
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                30.053611,
                53.0825
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                24.741917,
                53.6047649
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                27.5300215,
                53.8942681
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                23.680605,
                52.086457
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                23.681561,
                52.086983
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                23.678119,
                52.10569
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                23.680651,
                52.086378
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                23.70575,
                52.088785
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                26.011186,
                53.145133
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                24.979748,
                52.534316
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                26.424223,
                52.761166
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                25.163872,
                52.190339
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                24.029503,
                52.199772
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                25.533363,
                52.145513
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                25.341007,
                52.71709
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                23.819638,
                52.39655
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                24.356678,
                52.208454
              ]
            }
          },
          {
            "coordinates": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:EPSG::4326"
                }
              },
              "coordinates": [
                26.265859,
                53.039146
              ]
            }
          }
        ].map(i => new Feature({
          geometry: new Point(fromLonLat([
            ...i.coordinates.coordinates
          ])) ,
        })),
      }),
    });
    const styleCache = {};
    let marker                               = new VectorLayer({
      source: cluster,
      style(feature) {

        const size = feature.get('features').length;
        let style = styleCache[size];

        if (!style) {

          style = new Style({
            image: new Icon({
              src: '/img/marker.png',
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
