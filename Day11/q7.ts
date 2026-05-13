// q7.ts

type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress';


type MouseEvents = Extract<AllEvents, 'click' | 'dbclick'>;



type NonFormEvents = Exclude<AllEvents, 'submit' | 'reset'>;


function handleMouseEvent(event: MouseEvents): void {
  console.log("Mouse event triggered:", event);
}

function handleNonFormEvent(event: NonFormEvents): void {
  console.log("Non-form event triggered:", event);
}

handleMouseEvent('click');      
handleMouseEvent('dbclick');     


handleNonFormEvent('click');     
handleNonFormEvent('keypress');  


