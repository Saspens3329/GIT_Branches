const something = {
  idk: "text",
  arr: []
}

const func = () => {
  something.arr.push("item")
}

func();
console.log(something.arr)
