
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


html = document.querySelector('html')


// ***Event Listeners***

leftBtn.addEventListener('click', function() {browseLeft()})
rightBtn.addEventListener('click', function() {browseRight()})


// ***Initialization***
// Declare global data storage object
let movies

let browseIndex

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
    //If first click, or at end of array, set movie to be displayed to 0
    if(browseIndex === undefined || browseIndex <= 0) browseIndex = 21 
    else browseIndex -= 1
    updateDisplay()   
}

function browseRight() {
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

    // year.innerText = `Year: ${movies[browseIndex].release_date}`
    // director.innerText = `Director: ${movies[browseIndex].director}`
    // producer.innerText = `Producer: ${movies[browseIndex].producer}`
    // rtScore.innerText = `RT Score: ${movies[browseIndex].rt_score}`
    // runtime.innerText = `Runtime: ${movies[browseIndex].running_time}`
    
    year.innerText = movies[browseIndex].release_date
    director.innerText = movies[browseIndex].director
    producer.innerText = movies[browseIndex].producer
    rtScore.innerText = movies[browseIndex].rt_score
    runtime.innerText = movies[browseIndex].running_time
}


