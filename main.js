const STATUS = {
  TO_DO: "To Do",
  DONE: "Done",
  IN_PROGRESS: "In Progress"
}

const DEFAULT_STATUS = STATUS.TO_DO;

const list = {
  "play the ukulele": STATUS.TO_DO,
  "study JS": STATUS.IN_PROGRESS,
  "make a bed": STATUS.DONE,
};

function changeStatus(name, status) {
  if (name in list) {
    list[name] = status;
  } else {
    console.log("This task is not in the list.");
  }
}

function addTask(name) {
  list[name] = DEFAULT_STATUS;
}

function deleteTask(name) {
  if (name in list) {
    delete list[name];
  } else {
    console.log("This task is not in the list.");
  }
}

function showList() {

  const tasks = {
    [STATUS.TO_DO]: "",
    [STATUS.IN_PROGRESS]: "",
    [STATUS.DONE]: "",
  }

  const noTasks = `\n -`;

  for (let name in list) {
    tasks[list[name]] += `\n "${name}",`;
  }

  console.log(STATUS.TO_DO, `${tasks[STATUS.TO_DO] || noTasks}`);
  console.log(STATUS.IN_PROGRESS, `${tasks[STATUS.IN_PROGRESS] || noTasks}`);
  console.log(STATUS.DONE, `${tasks[STATUS.DONE] || noTasks}`);
}


addTask("cook food");
addTask("study English");

changeStatus("cook food", "Done");
changeStatus("study English", "In Progress");

deleteTask("make a bed");
deleteTask("cook food");

showList();
