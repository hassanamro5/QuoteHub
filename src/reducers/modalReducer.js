import {OPEN_MODAL, CLOSE_MODAL} from '../actions/types';


const initialState = {
    modal: false
  }
  
export default (state = initialState, action) => {
    switch (action.type) {
      case OPEN_MODAL:
        return { ...state, modal: action.payload };
      case CLOSE_MODAL:
        return { ...state, modal: action.payload };
      default:
        return state;
    }
  }