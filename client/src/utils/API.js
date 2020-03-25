import axios from "axios";
// Export an object containing methods we'll use for accessing the Dog.Ceo API

const APIkey1 = process.env.REACT_APP_ZIPCODE_KEY;
const APIkey2 = process.env.REACT_APP_BETDOC_KEY;


export default {
  getZipCode: function(zipcode) {
    return axios.get(
      "https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/" +
        APIkey1 +
        "/info.json/" +
        zipcode +
        "/degrees"
    );
  },
  getDoctor: function(laT1, lnG1) {
    return axios.get(
      "https://api.betterdoctor.com/2016-03-01/doctors?location=" +
        laT1 +
        "," +
        lnG1 +
        "," +
        10 +
        "&limit=2000&user_key=" +
        APIkey2
    );
  }
}

