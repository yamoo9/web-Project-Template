/*! jquery 플러그인 - [ ] @ 2013 */
;(function($){

	// 플러그인 이름
	var plugin = '',
		proxy  = $.proxy; // 프록시 헬퍼 함수 (jQuery 유틸리티 함수)
	
	$.fn[plugin] = function (options) {
		
		// 플러그인 옵션 오버라이딩 (덮어쓰기)
		options = $.extend({}, $.fn[plugin].options, options);

		return;
		
	};

	$.fn[plugin].options = {
		
	};
	
})(window.jQuery);