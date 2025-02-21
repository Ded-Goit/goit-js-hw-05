`use strict`;

const getTotalBalanceByGender = (users, gender) =>
  /**Filtering, filter(user => user.gender === gender)
select only those users whose gender (user.gender) matches gender.
Summarizing reduce((total, user) => total + user.balance, 0)
reduce takes total, adds user.balance to it, and returns the total.
Initial value total = 0. */
  users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);
const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, 'male')); // 12053

console.log(getTotalBalanceByGender(clients, 'female')); // 8863
//Leave this code for review by your mentor.
