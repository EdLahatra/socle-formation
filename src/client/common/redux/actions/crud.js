// import { client, wsClient } from '../store';
import constants from '../constants/crud';
import api from '../../services/api';

export const addUser = user => async (dispatch) => {
  const res = await api.post(constants.url, user);
  dispatch({ type: constants.ADD, res });
};

export const updateUser = user => async (dispatch) => {
  const users = await api.put(constants.url, user);
  dispatch({ type: constants.UPDATE, users });
};

export const deleteUser = id => async (dispatch) => {
  const users = await api.remove(constants.url, id);
  dispatch({ type: constants.DELETE, users });
};

export const listUsers = () => async (dispatch) => {
  const users = await api.get(constants.url);
  dispatch({ type: constants.LIST, users });
};

export const getUser = () => async (dispatch) => {
  const user = await api.get(constants.url.getInfo);
  console.log('User User', user);
  dispatch({ type: constants.USER, user });
};

export default {
  addUser,
  updateUser,
  deleteUser,
  listUsers,
  getUser,
};
