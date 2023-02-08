const username: string | number = "1" +1;

const suma = (a: number, b: number) => {
  return a + b;
};
const resultado = suma(1, 2);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const daniel = new Person(34, 'Daniel Del Rio Cruz');
daniel.lastName = 'Daniel';
