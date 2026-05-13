// q6.ts


type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;


type A = UnwrapPromise<Promise<string>>;   
type B = UnwrapPromise<Promise<number>>;   
type C = UnwrapPromise<string>;            
type D = UnwrapPromise<Promise<{ id: number; name: string }>>;  


const a: A = "hello";         
const b: B = 42;              
const c: C = "world";         
const d: D = { id: 1, name: "Krishna" }; 

console.log("UnwrapPromise results:");
console.log("A (Promise<string>)  →", a);
console.log("B (Promise<number>)  →", b);
console.log("C (plain string)     →", c);
console.log("D (Promise<object>)  →", d);


async function getUser() {
  return { id: 1, name: "Krishna" };
}

type UserType = UnwrapPromise<ReturnType<typeof getUser>>;


const user: UserType = { id: 1, name: "Krishna" };
console.log("\nReal world usage:", user);