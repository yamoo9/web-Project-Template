/*! 
	문서유형 감지 스크립트  v 0.0.1 - 2012©yamoo9.com, 
	브라우저 문서유형을 감지하여 <html> 요소의 class 속성 값에 키워드를 추가합니다. 
*/
isDoctype = (function(n) {
	var d		= document, id, detect,
		is		= function(type, target) {
					var reg = new RegExp('(^|\\s)'+type+'(\\s|$)');
					return reg.test(target);
				}, 
		trim 	= function(str) {
					return str.replace(/^\s+/, '').replace(/\s+$/, '');
				};
	
	id = d.doctype !== null ? d.doctype.publicId : d.all[0].text;
	
	if(is('HTML', id)) {
		detect = 'html4';
	} else if(is('XHTML', id)) {
		detect = 'xhtml1';
	} else if(id === '' || typeof id === 'undefined') {
		if(n.appName === 'Microsoft Internet Explorer') {
			detect = 'quirksmode';
		} else {
			detect = 'html5';
		};	
	};
	
	return {
		mode : detect,
		init : function() {
			document.body.className += ' ' + isDoctype.mode;
			document.body.className = 
				String.prototype.trim ? 
					document.body.className.trim() :
					trim(document.body.className);
		}
	}
	
})(window.navigator);
isDoctype.init();