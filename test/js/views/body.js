define(['virtualbone', 'jquery', 'underscore'], function (Backbone, $, _) {
	return Backbone.View.extend({
		el:         document.querySelector('#content'),
		template:   _.template(document.querySelector('#tpl').innerHTML),
		events:     {
			'click .wrapper': 'log',
			'click .btn':     'btnClick'
		},
		initialize: function () {
			this.listenTo(this.model, "change", this.render);

			this.render();
			this.$el.find('.items').append('<span>nested view</span>');
		},
		log:        function (e) {
			console.log(e);
		},
		btnClick:   function (e) {
			console.log(e);
		},
		render:     function () {
			this.patch(this.template({
				body: this.model
			}));
		}
	});
});