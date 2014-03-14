function SalaryCalculator(){
		var _salary = 0,
			_basic = 0,
			_hra = 0,
			_da = 0,
			_tax = 0;
		this.basic = function(val){
			if (typeof val === "undefined") return _basic;
			_basic = val;
			this.triggerChange("basic");
		};
		this.hra = function(val){
			if (typeof val === "undefined") return _hra;
			_hra = val;
			this.triggerChange("hra");
		};
		this.da = function(val){
			if (typeof val === "undefined") return _da;
			_da = val;
			this.triggerChange("da");
		};
		this.tax = function(val){
			if (typeof val === "undefined") return _tax;
			_tax = val;
			this.triggerChange("tax");
		};
		this.salary = function(val){
			if (typeof val === "undefined") return _salary;
			_salary = val;
			this.triggerChange("salary");
		};
		//this.onSalaryChange = function(){};
	}
	SalaryCalculator.prototype.Calculate = function(){
		var gross = this.basic() + this.hra() + this.da();
		var net = ((100 - this.tax())/100) * gross;
		this.salary(net);
		//this.onSalaryChange();

	}
	SalaryCalculator.prototype.onChange = function(attrName,callbackFn){
		if (!this._events) this._events = {};
		if (typeof this._events[attrName] === "undefined") this._events[attrName] = [];
		this._events[attrName].push(callbackFn);
	}
	SalaryCalculator.prototype.triggerChange = function(attrName){
		for(var i=0;!!this._events[attrName] && i < this._events[attrName].length;i++){
			var callback = this._events[attrName][i];
			callback();
		}
	}