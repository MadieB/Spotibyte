const $songsContainer = document.querySelector("section#songs")
const $list = document.querySelector("section#list ul")
let songs = []
let inList = []

loadSongs()

function loadSongs() {
    fetch("/songs")
        .then( response => response.json() )
        .then( response => {
        console.log(response)
            createSongCards(response) 
        })
        .catch(err => console.error(err))
}

function createSongCards(_songs) {
    songs = _songs
    const songsHTML = _songs.map(song => 
        `<div class="song">
            <h2>Name: ${song.name}</h1> 
            <h1>Artist: ${song.artist}</h1>
            <h1>Album: ${song.album}</h1>
            <h1>Length: ${song.length}<h1>
            <p>Likes: ${song.likes}<p>
            <button onClick="addLke(${song.songid}, event)">Add Like</button>
        </div>`
    ).join('')
    $songsContainer.innerHTML =songsHTML    
}

function createAccount(event) {
    event.preventDefault()
    //create order object
    const $form = document.forms[0]
    const login = {
        user: {
            first: $form.firstName.value,
            last: $form.lastName.value,
            email: $form.email.value,
            password: $form.password.value
        }
    }
    //POST on /login
    const config = {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
            "Content-Type":"application/json"
        }
    }
    fetch("/createAccount",config)
        .then( response => response.json() )
        .then( response => console.log(response) )
        .catch(err => console.error(err))

}

function addLike(id, event) {
    const song = songs.find(song => song.songid == id)

    const $newsong = document.createElement("li")
    $newsong.innerHTML = 
        `${song.name}`
    $list.append($newsongS)
    inList.push(song)
    document.querySelector("span#itemCount").innerHTML = inList.length
}
function addToList(event) {
    event.preventDefault()
    //create order object
    const $form = document.forms[1]
    const music = {
        song: {
            name: $form.name.value,
            artist: $form.artist.value,
            album: $form.album.value,
            length: $form.length.value
        }
    }
    //POST on /login
    const config = {
        method: "POST",
        body: JSON.stringify(music),
        headers: {
            "Content-Type":"application/json"
        }
    }
    console.log(music)
    fetch("/song",config)
        .then( response => response.json() )
        .then( response => console.log(response) )
        .catch(err => console.error(err))

}