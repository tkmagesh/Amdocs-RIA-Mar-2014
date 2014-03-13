describe("A calculator",function(){
	it("should be able to add 2 numbers", function(){
		//Arrange
		var n1 = 10, n2 = 20, expectedResult = 30;

		//Act
		var result = sum(n1,n2);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to add 2 numbers in string format", function(){
		//Arrange
		var n1 = "10", n2 = "20", expectedResult = 30;

		//Act
		var result = sum(n1,n2);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to add 2 functions returning numbers", function(){
		//Arrange
		var f1 = function(){ return 10;},
			f2 = function(){ return 20;},
			expectedResult = 30;
		

		//Act
		var result = sum(f1,f2);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to add 2 functions returning function returning numbers", function(){
		//Arrange
		var f1 = function(){return function(){ return 10;}},
			f2 = function(){return function(){ return 20;}},
			expectedResult = 30;
		

		//Act
		var result = sum(f1,f2);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should accept 1 number as an argument and return the same", function(){
		//Arrange
		var n = 10,
			expectedResult = 10;
		

		//Act
		var result = sum(n);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should accept more than 2 numbers as arguments", function(){
		//Arrange
		var n1 = 10,
			n2 = 20,
			n3 = 30,
			expectedResult = 60;
		

		//Act
		var result = sum(n1,n2,n3);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should return 0 when no arguments are passed", function(){
		//Arrange
		var	expectedResult = 0;
		
		//Act
		var result = sum();

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to add an array of numbers", function(){
		//Arrange
		var	numbers = [10,20,30],
			expectedResult = 60;
		
		//Act
		var result = sum(numbers);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to add a list of array of numbers", function(){
		//Arrange
		var	numbers1 = [10,20,30],
			numbers2 = [10,20,30],
			expectedResult = 120;
		
		//Act
		var result = sum(numbers1,numbers2);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to add a nested array of numbers", function(){
		//Arrange
		var	numbers = [10,[20,[30,[40,[50]]]]],
			expectedResult = 150;
		
		//Act
		var result = sum(numbers);

		//Assert
		expect(result).toBe(expectedResult);
	});
});