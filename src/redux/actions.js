import actionTypes from '../redux/contacts/contacts-types';
import { createAction } from '@reduxjs/toolkit';

const contactAdd = createAction(actionTypes.CONTACTS_ADD);
const contactDelete = createAction(actionTypes.CONTACT_DELETE);
