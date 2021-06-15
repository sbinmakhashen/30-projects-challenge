// vars
const chapter = document.getElementById('chapter');
const btn = document.getElementById('btn');
// getting random number from 0 to 114 becuase there are 114 chapters in the holy book of Quran

// chapter url from quran api
// Async/await function
// const cha = async () => {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   const res = await fetch(url, config);
//   const data = await res.json();
//   return (chapter.innerHTML = data.verses.map(
//     (v) => ` ${v.verse_key}  ${v.text_imlaei}`
//   ));
// };
// cha();
// console.log(cha());

btn.addEventListener('click', async () => {
  const randomNum = Math.floor(Math.random() * 114) + 1;
  const url = `https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=${randomNum}`;
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch(url, config);
  const data = await res.json();
  // data.verses.map((v) => console.log(url));
  return (chapter.innerHTML = data.verses.map(
    (v) => ` ${v.text_imlaei}
    <span class='span'>${v.verse_key}</span>`
  ));
});
