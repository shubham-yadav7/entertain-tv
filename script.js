//  let navbar = document.querySelector('.navbar');

// // document.querySelector('#menu-btn').onclick = () =>{
// // 	navbar.classList.toggle('active');
// // 	searchform.classList.remove('active');
// // 	cartItem.classList.remove('active');
// // }

// let searchform = document.querySelector('.search-box');

// document.querySelector('#search-btn').onclick = () =>{
// 	searchform.classList.toggle('active');
	
// 	} 
const images = "https://image.tmdb.org/t/p/w1280"

const api2 = "http://www.omdbapi.com/?i=tt3896198&apikey=e792e51d"

const search = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const allmovies = document.querySelector(".movies-div")
const getmovies = async(api) => {
	const response = await fetch (api)
	const data = await response.json()
	showmovies(data.results)
	console.log(data)
}
const showmovies = (data) => {
	allmovies.innerHTML = "";
	data.forEach(
		(item) => {
			console.log(item)
		const newmovie = document.createElement("div")
		newmovie.classList.add("poster")
		newmovie.innerHTML = `
		<img id="movie-img" src="${images + item.poster_path}" alt="error.jpg">
        <h2>${item.original_title}</h2> 
		<div class="desc">
		<i class="fa-solid fa-calendar-days" id="date"><h5>${item.release_date}</h5></i>
			 
			<i class="fas fa-star fa-sm" id="rating"><h4>${item.vote_average}</h4></i>
		</div>
		<p class="resln">480p | 720p | 1080p </p>
        <button onclick=  class="learn-btn">Learn More</button>
		<button class="fas fa-download fa-sm" id="download"></button>
		`
		;
		allmovies.appendChild(newmovie)
	});
}

// const getmovies2 = async(api) => {
// 	const response2 = await fetch (api)
// 	const data2 = await response2.json()
// 	console.log(data2)
// }

document.querySelector("#search-box").addEventListener(
	"keyup", function(event){
		if (event.target.value != ""){
			getmovies(search + event.target.value)
		}
		else{
			getmovies(api)
		}

	}
)



getmovies(api)
// getmovies2(api2)
