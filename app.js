const btnLove = document.querySelector('#btn-love')
const modal = document.querySelector('#myModal');
const confirmBtn = document.querySelector('#confirmBtn');
const userInput = document.querySelector('#userInput');
const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');

document.addEventListener('DOMContentLoaded', function () {
    const userInputValue = localStorage.getItem('userInput');

    if (userInputValue) {
        const userInputElements = document.querySelectorAll('#userInput');
        userInputElements.forEach((element) => {
            element.textContent = userInputValue;
        });
    }
});

btnLove.addEventListener('click', () => {
    modal.classList.remove('hidden');
    userInput.focus();
});

confirmBtn.addEventListener('click', async () => {
    if (userInput.value.trim() !== '') {
        localStorage.setItem('userInput', userInput.value);
        const userInputElements = document.querySelectorAll('#userInput');
        userInputElements.forEach((element) => {
            element.textContent = userInput.value;
        });

        userInput.value = '';
        page1.style.display = 'none';
        page2.style.display = 'block';
    } else {
        modal.classList.add('hidden');
    }
    await new Promise(resolve => setTimeout(resolve, 1000)); // Tunggu 1 detik
});

let clickCount = 0;

const loveButtons = document.querySelectorAll('.love-button');
const page4 = document.querySelector('#page4');

const text1 = "ikan hiu makan tahu,";
const text2 = "selamat pagi kesayangankuuuuuuuuu ><";

let index = 0;

loveButtons.forEach(button => {
    button.addEventListener('click', () => {
        clickCount++;
        console.log(clickCount)
        button.classList.add('hidden');

        if (clickCount === 3) {
            page3.style.display = 'none';
            page4.style.display = 'block';
        }
    });
});

function animateText() {
    if (index < text1.length) {
        document.getElementById('text1').textContent += text1.charAt(index);
    } else if (index < text1.length + text2.length) {
        document.getElementById('text2').textContent += text2.charAt(index - text1.length);
    } else {
        document.getElementById('text3').classList.remove('hidden');
    }
    index++;
}

const interval = setInterval(animateText, 100);
