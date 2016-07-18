'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, socket) {
  console.log('mainCtrl!');
  $scope.messages = [];
  $scope.sendMessage = () => {
    console.log("$scope.newMessage: ",$scope.newMessage);
    socket.emit('sendMessage', $scope.newMessage)

  }
  socket.on('newMessage', function(message){
    console.log("message: ", message);
    $scope.messages.push(message);
  })
  // socket.on('newMessage', function(message){
  //   console.log("message: ", message);
  //   $scope.messages.push(message);
  // })
});

app.controller('otherCtrl', function($scope, socket){
  console.log("otherCtrl");

  $scope.$on('socket:newMessage', function(event, data){
    console.log("event: ",event);
    console.log("data: ",data);
  });
})
