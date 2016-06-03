//add a task

var taskInput = $("#new-task");
var addButton = $(".container p button");
var incompleteTaskHolder = $("#incomplete-tasks");
var completedTasksHolder = $("#completed-tasks");

var addTask = function(){

    var taskName = $("#new-task").val();
    var $task = $('<li><input type="checkbox"><label>'+taskName+'</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>')
    $("#incomplete-tasks").append($task);
    return $task;

}


//edit existing task
var editTask = function(){

    var element = $(this.parentNode);
    if(element.hasClass("editMode")){
        var val = element.get(0).querySelector("input[type=text]").value;
        console.log(val);
        $(element).removeClass("editMode");
        element.get(0).querySelector("label").innerHTML= val;
    }else{

        var label = (element.get(0).querySelector("label").innerHTML);
        element.addClass("editMode");
        element.get(0).querySelector("input[type=text]").value=label;

    }
}
//mark a task as complete
var  taskCompleted = function(){

    console.log(this.parentNode);
}
//mark task as incomplete
var taskIncompleted = function(){

    console.log("task incompleted");
    completedTasksHolder.append(this.parentNode);
}

var deleteTask = function(){

    $(this.parentNode).remove();

}
var bindTaskEvents = function(taskListItem, checkBoxEventHandler){


    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton =taskListItem.querySelector("button.edit");
    var deleteButton=taskListItem.querySelector("button.delete");

    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
}

var incompleteTasksHolderChildren = incompleteTaskHolder.children();

for(var i=0;i<incompleteTasksHolderChildren.length;i++){

    bindTaskEvents(incompleteTasksHolderChildren[i], taskIncompleted);

}
var completedTasksHolderChildren = completedTasksHolder.children();
for(var i=0;i<completedTasksHolderChildren.length;i++){
    bindTaskEvents(completedTasksHolderChildren[i], taskCompleted);
}

addButton.click(function(){
    var $task = addTask();
    bindTaskEvents($task.get(0), taskIncompleted);



});