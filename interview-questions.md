# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object oriented programming or OOP is a form of programming where everything you do within a project i centered around an object. All the data that you will be working with in a project will be a part of an object that will have getters and setters to grab data, delete data display data or CRUD (create, read, update or delete). Objects are instances of classes that hold the data and have functions with in that class to dictate behavior of the objects through those functions.
On the other hand you have functional programming. which uses the emphasizes of functions. functions give you the same out put based off the input. The idea of functional programming (FP) is the useage of small reusable functions that versatile.

Researched answer: Object-oriented programming (OOP) is a programming paradigm that revolves around the concept of objects, which are instances of classes that encapsulate data and behavior. OOP is based on the idea that programming should be modeled after real-world objects, and that code should be organized around these objects. OOP provides concepts such as encapsulation, inheritance, and polymorphism to facilitate code organization, reuse, and maintenance.
Functional programming (FP), on the other hand, is a programming paradigm that emphasizes the use of pure functions, which are functions that have no side effects and always return the same output given the same input. FP is based on the idea that programs should be composed of small, reusable functions that are easy to reason about and test. FP provides concepts such as immutability, higher-order functions, and recursion to facilitate functional composition and avoid mutable state.

1. What is the difference between a Float and an Integer in Ruby?

Your answer: The differnce between Float and an integer is that an integer is a whole number (no decimals)
and a float has decimals or can have decimals.

Researched answer: The main difference between a float and an integer in Ruby is that floats can represent numbers with fractional parts, while integers cannot. This means that arithmetic operations with floats can result in fractional results, while arithmetic operations with integers always result in integer values.

1. Ruby has an implicit return. What does that mean?

Your answer: Implicit return is the format ruby uses where it will return the final line in a function/method. There is no need to put the return word before the final land of code that you want to return. 

Researched answer: In Ruby, every method has a return value. When a method is called, the last expression evaluated in the method is automatically returned as the result of the method. This is known as an implicit return. I also learned that if you need to return something eariler on in the method you can use the return key word which I did not know before researching this question

1. What is a block in Ruby?

Your answer: A block of code in ruby is a piece of code that has an "end" syntax. it holds logic and cant take in an argument. its kind of like a small function with out of name. There is logic and has a return but has no name to it. the syntax starts with a "do" ... and has an "end"

Researched answer:In Ruby, a block is a piece of code that can be passed as an argument to a method. A block can be thought of as a nameless function that can be executed by the method it is passed to. Blocks are created using the do..end or curly braces {} syntax.

1. How do you extract a value in a Ruby hash?

Your answer: You are able yo extract a value from a Ruby hash by delcaring a new variable equal to the key of that value you want to extract and invoking that variable that is set to the value of the key that you want. 
Here is an example.....
my_hash = { "name" => "John", "age" => 30, "city" => "New York" }
name = my_hash["name"]
puts name   # Output: John

Researched answer: You can extract a value from a hash by using the hash key as the index. There are a few different ways to do this, but the most common approach is to use the square bracket notation.keys using the square bracket notation and store them in variables. Finally, we print out each variable to verify that we've successfully extracted the correct value from the hash.

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Class inheritance allows classes to communicate with each other. They are able to pass data back and forth between each other. It puts the classes in each others scope

2. RSpec: RSpec is a popular testing framework for Ruby that allows developers to write behavior-driven tests for their applications. RSpec provides a DSL (Domain Specific Language) for writing tests that are expressive and easy to read.

3. CRUD:CRUD is an acronym that stands for Create, Read, Update, and Delete. It is a common set of basic operations that can be performed on persistent storage such as a database.
Create: This operation involves creating a new record in the persistent storage. For example, adding a new user to a user database.Read: This operation involves retrieving existing records from the persistent storage. For example, retrieving a user's information from a user database.Update: This operation involves modifying an existing record in the persistent storage. For example, updating a user's information in a user database.Delete: This operation involves removing an existing record from the persistent storage. For example, deleting a user from a user database.

4. Test-driven development: Test-driven development (TDD) is a software development methodology that involves writing automated tests for a feature or functionality before actually writing the code for that feature. TDD follows a cycle of Red-Green-Refactor. which means you create a fail test (returns red), a passing test (returns green). Finally, you refactor the code to make it more efficient, maintainable, and scalable. You run the test again to make sure everything still passes.

5. HTTP: HTTP (HyperText Transfer Protocol) is a protocol used for communication on the web. It is the foundation of data communication for the World Wide Web (WWW).HTTP works as a client-server protocol, where a client makes a request to a server, and the server responds with a message containing the requested data. The HTTP message consists of a header and a body. The header contains information about the message, such as the request method (e.g., GET, POST, PUT, DELETE), the URI (Uniform Resource Identifier), and the version of HTTP being used. The body contains the data being transmitted, such as HTML, JSON, or XML.
