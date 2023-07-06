export default class RandomData {

  static generateRandomFirstName() {
    const firstNames = [
      "Adam", "Barbara", "Cezary", "Daria", "Edward", "Filip", "Gosia",
      "Halina", "Ireneusz", "Justyna", "Kamil", "Magda", "Natalia", "Olaf",
      "Piotr", "Robert", "Sabina", "Tomasz", "Ula", "Wojciech", "Zofia"
    ];
    const firstNameIndex = Cypress._.random(0, firstNames.length - 1);
    return firstNames[firstNameIndex];
  }

  static generateRandomLastName() {
    const lastNames = [
      "Iksiński", "Kowalski", "Kowal", "Random", "Anon"
    ];
    const lastNameIndex = Cypress._.random(0, lastNames.length - 1);
    return lastNames[lastNameIndex];
  }

  static generateRandomEmailAddress() {
    const randomNumber = Cypress._.random(10000);
    return `email${randomNumber}@gmail.com`;
  }

  static generateRandomPassword(length) {
    const validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Cypress._.random(0, validChars.length - 1);
      password += validChars[randomIndex];
    }
    return password;
  }

  static generateRandomReview() {
    const reviews = [
      "The fabric is so soft and comfortable!",
      "I love the unique design and pattern.",
      "The material feels cheap and scratchy."
    ];
    const reviewsIndex = Cypress._.random(0, reviews.length - 1);
    return reviews[reviewsIndex];
  }
}
