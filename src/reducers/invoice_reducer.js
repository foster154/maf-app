import {
  FETCH_INVOICES,
  CREATE_INVOICE
} from '../actions/types';

export default function(state = { invoices: [] }, action) {
  switch(action.type) {
    case FETCH_INVOICES:
      return { ...state, invoices: action.payload };
    case CREATE_INVOICE:
      return { ...state }
  }
  return state;
}