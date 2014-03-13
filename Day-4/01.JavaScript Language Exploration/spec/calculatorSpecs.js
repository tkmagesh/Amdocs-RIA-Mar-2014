describe("A calculator",function(){
	it("should be able to add 2 numbers", function(){
		//Arrange
		var n1 = 10, n2 = 20, expectedResult = 30;

		//Act
		var result = sum(n1,n2);

		//Assert
		expect(result).toBe(expectedResult);
	});
});