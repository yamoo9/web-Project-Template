/*! Day or Night.js	:: 밤, 낮 구분 감지 스크립트 - 2012©yamoo9.com */
;"use strict"
(function(d) { 
	var h=(new Date()).getHours(),
		s=d.head.getElementsByTagName('script'), 
		i=0, l=s.length, sr, t,
		is_trim = !!String.prototype.trim,
		trim = function(str) { return str.replace(/^\s+/,'').replace(/\s+$/,''); };
		
	for(l; i<l; i++) {
		sr = s[i].src;
		if(sr && /yamoo9.DN/.test(sr)) { t = sr.substr(sr.indexOf('?')+1); }
	}
	
	onload = function() {
		t = d.getElementsByTagName(t)[0] || d.documentElement;
		if(h >= 7 && h <= 18) { t.className += ' day'; }
		else { t.className += ' night'; }
		if(is_trim) { t.className = t.className.trim(); }
		else { t.className = trim(t.className); }	
	};
})(document);