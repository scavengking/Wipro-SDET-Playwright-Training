// q8.ts


function safeExecute<T>(
  fn: (...args: any[]) => Promise<T>
): (...args: any[]) => Promise<T | null> {
  return async (...args: any[]) => {
    try {
      const result = await fn(...args);
      return result;
    } catch (error) {
      console.error(" Error caught by safeExecute:", error);
      return null;
    }
  };
}


async function fetchUser(id: number): Promise<{ id: number; name: string }> {
  if (id <= 0) throw new Error("Invalid ID!");
  return { id, name: "Krishna" };
}


async function riskyOperation(): Promise<string> {
  throw new Error("Something went wrong!");
}


const safeFetchUser = safeExecute(fetchUser);
const safeRiskyOp = safeExecute(riskyOperation);

async function main() {
  const user = await safeFetchUser(1);
  console.log("User result:", user);       

  const failed = await safeFetchUser(-1);
  console.log("Failed fetch result:", failed); 

  const risky = await safeRiskyOp();
  console.log("Risky op result:", risky);      
}

main();