import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Attribution, defaults as defaultControls, FullScreen, ScaleLine, ZoomToExtent } from 'ol/control.js';
import Feature, { FeatureLike } from 'ol/Feature';
import Point from 'ol/geom/Point';
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction.js';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import Icon from 'ol/style/Icon';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import Style from 'ol/style/Style';
import View from 'ol/View';
import { PostApiService } from 'src/app/api/apis/posts.api';

import { groupedCountries } from './countries';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
    @Output() markerClicked = new EventEmitter<string>();
    map: Map;

    constructor(private postsService: PostApiService, @Inject(DOCUMENT) private document: Document) {}

    ngOnInit() {}

    ngAfterViewInit() {
        setTimeout(() => {
            const tileLayer = new TileLayer({
                source: new OSM()
            });
            this.map = new Map({
                target: 'map',
                layers: [tileLayer],
                controls: defaultControls({
                    attribution: false
                }).extend([
                    new Attribution({
                        collapsible: true
                    }),
                    new ZoomToExtent({
                        extent: [813079.7791264898, 5929220.284081122, 848966.9639063801, 5936863.986909639]
                    }),
                    new FullScreen(),
                    new ScaleLine()
                ]),
                interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
                view: new View({
                    center: [2905952.9689886556, 5532708.900221307],
                    zoom: 5
                })
            });

            this.map.on('singleclick', (e) => {
                const feature: FeatureLike = this.map.forEachFeatureAtPixel(e.pixel, (feature) => {
                    return feature;
                });
                if (feature) this.markerClicked.emit(feature.getId() as string);
            });

            this.addLocationPoints();
            this.document.getElementById('map').style.height = '80vh';
        });
    }

    addLocationPoints() {
        this.postsService.getCountries().subscribe((x) => {
            x.forEach((countryCode) => {
                console.log(countryCode, groupedCountries[countryCode]);
                const { latitude, longitude } = groupedCountries[countryCode];
                this.addPoint(latitude, longitude, countryCode);
            });
        });
    }
    addPoint(lat: number, lng: number, id?: string) {
        const feature = new Feature({
            geometry: new Point(fromLonLat([lng, lat]))
        });
        feature.setId(id);
        const vectorLayer = new VectorLayer({
            source: new VectorSource({
                features: [feature]
            }),
            style: new Style({
                image: new Icon({
                    anchor: [0.1, 0.1],
                    anchorXUnits: IconAnchorUnits.FRACTION,
                    anchorYUnits: IconAnchorUnits.FRACTION,
                    src: 'assets/icon/pin.png',
                    scale: 0.01
                })
            })
        });
        this.map.addLayer(vectorLayer);
    }
}
