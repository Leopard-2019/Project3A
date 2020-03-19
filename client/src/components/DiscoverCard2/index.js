import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Form from "../Form";
import { Container } from "../Grid";
import Wrapper from "../Wrapper";
import API from "../../utils/API";
import drugstore from "./drugstore.json";

export class MapContainer extends Component {
  state = {
    laT1: "",
    lnG1: "",
    zipcode: "",
    drugstore: drugstore,
    elements: [],
    elements1: [],
    activeMarker: {},
    selectedPlace: {},
    selectedPhone: {},
    selectedStreet: {},
    selectedCity: {},
    selectedState: {},
    selectedZip: {},
    showingInfoWindow: false
  };

  componentDidMount() {
    this.loadZipCode();
  }

  loadZipCode = () => {
    API.getZipCode()
      .then(res => this.setState({ location: res.data, lat: "", lng: "" }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ zipcode: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getZipCode(this.state.zipcode)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.location);
        }
        this.setState({ laT1: res.data.lat, lnG1: res.data.lng });
        console.log(this.state.laT1, this.state.lnG1);
        this.secondfunc(this.state.laT1, this.state.lnG1);
      })
      .catch(err => this.setState({ error: err.location }));
  };

  secondfunc = () => {
    var newStateArray = this.state.elements.slice();
    for (var i = 0; i < drugstore.length; i++) {
      var R = 3958.8; // Radius of earth in Miles
      var dLat =
        (drugstore[i].lat * Math.PI) / 180 - (this.state.laT1 * Math.PI) / 180;
      var dLon =
        (drugstore[i].lng * Math.PI) / 180 - (this.state.lnG1 * Math.PI) / 180;
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((this.state.laT1 * Math.PI) / 180) *
          Math.cos((drugstore[i].lat * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d1 = R * c;
      if (d1 < 10) {
        newStateArray.push({
          id: drugstore[i].id,
          lat: drugstore[i].lat,
          long: drugstore[i].lng,
          name: drugstore[i].name,
          street: drugstore[i].street,
          city: drugstore[i].city,
          state: drugstore[i].state,
          zip: drugstore[i].zipcode,
          phone: drugstore[i].phone
        });
      }
    }
    this.setState({ elements: newStateArray });
    console.log(this.state.elements);
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      selectedPhone: props,
      selectedStreet: props,
      selectedCity: props,
      selectedState: props,
      selectedZip: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onInfoWindowClose = () => {
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  };

  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  displayMarkers = () => {
    return this.state.elements.map((element, index) => {
      return (
        <Marker
          key={index}
          id={index}
          onClick={this.onMarkerClick}
          position={{
            lat: element.lat,
            lng: element.long
          }}
          name={element.name}
          street={element.street}
          city={element.city}
          state={element.state}
          zip={element.zip}
          phone={element.phone}
          icon={{
            url: "https://img.icons8.com/dusk/64/000000/pharmacist.png"
          }}
        />
      );
    });
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <br />
          <br />
          <br />
          <div>
            <Form
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </div>
          <br />
          <br />
          <div>
            <Map
              className="map"
              google={this.props.google}
              onClick={this.onMapClick}
              zoom={14}
              initialCenter={{ lat: 25.827848, lng: -80.316078 }}
              style={{ height: "50%", position: "relative", width: "50%" }}
            >
              {this.displayMarkers()}
              <Marker
                name="Zip Code's Center Position"
                // onClick={this.onMarkerClick}
                position={{ lat: this.state.laT1, lng: this.state.lnG1 }}
                icon={{
                  url:
                    "https://img.icons8.com/color/48/000000/worldwide-location.png"
                }}
              />
              <InfoWindow
                marker={this.state.activeMarker}
                onClose={this.onInfoWindowClose}
                visible={this.state.showingInfoWindow}
              >
                <div style={{color:"red"}}><strong>{this.state.selectedPlace.name}</strong></div>
                <div>{this.state.selectedStreet.street},</div>
                <div>
                  {this.state.selectedCity.city},{" "}
                  {this.state.selectedState.state}, {this.state.selectedZip.zip}
                </div>
                <div>
                  {"phone:"} {this.state.selectedPhone.phone}
                </div>
              </InfoWindow>
            </Map>
          </div>
        </Container>
      </Wrapper>
    );
  }
}

const APIkey3 = process.env.REACT_APP_GOOGLE_KEY;

export default GoogleApiWrapper({
  apiKey: APIkey3
})(MapContainer);
