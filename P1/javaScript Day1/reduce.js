let all = ["Lars", "Peter", "Jan", "Bo"];

let str1 = all.join(", ");
let str2 = all.join("#-");

console.log(`${str1}\n${str2}`);

let numbers = [2, 3, 67, 33];
console.log(numbers.reduce((total, num) => total + num));

let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

console.log(
  members.reduce((total, num, i, arr) => {
    if (i < arr.length - 1) {
      return { age: total.age + num.age };
    }
    return { age: (total.age + num.age) / arr.length };
  })
);

var votes = [
    "Clinton",
    "Trump",
    "Clinton",
    "Clinton",
    "Trump", 
    "Trump",
    "Trump",
    "None",
  ];

console.log(
  votes.reduce((tally, vote) => {
    if (!tally[vote]) {
      tally[vote] = 1;
    } else {
      tally[vote] = tally[vote] + 1;
    }
    return tally;
  }, {})
);

const reduceObj = (numbers) => {
    let res = 0;
    numbers.forEach((n) => (res += n.age));
    return res / numbers.length;
  };
