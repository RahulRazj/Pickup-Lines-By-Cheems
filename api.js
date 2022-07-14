var axios = require("axios");

exports.getPickupLines = async () => {
  var data = "";
  var config = {
    method: "get",
    url: "https://cheempickupsapi.herokuapp.com/joke",
    headers: {},
    data: data,
  };

  return axios(config).catch(function (error) {
    console.log(error);
    return error;
  });
};
