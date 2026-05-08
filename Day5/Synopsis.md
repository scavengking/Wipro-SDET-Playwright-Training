JavaScript Object-Oriented Programming (OOP) Concepts
Introduction

Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects and classes. It helps developers create reusable, maintainable, and organized applications. JavaScript supports OOP concepts through classes, objects, inheritance, encapsulation, abstraction, and polymorphism.

1. Class and Object

A class is a blueprint used to create objects, while an object is an instance of a class containing properties and methods.

Example

The Animal class contains:

a name property
a speak() method

Objects such as dog and cat are created using this class.

Advantages
Organizes code efficiently
Promotes code reusability
Improves readability and maintainability

2. Encapsulation

Encapsulation refers to hiding sensitive data inside a class and controlling access to it using methods.

Example

The BankAccount and Student classes use private variables such as:

#balance
#marks

These private variables cannot be accessed directly outside the class. Public methods like:

deposit()
withdraw()
setMarks()
getMarks()

are used to safely manipulate and retrieve data.

Advantages
Protects data from unauthorized access
Improves security
Maintains data integrity
Makes code more structured

3. Abstraction

Abstraction means hiding internal implementation details and exposing only the essential features to the user.

Example

The CoffeeMachine and Car classes hide internal methods like:

#boilWater()
#grindBeans()
#startEngine()

Users interact only with simplified public methods such as:

brew()
drive()
Advantages
Reduces complexity
Simplifies user interaction
Enhances maintainability

4. Inheritance

Inheritance allows one class to inherit properties and methods from another class using the extends keyword.

Example
The Admin class inherits from the User class.
The Dog class inherits from the Animal class.
Advantages
Encourages code reusability
Reduces duplicate code
Establishes parent-child relationships between classes

5. Polymorphism

Polymorphism allows the same method to perform different actions depending on the object or class using it.

Example

The draw() method behaves differently in:

Circle
Square

Similarly, the sound() method behaves differently in:

Dog
Cat
Cow
Advantages
Provides flexibility
Simplifies method overriding
Improves scalability and extensibility

Conclusion

Object-Oriented Programming in JavaScript helps developers build:

clean applications
reusable code
scalable systems
secure and maintainable software

The major OOP concepts are:

Class and Object
Encapsulation
Abstraction
Inheritance
Polymorphism