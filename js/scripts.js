////////////////////
// Back end logic //
////////////////////

// Constructor for Pizza
function Pizza(size, toppings, beverage) {
  this.size = size;
  this.beverage = beverage;
  this.toppings = [];
}

// Constructor for Customer information
function Customer(name, address) {
  this.name = name;
  this.address = address;
}

// Prototype method to calculate price
Pizza.prototype.calcPrice = function() {
  var calcPrice = 7;

  if (this.size === "Large") {
    price *= 3;
  } else if (this.size === "Medium") {
    price *= 2;
  } else {
    price *= 1;
  }

  if (this.toppings.length === 0) {
    price *= 1;
  } else {
    price += this.toppings.length;
  }

  return calcPrice;
}

// Prototype method to display pizza information
Pizza.prototype.displayPizza = function() {
  return "You have chosen a " + this.size + " pizza.";
}
// Prototype method to dipslay order details
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
    var selectedToppings = $("input:checkbox[name=selected-topping]:checked").map(function(){
        return this.value;
    }).toArray();


    var newOrder = new Pizza(selectedPizzaSize, selectedToppings);

    // $("input:checkbox[name=selected-topping]:checked").map(function(){
    // selectedToppings.push($(this.toppings).val());
    // });


    var selectedToppings = $("input:checkbox[name=selected-topping]:checked").map(function(){
        return this.value;
    }).toArray();
console.log(selectedToppings);
console.log(newOrder);


  });
});
