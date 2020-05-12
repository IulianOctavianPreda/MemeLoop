import { GoogleMapsAPIWrapper, MapsAPILoader } from "@agm/core";
import { AfterViewInit, Component, NgZone, OnInit, ViewChild } from "@angular/core";
import { IonSearchbar } from "@ionic/angular";

export interface ILatLng {
    latitude: number;
    longitude: number;
}

@Component({
    selector: "app-maps",
    templateUrl: "./maps.component.html",
    styleUrls: ["./maps.component.scss"],
})
export class MapsComponent implements OnInit, AfterViewInit {
    // Washington, DC, USA
    origin: ILatLng = {
        latitude: 38.889931,
        longitude: -77.009003,
    };
    // New York City, NY, USA
    destination: ILatLng = {
        latitude: 40.73061,
        longitude: -73.935242,
    };

    @ViewChild("searchPlace", { static: false })
    public searchPlace: IonSearchbar;

    @ViewChild("searchDestination", { static: false })
    public searchDestination: IonSearchbar;

    // public geoCoder:google.maps.Geocoder;
    public placesApi;
    public address;
    public directionsService;
    public directionsRenderer: google.maps.DirectionsRenderer;
    public map;
    public zoom = 14;

    constructor(
        private gmapsApi: GoogleMapsAPIWrapper,
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone
    ) {}

    ngOnInit() {}

    ngAfterViewInit() {
        this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            // this.geoCoder = new google.maps.Geocoder();
            this.directionsRenderer = new google.maps.DirectionsRenderer({
                suppressMarkers: true,
            });
            this.directionsService = new google.maps.DirectionsService();
            this.setInputListener(this.searchPlace, this.origin, "origin");
            this.setInputListener(this.searchDestination, this.destination, "destination");
        });
    }

    setInputListener(inputReference: IonSearchbar, bindedCoordsObject: ILatLng, type: string) {
        inputReference.getInputElement().then((input: HTMLInputElement) => {
            const autocomplete = new google.maps.places.Autocomplete(input);
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    // get the place result
                    const place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    // set latitude, longitude and zoom
                    bindedCoordsObject.latitude = place.geometry.location.lat();
                    bindedCoordsObject.longitude = place.geometry.location.lng();
                    this.zoom = 12;
                    if (type === "origin") {
                        this.destination.latitude = bindedCoordsObject.latitude;
                        this.destination.longitude = bindedCoordsObject.longitude;
                        this.searchDestination.value = "";
                        this.directionsRenderer.setMap(null);
                        this.directionsRenderer.setDirections(null);
                    }
                    if (type === "destination") {
                        this.drawDirectionsRoute();
                    }
                });
            });
        });
    }

    // Get Current Location Coordinates
    private setCurrentLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.origin.latitude = position.coords.latitude;
                this.origin.longitude = position.coords.longitude;
                this.destination.latitude = position.coords.latitude;
                this.destination.longitude = position.coords.longitude;
                this.zoom = 15;
                // this.getAddress(this.origin.latitude, this.origin.longitude);
            });
        }
    }

    // getAddress(latitude, longitude) {
    //     this.geoCoder.geocode(
    //         { location: { lat: latitude, lng: longitude } },
    //         (results, status) => {
    //             if (status === "OK") {
    //                 if (results[0]) {
    //                     this.zoom = 12;
    //                     this.address = results[0].formatted_address;
    //                 } else {
    //                     window.alert("No results found");
    //                 }
    //             } else {
    //                 window.alert("Geocoder failed due to: " + status);
    //             }
    //         }
    //     );
    // }

    onMapReady(evt) {
        this.map = evt;
    }

    drawDirectionsRoute() {
        console.log("draw");
        console.log(this.destination, this.map);
        this.directionsRenderer.setMap(this.map);
        this.directionsService.route(
            {
                origin: { lat: this.origin.latitude, lng: this.origin.longitude },
                destination: {
                    lat: this.destination.latitude,
                    lng: this.destination.longitude,
                },
                waypoints: [],
                optimizeWaypoints: true,
                travelMode: "DRIVING",
            },
            (response, status) => {
                if (status === "OK") {
                    this.directionsRenderer.setDirections(response);
                }
            }
        );
    }
}
