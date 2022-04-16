

// ***Grab HTML Elements***
// Buttons:
leftBtn = document.querySelector('#leftBtn')
rightBtn = document.querySelector('#rightBtn')

// Output Fields:
titleJP = document.querySelector('#titleJP')
titleRomanized = document.querySelector('#titleRomanized')
title = document.querySelector('#title')
poster = document.querySelector('#poster')

year = document.querySelector('#year')
director = document.querySelector('#director')
producer = document.querySelector('#producer')
rtScore = document.querySelector('#rtScore')
runtime = document.querySelector('#runtime')

description = document.querySelector('#description')


// ***Event Listeners***
leftBtn.addEventListener('click', function() {browseLeft()})
rightBtn.addEventListener('click', function() {browseRight()})


// ***Initialization***
// Declare global data storage object
let movies
// Declare index binding
let browseIndex
const music = new Audio('Always_With_Me-Spirited_Away-Piano.mp3')

// Grab data from API
fetch(`https://ghibliapi.herokuapp.com/films`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        movies = data

    })
    .catch(err => {
        console.log(`error ${err}`)
    })

function browseLeft() {
    music.play()
    document.querySelector('.titleBox').classList.remove('hidden')
    document.querySelector('.detailsTable').classList.remove('hidden')
    //If first click, or at end of array, set movie to be displayed to last in movies array
    if(browseIndex === undefined || browseIndex <= 0) browseIndex = movies.length - 1 
    else browseIndex -= 1
    updateDisplay()   
}

function browseRight() {
    music.play()
    document.querySelector('.titleBox').classList.remove('hidden')
    document.querySelector('.detailsTable').classList.remove('hidden')
    //If first click, or at end of array, set movie to be displayed to 0
    if(browseIndex === undefined || browseIndex >= movies.length - 1) browseIndex = 0 
    else browseIndex += 1
    updateDisplay()
}

function updateDisplay() {
    titleJP.innerText = movies[browseIndex].original_title
    titleRomanized.innerText = movies[browseIndex].original_title_romanised
    title.innerText = movies[browseIndex].title
    poster.src = movies[browseIndex].image
    
    year.innerText = movies[browseIndex].release_date
    director.innerText = movies[browseIndex].director

    if(browseIndex === 20) producer.innerText = 'Toshio Suzuki'
    else producer.innerText = movies[browseIndex].producer

    rtScore.innerText = movies[browseIndex].rt_score
    runtime.innerText = `${movies[browseIndex].running_time} minutes`

    description.innerText = movies[browseIndex].description
}


