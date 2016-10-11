import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import invoiceReducer from './invoice_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  invoicing: invoiceReducer
});

export default rootReducer;
