import axios from "axios";
// Export an object containing methods we'll use for accessing the Dog.Ceo API

const APIkey1 = process.env.REACT_APP_ZIPCODE_KEY;


export default {
  getZipCode: function(zipcode) {
    return axios.get(
      "https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/" +
        APIkey1 +
        "/info.json/" +
        zipcode +
        "/degrees"
    );
  }
}

