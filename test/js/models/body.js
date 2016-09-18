define(['backbone'], function (Backbone) {
	return Backbone.Model.extend({
		defaults: {
			"title":        "test",
			"isActive":     false,
			"isBtnEnabled": false
		}
	});
});