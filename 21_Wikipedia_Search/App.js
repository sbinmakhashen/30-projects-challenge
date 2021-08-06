// var
const form = document.getElementById('form');
const input = document.getElementById('text');
const btn = document.querySelector('.btn');
const results = document.getElementById('results');
const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=';

// form event listener
form.addEventListener('submit', (event) => {
  // prevent defualt from happening
  event.preventDefault();

  if (input.value === '' || input.value === ' ') {
    return errorMsg('The search is blank!, search for something please!');
  } else {
    return wikiData(input.value);
  }
});

input.focus();

// this async/await function will contain the fetch method and search queries
async function wikiData(val) {
  const res = await fetch(url + val);
  const data = await res.json();
  console.log(data);
  // validate
  if (data.query.search.length === 0) {
    return notFound(`Sorry!! we didnt find any data for '${input.value}'`);
  } else {
    // run this function that will display my data
    return displayData(data);
  }
}

// display my data
function displayData(data) {
  let newHtml = ``;
  // looping through the data
  data.query.search.map((prop) => {
    let link = `https://en.wikipedia.org/?curid=${prop.pageid}`;
    newHtml += `
    <div class='res-container'>
    <a href="${link}" target='_blank'>
    <h2 class='title'>${prop.title} <small>(Click me to learn me)</small></h2>
    </a>
    <p>Description: ${prop.snippet}....</p>
    <p class='time-stamp'><span>Last updated </span>: ${prop.timestamp}</p>
    </div>`;
    console.log(prop);
    results.innerHTML = newHtml;
  });
}

// error message function for empty string
function errorMsg(msg) {
  results.innerHTML = `<h3 class = 'danger'>${msg}</h3>`;
}

// show messgae when the search was not found
function notFound(msg) {
  results.innerHTML = `<h3 class = 'danger'>${msg}</h3>`;
}
