// console.log(document);

// const heading = document.querySelector("h2");
// console.log(heading);

// const value = document.querySelector(".value");
// console.log(value);

// const button = document.querySelector("button");
// console.log(button);

// const area = document.querySelector(".area-display > .value");
// console.log(area);

// const div = document.querySelector("div.stats");
// console.log(div);

// const hello = document.querySelector(".hello");
// console.log(hello);


// // Find all the buttons on the page
// const buttons = document.querySelectorAll("button");
// console.log(buttons);
// console.log("============")

// // //querySelectorAll
// const heading3list = document.querySelectorAll("h3");

// for (let element of heading3list.values()) {
//     console.log(element);
// }

// for (let i = 0; i <heading3list.length; i++) {
//     const element = heading3list[i];
//     console.log(element);
// }

// //query div rate
// const divRating = document.querySelectorAll("div.rating-display");

// for (let element of divRating.values()) {
//     console.log(element);
// }
// console.log("============")

// //query div area
// const divArea = document.querySelectorAll("div.area-display");

// for (let i = 0; i < divArea.length; i++) {
//     const element = divArea[i];
//     console.log(element);
// }
// console.log("============")

//Support older brownser
// Get a list of descriptions
const list = document.querySelectorAll(".description-display");

// Array.prototype.forEach.call(list, function (element) {
//     console.log(element);
//     console.log(typeof element);
// });

//innerText innerHTML
for (let desc of list.values()) {
    let content = desc.innerText;
    
    //truncate
    if(content.length > 250) {
        content = content.slice(0, 250);
        content = content + '<a href="#">...</a>';
    }

    //console.log(content);
    //console.log(content.length);

    //update htmlelemnt
    desc.innerHTML = content;
}
//console.log("============")
//changing CSS
const ratings = document.querySelectorAll(".rating-display .value");

//innerText
for (let element of ratings.values()) {
    let content = parseFloat(element.innerText);
    

    // if(content > 4.7) {
    //     element.style.fontWeight = "bold";
    //     element.style.color = "#3ba17c";
    // }
    // console.log(content);

    if(content > 4.7) {
        element.classList.add("high-rating");
        element.classList.add("value");
    }
    //console.log(element)
}

//create DOM element
const parks = document.querySelectorAll(".park-display");
const numParks = parks.length;
//create new element
const newElement = document.createElement("div");
//addd content and style
newElement.innerText = `${numParks} exciting parks to visit`;
newElement.classList.add("header-statement");
//add to page
const header = document.querySelector("header");
header.appendChild(newElement);

//remove DOM element
const main = document.querySelector("main");

//select element
const park = document.querySelector(".park-display");

//remove park
//main.removeChild(park);







// //lession solution ************************************************
// // select all the descriptions on the page

// const descriptions = document.querySelectorAll(".description-display");

// for (let desc of descriptions.values()) {
//   let content = desc.innerText;

//   if (content.length > 250) {
//     content = content.slice(0, 250);
//     content = content + '<a href="#">...</a>';
//   }

//   desc.innerHTML = content;
// }

// // select all rating values
// const ratings = document.querySelectorAll(".rating-display .value");

// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);

//   if (ratingValue > 4.7) {
//     rating.classList.add("high-rating");
//     rating.classList.remove("value");
//   }
// }

// // Select all parks
// const parks = document.querySelectorAll(".park-display");
// const numberParks = parks.length;

// // create a new element
// const newElement = document.createElement("div");

// // add the text
// newElement.innerText = `${numberParks} exciting parks to visit`;

// //add the class
// newElement.classList.add("header-statement");

// // insert the new element
// const header = document.querySelector("header");
// header.appendChild(newElement);

// // get the parent element of all parks
// const main = document.querySelector("main");

// //select a single park
// const park = main.querySelector(".park-display");

// // remove that park
// // main.removeChild(park);




/*********************** Event listener ************************/
// //select button
// const firstButton = document.querySelector("button");
// //handle event
// firstButton.addEventListener("click", (event) => {
//     console.log("you clicked the button", event);
//     console.log(event.target);
// });

//select all the buttons
const allBtns = document.querySelectorAll(".rate-button");

//Iterate throught the list and add an event handler to each btn
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) =>{
        console.log(event.target.parentNode);
        const park = event.target.parentNode;
        park.style.backgroundColor = "#c8e6c9";
    });
});


//**********build event handle for name sorting.
// //select the name-sorter link
// const nameSorter = document.querySelector("#name-sorter");

// //add an event listener
// nameSorter.addEventListener("click", (event) => {
//     //prevent follow the link
//     event.preventDefault();
//     console.log("clicked name-sorter");

//     //1 get main element
//     const main =  document.querySelector("main");

//     //2 get list of all parks 
//     const parkList = document.querySelectorAll(".park-display");

//     //empty the main element
//     main.innerHTML = "";

//     //3 create an array
//     // const a = "aaaaaaa";
//     // const aArray = Array.from(a);
//     // console.log(aArray);
//     const parksArray = Array.from(parkList);

//     //4 sort array by name
//     parksArray.sort((parkA, parkB) => {
//         const parkAName = parkA.querySelector("h2").innerText;
//         const parkBName = parkB.querySelector("h2").innerText;
//         if(parkAName < parkBName) {
//             return -1;
//         } else if ( parkAName > parkBName) {
//             return 1;
//         } else {
//             return 0;
//         }
//     });

//     //5 append child
//     parksArray.forEach((park) => {
//         main.appendChild(park);
//     })
// });

//2nd way external helper functions
// Function for sorting by name
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };
  
  // Function for handling the `nameSorter` click
  const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
//   // Select the `nameSorter` link
//   const nameSorter = document.querySelector("#name-sorter");
  
//   // Add an event listener
//   nameSorter.addEventListener("click", nameSorterClickHandler);


//**********build event handle for rating sorting.
//sorting by rating function
const sortByRating = (parkA, parkB) => {
    const parkARating = parseFloat(parkA.querySelector(".rating-display > .value").innerText);
    const parkBRating = parseFloat(parkB.querySelector(".rating-display > .value").innerText);
    return parkBRating - parkARating;
};

//create ratingSortClcikHandler
const ratingSorterClcikHandler = (event) => { 
    event.preventDefault();
    console.log("clicked")

    //find main element
    const main = document.querySelector("main");

    //get the child list
    const parksList = document.querySelectorAll(".park-display");

    //empty main
    main.innerHTML ="";

    //create an array
    const parksArray = Array.from(parksList);

    //sort array
    parksArray.sort(sortByRating);

    //Insert each park into the DOM
    parksArray.forEach((park) => {
        main.appendChild(park);
    })
}


// //select the rating sorter link
// const ratingSorter = document.querySelector("#rating-sorter");

// //add event listener 
// ratingSorter.addEventListener("click", ratingSorterClcikHandler);


//********** DOM ContentLoaded event
console.log("before");

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("loaded!");
});

console.log("after!");


//********** using CONTENT LOADED event for sorter

const mainForContentLoaded = () => {
    // Select the `nameSorter` link
    const nameSorter = document.querySelector("#name-sorter");
    
    // Add an event listener
    nameSorter.addEventListener("click", nameSorterClickHandler);
    
    
    const ratingSorter = document.querySelector("#rating-sorter");

    //add event listener 
    ratingSorter.addEventListener("click", ratingSorterClcikHandler);

}

window.addEventListener("DOMContentLoaded", mainForContentLoaded);