const axios = require("axios");

test("instance not have global instance", () => {
  expect.assertions(1);
  axios.interceptors.response.use(response => response, error => Promise.reject(error));
  const instance = axios.create();
  expect(instance.interceptors.response.handlers.length).toBe(axios.interceptors.response.handlers.length);
})