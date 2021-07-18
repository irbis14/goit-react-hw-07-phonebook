import { connect } from "react-redux";
import * as actions from "./redux/app-actions";
import appOperations from "./redux/app-operations";

import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import Contacts from "./components/Contacts";
import ContactsItem from "./components/ContactsItem";

import "./App.css";

const App = ({ filter, addContact, onChangeFilter, deleteContact }) => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <Filter onChangeFilter={onChangeFilter} />
      <Contacts>
        <ContactsItem items={filter} onDeleteContact={deleteContact} />
      </Contacts>
    </div>
  );
};

const filterContact = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }, props) => {
  return {
    filter: filterContact(items, filter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (newContact) => dispatch(appOperations.addContact(newContact)),
    onChangeFilter: (e) => dispatch(actions.onChangeFilter(e.target.value)),
    deleteContact: (e) => dispatch(appOperations.deleteContact(e.target.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
