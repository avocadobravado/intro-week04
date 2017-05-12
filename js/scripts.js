////////////////////
// Back end logic //
////////////////////

// Constructor for Pizza
function Pizza(size, topping, beverage) {
  this.size = size;
  this.topping = topping;
  this.beverage = beverage;
}

// Constructor for Customer information
// function Customer(name, address) {
//   this.name = name;
//   this.address = address;
// }

// Add Topping Array Prototype
// Pizza.prototype.addToppingArray = function(topping) {
//   this.addToppingArray.push(topping);
// }

// Prototype method to calculate price
// Pizza.prototype.calcPrice = function() {
//   var calcPrice = 7;
//
//   if (this.size === "Large") {
//     price *= 3;
//   }
//
//   return calcPrice;
// }

// Prototype method to display pizza information
// Pizza.prototype.displayPizza = function() {
//   return "You have chosen a " + this.size + " pizza.";
// }
// // Prototype method to dipslay order details
// Customer.prototype.orderDetails = function() {
//   return "Thanks for placing your order, ";
// }

/////////////////////
// Front end logic //
/////////////////////

$(function(){
  $("#order-form").submit(function(event) {
    event.preventDefault();

    var selectedPizzaSize = $("select#pizza-size").val();
    var selectedToppings = [];
    $("input:checkbox[name=selected-topping]:checked").each(function(){
    selectedToppings.push($(this).val());
    });
    var selectedBeverage = $("select#beverage").val();

    var newOrder = new Pizza(selectedPizzaSize, selectedToppings, selectedBeverage);

    console.log(selectedToppings);
    console.log(newOrder);
    console.log(newOrder.toppings);
    console.log(newOrder.displayPizza);


  });
});
