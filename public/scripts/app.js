/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('furniture-app', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/albums',
      controllerAs: 'furnituresIndexCtrl',
      controller: 'FurnituresIndexController'
    })
    .when('/furnitures', {
      templateUrl: '/templates/furnitures',
      controllerAs: 'furnituresIndexCtrl',
      controller: 'FurnituresIndexController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
