const { Person } = require("./models/person");

const person = new Person("Gustavo", "Jobs");
console.log(person.getFullName());
console.log(person.speak("Haoy!"));
