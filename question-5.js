// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

let calculateTotalPrice = function (product, promotionCode) {
  if (promotionCode === "SALE20") {
    let totalPrice = product.reduce((acc, cur) => {
      return (acc = acc + cur.price * cur.quantity);
    }, 0);
    return (totalPrice = totalPrice * 0.8);
  } else if (promotionCode === "SALE50") {
    let totalPrice = product.reduce((acc, cur) => {
      return (acc = acc + cur.price * cur.quantity);
    }, 0);
    return (totalPrice = totalPrice * 0.5);
  } else if (promotionCode === "") {
    let totalPrice = product.reduce((acc, cur) => {
      return (acc = acc + cur.price * cur.quantity);
    }, 0);
    return totalPrice;
  }
};

console.log(calculateTotalPrice(products, promotionCode));
