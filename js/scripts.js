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
  for (var i = 0; i < this.topping.length; i++) {
      total += 2;
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
  return "We will deliver your order to " + "<strong>" + this.address + " </strong>" + " as soon as Rom can get there. We appreciate your business, " + "<strong>" + this.name + "</strong>" + ".";
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

    //Animate CSS

    $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        }
    });

    $("#test").animateCss('bounce');

    $("#hide-upon-order").fadeOut(120);
    $("#order-display").fadeIn(2000);
    $("#order-info").html(newOrder.displayPizza() +
    "<br>" + "Your pizza will cost <strong>" + newOrder.calcPrice() + "</strong> strips of Latinum. Please provide exact amount on delivery, as Rom does not carry change." + "<br>" + newCustomer.orderDetails());

  });
});
