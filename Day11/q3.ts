// q3.ts

type TaskStatus = 'Open' | 'InProgress' | 'Closed'; 

function handleTask(status: TaskStatus): string {
  switch (status) {
    case 'Open':
      return "Task is open";
    case 'InProgress':
      return "Task is in progress";
    case 'Closed':
      return "Task is closed";
   
    default:
      const exhaustiveCheck: never = status; 
      throw new Error(`Unhandled status: ${exhaustiveCheck}`);
  }
}

console.log(handleTask('Open'));
console.log(handleTask('Closed'));