/* fetch('https://meowfacts.herokuapp.com/') // this is a promise
    .then((response) => {return response.json()})
    //.then(function(response) {return response.json()} ) // another approach (anon function)
    .then((meowfact) => console.log(meowfact)); // make sure you are keeping promises

function writeMeowFactsToPage(json) {
    console.log(json);
    for (const meow of json.data) {
        const p = document.createElement('p');
        p.innerText = meow; // use this or .textContent rather than .innerHTML because it users can input dangerous code, called cross-site scripting
        document.body.appendChild(p);
    }
}

fetch('https://meowfacts.herokuapp.com/?count=3') 
    .then(response => response.json()) // identical to line 2
    .then((meowfact) => console.log(meowfact)); 

// how to add a header to your API call:
// request types: 'GET' and 'POST'
const myQuery = 'Tigers';
fetch(`https://api.pexels.com/v1/search?query=${myQuery}&per_page=10`, {
    //type: 'GET', // unnecessary but useful in other cases
    headers: {'Authorization': 'insertAPIkeyhere'}
}).then(response => response.json())
  //.then(json => console.log(json)) // getting a feel for it
  .then(json => {
    for (const photo of json.photos) {
        const img = document.createElement('img');
        img.src = photo.src.small;
        img.alt = photo.alt;
        document.body.appendChild(img);
    }
  })

// CORS policy is janked up

*/

// all of the above is from in-class 9/26 APIs and JSON bruh
