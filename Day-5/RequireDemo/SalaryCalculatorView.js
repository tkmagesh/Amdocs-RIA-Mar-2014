define([],function(){
	function SalaryCalculatorView(model, templateId){
		var calc = model,
			_templateId = "#" + templateId;
			
		this.$root = $("<div></div>");

		this.init = function(){
			var that = this;
			// Reacting to model changes
			calc.onChange("salary",function(){
				that.$root.find("#divSalary").text(calc.salary());
			});
			calc.onChange("basic",function(){
				that.$root.find("#txtBasic").val(calc.basic());
			});
			calc.onChange("hra",function(){
				that.$root.find("#txtHra").val(calc.hra());
			});
			calc.onChange("da",function(){
				that.$root.find("#txtDa").val(calc.da());
			});
			calc.onChange("tax",function(){
				that.$root.find("#rangeTax").val(calc.tax());
				that.$root.find("#spanTax").text(calc.tax());
			});
			

			//Reacting to View Changes
			this.$root.on("change","#txtBasic",function(){
				calc.basic(parseInt(this.value));
			});

			this.$root.on("change","#txtHra",function(){
				calc.hra(parseInt(this.value));
			});
		
			this.$root.on("change","#txtDa",function(){
				calc.da(parseInt(this.value));
			});
		
			this.$root.on("change","#rangeTax",function(){
				calc.tax(parseInt(this.value));
				
			});
		
			this.$root.on("click","#btnCalculate", function(){
				calc.Calculate();
			});

		}
		this.render = function(){
			var template = $(_templateId).html();
			this.$root.append(template);
			return this;
		}
	}
	return SalaryCalculatorView;
})
