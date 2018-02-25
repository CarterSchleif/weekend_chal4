console.log('working on client');
const app = angular.module('myApp',[]);
const GalleryController = app.controller('GalleryController', ['$http', function($http){
let self = this;
// let likes1=0;
// self.addPhotos = function (photoDiv){
//     console.log('in save button', photoDiv);
//     $http({
//       method: 'POST',
//       url: '/gallery',
//       data: photoDiv
//     })
//     .then(function(response){
//       console.log('success in post', response);
//     })
//     .catch(function(error){
//       console.log('error in post', error);
//     })
//   }

// self.likesOne = function(){
//     console.log('in likes1:', likes1);
//     self.likes1++
// }

}]);//end GalleryController