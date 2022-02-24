import axios from "axios";
// Export an object containing methods we'll use for accessing the Dog.Ceo API

const APIkey1 = process.env.REACT_APP_ZIPCODE_KEY;

(function () {
  var cors_api_host = "cors-anywhere.herokuapp.com";
  var cors_api_url = "https://" + cors_api_host + "/";
  var slice = [].slice;
  var origin = window.location.protocol + "//" + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    var args = slice.call(arguments);
    var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
    if (
      targetOrigin &&
      targetOrigin[0].toLowerCase() !== origin &&
      targetOrigin[1] !== cors_api_host
    ) {
      args[1] = cors_api_url + args[1];
    }
    return open.apply(this, args);
  };
})();

export default {
  getZipCode: function (zipcode) {
    return axios.get(
      `https://app.zipcodebase.com/api/v1/search?apikey=d4432520-9500-11ec-8bf3-df0e35543ab0&codes=${zipcode}&country=us`
    );
  },
};
