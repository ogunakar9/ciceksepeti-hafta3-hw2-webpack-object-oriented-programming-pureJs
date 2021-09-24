import Animal from './animal';

// eslint-disable-next-line no-unused-vars
class Dog extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}

export default Dog;
