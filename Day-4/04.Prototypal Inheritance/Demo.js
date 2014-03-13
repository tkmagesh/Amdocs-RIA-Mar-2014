var baseObj = {
	id : 101,
	display : function(){
		console.log(this.id,this.firstName,this.salary);
	}
}

function Employee(firstName,salary){
	this.firstName = firstName;
	this.salary = salary;
	this.something = function(){

	}
}

var empBase = new Employee("",0);

function FullTimeEmployee(){

}

FullTimeEmployee.prototype = empBase;

Employee.prototype = baseObj;

var e1 = new Employee("Magesh",10000);
e1.display();