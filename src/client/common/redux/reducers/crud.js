import constants from '../constants/crud';

const initialState = {
  users: [],
  user: {
    username: null,
  },
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.USER:
      return {
        ...state,
        user: action.user,
      };
    case constants.LIST:
      return {
        ...state,
        users: action.users,
      };
    case constants.DELETE:
      return {
        ...state,
        value: state.value - 1,
      };
    case constants.ADD:
      return {
        ...state,
        value: state.value + 1,
      };
    case constants.UPDATE:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default calculatorReducer;
