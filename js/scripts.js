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
function Customer(name, address) {
  this.name = name;
  this.address = address;
}

// Prototype method to calculate price
Pizza.prototype.calcPrice = function() {
  var total = 12;
  // Calculate based on size of pizza
  if (this.size === "Large") {
    total += 8;
  } else if (this.size === "Medium") {
    total += 5;
  } else {
    total += 3;
  }
  // Calculate based number of toppings
  if (this.topping.length === 1) {
    total += 1;
  } else if (this.topping.length === 2) {
    total += 3;
  } else if (this.topping.length >= 3) {
    total += 6;
  } else {
    total += 0;
  }
  if (this.beverage === "None") {
    total += 0;
  } else {
    total += 5;
  }
  return total;
};

// Prototype method to display pizza information
Pizza.prototype.displayPizza = function() {
  return "You have chosen a " + this.size + " pizza." + " and " + this.beverage + ".";
}
// Prototype method to display customer's order details
Customer.prototype.orderDetails = function() {
  return "Thanks for placing your order, " + this.name + " We will deliver your order to: " + this.address + " as soon as Rom can get there.";
}

/////////////////////
// Front end logic //
/////////////////////

$(function(){
  $("#order-form").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#name").val();
    var inputtedAddress = $("#address").val();
    var selectedPizzaSize = $("select#pizza-size").val();
    var selectedToppings = [];
    $("input:checkbox[name=selected-topping]:checked").each(function(){
    selectedToppings.push($(this).val());
    });
    var selectedBeverage = $("select#beverage").val();

    var newOrder = new Pizza(selectedPizzaSize, selectedToppings, selectedBeverage);
    var newCustomer = new Customer(inputtedName, inputtedAddress);

    


    console.log(newOrder);
    console.log(newCustomer);
    console.log(newOrder.calcPrice());


  });
});
