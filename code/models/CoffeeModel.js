App.Model.Coffee = Backbone.Model.extend({

	url: 'http://www.madefreshcoffee.com/read.php?sku=bd86292a-241a-11e2-b97c-12313d04a24a',

	getAuthor: function() {
		return this.get('author');
	},

	getIngredients: function() {
		return this.get('ingredients');
	},

	getMessge: function() {
		return this.get('message');
	},

	getName: function() {
		return this.get('name');
	},

	getURL: function() {
		return this.get('readUrl');
	}

});