import React from "react";

const DataTypes: React.FC = () => {
  // const stringValue: any = [];
  const numberValue: number = 1000;
  const stringValue = 10;

  // const booleanValue: boolean = true;
  // const undefinedValue: undefined = undefined;
  // const nullValue: null = null;
  const arrayValue: number[] = [1, 2];

  // const arrayValue2: number | string[] = [1, 2, 3, 4, 5, 6, "abc"];

  type MixedArray1 = number | string;

  const newArr: MixedArray1[] = [1, "hhh", 2, 3, "Uk", 5, "asda", 9, "fghjk"];

  //   const array2Value: string[] = [
  //     "string",
  //     "number",
  //     "boolean",
  //     "undefined",
  //     "null",
  //   ];
  const tuple: [string, number, string] = ["Uk", 1, "sr"];

  enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
    Number = 1,
  }

  const favoriteColor = Color.Number;

  const objectValues: {
    name: string;
    age: number;
    hobby?: string[];
    address?: {
      street: string;
      city: string;
      country: string;
    };
  } = {
    name: "John",
    age: 30,
    // hobby: ["reading", "coding"],
    address: {
      street: "123 Main St",
      city: "New York",
      country: "United States",
    },
  };

  //   const objectValues2: {} = {
  //     age: 10,
  //     name: "John",
  //     city: "New York",
  //     country: "United States",
  //   };

  type objectArray = {
    age: number;
    name?: string;
  };

  type MixedArray = number | string | boolean | objectArray;

  // interface name {
  //   name: string;
  // }

  // const ssa: name = { name: "John" };

  //   const object: objectArray = { age: 10, name: "John" };

  const multipleArray: MixedArray[] = [
    1,
    2,
    "Uthaya Kumar",
    false,
    {
      age: 25,
      name: "uk",
    },
  ];
  //   const multipleArray2: objectArray[] = [{ age: 10, name: "John" }];

  //   const valueX: MixedArray = "UK";

  type Employee = { id: number; name: string; role: string };

  type Manager = { id: number; name: string; department: string };

  type Staff = Employee | Manager;
  //   type Staff2 = Staff;

  let staff: Staff[] = [];

  staff.push({ id: 1, name: "Alice", role: "Developer" });
  staff.push({ id: 2, name: "Bob", department: "HR" });

  console.log(staff);

  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a noise.`);
    }

    Walk(): string {
      return `${this.name} can walk.`;
    }

    Bark(): string | number {
      return `${this.name} can Bark.`;
    }
    move(distance: number = 0) {
      return `${this.name} moved ${distance} meters.`;
    }
  }

  const dog = new Animal("New animal");

  // dog.Walk(); // Output: Dog makes a noise.

  class Dog extends Animal {
    barkNew() {
      return "Woof! Woof!";
    }
  }

  const newDog = new Dog("Dog CHECK");

  const newAnimal = new Animal("Dog CHECK");

  console.log(newDog.barkNew()); // Output: Woof! Woof!
  console.log(newAnimal.speak());

  interface Flyer {
    fly(): string;
    flyable(): number;
  }

  interface Swimmer {
    swim(): string;
  }

  interface Vehicle {
    start(): string;
    stop(): string;
  }

  class Duck implements Flyer, Swimmer, Vehicle {
    private name: string;
    public age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    fly() {
      return `${this.name} the duck is flying.`;
    }

    flyable() {
      return 25;
    }

    swim() {
      return `${this.name} the duck is swimming.`;
    }

    start() {
      return `${this.name} the duck is starting to move.`;
    }

    stop() {
      return `${this.name} the duck has stopped.`;
    }

    extra() {
      return "This is a extra duck.";
    }

    bark() {
      return "This is a duck bark.";
    }
  }

  const newDuck = new Duck("Duck", 25);

  newDuck.bark();
  // newDuck.age;

  class AnimalOften {
    protected name: string;

    constructor(name: string) {
      this.name = name;
    }

    protected makeSound(): void {
      console.log(`${this.name} makes a sound.`);
    }

    private newSound(): string {
      return "This is a new sound.";
    }

    public sound(): void {
      this.makeSound(); // Accessible because makeSound is protected
      this.newSound(); // Accessible because newSound is private
    }
  }

  const newObject = new AnimalOften("uk");

  class DogNew extends AnimalOften {
    public bark(): void {
      console.log(`${this.name} barks!`);
      this.makeSound(); // Accessible because makeSound is protected
    }
  }

  const doggy = new DogNew("Puupy");

  doggy.bark();

  return (
    <>
      {numberValue}
      {favoriteColor}
      <p>{stringValue}</p>
      {arrayValue.map((value: number) => {
        return <p>{value}</p>;
      })}
      {tuple}
      {newArr}
      <p>{favoriteColor}</p>
      <p>{objectValues.age}</p>
      {/* <p>{multipleArray}</p> */}
      {/* <p>{multipleArray2}</p> */}
      {dog.Walk()}
    </>
  );
};

export default DataTypes;
