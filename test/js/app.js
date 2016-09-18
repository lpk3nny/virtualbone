requirejs.config({
	baseUrl: '.',
	paths:   {
		backbone:     '../node_modules/backbone/backbone',
		'set-dom':    '../node_modules/set-dom/dist/set-dom',
		underscore:   '../node_modules/underscore/underscore',
		jquery:       '../node_modules/jquery/dist/jquery',
		virtualbone:  '../dist/virtualbone',
		'model.body': './js/models/body',
		'view.body':  './js/views/body'
	}
});

requirejs(['jquery', 'view.body', 'model.body'], function ($, View, Model) {
	var model = new Model;

	new View({
		model: model
	});

	setTimeout(function () {
		model.set({
			title:    'asd',
			isActive: true
		});

		setTimeout(function () {
			model.set({
				title:        'btn',
				isBtnEnabled: true
			})
		}, 1000)
	}, 1000)
});