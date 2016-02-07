var rowApp = angular.module('rowApp', ['filters']);

angular.module('filters', []).
  filter('chunk', function () {
    return function (items, chunk_size) {
      if (angular.isArray(items)) {
        if (isNaN(chunk_size))
          chunk_size = 4;
        var chunks = [];
        for (var i = 0; i < items.length; i += chunk_size) {
          chunks.push(items.slice(i, i + chunk_size));
        }
        return chunks;
      } else {
        console.log("items is not an array: " + angular.toJson(items));
        return [];
      }
    };
});

rowApp.controller('rowController',
  function ($scope, $http) {
    $http.get("/people.json")
      .then(function(response) {
        $scope.people = response.data;
      });
});
