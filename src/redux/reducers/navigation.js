import { actions, pages } from '../constants';


const defaultState = {
  page: pages.LOGIN,
};

const navigation = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SWITCH_PAGE: return {
      ...state,
      page: action.payload,
    };

    default: return state;
  }
};

export default navigation;
