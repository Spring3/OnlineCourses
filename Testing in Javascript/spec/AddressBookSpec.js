describe('Address Book', () => {

  let addressBook, contact;

  beforeEach(() => {
    addressBook = new AddressBook();
    contact = new Contact();
  });

  it('should be able to add a contact', () => {
    addressBook.addContact(contact);
    expect(addressBook.getContact(0)).toBe(contact);
  });

  it('should be able to delete a contact', () => {
    addressBook.addContact(contact);
    addressBook.deleteContact(0);
    expect(addressBook.getContact(0)).not.toBeDefined();
  }); 
});

describe('Async Address Book', () => {
  it('should grab initial contacts', (done) => {
    const addressBook = new AddressBook();
    addressBook.getInitialContacts(function () {
      done();
    });
  }); 
});