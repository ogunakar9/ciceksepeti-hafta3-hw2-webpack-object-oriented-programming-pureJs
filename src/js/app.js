/* eslint-disable quotes */
import "../scss/app.scss";
import Duck from "./classes/duck";
import Dog from "./classes/dog";

const animalArr = [];

// create dog instances
animalArr.push(new Dog("Big Boy", "../images/content/dogs/d1.jpg", 4, 2));
animalArr.push(new Dog("Ketchup", "../images/content/dogs/d2.jpg", 4, 4));
animalArr.push(new Dog("Mayo", "../images/content/dogs/d3.jpg", 4, 6));
animalArr.push(new Dog("Olive", "../images/content/dogs/d4.jpg", 4, 1));
animalArr.push(new Dog("Darky", "../images/content/dogs/d5.jpg", 4, 3));
animalArr.push(new Dog("Snoopy", "../images/content/dogs/d6.jpg", 4, 3));

// create duck instances
animalArr.push(new Duck("Smelly", "../images/content/ducks/d1.jpg", 2, 2));
animalArr.push(new Duck("Bigmouth", "../images/content/ducks/d2.jpg", 2, 4));
animalArr.push(new Duck("Dipsy", "../images/content/ducks/d3.jpg", 2, 6));
animalArr.push(new Duck("Flippy", "../images/content/ducks/d4.jpg", 2, 1));
animalArr.push(new Duck("Pepper", "../images/content/ducks/d5.jpg", 2, 3));
animalArr.push(new Duck("Slim", "../images/content/ducks/d6.jpg", 2, 3));
animalArr.push(new Duck("Jibby", "../images/content/ducks/d7.jpg", 2, 3));
animalArr.push(new Duck("Snuggles", "../images/content/ducks/d8.jpg", 2, 3));

const cardContainer = document.querySelector(".card-container");

animalArr.forEach((animal) => {
  const card = document.createElement("div");
  card.innerHTML += `
    <div>
      <img src=${animal.image} alt="animal-image"/>
    </div>
    <div>
      <p>${animal.name}</p>
      <p>${animal.age}</p>
      <p>${animal.numberOfLegs}</p>
    </div>
    `;
  cardContainer.appendChild(card);
});
