describe('A Coffee Model', function() {
	var MOCK_GET_DATA = {
		author: 'Ken Tabor',
		ingredients: [18, 15, 1, 1, 1],
		message: 'Heya everyone, we have a crazy big deadline coming up but I know we can do it. Let\'s enjoy a coffee and finish strong!',
		name: 'Basic Drip',
		readUrl: 'http://www.madefreshcoffee.com/read.php?sku=bd86292a-241a-11e2-b97c-12313d04a24a'
	};

	var MOCK_POST_DATA = {
		success: true
	};


	it('should be able to create its application test objects', function() {
		var coffee = new App.Model.Coffee();
		expect(coffee).toBeDefined();
		expect(MOCK_GET_DATA).toBeDefined();
		expect(MOCK_POST_DATA).toBeDefined();
	});


	describe('has property getter functions that', function() {
		var coffee = new App.Model.Coffee(MOCK_GET_DATA);

		it('should return the message', function() {
			expect(coffee.getMessge()).toEqual('Heya everyone, we have a crazy big deadline coming up but I know we can do it. Let\'s enjoy a coffee and finish strong!');
		});

		it('should return the name', function() {
			expect(coffee.getName()).toEqual('Basic Drip');
		});

		it('should return the ingredients', function() {
			expect(coffee.getIngredients()).toEqual([18, 15, 1, 1, 1]);
		});

		it('should return the author', function() {
			expect(coffee.getAuthor()).toEqual('Ken Tabor');
		});

		it('should return the URL', function() {
			expect(coffee.getURL()).toEqual('http://www.madefreshcoffee.com/read.php?sku=bd86292a-241a-11e2-b97c-12313d04a24a');
		});
	});


	describe('has property setter functions that', function() {
		var coffee = new App.Model.Coffee(MOCK_GET_DATA);

		it('should set the new message', function() {
			coffee.setMessge('Congrats on the speaking engagement');
			expect(coffee.get('message')).toEqual('Congrats on the speaking engagement');
		});

		it('should set the new name', function() {
			coffee.setName('Mocha');
			expect(coffee.get('name')).toEqual('Mocha');
		});

		it('should set the new ingredients', function() {
			coffee.setIngredients([24, 22, 22, 9, 3]);
			expect(coffee.get('ingredients')).toEqual([24, 22, 22, 9, 3]);
		});

		it('should set the new author', function() {
			coffee.setAuthor('Anna Jane');
			expect(coffee.get('author')).toEqual('Anna Jane');
		});
	});


	describe('when it fetches', function() {
		var coffee;

		beforeEach(function() {
			spyOn($, 'ajax').andCallFake(function(options) {
				options.success(MOCK_GET_DATA);
			});

			coffee = new App.Model.Coffee();
			coffee.fetch();
		});

		afterEach(function() {
			coffee = undefined;
		});

		it('should call through to .ajax with proper params', function() {
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
	});

	describes('when it validates the set author', function() {
		var coffee = new App.Model.Coffee();

		it('should reject longer than 20 chars', function() {
			coffee.setName('1234567890123456789012345678901234567890');
			debugger;
			expect(coffee.isValid()).toEqual(false);
		});

	});

});