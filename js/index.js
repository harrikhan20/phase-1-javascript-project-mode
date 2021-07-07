const dogResult = document.getElementById('#dog_result')
const dog_pic_butn = document.getElementById('#dog_pic_butn');
const LikeButton = document.getElementById('#like_butn');

dog_pic_butn.addEventListener(click, getRandomDog)


function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if(data.url.includes('.mp4')) {
                getRandomDog()
            } else {

                dogResult.innerHTML = `img src="${data.url}"/>` 
            }
            
        })
}
