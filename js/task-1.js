`use strict`;
/* Write an arrow function getUserNames(users) that will accept one parameter users — an array of users objects.
The function should return an array of names of all users (the name property) from the users array.
Take the code below and insert it after the declaration of your function to verify that it works correctly.
The results of its calls will be printed to the console.*/
/** We declare an arrow function with a single parameter users.
 *  We return the result of the map call.
 *  The map method creates a new array in which each element
 *  is the value of the name property of each user.
 * The function iterates over the array of objects,
 * extracts the value of the name key from each object,
 * and returns a new array of these values.*/
const getUserNames = users => {
  return users.map(user => user.name);
};
console.log(
  getUserNames([
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      balance: 2811,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      balance: 3821,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      balance: 3793,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      balance: 2278,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      balance: 3951,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      balance: 1498,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      balance: 2764,
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// Leave this code for review by your mentor.
