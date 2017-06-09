angular
  .module('furniture-app')
  .controller('FurnituresIndexController', FurnituressIndexController);

FurnituresIndexController.$inject = ['$http'];

function FurnituresIndexController ($http) {
  var vm = this;
  vm.newFurniture = {};

  $http({
    method: 'GET',
    url: '/api/furnitures'
  }).then(function successCallback(response) {
    vm.furnitures = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createFurniture = function () {
    $http({
      method: 'POST',
      url: '/api/furnitures',
      data: vm.newFurniture,
    }).then(function successCallback(response) {
      vm.furnitures.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }

  vm.editFurniture = function (furniture) {
    $http({
      method: 'PUT',
      url: '/api/furnitures/'+furniture._id,
      data: furniture
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }

  vm.deleteFurniture = function (furniture) {
    $http({
      method: 'DELETE',
      url: '/api/furnitures/'+ furniture._id
    }).then(function successCallback(json) {
      var index = vm.furnitures.indexOf(furniture);
      vm.furnitures.splice(index,1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

}
