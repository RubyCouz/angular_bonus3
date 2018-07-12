var form = angular.module('formCheck', []);
//controle du nom
form.controller('nameCtrl', ['$scope', function($scope){
  $scope.regexName = '[a-zA-Z]';
  $scope.resultTestName = false;
  $scope.testName = function() {
    $scope.resultTestName = $scope.form.name.$valid;
  }
}]);
//controle du mail
form.controller('emailCtrl', ['$scope', function($scope){
  $scope.regexMail = '(.)?@(.)?';
  $scope.resultTestMail = false;
  $scope.testMail = function() {
    $scope.resultTestMail = $scope.form.email.$valid;
  }
}]);
//controle du sujet
form.controller('subjectCtrl', ['$scope', function($scope){
  $scope.regexSubject = '(.)?';
  $scope.resultSubject = false;
  $scope.testSubject = function() {
    $scope.resultTestSubject = $scope.form.subject.$valid;
  }
}]);
//controle du texte
form.controller('textCtrl', ['$scope', function($scope){
  $scope.regexText = '(.)?';
  $scope.resultTestText = false;
  $scope.testText = function() {
    $scope.resultTestText = $scope.form.text.$valid;
  }
}]);
var userArray = 
form.controller('subjectCtrl', ['$scope', '$window' function($scope, $window) {
$scope.message = ;
$scope.send = function(messageAlert) {
$window.alert(messageAlert);
};
}]);
*/
