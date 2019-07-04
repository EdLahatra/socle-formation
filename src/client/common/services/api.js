import config from '../../../../config';

const axios = require('axios');

axios.create({
  baseURL: config.baseURL,
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
});

const get = async (url) => {
  const result = await axios.get(url);
  return result.data || result;
};

const update = async (url) => {
  const result = await axios.put(url);
  return result;
};

const remove = async (url) => {
  const result = await axios.delete(url);
  return result;
};

const post = async (url) => {
  const result = await axios.post(url);
  return result;
};

export default {
  get,
  update,
  remove,
  post,
};
