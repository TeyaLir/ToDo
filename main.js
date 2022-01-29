const list = {
  "play the ukulele": "To Do",
  "study JS": "In Progress",
  "make a bed": "Done",
};

function changeStatus(task, status) {
  list[task] = status;
}

function addTask(task) {
  list[task] = "To Do";
}

function deleteTask(task) {
  delete list[task];
}

function showList() {

  console.log("To Do:");
  let countTodo = 0;
  for (let task in list) {
    if (list[task] == "To Do") {
      console.log(' ' + '"' + task + '"' + ',');
      countTodo++;
    }
  }
  if (countTodo === 0) {
    console.log('-');
  }

  console.log("In Progress:");
  let countProgress = 0;
  for (let task in list) {
    if (list[task] == "In Progress") {
      console.log(' ' + '"' + task + '"' + ',');
      countProgress++;
    }
  }
  if (countProgress === 0) {
    console.log('-');
  }

  console.log("Done:");
  let countDone = 0;
  for (let task in list) {
    if (list[task] == "Done") {
      console.log(' ' + '"' + task + '"' + ',');
      countDone++;
    }
  }
  if (countDone === 0) {
    console.log('-');
  }
}


addTask("cook food");
addTask("study English");

changeStatus("study English", "In Progress");
changeStatus("study English", "To Do");

changeStatus("cook food", "In Progress");
changeStatus("cook food", "Done");

deleteTask("make a bed");
deleteTask("cook food");

showList();
