/*
 * Created with Sublime Text 3.
 * license: http://www.lovewebgames.com/jsmodule/index.html
 * github: https://github.com/tianxiangbing/format-number
 * User: 田想兵
 * Date: 2015-08-05
 * Time: 11:27:55
 * Contact: 55342775@qq.com
 */
;
(function(root, factory) {
	//amd
	if (typeof define === 'function' && define.amd) {
		define(['$'], factory);
	} else if (typeof exports === 'object') { //umd
		module.exports = factory();
	} else {
		root.Network = factory(window.Zepto || window.jQuery || $);
	}
})(this, function($) {
	var Network = {
		get: function() {},
		post: function() {},
		ajax: function() {}
	}
	return Network;
});