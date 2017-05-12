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
  if (this.size === "large") {
    total += 8;
  } else if (this.size === "medium") {
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
  if (this.beverage === "Risa") {
    total += 3;
  } else {
    total += 5;
  }
  return total;
};

// Prototype method to display pizza information
Pizza.prototype.displayPizza = function() {
  return "You have chosen a " + "<strong>" + this.size + " </strong>" + "pizza with " + "<strong>" + this.topping.join(", ") + "</strong> and " + "a <strong> " + this.beverage + "</strong>.";
}
// Prototype method to display customer's order details
Customer.prototype.orderDetails = function() {
  return "We will deliver your order to " + "<strong>" + this.address + " </strong>" + " as soon as Rom can get there.";
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

    $("#welcome").fadeOut(120);
    $("#form-display").fadeOut(120);
    $("#copyright").fadeOut(120);
    $("#order-display").fadeIn(2000);
    $("#order-info").html(newOrder.displayPizza() +
    "<br>" + "Your pizza will cost <strong>" + newOrder.calcPrice() + "</strong> strips of Latinum. Please provide exact amount on delivery, as Rom does not carry change." + "<br>" + newCustomer.orderDetails());

  });
});
