// globals fetch

// functions that create shortcuts:
function qS (selector) {
    return document.querySelector(selector)
}

function qSA (selector) {
    return document.querySelectorAll(selector)
}

//! 1. Search for Music:

// function searchMusic (input) {

// }


// //! 1.1 Get Music/Fetch

// fetches data from itunes api and returns it 
function getMusic () {
    return fetch(`https://itunes-api-proxy.glitch.me/search?term=nahko`)
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
}

//! 2 Display results of getMusic :

function updateMusic () {
    // calls the getMusic function to have access to it's data
    getMusic()
    // Here we go...
    .then(function (musicData) {
        console.log(musicData)

        // finds the div id="track-list" 
        const trackDiv = qS('#track-list')
        // & sets it to empty
        trackDiv.innerHTML = ''

        // loop that iterates through musicData.results array
        for (idx = 0; idx < musicData.results.length; idx++) {
        // so, for each instance of results[idx]:

            // creates a div element to hold each track inside the track-list
            const track = document.createElement('div')
            // creates seperate div elements inside the track div for track info and the img
            const trackInfo = document.createElement('div')
            const albumCover = document.createElement('div')
            const playAudio = document.createElement('div')
            
            // adds class declarations to the assigned div's
            track.classList.add('track')
            trackInfo.classList.add('track-details')
            albumCover.classList.add('cover-image')

            playAudio.classList.add('playAudio')
            
            // assigns data from getMusic to the variables:      
            let artistName = musicData.results[idx].artistName
            let album = musicData.results[idx].collectionName
            let songName = musicData.results[idx].trackName    
            // Hint: See weather app example for the Icon at lines 36-51 in JS, then referenced in html on line 16
            let coverImg = musicData.results[idx].artworkUrl100
            // see MDN Docs here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
            let audioUrl = musicData.results[idx].previewUrl
            // convert milliseconds to minutes and seconds: https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
            let milliSec = musicData.results[idx].trackTimeMillis
            let minutes = Math.floor(milliSec / 60000)
            let seconds = ((milliSec % 60000) / 1000).toFixed(0);
            let trackLength = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    
            // Referencing Yiffah's Code for insight
            let trackAudio = new Audio(audioUrl)
            playAudio.addEventListener('click', () => {
                trackAudio.play()
            })
            playAudio.innerHTML = `<audio controls="controls">
            <source src="${audioUrl}" type="audio/ogg" />
            <source src="${audioUrl}" type="audio/mpeg" />
            Your browser does not support the audio element.
            </audio>`


            // inputs data elements into assigned div's
            trackInfo.innerText = artistName + " " + album + " " + songName + " " + trackLength; 
            albumCover.innerHTML = `<img src="${coverImg}">`

            // update the new track
            track.append(albumCover, trackInfo, playAudio)
            // update the track-list with the new track 
            trackDiv.append(track)
        }
    })
}

//! 3. Play user-selected track from searchResult:

// function playTrack () {

// }

document.addEventListener('DOMContentLoaded', function() {
        updateMusic()
})
// document.addEventListener('DOMContentLoaded', function() {
//     qS('').addEventListener('change', function (event) {
//         updateMusic(event.target.value)
//     })
// })

