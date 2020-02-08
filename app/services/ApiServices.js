import axios from "axios";

axios.interceptors.request.use(
  reqConfig => {
    reqConfig.baseURL = "https://api.backendmentor.tk/v1/";

    return reqConfig;
  },
  err => Promise.reject(err)
);

const ApiServices = {
  request(options, done) {
    axios(options)
      .then(result => {
        return done(null, result);
      })
      .catch(error => {
        return done(true, error.response);
      });
  },

  login(params, done) {
    let options = {
      url: `/authentication`,
      method: "get",
      data: params
    };
    ApiServices.request(options, done);
  },

  register(params, done){
    let options = {
      url: `/authentication/register`,
      method: "get",
      data: params
    };
    ApiServices.request(options, done);
  },

  getHome(type, done) {
    let options = {
      url: `/content/page/` + type,
      method: "get"
    };
    ApiServices.request(options, done);
  }
};

export default ApiServices;
