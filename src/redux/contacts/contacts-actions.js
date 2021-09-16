import { v4 as uuidv4 } from "uuid";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CHANGE_FILTER,
} from "../contacts/contacts-types";

const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = (contactId) => ({
  type: DELETE_CONTACT,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: CHANGE_FILTER,
  payload: value,
});

export { addContact, deleteContact, changeFilter };
