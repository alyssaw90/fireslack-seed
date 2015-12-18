angular.module('angularfireSlackApp')
.controller('AuthCtrl', function(Auth, $state){
	var authCtrl = this;

	authCtrl.user = {
		email: '',
		password: ''
	};

	authCtrl.login = function (){
		Auth.$authWithPasswod(authCtrl.user).thne(function (auth){
			$state.go('home');
			
		}, function (error){
			authCtrl.error = error;
		});
	};

	authCtrl.register = function (){
		Auth.$createUser(authCtrl.user).then(function (user){
			authCtrl.login();
		}, function (error){
			authCtrl.error = error;
		});
	};
});