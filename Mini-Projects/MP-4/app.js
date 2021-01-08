const searchQueryURL = 'https://api.github.com/repos/equeferrer/Main-Course';

// window.addEventListener('DOMContentLoaded', function(e) {
//   return fetch(searchQueryURL)
//   .then(result => result.json())
//   .then(response => console.log(response))
//   .catch(err => console.log(err))
// });

window.addEventListener('DOMContentLoaded', function() {
    return fetch(searchQueryURL)
    .then(result => result.json())
    .then(response => console.log(response, response.full_name, response.owner, response.language, response.updated_at, response.owner.avatar_url))
    .catch(err => console.log(err))
});



const endpoint = 'https://api.github.com/repos/equeferrer/Main-Course';

async function getRepo() {
	console.log("DOM Content Loaded");
	try {
		const response = await fetch(endpoint)
		if (!response.ok) {
			throw Error(response.statusText)
		}
		const json = await response.json();
		displayRepo(json.full_name, json.owner, json.language, json.updated_at, json.owner.avatar_url)
	} catch (err) {
		console.log(err)
		alert('Failed to fetch new quote');
	}
}
  
function displayRepo(name, avatar, language, date, avatar, ) {
	// let quoteText = document.querySelector('#quote-text');
	// let quoteAuthor = document.querySelector('#quote-author');
	console.log(name, avatar, language, date, avatar)
	// quoteAuthor.textContent = author;
}

getRepo();
// // Close button
// document.querySelector(".close-btn").addEventListener('click', function(){
//     document.querySelector(".alert").classList.add("hidden");
// });
