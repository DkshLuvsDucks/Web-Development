const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(
    (res) => {
        console.log("connection successful");
    })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number 
});

const Order = mongoose.model("Order", orderSchema);

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: Order
        }
    ] 
});

// MONGOOSE MIDDLEWARES
// customerSchema.pre("findOneAndDelete", async() => {
//     console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async(customer) => {
    if(customer.orders.length){
        let res = await Order.deleteMany({_id : {$in: customer.orders}});
        console.log(res);
    }
});

const Customer = mongoose.model("Customer", customerSchema);

// const addOrders = async() => {
//     let result = await Order.insertMany([
//         {item: "Rubber Ducky", price: 100},
//         {item: "Soap", price: 200},
//         {item: "Shampoo", price: 300},
//     ]);
//     console.log(result);
// }

// addOrders();


// const addCustomer = async() => {
//     let cust1 = new Customer({
//         name: "Daksh"
//     });
    
//     let order1 = await Order.findOne({item: "Shampoo"});
//     let order2 = await Order.findOne({item: "Rubber Ducky"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);
    
//     let res = await cust1.save();
//     console.log(res);
// };

// addCustomer();

// const findCustomer = async() => {
//     let result = await Customer.find({}).populate("orders");
//     console.log(result);
//     console.log(result[0]);
// }

// findCustomer();

// ----------------------------------------------------------

// Handling Deletion
// const addCustomer = async () => {
//     let newCust =  new Customer({
//         name: "Karan"
//     });
//     let newOrder = new Order({
//         item: "Cheese Burger",
//         price: 250
//     });
//     newCust.orders.push(newOrder);
//     await newOrder.save();
//     await newCust.save();
//     console.log("new order added");
// };

// addCustomer();

const delCustomer = async () => {
    let data = await Customer.findByIdAndDelete("690f1d2fde1ce39f2524c64b");
    console.log(data);
}
delCustomer();

