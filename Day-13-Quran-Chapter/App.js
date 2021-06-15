// vars
const chapter = document.getElementById('chapter');
const btn = document.getElementById('btn');
// getting random number from 0 to 114 becuase there are 114 chapters in the holy book of Quran
const randomNum = Math.floor(Math.random() * 114);
// chapter url from quran api
const url = `https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=${randomNum}`;
// console.log(url);
btn.addEventListener('click', () => {});
randomChapter();
// Async/await function
async function randomChapter() {
  const res = await fetch(url);
  const data = await res.json();
  data.verses.forEach((el) => {
    chapter.innerHTML = el.text_imlaei;
  });
}
