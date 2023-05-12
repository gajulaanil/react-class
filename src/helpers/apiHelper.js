import axios from "axios";

const getApi = (url) => {
  let response;
  let error;
  axios
    .get(url)
    .then((response) => {
      response = response;
    })
    .catch((error) => {
      error = error;
    });

  return {
    response,
    error,
  };
};

export default getApi;
