const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#0c003b";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

//MOVIEDB API SECTION//

const API_KEY = "c7ca505670cee9f71026a8900d9e5f33";
const TRENDING_API_URL =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=c7ca505670cee9f71026a8900d9e5f33";
const API_URL = "https://api.themoviedb.org/3/discover/movie";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

//TRENDING MOVIES SECTION//

async function fetchTrendingMovies() {
  try {
    const response = await fetch(TRENDING_API_URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}

function displayTrendingMovies(movies) {
  const trendingSection = document.getElementById("trending");
  trendingSection.innerHTML = "";

  movies.forEach((movie) => {
    const { poster_path, title } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <h3>${title}</h3>
      `;
    trendingSection.appendChild(movieElement);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const trendingMovies = await fetchTrendingMovies();
    displayTrendingMovies(trendingMovies);
  } catch (error) {
    console.error("Error loading trending movies:", error);
  }
});
//END OF TRENDING MOVIES SECTION//

//ACTION MOVIES SECTION//

async function fetchActionMovies() {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&with_genres=28`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching action movies:", error);
    return [];
  }
}

function displayActionMovies(actionMovies) {
  const actionSection = document.getElementById("action");
  const actionItem = actionSection.querySelector(".movies-list");
  actionSection.querySelector(".section-title").textContent = "Action";
  actionItem.innerHTML = "";

  actionMovies.forEach((movie) => {
    const { poster_path, title } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <h3>${title}</h3>
      `;
    actionItem.appendChild(movieElement);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const actionMovies = await fetchActionMovies();
    displayActionMovies(actionMovies);
  } catch (error) {
    console.error("Error loading action movies:", error);
  }
});
//END OF ACTION MOVIES SECTION//

//FAMILY MOVIES SECTIONS//

async function fetchFamilyMovies() {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&with_genres=10751`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching family movies:", error);
    return [];
  }
}

function displayFamilyMovies(familyMovies) {
  const familySection = document.getElementById("family");
  const familyItem = familySection.querySelector(".movies-list");
  familySection.querySelector(".section-title").textContent = "Family";
  familyItem.innerHTML = "";

  familyMovies.forEach((movie) => {
    const { poster_path, title } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <h3>${title}</h3>
      `;
    familyItem.appendChild(movieElement);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const familyMovies = await fetchFamilyMovies();
    displayFamilyMovies(familyMovies);
  } catch (error) {
    console.error("Error loading family movies:", error);
  }
});
//END OF FAMILY MOVIES SECTION//

//HORROR MOVIES SECTION//

async function fetchHorrorMovies() {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&with_genres=27`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching horror movies:", error);
    return [];
  }
}

function displayHorrorMovies(horrorMovies) {
  const horrorSection = document.getElementById("horror");
  const horrorItem = horrorSection.querySelector(".movies-list");
  horrorSection.querySelector(".section-title").textContent = "Horror";
  horrorItem.innerHTML = "";

  horrorMovies.forEach((movie) => {
    const { poster_path, title } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <h3>${title}</h3>
      `;
    horrorItem.appendChild(movieElement);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const horrorMovies = await fetchHorrorMovies();
    displayHorrorMovies(horrorMovies);
  } catch (error) {
    console.error("Error loading horror movies:", error);
  }
});
//END OF HORROR MOVIES SECTION//

//COMEDY MOVIES SECTION//

async function fetchComedyMovies() {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&with_genres=35`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching comedy movies:", error);
    return [];
  }
}

function displayComedyMovies(comedyMovies) {
  const comedySection = document.getElementById("comedy");
  const comedyItem = comedySection.querySelector(".movies-list");
  comedySection.querySelector(".section-title").textContent = "Comedy";
  comedyItem.innerHTML = "";

  comedyMovies.forEach((movie) => {
    const { poster_path, title } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <h3>${title}</h3>
      `;
    comedyItem.appendChild(movieElement);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const comedyMovies = await fetchComedyMovies();
    displayComedyMovies(comedyMovies);
  } catch (error) {
    console.error("Error loading comedy movies:", error);
  }
});
//END OF COMEDY MOVIES SECTION//

//DRAMA MOVIES SECTION//

async function fetchDramaMovies() {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&with_genres=18`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching drama movies:", error);
    return [];
  }
}

function displayDramaMovies(dramaMovies) {
  const dramaSection = document.getElementById("drama");
  const dramaItem = dramaSection.querySelector(".movies-list");
  dramaSection.querySelector(".section-title").textContent = "Drama";
  dramaItem.innerHTML = "";

  dramaMovies.forEach((movie) => {
    const { poster_path, title } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <h3>${title}</h3>
      `;
    dramaItem.appendChild(movieElement);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const dramaMovies = await fetchDramaMovies();
    displayDramaMovies(dramaMovies);
  } catch (error) {
    console.error("Error loading drama movies:", error);
  }
});
//END OF DRAMA MOVIES SECTION//
