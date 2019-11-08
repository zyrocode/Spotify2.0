loadAlbum = (album) => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + album, {
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9f3fc73abemsh2482bf2a9ace40bp19cd74jsn7a75d8a0bae1"
        },
        method: "GET"
      }).then(function(res){
          return res.json()
      }).then(function(tracks){
          console.log(tracks)
          var albumsDiv = document.querySelector("#album")
          albumsDiv.innerHTML = "";
          tracks.data.map(track => {
          albumsDiv.innerHTML += `
               <div id="albumWrapper">
                <h1 class="text-grey">Album</h1>
                <img class="album-img" src="${track.album.cover}" alt="Album Cover">
                <span class="album-title">${track.album.title}</span>
                <p class="another-block text-grey">${track.artist.name}</p>
                <button class="button-dark" type="button" name="button" onclick="playAlbum()">PLAY</button>
                <p class="another-block text-grey">${track.album.year} • ${track.album.count} SONGS</p>
                <div class="artist-buttons">
                  <i class="material-icons">favorite_border</i>
                  <i class="material-icons">more_horiz</i>
                </div>
              </div>
            `

            let songList = document.querySelector("#songs")
            songList.innerHTML = "";
             tracks.data.forEach(tracklist => {
                 songList.innerHTML +=  `
                 <li id="songList" class="list-group-item clearfix"><i class="material-icons">
                music_note
                </i><a class="text-white" href="#">${track.artist.title}</a> <span class="ml-5">${track.artist.duration}</span> </li>
                `
             })

     })

       /*  let songList = document.querySelector("#songs")
        songList.innerHTML = "";
         tracks.data.forEach(tracklist => {
             songList.innerHTML +=  `
             <li id="songList" class="list-group-item clearfix"><i class="material-icons">
            music_note
            </i><a class="text-white" href="#">${album.title}</a> <span class="ml-5">${album.duration}</span> </li>
            `
         }) */
    });
}

window.onload = function() {
    loadAlbum("queen")
}

console.log("Hello World")
