// User inputs their flavors into a prompt.
// Entry is converted into a string.
// This string of answers is then split into an array of strings.
// This array will be added to an object. In this object the key-value pair is the flavor and how many times it has come up.
// Organize the logic into a function.
// The result will be shown in the console to the user.

const flavorInput = prompt("What flavors would you like?", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

const flavorArray = flavorInput.split(",");


/**
 * 
 * @param {array} userFlavors The flavors the user put in the prompt 
 * @returns {object} The flavors and how many times they were entered
 */
function getFlavors(userFlavors) {
    // Creating an empty body named flavors
    const flavors = {};
    // This for loop iterates thru the array in flavorArray
    for (let i = 0; i < userFlavors.length; i++) {
        // At each iteration, the flavor is stored in the variable flavor
        let flavor = userFlavors[i];
        // If a flavor is already in the object, its value is increased by 1
        if (flavor in flavors) {
            flavors[flavor] += 1;
            // Otherwise, the flavor is added to the object and it is given a value of 1
        } else {
            flavors[flavor] = 1;
        }
    }
    return flavors;
}

console.log(getFlavors(flavorArray));
