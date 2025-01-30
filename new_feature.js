const something = {
  idk: "text",
  arr: []
}

const func = (() => {
  something.arr.push("item")
});

console.log(something.arr)
