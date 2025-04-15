//! detect when player refreshes the page 
 
window.addEventListener('load', function () {
const navEntries = performance.getEntriesByType("navigation");
if (navEntries.length > 0 && navEntries[0].type === "reload") {
    // This is a reload
    //! randomly generate two numbers between 1 and 6
    random_number_1  = Math.floor((Math.random() * 6) + 1)
    random_number_2 = Math.floor((Math.random() * 6) + 1)
    //! check for random numbers and show images ased on numbers
    document.querySelector(".img1").setAttribute("src", `images/dice${random_number_1}.png`);
    document.querySelector(".img2").setAttribute("src", `images/dice${random_number_2}.png`);
    //! check if one these numbers is greater or equal to another one 
    if (random_number_1 == random_number_2) {
        document.querySelector("h1").textContent = "It is a Tie!";
    }
    else if (random_number_1 > random_number_2) {
        document.querySelector("h1").textContent = "Player1 wins";
    }
    else {
        document.querySelector("h1").textContent = "Player2 wins";
    }

    // You can do anything else here
}
});
 
