
var app = angular.module('angular',['ngRoute']);
app.config(function($routeProvider){
$routeProvider
.when('/films',{
templateUrl:'pages/films.html'
})
.when('/series',{
  templateUrl:'pages/series.html'
})
.when('/monga',{
  templateUrl:'pages/monga.html'
})
.when('/emission',{
  templateUrl:'pages/emission.html'
})
.otherwise({
redirectTo:'/'  });
});
