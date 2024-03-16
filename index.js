const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=hanggang ngayon&type=track', { 
    headers: {
    'Authorization': 'Bearer BQCiMoI24kOSvZfSvFs294lAOY5BeOUkGyiJaodxQ87NHwqVuCU5lVtDpFYrdcCZRiqdwmA70lUzJzhYblbqIw9Ng84H2kb2nPouMliH6qPGEBZm0RJWiBNZCj2Jo8krmvSfpJRDUGMfO1s5giFdteZcr6Bbloe7k7vcNtIWxdCB4QKBGGQhvOP0Y9EnrHUh4YlPcCu4xijau3Tp0B0 '
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id); 
    
})