// 클로저 활용 : Closure
;(function($, undefined){

	// 엄격한 문법 모드 발동 : STRICT MODE
	"use strict";

	// 헬퍼 참조 변수 설정 : defind helper local variables
	var win = window, doc = document, html = doc.documentElement, init;

	// 초기화 실행 함수
	init = function() {

	};

	// 문서가 준비되면 실행 : DOM Ready
	$(document).ready(init);

})(window.jQuery);