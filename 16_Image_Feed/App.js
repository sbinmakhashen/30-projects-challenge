const imgBox = document.querySelector('.images-box');
const url = 'https://source.unsplash.com/random';
const btn = document.querySelector('.btn')
// 10 rows times 3 images in each row. which is 30 images in total
const rows = 10 * 3
// loop through images 
function images() {
for(let i = 0; i < rows; i++) {
    // creating image
    const img = document.createElement('img');
    img.src =  `${url}/${randomImg()}}`
    img.className = 'random-img';
    imgBox.appendChild(img)
    console.log(img)
    }
}

images()

btn.addEventListener('click', () => location.reload())

function randomImg() {
    const randomNum = Math.floor(Math.random() * 10) + 500;
    return `${randomNum}x${randomNum}`
}
