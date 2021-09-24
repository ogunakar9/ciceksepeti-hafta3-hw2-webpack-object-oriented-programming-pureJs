/* eslint-disable quotes */
import "../scss/app.scss";
import Duck from "./classes/duck";
import Dog from "./classes/dog";

const animalArr = [];

// create dog instances
animalArr.push(new Dog("Big Boy", "../images/content/dog1.jpg", 4, 2));
animalArr.push(new Dog("Ketchup", "../images/content/dog2.jpg", 4, 4));
animalArr.push(new Dog("Mayo", "../images/content/dog3.jpg", 4, 6));
animalArr.push(new Dog("Olive", "../images/content/dog4.jpg", 4, 1));
animalArr.push(new Dog("Darky", "../images/content/dog5.jpg", 4, 3));
animalArr.push(new Dog("Snoopy", "../images/content/dog6.jpg", 4, 3));

// create duck instances
animalArr.push(new Duck("Smelly", "../images/content/d1.jpg", 2, 2));
animalArr.push(new Duck("Bigmouth", "../images/content/d2.jpg", 2, 4));
animalArr.push(new Duck("Dipsy", "../images/content/d3.jpg", 2, 6));
animalArr.push(new Duck("Flippy", "../images/content/d4.jpg", 2, 1));
animalArr.push(new Duck("Pepper", "../images/content/d5.jpg", 2, 3));
animalArr.push(new Duck("Slim", "../images/content/d6.jpg", 2, 3));
animalArr.push(new Duck("Jibby", "../images/content/d7.jpg", 2, 3));
animalArr.push(new Duck("Snuggles", "../images/content/d8.jpg", 2, 3));

const cardContainer = document.querySelector(".card-container");

// create cards
animalArr.forEach((animal) => {
  const card = document.createElement("div");
  card.innerHTML += `
    <div class="card">
        <div class="card-image">
            <img src=${animal.image} alt="animal-image"/>
        </div>
        <div class="card-text">
            <div class="card-text-name">
                <p>Hi I'm ${animal.name}</p>
            </div>
            <div class="card-text-nums">
                <p>I'm ${animal.age} years old</p>
                <p>I have ${animal.numberOfLegs} legs</p>
            </div>
        </div>
    </div>
    `;
  cardContainer.appendChild(card);
});
