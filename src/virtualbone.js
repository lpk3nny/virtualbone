(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('backbone'), require('set-dom')) :
		typeof define === 'function' && define.amd ? define(['backbone', 'set-dom'], factory) :
			(global.Virtualbone = factory(global.Backbone, global.setDOM));
}(this, function (Backbone, setDOM) {
	Backbone.View = Backbone.View.extend({
		patch: function (html) {
			setDOM(this.el, html.trim());
		}
	});

	return Backbone;
}));