////////////////////
// Back end logic //
////////////////////

// Constructor for pizza object
function Pizza(size, toppings, beverage) {
  this.size = size;
  this.beverage = beverage;
  this.toppings = [];
}

// Constructor for customer information
function Customer(name, address) {
  this.name = name;
  this.address = address;
}

// Prototype method to calculate price
Pizza.prototype.calcPrice = function() {
  var total = 5;
}

// Prototype for order details
Customer.prototype.orderDetails = function() {
  return "Thanks for placing your order, ";
}

/////////////////////
// Front end logic //
/////////////////////

$(function(){
  $("#order-form").submit(function(event) {
    event.preventDefault();

    var selectedPizzaSize = $("select#pizza-size").val();
    var newOrder = new Pizza(selectedPizzaSize);



  });
});
