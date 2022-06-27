import React from "react";
import axios from "axios";

const URL = "https://restcountries.com/v2/all";

const Api = {
  getUser: () => {
    return axios.get(URL);
  },
};

export default Api;
