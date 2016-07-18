'use strict';

var app = angular.module('myApp', ['ui.router', 'btford.socket-io']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })

  $urlRouterProvider.otherwise('/');
});

app.factory('socket', function(socketFactory){
  let socket = socketFactory();
  socket.forward('newMessage');

  return socket;
})
