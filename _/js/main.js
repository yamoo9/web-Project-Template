// 모듈 로더 설정
require.config({
	baseUrl: '_/js',
	waitSeconds: 15,
	shim: {
		'underscore': {
			exports: '_'
        },
		'backbone' : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},
		'prefix-free' : {
			exports : 'PrefixFree'
		},
		'jquery.plugin': ['jquery']
	},
	paths: {
		'underscore' : 'libs/underscore.min',
		'backbone' : 'libs/backbone.min',
		'jquery_v1' : 'libs/jquery/jquery-1.9.1',
		'jquery' : 'libs/jquery/jquery-2.0.0b2',
		'prefix-free' : 'libs/prefix-free.min',
		'jquery.plugin' : 'plugin/jquery.plugin'
	}
});

// 모듈 로더 호출
require(['jquery.plugin']);

// require(['prefix-free']);
// require(['prefix-free'], function(pf) {
// 	console.log(pf);
// });

// require(['backbone'], function(Backbone) {
// 	console.log(Backbone);
// });