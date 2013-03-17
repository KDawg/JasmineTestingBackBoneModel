describe("Some Model", function() {
	var MOCK_DATA = {
		author: 'Ken Tabor',
		ingredients: [18, 15, 1, 1, 1],
		message: 'Heya everyone, we have a crazy big deadline coming up but I know we can do it. Let\'s enjoy a coffee and finish strong!',
		name: 'Basic Drip',
		readUrl: 'http://www.madefreshcoffee.com/read.php?sku=bd86292a-241a-11e2-b97c-12313d04a24a'
	};

	it('should be able to create test objects', function() {
		var coffee = new App.Model.Coffee();

		expect(coffee).toBeDefined();
		expect(MOCK_DATA).toBeDefined();
	});

	it('should be able to parse mock service response', function() {
		var coffee = new App.Model.Coffee();
		coffee.set(coffee.parse(MOCK_DATA));

		expect(coffee.get('author')).toEqual('Ken Tabor');
		expect(coffee.get('ingredients')).toEqual([18, 15, 1, 1, 1]);
		expect(coffee.get('message')).toEqual('Heya everyone, we have a crazy big deadline coming up but I know we can do it. Let\'s enjoy a coffee and finish strong!');
		expect(coffee.get('name')).toEqual('Basic Drip');
		expect(coffee.get('readUrl')).toEqual('http://www.madefreshcoffee.com/read.php?sku=bd86292a-241a-11e2-b97c-12313d04a24a');
	});

	describe('should be able to fetch data from mocked service', function() {
		var coffee;

		beforeEach(function() {
			spyOn($, 'ajax').andCallFake(function(options) {
				expect(options.dataType).toEqual('json');
				expect(options.type).toEqual('GET');
				expect(options.success).toBeDefined();
				options.success(MOCK_DATA);
			});

			coffee = new App.Model.Coffee();
			coffee.fetch();
		});

		afterEach(function() {
			coffee = undefined;
		});

		it('should be able to parse mocked response', function() {
			expect(_.isEmpty(coffee.attributes)).toEqual(false);
			expect(coffee.get('author')).toEqual('Ken Tabor');
			expect(coffee.get('ingredients')).toEqual([18, 15, 1, 1, 1]);
			expect(coffee.get('message')).toEqual('Heya everyone, we have a crazy big deadline coming up but I know we can do it. Let\'s enjoy a coffee and finish strong!');
			expect(coffee.get('name')).toEqual('Basic Drip');
			expect(coffee.get('readUrl')).toEqual('http://www.madefreshcoffee.com/read.php?sku=bd86292a-241a-11e2-b97c-12313d04a24a');
		});

		it('should be able to get the message from accessor interface', function() {
			expect(coffee.getMessge()).toEqual('Heya everyone, we have a crazy big deadline coming up but I know we can do it. Let\'s enjoy a coffee and finish strong!');
		});

		it('should be able to get the name from accessor interface', function() {
			expect(coffee.getName()).toEqual('Basic Drip');
		});

		it('should be able to get the ingredients from accessor interface', function() {
			expect(coffee.getIngredients()).toEqual([18, 15, 1, 1, 1]);
		});

		it('should be able to get the author from accessor interface', function() {
			expect(coffee.getAuthor()).toEqual('Ken Tabor');
		});

		it('should be able to get the URL from accessor interface', function() {
			expect(coffee.getURL()).toEqual('http://www.madefreshcoffee.com/read.php?sku=bd86292a-241a-11e2-b97c-12313d04a24a');
		});
	});
});