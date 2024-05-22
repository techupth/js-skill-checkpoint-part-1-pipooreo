// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo.push({ todo: "Walk the dog" });
console.log(myTodo);

myTodo[3].todo = "Go to the gym";
console.log(myTodo);

myTodo.pop();
console.log(myTodo[3]);
