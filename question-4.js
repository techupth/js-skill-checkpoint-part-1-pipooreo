// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

let minimumInventary = {};
function minimumQuantity(inven) {
  let minQuantity = inven.reduce((acc, cur) => {
    if (acc === 0) acc = cur.quantity;
    return (acc = Math.min(acc, cur.quantity));
  }, 0);
  console.log(minQuantity);

  let minName = inven.reduce((acc, cur) => {
    if (cur.quantity === minQuantity) {
      acc = cur.name;
    }
    return acc;
  }, "");
  // for (let i = 0; i < inven.length; i++) {
  //   if (inven[i].quantity === minQuantity) {
  //     minName = inven[i].name;
  //   }
  // }
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minName} ซึ่งมี ${minQuantity} ชิ้น`;
}

// minimumQuantity(inventory);
console.log(minimumQuantity(inventory));
