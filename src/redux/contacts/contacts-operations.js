// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import * as contactsAPI from '../../services/contacts-api';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

// export const fetchContacts = () => dispatch => {
//   dispatch(fetchContactsRequest());

//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//     .catch(error => dispatch(fetchContactsError(error)));
// };

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

// with toolkit
// export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
//     const { data } = await axios.get(`/contacts`)
//     return data
// })
