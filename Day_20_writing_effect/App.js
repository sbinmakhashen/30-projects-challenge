// getting the h1 from text container
const h1 = document.querySelector('.messages');
const input = document.getElementById('input');
const texts = ['We love programming', 'We love logic', 'We think like a computer', 'We are smart'];
// each elemnet in the array texts
let count = 0;
// for each letter in each element 
let indx = 0;
// value of input * 300 
let speed = 300 / input.value
// function for auto typing
function autoTyping() {
    // check if count is equal to the length of the texts 
    if(count === texts.length) {
        // if true then reset the count back to zero
        count = 0
    }

    // setting the the whole array to count which will loop thorugh the array 
    // and slice from 0 to the index++ which will loop trhough each letter in each current text   
    // console.log(texts[count].slice(0, indx++))
    const currentText = texts[count]
    const letters = texts[count].slice(0, indx++)
    // append to the auto text to h1 to show on the dom
    h1.innerHTML = letters

    // console.log(letters)
    // check if the currentText and letters length is equal to each other
    if(letters.length === currentText.length) {
        // if so then will increment the count and reset lndx to 0
        indx = 0;
        count ++;  
    }

    
    // decrement the input value 
    input.addEventListener('input', e => {
        if(e.target.value == 0) {
            h1.style.display = 'none'
        }
    
        speed = 300 / e.target.value
    })

    // running the function continually
    setTimeout(autoTyping, speed)
}

// call function 
autoTyping()

