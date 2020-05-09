const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetsElObj = document.getElementById("planets")

planets.forEach(i => 
        planetsElObj.innerHTML += `${i}<hr>`
    );

/* 
less effeciant that the above code, because its 'getting' the element inside the loop. 
planets.forEach(i => document.getElementById("planets") planetsEl.innerHTML += `<section>${i}</section`);
 */

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const planetsUpper = (array) => array.map(planet => {    return planet.charAt(0).toUpperCase() + planet.slice(1)})

console.log(planetsUpper);
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const solarE = planets.filter(planet => {    if (planet.includes("e")) {        return planet    }})
console.log(solarE);

/*planetsUpper(solarE).forEach(planets => planetEl.innerHTML += `<h1>${planets}</h1>`),;*/