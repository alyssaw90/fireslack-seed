angular.module('angularfireSlackApp')
	.factory('Auth', function($firebaseAuth, FirebaseUrl){
		var ref = new Firebase(FirebaseUrl);
		var auth = $firebaeAuth(ref);

		return auth;
	});