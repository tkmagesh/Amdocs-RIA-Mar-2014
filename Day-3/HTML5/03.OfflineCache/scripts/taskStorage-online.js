
	function addTaskToStorage(taskName){
		//using ajax to save the task in the server		
		console.log("Attempting to save the task in the server");
		return {
			id : new Date().getTime().toString(),
			name : taskName
		};
	}
	function removeTaskFromStorage(id){
		console.log("Attempting to remove the task in the server");
		//storage.removeItem(id);
		//using ajax to remove the task from the server database
	}
	function getAllTasksFromStorage(){
		//using ajax to retrive the tasks from the server
		console.log("Attempting to retrieve the tasks from the server");
		return [
			{id : 1, name : "Online task - 1"},
			{id : 2, name : "Online task - 2"},
		]
	}