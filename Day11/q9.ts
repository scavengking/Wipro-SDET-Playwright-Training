// q9.ts

interface UserMetadata {
  createdAt: Date;                          
  [key: string]: string | number | boolean | Date; 
}


const meta: UserMetadata = {
  createdAt: new Date(),        
  username: "krishna",          
  age: 25,                     
  isActive: true,               
  loginCount: 42,               
  plan: "premium",             
};

console.log("UserMetadata:");
console.log("createdAt  :", meta.createdAt);
console.log("username   :", meta.username);
console.log("age        :", meta.age);
console.log("isActive   :", meta.isActive);
console.log("loginCount :", meta.loginCount);

