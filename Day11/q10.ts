// q10.ts

interface Car {
  make: string;
  model: string;
}

type ApiResponse<T> = {
  [K in keyof T as `DATA_${Uppercase<string & K>}`]: T[K];
};

type CarApiResponse = ApiResponse<Car>;


const carResponse: CarApiResponse = {
  DATA_MAKE: "Toyota",
  DATA_MODEL: "Fortuner",
};

console.log("CarApiResponse:", carResponse);


interface User {
  id: number;
  name: string;
  email: string;
}

type UserApiResponse = ApiResponse<User>;


const userResponse: UserApiResponse = {
  DATA_ID: 1,
  DATA_NAME: "Krishna",
  DATA_EMAIL: "krishna@example.com",
};

console.log("UserApiResponse:", userResponse);