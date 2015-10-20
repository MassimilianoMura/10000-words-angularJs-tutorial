app.controller('myCtrl', ['$scope', function($scope) {

  $scope.greeting = 'Hola!';

  $scope.items = [{
    name: 'Scuba Diving Kit',
    id: 7297510
  },{
    name: 'Snorkel',
    id: 0278916
  },{
    name: 'Wet Suit',
    id: 2389017
  },{
    name: 'Beach Towel',
    id: 1000983
  }];


}]);