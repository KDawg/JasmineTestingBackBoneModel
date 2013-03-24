describe("Coffee Model", function() {
	var MOCK_DATA = {
		author: 'Ken Tabor',
		ingredients: [18, 15, 1, 1, 1],
		message: 'Heya everyone, we have a crazy big deadline coming up but I know we can do it. Let\'s enjoy a coffee and finish strong!',
		name: 'Basic Drip',
		readUrl: 'http://www.madefreshcoffee.com/read.php?sku=bd86292a-241a-11e2-b97c-12313d04a24a'
	};

	var coffee;

	beforeEach(function() {
		spyOn($, 'ajax').andCallFake(function(options) {
			options.success(MOCK_DATA);
		});

		coffee = new App.Model.Coffee();
		coffee.fetch();
	});

	afterEach(function() {
		coffee = undefined;
	});

	it('should be able to create test app objects', function() {
		expect(coffee).toBeDefined();
		expect(MOCK_DATA).toBeDefined();
	});

	it('should call .ajax through .fetch with proper params', function() {
		var ajaxCallParams = $.ajax.mostRecentCall.args[0];

		expect(ajaxCallParams.dataType).toEqual('json');
		expect(ajaxCallParams.type).toEqual('GET');
		expect(ajaxCallParams.success).toBeDefined();
	});

	it('should be able to parse mocked service response', function() {
		expect(_.isEmpty(coffee.attributes)).toEqual(false);
		expect(coffee.get('author')).toEqual('Ken Tabor');
		expect(coffee.get('ingredients')).toEqual([18, 15, 1, 1, 1]);
		expect(coffee.get('message')).toEqual('Heya everyone, we have a crazy big deadline coming up but I know we can do it. Let\'s enjoy a coffee and finish strong!');
		expect(coffee.get('name')).toEqual('Basic Drip');
		expect(coffee.get('readUrl')).toEqual('http://www.madefreshcoffee.com/read.php?sku=bd86292a-241a-11e2-b97c-12313d04a24a');
	});

	it('should return message from accessor interface', function() {
		expect(coffee.getMessge()).toEqual('Heya everyone, we have a crazy big deadline coming up but I know we can do it. Let\'s enjoy a coffee and finish strong!');
	});

	it('should return name from accessor interface', function() {
		expect(coffee.getName()).toEqual('Basic Drip');
	});

	it('should return ingredients from accessor interface', function() {
		expect(coffee.getIngredients()).toEqual([18, 15, 1, 1, 1]);
	});

	it('should return author from accessor interface', function() {
		expect(coffee.getAuthor()).toEqual('Ken Tabor');
	});

	it('should return URL from accessor interface', function() {
		expect(coffee.getURL()).toEqual('http://www.madefreshcoffee.com/read.php?sku=bd86292a-241a-11e2-b97c-12313d04a24a');
	});

});