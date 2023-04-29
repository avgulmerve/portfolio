// HOME PAGE RESPONSIVE NAVBAR

const nav = document.querySelector(".nav-primary");
const navToggle = document.querySelector(".mobile-nav");

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');
    if(visibility === "false"){
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true)
    } 
    else 
    {nav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)}
} )

document.getElementById("about-button").addEventListener('click', function(){
    document.getElementById('about').scrollIntroView({behavior: 'smooth'});
})

document.getElementById("my-work-button").addEventListener('click', function(){
    document.getElementById('my-work').scrollIntroView({behavior: 'smooth'});
})

document.getElementById("contacts-button").addEventListener('click', function(){
    document.getElementById('contacts').scrollIntroView({behavior: 'smooth'});
})


//GET AND POST DATA

/*const playList = ( async () => {const playlist_id = '5u0j9gJrqH2PpJQMTaVswz';

const client_id = 
const client_secret = 

const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
	method: 'POST',
	headers: {	
        'Content-Type': 'application/x-www-form-urlencoded',
		'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)},
	body: 'grant_type=client_credentials'
});

    const tokenData = await tokenResponse.json();
	const accessToken = tokenData.access_token;

    const playListResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + accessToken}
    });

        const playlist = await playListResponse.json();
        console.log(playlist.id);
        let track=playlist.id;

    const playlistTracks = await fetch(`https://api.spotify.com/v1/playlists/3BRiEwNPQNgiDUzsl8OyH8`, {
        method : 'GET',
        headers: {'Authorization': 'Bearer ' + accessToken}
    })
        const tracksList = await playlistTracks.json();
        console.log(tracksList.id);
        let tarkanTrack = tracksList.id;
        
        const playerDiv = document.getElementById('player');
        playerDiv.innerHTML =  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${track}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
        const podcastRefresh = document.getElementById('listening');
        
        let buttonPressed = false;
        podcastRefresh.addEventListener('click', () => {
            buttonPressed = !(buttonPressed)
            if( buttonPressed=== true){
                playerDiv.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${tarkanTrack}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
            } else {
                playerDiv.innerHTML =  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${track}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            }

        });
})();*/
                                
//PLAYLIST PART                                
                                
const playerDiv = document.getElementById('player');
playerDiv.innerHTML =  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${track}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
const podcastRefresh = document.getElementById('listening');
let buttonPressed = false;
podcastRefresh.addEventListener('click', () => {
            buttonPressed = !(buttonPressed)
            if( buttonPressed=== true){
                playerDiv.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3BRiEwNPQNgiDUzsl8OyH8?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
            } else {
                playerDiv.innerHTML =  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5u0j9gJrqH2PpJQMTaVswz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            }
        });

// ADMİN PART 
                                
const admin = document.querySelector("#admin");
const adminInput = document.querySelector(".admin-input")
const adminRefresh = document.querySelector('.admin-button')
const spotifyButton = document.querySelector('.spotify-button')
const userName = document.querySelector('#user')
const password = document.querySelector('#pass')

admin.addEventListener('click', () => {
    admin.innerHTML = "Admin";
    const adminTool = admin.getAttribute('admin-control')
    if(adminTool === "false"){
        admin.setAttribute('admin-control', true)
        adminInput.setAttribute('data-control', true)
    } 
    else {
        admin.innerHTML = "User"
        admin.setAttribute('admin-control', false)
        adminInput.setAttribute('data-control', false)
        spotifyButton.setAttribute('spotify-control',false)}    
        
})

adminRefresh.addEventListener('click', () => {
    const nameControl= userName.value
    const passControl = password.value
    console.log(nameControl)
    console.log(passControl)
        if(nameControl === 'merve' & passControl === 'guel'){
            spotifyButton.setAttribute('spotify-control', true)
        }else {
            spotifyButton.setAttribute('spotify-control', false)
        }

            })
            
