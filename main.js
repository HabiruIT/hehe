//Câu 1
let Product = function (id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
};

//Câu 2
var products = [
  new Product(1, "Laptop", 12, 10, "Electronics", false),
  new Product(2, "Smartphone", 0, 0, "Electronics", true),
  new Product(3, "Desk Chair", 15, 5, "Furniture", false),
  new Product(4, "Book: JavaScript Basics", 30, 50, "Books", true),
  new Product(5, "Wireless Mouse", 25, 0, "Electronics", true),
  new Product(3, "Chair", 15, 5, "Accessories", true),
  new Product(4, "Table", 30, 50, "Furniture", true),
  new Product(5, "Mouse", 25, 0, "Accessories", false),
];
console.log(products);

//Câu 3
var newProducts = products.map(function (p) {
  return {
    name: p.name,
    price: p.price,
  };
});
console.log(newProducts);

//Câu 4
result = products.filter(function (p) {
  if (p.quantity > 0) return p;
});
console.log(result);

//Câu 5
result = products.some(function (p) {
  return p.price > 30;
});
if (result) {
  console.log("Có sản phẩm giá trên 30");
} else {
  console.log("Không có sản phẩm giá trên 30");
}

//Câu 6
result = products
  .filter(function (p) {
    return p.category == "Accessories";
  })
  .every(function (p) {
    return p.isAvailable;
  });
if (result) {
  console.log("Tất cả đang được bán");
} else {
  console.log("Có sản phẩm không được bán");
}

//Câu 7
total = products.reduce(function (sum, p) {
  return sum + p.price * p.quantity;
}, 0);
console.log(total);

//Câu 8
for (const element of products) {
  console.log(`${element.name} - ${element.category} - ${element.isAvailable}`);
}

//Câu 9
for (const key in products[0]) {
  console.log(key, products[0][key]);
}

//Câu 10
result = products
  .filter(function (p) {
    return p.isAvailable && p.quantity > 0;
  })
  .map((p) => p.name);
console.log(result);
