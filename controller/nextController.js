angular.module('NextTool')
  .controller("nextController", function($scope, $http) {


    /**
     * get json data from json file
     *@ param { string} url
     *
     *
     */
    $http({
      method: "GET",
      url: "data.json"
    }).then(function mySucces(response) {
      $scope.data=response.data.data;
      console.log(response.data.data);
    }, function myError(response) {
      console.log(response);

    });
    //finding comon equation

    $scope.selectedRow = function(row) {

    $scope.equation = row.eqa;
    $scope.common = row.common;
    var commonArray1 = [];
    var separators = ['\\\+', '=>', '\\\(', '\\\)', '\\*', '/', '\\\?'];
    separators.join('|');
    var tokens = row.eqa.split(new RegExp(separators.join('|'), 'g'));
    for (var i = 0; i < tokens.length; i++) {
      commonArray1.push(tokens[i])
    }
   console.log(commonArray1);
    $scope.com1 = commonArray1;
    //   $scope.commonArray = [];
    //  $scope.com=$scope.commonArray;
  }

$scope.makeProduct=function(event){
  $scope.commonArray = [];
  console.log($scope.common );

 $scope.com=$scope.common;
//
 }

 $scope.checkBalance=function(event) {
   console.log("hi");

 }
  });
