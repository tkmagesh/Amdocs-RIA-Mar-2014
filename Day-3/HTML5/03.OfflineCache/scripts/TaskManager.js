	$(function (){
		$("#btnAddTask").on("click",addTask);
		$("#btnRemoveCompleted").on("click",onBtnRemoveCompletedClick);
		$("#txtTask").on("keyup",onTxtTaskChange);
		$("#btnAddTask").attr('disabled', true);
		attachTaskClick();
		$("#divMessage").hide();
		loadTasksFromStorage();
	});

	function loadTasksFromStorage(){
		var tasks = getAllTasksFromStorage();
		for(var i=0;i<tasks.length;i++)
			addTaskToList(tasks[i]);
	}
	
	function onTxtTaskChange(){
		$("#btnAddTask").attr('disabled', this.value.trim() === "");
	}
	
	function onBtnRemoveCompletedClick(){
		$("#ulTaskList > li.completed").each(function(){
			removeTaskFromStorage($(this).attr("data-task-id"));
			$(this).slideUp(function(){
				$(this).remove();
			});
		});
		
		displayMessage("0 or more completed tasks are removed");
	}

	function addTask(){
		var taskName = $("#txtTask").val();
		var newTask = addTaskToStorage(taskName);
		addTaskToList(newTask);
	}
	function addTaskToList(task){
		$("<li></li>")
			.html(task.name)
			.hide()
			.attr("data-task-id",task.id)
			.prependTo("#ulTaskList")
			.slideDown('slow');
		displayMessage("A new task is added");
	}

	function attachTaskClick(){
		//$("#ulTaskList").delegate("li", "click", onTaskClick);
		$("#ulTaskList").on("click","li",onTaskClick);
	}

	function onTaskClick(){
		$(this).toggleClass("completed");
	}

	function displayMessage(msg){
		$("#divMessage").text(msg).fadeIn().delay(3000).fadeOut(10000);
	}
