import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import { getVisibleContactsSortByName } from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import { ReactComponent as IconDelete } from '../icons/icon-close-delete.svg';

import styles from './ContactList.module.scss';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <li className={styles.ContactItem}>
      <p className={styles.Contact}>
        <span className={styles.ContactName}>{name}:</span> {number}
      </p>
      <IconButton onDeleteContact={onDeleteContact} aria-label="Delete contact">
        <IconDelete width={15} height={15} />
      </IconButton>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const ContactList = () => {
  const contacts = useSelector(getVisibleContactsSortByName);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  if (contacts.length === 0) {
    return <p>There are no contacts in the list</p>;
  }

  return (
    <ul className={styles.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      // name: PropTypes.string.isRequired,
      // number: PropTypes.string.isRequired,
    }),
  ),
  // onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
