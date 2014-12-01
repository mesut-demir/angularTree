'use strict';

/**
 * @ngdoc function
 * @name agendaApp.controller:AgendaCtrl
 * @description
 * # AgendaCtrl
 * Controller of the agendaApp
 */
angular.module('agendaApp')
	.controller('AgendaCtrl', function ($scope) {
		$scope.remove = function (scope) {
			scope.remove();
		};

		$scope.toggle = function (scope) {
			scope.toggle();
		};

		$scope.moveLastToTheBegginig = function () {
			var a = $scope.data.pop();
			$scope.data.splice(0, 0, a);
		};

		$scope.newSubItem = function (scope) {
			var nodeData = scope.$modelValue;
			nodeData.nodes.push({
				id: nodeData.id * 10 + nodeData.nodes.length,
				title: nodeData.title + '.' + (nodeData.nodes.length + 1),
				nodes: []
			});
		};

		$scope.newItem = function () {
			$scope.data.push({
				id: makeid(),
				title: 'New Point',
				nodes: []
			});
		};

		$scope.uploadFile = function (scope) {
			var x = scope;
			
		};

		var getRootNodesScope = function () {
			return angular.element(document.getElementById('tree-root')).scope();
		};

		$scope.collapseAll = function () {
			var scope = getRootNodesScope();
			scope.collapseAll();
		};

		$scope.expandAll = function () {
			var scope = getRootNodesScope();
			scope.expandAll();
		};

		function makeid() {
			var text = '';
			var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

			for (var i = 0; i < 5; i++) {
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}

			return text;
		}

		$scope.data = [{
			title: 'Sports',
			id: '0',
			nodes: [{
				title: 'Fittnes',
				id: '1',
				nodes: []
			}, {
				title: 'Fittness Private',
				id: '2',
				nodes: [{
					title: 'Media LEvel3',
					id: '5',
					nodes: []
				}]
			}, {
				title: 'Institutions',
				id: '3',
				nodes: []
			}, ]
		}, {
			title: 'Documents for NoA meeting',
			id: '4',
			nodes: [{
				title: 'RM Calendar',
				id: '1',
				nodes: []
			}]
		}];
	});