(function() {
  'use strict';    

  angular.module("LunchCheck",[])
         .controller("CountController", CountController);

  CountController.$inject = ['$scope'];

  function CountController($scope){
    $scope.user_items = "";
    $scope.message = "";

    $scope.count = function() {
        var items = $scope.user_items.split(',');
        var n_valid = 0;
        for(var i in items){
            if( (items[i].replace(/\s+/g, '')).length > 0 ){
                n_valid++;
            }
        }
        if( n_valid == 0 ){
            $scope.message = "Input some comma-separated items";
        } else
        if( n_valid > 3 ){
            $scope.message = "Too much!";
        } else {
            $scope.message = "Enjoy!";
        }
    };

  };
    
})();
