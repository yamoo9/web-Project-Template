/*! 브라우저 감지 스크립트  v 1.0 - 2012©yamoo9.com */
var UA = 
(function(w) {

	var ua		= navigator.userAgent.toLowerCase(),
		html	= document.documentElement,
		is		= function(reg) { return reg.test(ua) };
		
	return {
		/* Browser List : 브라우저 목록 */
		// Internet Explorer
		ie				: !!(w.attachEvent && !w.opera) || is(/msie\s(\d)/),
		ie6				: is(/msie 6.0;/),
		ie7				: is(/msie 7.0;/),
		ie8				: is(/msie 8.0;/),
		ie9				: is(/msie 9.0;/),
		ie10			: is(/msie 10.0;/),
		// Gecko
		gecko			: is(/gecko\//) && !(is(/khtml\//)),
		ff				: is(/firefox\//),
		// Opera
		o				: !!w.opera || is(/opera\//),
		// Webkit
		webkit			: is(/applewebkit\//),
		chorme			: is(/chrome\//),
		safari			: is(/safari\//) && !(is(/chrome\//)) && !(is(/linux.*android/)),
		// Konqueror
		konqueror		: is(/konqueror/),
		// Mobile
		m_webkit		: is(/mobile\//),
		iphone			: is(/iphone;/),
		ipad			: is(/ipad;/),
		android			: is(/linux.*android/),
		blackberry		: is(/blackberry/),
		fennec			: is(/fennec\//),
		o_mobile		: is(/mobi\//),
		o_mini			: is(/mini\//),
		kindle			: is(/linux.*kindle\//),
		// Platform
		win				: is(/win/),
		mac			: is(/mac/),
		
		/* UA Methods */
		init				: function() {
							var classList;
							classList = html.className += ' '+UA.detecting();
							html.className = String.prototype.trim ? classList.trim() : UA.trim(classList);
						},

		detecting		: function() {
							var key, result = '';
							for(key in UA) {
								if(UA[key].constructor !== Function && UA[key]) {
									result += key + ' ';
								};
							};
							return result;
						},

		trim			: function(str) {
							return str.replace(/^\s+/, '').replace(/\s+$/, '');
						}
						
	};
})(window); UA.init();