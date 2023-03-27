const { faker } = require('@faker-js/faker');

function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const address = faker.address.streetAddress();
  const city = faker.address.city();
  const state = faker.address.state();
  const zipCode = faker.address.zipCode();

  return {
    firstName,
    lastName,
    email,
    address,
    city,
    state,
    zipCode
  };
}

module.exports = {
  generateUser
};
