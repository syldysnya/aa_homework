document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  const favPlaceFormEl = document.getElementById('fav-place');
  // debugger
  favPlaceFormEl.addEventListener('submit', e => {
    e.preventDefault();

    const favPlaceInputEl = document.querySelector(".favorite-input");
    const favPlaceName = favPlaceInputEl.value;
    // debugger
    favPlaceInputEl.value = "";
    const ul = document.getElementById("sf-places");
    const li = document.createElement("li");
    li.textContent = favPlaceName;
    ul.append(li);
  })
  // --- your code here!

  // adding new photos

  // --- your code here!
  const togglePicFormEl = document.querySelector(".photo-form-container hidden");
  const pic = e => {
    e.preventDefault();

    const picInputEl = document.querySelector(".photo-url-input");
    const picUrl = picInputEl.value;
    debugger

  }
});

// const showPhotoForm = (e) => { 
//   const photoFormDiv = document.querySelector(".photo-form-container");
//   if (photoFormDiv.className === "photo-form-container") { 
//     photoFormDiv.className = "photo-form-container hidden"; 
//   } else { 
//     photoFormDiv.className = "photo-form-container"; 
//   } 
// }; 
// const photoFormShowButton = document.querySelector(".photo-show-button"); 
// photoFormShowButton.addEventListener("click", showPhotoForm); 
// const handlePhotoSubmit = (e) => { e.preventDefault(); 
// const photoUrlInput = document.querySelector(".photo-url-input"); 
// const photoUrl = photoUrlInput.value; photoUrlInput.value = ""; 
// const newImg = document.createElement("img"); 
// newImg.src = photoUrl; 
// const newPhotoLi = document.createElement("li"); 
// newPhotoLi.appendChild(newImg); 
// const dogPhotosList = document.querySelector(".dog-photos"); 
// dogPhotosList.appendChild(newPhotoLi); 
// }; 
// const photoSubmitButton = document.querySelector(".photo-url-submit"); 
// photoSubmitButton.addEventListener("click", handlePhotoSubmit);});
