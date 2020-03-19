import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Form from "../Form";
import { Container } from "../Grid";
import Wrapper from "../Wrapper";
import API from "../../utils/API";

export class MapContainer extends Component {
  state = {
    laT1: "",
    lnG1: "",
    zipcode: "",
    elements: [],
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
    API.getDoctor(this.state.laT1, this.state.lnG1).then(res => {
      const results = Object.keys(res.data).map(i => res.data[i]);
      var newStateArray = this.state.elements.slice();
      for (var i = 0; i < results[1].length; i++) {
        newStateArray.push({
          id: i,
          lat: results[1][i].lat,
          long: results[1][i].lon,
          doctorname: results[1][i].name,
          street: results[1][i].visit_address.street,
          city: results[1][i].visit_address.city,
          state: results[1][i].visit_address.state,
          zip: results[1][i].visit_address.zip,
          phone: results[1][i].phones[0].number
        });
      }
      this.setState({ elements: newStateArray });
      console.log(this.state.elements);
    });
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
          name={element.doctorname}
          street={element.street}
          city={element.city}
          state={element.state}
          zip={element.zip}
          phone={element.phone}
          icon={{
            url: "https://img.icons8.com/emoji/48/000000/man-health-worker.png"
          }}
        />
      );
    });
  };

  render() {
    return (
      <Wrapper>
        <Container className="googleCard">
          <br/>
          <br/>
          <br/>
          <div>
            <Form
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </div>
          <div style={{padding: "100px"}}>
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
                <div style={{color:"blue"}}><strong>{this.state.selectedPlace.name}</strong></div>
                <div>
                  {this.state.selectedStreet.street},
                  {this.state.selectedCity.city},
                  {this.state.selectedState.state},{this.state.selectedZip.zip}
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
console.log(APIkey3);

export default GoogleApiWrapper({
  apiKey: APIkey3
})(MapContainer);

