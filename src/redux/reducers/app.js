import { actions } from '../constants';

const defaultState = {
  questions: [],
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };

    default:
      return state;
  }
};

export default app;
