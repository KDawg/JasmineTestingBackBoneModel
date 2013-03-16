App.Model.Coffee = Backbone.Model.extend({

	defaults: {
		ingredients: [0, 0, 0, 0, 0],
		name: '',
		author: '',
		message: '',
		readUrl: ''
	},

	url: 'http://www.madefreshcoffee.com/',

	getURL: function() {
		return this.get('readUrl');
	},

	getAuthor: function() {
		return this.get('author');
	},

	getMessge: function() {
		return this.get('message');
	},

	getName: function() {
		return this.get('name');
	},

	getIngredients: function() {
		return this.get('ingredients');
	}


});
