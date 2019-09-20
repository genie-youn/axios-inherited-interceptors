const axios = require("axios");

test("instance not have global interceptors", () => {
  axios.interceptors.response.use(response => response, error => Promise.reject(error));
  const instance = axios.create();
  expect(instance.interceptors.response.handlers.length).toBe(axios.interceptors.response.handlers.length);
});