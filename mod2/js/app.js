(function(){
  angular.module("ShoppingListCheckOff", [])
         .controller("ToBuyController", ToBuyController)
         .controller("AlreadyBoughtController", AlreadyBoughtController)
         .service("ShoppingListCheckOffService", ShoppingListCheckOffService);
//         .config();


  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
    var tobuy = this;

    tobuy.items = ShoppingListCheckOffService.tobuyItems();

    tobuy.empty = function () {
      return ShoppingListCheckOffService.tobuyItems().length == 0;
    }

    tobuy.check = function (index) {
      ShoppingListCheckOffService.checkItem(index);
    }
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.boughtItems();

    bought.empty = function () {
      return ShoppingListCheckOffService.boughtItems().length == 0;
    }

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      { name: "cookies",  quantity: 10 },
      { name: "icecream", quantity: 1 },
      { name: "candies",  quantity: 100 },
      { name: "drinks",   quantity: 5 },
      { name: "chockolate", quantity: 1}
    ];
    var itemsBought = [];

    service.checkItem = function (index) {
      if( index > -1 && index < itemsToBuy.length ) {
        itemsBought.push( itemsToBuy[index] );
        itemsToBuy.splice(index, 1); // 2nd parameter means remove one item only
      }
    }

    service.boughtItems = function() {
      return itemsBought;
    }

    service.tobuyItems = function() {
      return itemsToBuy;
    }

  }

})();
