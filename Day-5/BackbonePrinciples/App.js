function App(){
	this.init = function(){
		var calc = new SalaryCalculator();
		var calcView = new SalaryCalculatorView(calc,"calculatorTemplate");
		calcView.init();
		calcView.render();
		$(document.body).append(calcView.$root);
	}
}