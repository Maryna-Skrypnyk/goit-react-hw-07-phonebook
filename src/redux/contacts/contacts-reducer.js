// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, changeFilter } from './contacts-actions';

// const itemsReducer = createReducer([], {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filterReducer = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

import { createReducer, combineReducers } from '@reduxjs/toolkit';
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
  changeFilter,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [fetchContactsRequest]: () => null,

  [addContactError]: (_, { payload }) => payload,
  [addContactRequest]: () => null,

  [deleteContactError]: (_, { payload }) => payload,
  [deleteContactRequest]: () => null,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
});

// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { fetchContacts } from './contacts-operations';
// import { addContact, deleteContact, changeFilter } from './contacts-actions';

// const items = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload
// })

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// })

// const error = createReducer(null, {
// [fetchContacts.rejected]: (_, action) => action.payload,
// [fetchContacts.pending]: () => null,
// })

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   isLoading,
//   error,
//   filter,
// })
