function Employee(id,name,salary){
   this.id = id;
   this.name = name;
   this.salary = salary;
   this.display = function(){
    console.log("Id = ", this.id, " Name = ", this.name, " Salary = ", this.salary);
   }
}
/*

Write a constructor function "Employee"
	- is invoked with id,name,salary
	- "id" should be readonly
	- "name" should not accept an empty string as a value
	- "salary" cannot be assigned a value less than the current salary
	*/