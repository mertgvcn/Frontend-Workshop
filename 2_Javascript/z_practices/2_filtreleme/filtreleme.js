//! OBJECTS
let product1 = {
    name: "Acer Swift",
    category: "Tech",
    price: 6999
}

let product2 = {
    name: "Acer Nitro 5",
    category: "Tech",
    price: 15000
}

let product3 = {
    name: "Lenovo V15",
    category: "Tech",
    price: 16250
}

let product4 = {
    name: "Lenovo V14",
    category: "Tech",
    price: 14500
}

let product5 = {
    name: "Lenovo IdeaPad",
    category: "Tech",
    price: 10000
}



//! MAIN
let product_list = [product1, product2, product3, product4, product5];
let filter_input = prompt("Search something : ");

filter(product_list);



//! FUNCTIONS
function getProductList(product_list) {
    product_list.forEach(function(product) {
        console.log(product.name + " | " + product.category + " | " + product.price);
    });
}

function filter(product_list) {
    let filtered_list = [];

    product_list.forEach(function(product) {
        if(product.name.toUpperCase().includes(filter_input.toUpperCase(), 0)) {
            filtered_list.push(product);
        }
    });

    getProductList(filtered_list);
}

