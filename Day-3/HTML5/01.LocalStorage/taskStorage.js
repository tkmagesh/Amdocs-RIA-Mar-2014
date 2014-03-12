var storage = window.localStorage;
	function addTaskToStorage(taskName){
		
		var key = new Date().getTime().toString();
		storage.setItem(key,taskName);
		return {
			id : key,
			name : taskName
		};
	}
	function removeTaskFromStorage(id){
		storage.removeItem(id);
	}
	function getAllTasksFromStorage(){
		var tasks = [];
		for(var i=0;i<storage.length;i++){
			var key = storage.key(i),
				name = storage.getItem(key);
			tasks.push({
				id : key,
				name : name
			});
		}
		return tasks;
	}