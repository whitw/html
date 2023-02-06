//JSON: javascript object notation
const a = {};

const b = {
  team: "hello",
  teamCount: 7,
  member: ["a", "b", "c"], //다른 타입도 가능하지만 통일시킬것.
  other: {
    average: 20,
  },
};

console.log(a);
console.log(b.team);
console.log(b.member[2]);