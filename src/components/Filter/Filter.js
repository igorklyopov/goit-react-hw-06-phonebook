import PropTypes from "prop-types";
import { connect } from "react-redux";
import style from "../Filter/Filter.module.css";
import { changeFilter } from "../../redux/contacts/contacts-actions";

const Filter = ({ value, onFilterChange }) => {
  return (
    <label className={style.contactsFilterLabel}>
      <span className={style.contactsFilterLabelText}>
        Find contacts by name
      </span>
      <input
        type="text"
        value={value}
        className={style.contactsFilterInput}
        onChange={onFilterChange}
      />
    </label>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(null, mapDispatchToProps)(Filter);
