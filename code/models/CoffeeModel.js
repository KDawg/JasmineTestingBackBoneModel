App.Model.Coffee = Backbone.Model.extend({

	url: 'http://www.madefreshcoffee.com/read.php?sku=bd86292a-241a-11e2-b97c-12313d04a24a',

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
