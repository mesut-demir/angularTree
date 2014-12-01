'use strict';

/**
 * @ngdoc overview
 * @name agendaApp
 * @description
 * # agendaApp
 *
 * Main module of the application.
 */
angular
  .module('agendaApp', [
    'ngRoute',
    'ui.tree',
     'lr.upload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/agenda.html',
        controller: 'AgendaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });