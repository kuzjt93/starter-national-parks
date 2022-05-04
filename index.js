const submitHandler = (event) => {
  event.preventDefault();

  const form = document.querySelector("#park-form");
  const formData = new FormData(form);

  // Keep track of if any errors are found
  let hasErrors = false;
  
  //validation 
  formData.forEach((value, key) => {
    let errorId = `#${key}-error`;
    if (value.trim() === "") {
      document.querySelector(errorId).style.display = "block";
      hasErrors = true;
    } else {
      document.querySelector(errorId).style.display = "none";
    }
  });

  // if there are no errors
  if (!hasErrors) {
    // //create a new element
    // const parkSection = document.createElement("section");

    // // add the park class
    // parkSection.classList.add("park-display");

    // // construct the HTML for this element
    // const content = `
    // <h2>${formData.get("name")}</h2>
    // <div class="location-display">${formData.get("location")}</div>
    // <div class="description-display">${formData.get("description")}</div>
    // <button class="rate-button" title="Add to Favourites">&#9734;</button>
    // <div class="stats">
    //   <div class="established-display stat">
    //     <h3>Established</h3>
    //     <div class="value">${formData.get("established")}</div>
    //   </div>
    //   <div class="area-display stat">
    //     <h3>Area</h3>
    //     <div class="value">${formData.get("area")}</div>
    //   </div>
    //   <div class="rating-display stat">
    //     <h3>Rating</h3>
    //     <div class="value">${formData.get("rating")}</div>
    //   </div>
    // </div>
    // `;

    // // set the innerHTML
    // parkSection.innerHTML = content;

    // //append to the main element
    // document.querySelector("main").appendChild(parkSection);
    //create new object containt input data
    const parkInput = {
      name: formData.get("name"),
      location: formData.get("location"),
      description: formData.get("description"),
      established: formData.get("established"),
      area: formData.get("area"),
      rating: formData.get("rating"),
    };
    
    parks.push(parkInput);

    render();
  };
};

// function to handler favorite button clicks
const favoriteButtonClickHandler = (event) => {
  // const park = event.target.parentNode;
  // park.style.backgroundColor = "#c8e6c9";
  // modify by using main element with condition check
  if (event.target && event.target.nodeName == "BUTTON") {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  };
};

// function for sorting by name
// const sortByName = (parkA, parkB) => {
//   const parkAName = parkA.querySelector("h2").innerText;
//   const parkBName = parkB.querySelector("h2").innerText;
//   if (parkAName < parkBName) {
//     return -1;
//   } else if (parkAName > parkBName) {
//     return 1;
//   } else {
//     return 0;
//   }
// };
// function for sorting by name using render
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.name;
  const parkBName = parkB.name;
  if (parkAName < parkBName) { 
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  };
};

// function for sorting by rating
// const sortByRating = (parkA, parkB) => {
//   const parkARating = parseFloat(
//     parkA.querySelector(".rating-display > .value").innerText
//   );
//   const parkBRating = parseFloat(
//     parkB.querySelector(".rating-display > .value").innerText
//   );
//   return parkBRating - parkARating;
// };
// function for sorting by rating using render 
const sortByRating = (parkA, parkB) => {
  const parkARating = parkA.rating;
  const parkBRating = parkB.rating;
  
  return parkBRating - parkARating;
}

// function for handling the nameSorter click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // // 1.  get the main element
  // const main = document.querySelector("main");

  // // 2. get the list of parks
  // const parksList = main.querySelectorAll(".park-display");

  // // 3. empty the main
  // main.innerHTML = "";

  // // 4. create an array
  // const parksArray = Array.from(parksList);

  // // 5. sort the array
  // parksArray.sort(sortByName);

  // // 6. Insert each park into the DOM
  // parksArray.forEach((park) => {
  //   main.appendChild(park);
  // });
  // sort by data
  parks.sort(sortByName);
  
  render();
};

// function to handle the ratingSorter click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // // 1.  get the main element
  // const main = document.querySelector("main");

  // // 2. get the list of parks
  // const parksList = main.querySelectorAll(".park-display");

  // // 3. empty the main
  // main.innerHTML = "";

  // // 4. create an array
  // const parksArray = Array.from(parksList);

  // // 5. sort the array
  // parksArray.sort(sortByRating);

  // // 6. Insert each park into the DOM
  // parksArray.forEach((park) => {
  //   main.appendChild(park);
  // });
  // sort by data
  parks.sort(sortByRating);

  render();
};

// the point where all the code starts
const main = () => {
  // select the nameSorter link
  const nameSorter = document.querySelector("#name-sorter");

  // add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // select the ratingSorter link
  const ratingSorter = document.querySelector("#rating-sorter");

  // add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);

  // // select all the buttons for all the parks
  // const allBtns = document.querySelectorAll(".rate-button");

  // // iterate the list of buttons and add an event handler to each
  // allBtns.forEach((btn) => {
  //   btn.addEventListener("click", favoriteButtonClickHandler);
  // });
  //modify favorate button to main
  //select main
  const main = document.querySelector("main");

  //add event handler
  main.addEventListener("click", favoriteButtonClickHandler);

  // get the form element
  const form = document.querySelector("#park-form");

  // attach the submit handler
  form.addEventListener("submit", submitHandler);

  // call render function
  render();
};

// Add event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", main);

/**************Render user interface**************/
const renderOnePark = (park) => {
  // Get the individual properties of the park
  const { name, location, description, established, area, rating } = park;

  const content = `
      <section class="park-display">
        <h2>${name}</h2>
        <div class="location-display">${location}</div>
        <div class="description-display">${description}</div>
        <button class="rate-button" title="Add to Favourites">&#9734;</button>
        <div class="stats">
          <div class="established-display stat">
            <h3>Established</h3>
            <div class="value">${established}</div>
          </div>
          <div class="area-display stat">
            <h3>Area</h3>
            <div class="value">${area}</div>
          </div>
          <div class="rating-display stat">
            <h3>Rating</h3>
            <div class="value">${rating}</div>
          </div>
        </div>
      </section>
  `;
  return content;
};

//render page
const render = () => {
  //get the parent element
  const main = document.querySelector("main");

  //empty the parent element
  main.innerHTML = "";

  //get the parks HTML
  const content = parks.map(renderOnePark).join("");
  
  //set the `innerHTML` of perent elemnt
  main.innerHTML = content;
};

