define(['jquery'], function($) {
	
	// 플러그인 이름
	var pluginName = 'temp', proxy = $.proxy;

	// 플러그인
	$.fn[pluginName] = function(options) {
		
		// 옵션 덮어쓰기 [ {} -> 기본 설정 값 -> options ] 
		options = $.extend({}, $.fn[pluginName].defaults, options);
		
		// 플러그인에 연결된 개별 객체에 설정
		return $.each( this, proxy(function(index, dom_el){
			// 객체 참조
			var parent = this,
				$el = $(dom_el),
				el = dom_el;

		},this) );
	};

	// 플러그인 기본 설정 값
	$.fn[pluginName].defaults = {
		
	};

});