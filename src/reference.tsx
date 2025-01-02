import React from "react";

const AnyTypeExample: React.FC = () => {
  interface Greet {
    (name: string): string;
  }

  // class Animal {
  //   constructor(public name: string) {}
  // }

  // class Dog extends Animal {
  //   constructor(name: string, public breed: string) {
  //     super(name); // Call to the parent class constructor
  //   }

  //   describe() {
  //     console.log(`${this.name} is a ${this.breed}.`);
  //   }
  // }

  // const myDog = new Dog("Rex", "German Shepherd");
  // myDog.describe(); // Output: Rex is a German Shepherd.

  // class Animal {
  //   name: string;

  //   constructor(name: string) {
  //     this.name = name;
  //   }

  //   speak() {
  //     console.log(`${this.name} makes a noise.`);
  //   }
  // }

  // const dog = new Animal("Dog");
  // dog.speak(); // Output: Dog makes a noise.

  class Logger {
    constructor() {
      console.log("Logger initialized.");
    }

    log(message: string) {
      console.log(`Log: ${message}`);
    }
  }

  const logger = new Logger(); // Output: Logger initialized.
  logger.log("This is a message."); // Output: Log: This is a message.

  interface User {
    name: string;
    age: number;
    email: string;
  }

  //   const user: User = {
  //     name: "John Doe",
  //     age: 30,
  //     email: "john@example.com",
  //   };

  const greet: Greet = (name) => {
    return `Hello, ${name}!`;
  };
  enum Color {
    Red,
    Green,
    Blue,
  }

  // enum ApplicationProccess{
  //   True : true,
  //   False : false,
  // }

  enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }

  enum Status {
    Active = "ACTIVESSS",
    Inactive = "INACTIVE",
    Pending = "PENDING",
  }

  // let favoriteColor : Color = "Orange";
  let moveDirection = Direction.Up;
  // let userStatus = Status.Nonthing;
  let userStatus: Status = Status.Active;

  let value: number | string | number[] = 20;
  // value =// Now it's a number
  value = 10;
  value = "src/test/";

  // Tuple example
  let tuple: [string, number] = ["Basketball", 5];
  let point: [number, number, number] = [10, 20, 30];
  let book: [string, string?, number?] = ["The Great Gatsby"];

  // tuple.push(10)

  const x: number[] = [1, 2, 3, 4, 5];
  const y: string[] = ["a", "b", "c", "d"];
  const zA: {} = {
    age: "10",
    name: "John",
    city: "New York",
  };
  const zx: {
    age: number;
    name: string;
    city?: string;
    country?: string;
  } = {
    age: 10,
    name: "John",
    // city: "New York",
    // country: "United States"
  };

  // let mixedArray: (number | string)[] = [];

  // mixedArray.push(42);
  // mixedArray.push("Hello");
  // mixedArray.push(23);
  // mixedArray.push("World");

  // console.log(mixedArray); // Output: [42, "Hello", 23, "World"]

  type MixedType = number | string | {};

  let mixedArray: MixedType[] = [];

  mixedArray.push(42);
  // mixedArray.push("Hello");
  mixedArray.push({ id: 1, name: "Alice" });

  // console.log(mixedArray);
  // Output: [42, "Hello", { id: 1, name: "Alice" }]

  interface User {
    id: number;
    name: string;
    email: string;
  }

  let users: User[] = [];

  // // Adding objects dynamically to the array
  users.push({ id: 1, name: "Alice", email: "alice@example.com", age: 25 });
  // users.push({ id: 2, name: "Bob", email: "bob@example.com" });
  // users.push({ id: 3, name: "Charlie", email: "charlie@example.com" });

  // console.log(users);
  /*
Output:
[
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
]
*/

  type Employee = { id: number; name: string; role: string };
  type Manager = { id: number; name: string; department: string };

  type Staff = Employee | Manager;

  let staff: Staff[] = [];

  staff.push({ id: 1, name: "Alice", role: "Developer" });
  staff.push({ id: 2, name: "Bob", department: "HR" });

  console.log(staff);
  /*
Output:
[
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", department: "HR" }
]
*/

  //   When to Use Which?

  // 	•	Use interface when you need to define the shape of an object, especially if you need to take advantage of declaration merging or extending multiple interfaces.
  // 	•	Use type when you need to define complex types like unions, tuples, or when combining multiple types. Also, use type when you need more versatility in your type definitions.

  // In summary, both type and interface are powerful tools in TypeScript, and they can often be used interchangeably. The choice between them depends on the specific needs of your code, such as whether you need declaration merging, complex type definitions, or specific object-oriented features.

  return (
    <div>
      <p>The</p>
    </div>
  );
};

export default AnyTypeExample;
