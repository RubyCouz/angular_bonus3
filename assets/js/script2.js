var form = angular.module('form', ['ngroute']);
form.run(function(['$rootScope'$rootScope){
  // création tableau
  $rootScope.name = [];
  $rootScope.text = [];
  $rootScope.mail = [];
  $rootScope.subjects = [];
}]);
form.config(function($routeProvider) {
  $routeProvider
  .when('/' {templateUrl: 'views/form.html', controller: 'formCtrl'})
  .when('/mailContent/:index' {templateUrl: 'views/mailContent.html', controller: 'mailContentCtrl'})
  .otherwise({redirectTo: '/'});
});
form.controller('formCtrl', ['$rootScope', '$scope' , function($rootScope, $scope) {

  // envoie des données dans un tableau
  $rootScope.send = function() {
    $rootScope.subjects.push( $scope.userSubject);
    $rootScope.name.push( $scope.userName);
    $rootScope.text.push( $scope.userText);
    $rootScope.mail.push( $scope.usermail);
  };
}]);
  form.controller('mailContentCtrl', ['$rootScope', '$scope', '$routeParams' function($scope, $routeParams) {
$scope.subject = $rootScope.subjects[$routeParams.index];
$scope.name = $rootScope.names[$routeParams.index];
$scope.mail = $rootScope.mails[$routeParams.index];
$scope.text = $rootScope.texts[$routeParams.index];

  }]);
