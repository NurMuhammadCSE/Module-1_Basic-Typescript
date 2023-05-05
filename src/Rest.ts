const greetFriends = (...friends: string[]): void => {
  friends.forEach((friend) => console.log(`${friend}`));
};

greetFriends("Abul", "Kabul", "Babul", "Labul");

const myFriends = ["Abul", "Rahim", "Karim"];
const newFriends = ["Liton", "Shakib", "Miraz"];

myFriends.push(...newFriends);
console.log(myFriends);
