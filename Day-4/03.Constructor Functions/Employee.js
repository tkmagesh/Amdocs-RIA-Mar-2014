function Employee(id,fName,salary){
   var _id = id,
   		_fname = fName,
   		_salary = salary;

   this.id = function(){
   		return _id;
   };
   this.firstName = function(val){
   		if (typeof val === "undefined") return _fname;
   		if (val !== "") _fname = val;
   		return _fname;
   };

   this.salary = function(val){
   		if (val > _salary) _salary = val;
   		return _salary;
   }
   this.display = function(){
    console.log("Id = ", this.id(), " Name = ", this.name(), " Salary = ", this.salary());
   }
   return this;
}
/*

Write a constructor function "Employee"
	- is invoked with id,name,salary
	- "id" should be readonly
	- "name" should not accept an empty string as a value
	- "salary" cannot be assigned a value less than the current salary
	*/