let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');


let storyText = document.getElementById("story-text");

function showSequenceOne() {
    image1.src = "images/caramel-macchiato.jpg";
    image2.src = "images/cold-brew.jpg";
    image3.src = "images/pink-drink.jpg";

    storyText.innerHTML =
        "A cozy beginning, an energetic afternoon, and a refreshing ending.";


}

function showSequenceTwo() {
    image1.src = "images/pink-drink.jpg";
    image2.src = "images/cold-brew.jpg";
    image3.src = "images/caramel-macchiato.jpg";


    storyText.innerHTML =
        "A refreshing beginning, an energetic afternoon, and a cozy ending.";
        
}

let btn1 = document.getElementById("sequence-one");
btn1.addEventListener("click", showSequenceOne);

let btn2 = document.getElementById("sequence-two");
btn2.addEventListener("click", showSequenceTwo);

