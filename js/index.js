document.addEventListener('DOMContentLoaded', function() {
const dogResult = document.getElementById('dogResult')
const catResult = document.getElementById('catResult')
const dogPicButton = document.getElementById('dogButton');
const CatPicButton = document.getElementById('catButton');
const refreshButton = document.getElementById('refreshButton');

//document.addEventListener('DOMContentLoaded', function() {
dogPicButton.addEventListener('click', getRandomDog)
CatPicButton.addEventListener('click', getRandomCat)
refreshButton.addEventListener('click', refreshpage)

//})


function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if(data.url.includes('.mp4')) {
                getRandomDog()
            } else {

                dogResult.innerHTML =`<img src=${data.url}>` 
            
            }

            
        })
    }

    function getRandomCat() {
        fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            catResult.innerHTML =`<img src=${data.file}>`;
       
        })
    }

    function refreshpage(){
        location.reload();
    }
})


