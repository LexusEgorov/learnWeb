let user = {
  name: "Василий Иванович",
  age: 35
};

const userJson = (JSON.stringify(user));
const parsedUser = JSON.parse(userJson);

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, (key, value) => key !== '' && value === meetup ? undefined : value)
);
//Тяжеловато пошло это задание. Сделал опираясь на пример. Но вроде могу объяснить как работает