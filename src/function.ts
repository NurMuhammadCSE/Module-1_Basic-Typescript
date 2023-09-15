// function add(a, b) {
//   return a + b;
// }

// console.log(add("a", 1));

function addTwo(a: number, b: number) {
    return a + b;
}

console.log(addTwo(12, 33));

const addThree = (a: string, b: string) => {
    return a + " " + b;
};

console.log(addThree("Mrs", " Khadija"));

const array = [1, 2, 3, 4, 5];

const newArray = array.map((num: number) => num * 2);

console.log(newArray);


const person = {
    name: "Men",
    balance: 22,
    addBalance(money: number) {
        return this.balance + money;
    }
}

const personTwo: {
    name: string;
    balance: number;
    addBalance(money: number): void;
} = {
    name: 'Apple',
    balance: 22,
    addBalance(money: number) {
        console.log(`My new Balance is ${this.balance + money}`)
    },
}

