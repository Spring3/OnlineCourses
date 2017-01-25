function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.addContact = function (contact) {
  this.contacts.push(contact);
}

AddressBook.prototype.getContact = function (index) {
  return result = this.contacts[index];
}

AddressBook.prototype.deleteContact = function (index) {
  this.contacts.splice(index, 1);
}

AddressBook.prototype.getInitialContacts = function (cb) {
  setTimeout(function () {
    if (cb) {
      return cb();
    }
  }, 3);
}