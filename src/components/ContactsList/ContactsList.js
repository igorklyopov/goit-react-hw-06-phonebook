import PropTypes from "prop-types";
import style from "../ContactsList/ContactsList.module.css";
import IconButton, {
  deleteContactBtnClassNames,
} from "../IconButton/IconButton";
import { ReactComponent as IconCross } from "../../images/cross.svg";
import addClassNames from "../../utils/addClassNames";

import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-actions";

const ContactsList = ({ contacts, onDeleteContactBtnClick }) => {
  const contactsListClassNames = addClassNames("list", style.contactsList);
  const contactNameClassNames = addClassNames("link", style.contactsNumber);

  return (
    <ul className={contactsListClassNames}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.contactsListItem}>
          <p className={style.contactsName}>{name}: </p>
          <a href={`tel:${number}`} className={contactNameClassNames}>
            {number}
          </a>
          <IconButton
            type="button"
            ariaLabel="Delete contact button"
            width="40"
            height="40"
            onClick={() => onDeleteContactBtnClick(id)}
            className={deleteContactBtnClassNames}
          >
            <IconCross width="15" height="15" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContactBtnClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const normalizedFilterValue = state.contacts.filter
    .toLocaleLowerCase()
    .trim();

  const filteredContacts = state.contacts.items.filter((item) =>
    item.name.toLocaleLowerCase().includes(normalizedFilterValue)
  );

  return {
    contacts: filteredContacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContactBtnClick: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
