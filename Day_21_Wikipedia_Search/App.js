// vars
const form = document.getElementById('form');
const input = document.getElementById('text');
const btn = document.querySelector('.btn');
const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=';
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // validate
  if (input.value === '') {
    console.log('enter something');
  } else {
    dataSearch(input.value);
  }
});

async function dataSearch(val) {
  const res = await fetch(url + val);
  const data = await res.json();
  // validation
  if (data.query.search.length === 0) {
    return console.log('enter something');
  } else {
    resultDisplay(data);
  }
}

// displaying the results
function resultDisplay(data) {
  data.query.search.map((result) => {
    console.log(result);
  });
}
