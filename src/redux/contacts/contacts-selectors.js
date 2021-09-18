export const getContacts = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.filter;

export const getFilteredContacts = (state) => {
  const filter = getFilter(state);
  const contacts = getContacts(state);

  const normalizedFilterValue = filter.toLowerCase().trim();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilterValue)
  );
};
