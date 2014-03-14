define(['jquery','SalaryCalculator','SalaryCalculatorView'],function($,SC,SCView){
	function App(){
		this.init = function(){
			var calc = new SC();
			var calcView = new SCView(calc,"calculatorTemplate");
			calcView.init();
			calcView.render();
			$(document.body).append(calcView.$root);
		}
	};
	return new App();	
})
