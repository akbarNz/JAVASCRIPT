// AJAX

// EXERCICE 1 QUOTE

// XMLHttprequest

// let httprequest = new XMLHttpRequest();
// let url = "https://thatsthespir.it/api"

// httprequest.open("GET", url, true);


// httprequest.onreadystatechange = function () {
//     if(this.readyState === 4 && this.status === 200) {
//         let myJson = JSON.parse(this.responseText)
//         document.getElementById("quote").innerHTML =
//         myJson.quote;
//     }
// };
// httprequest.send();


// FETCH 

//  fetch("https://thatsthespir.it/api").then(response => response.json()).then(jsondata => document.getElementById("quote").innerHTML = jsondata.quote)



// EXERCICE 2 FILM SEARCH


// XMLHTTPREQUEST



// let search = document.getElementById("searchfilm");

// function entrer() {
//     let request = new XMLHttpRequest();
//     request.open("GET", "http://www.omdbapi.com/?apikey=a49f54f4&i=tt1285016");

//     request.onload = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             let json = JSON.parse(this.responseText)
//             if (json.Title === search.value) {
//                 document.getElementById("title").innerHTML =
//                     json.Title;
//                 document.getElementById("synopsis").innerHTML =
//                     json.Plot;
//                 document.getElementById("image").src = `${json.Poster}`
//             } else {
//                 alert("ce film n'existe pas")

//             }
//         }
//     }
//     request.send();
// }


// FETCH



// let search = document.getElementById("searchfilm");
// function entrer() {
//     fetch("http://www.omdbapi.com/?apikey=a49f54f4&i=tt1285016")
//         .then((reponse) => reponse.json())
//         .then(function (data) {
//             console.log(data)
//         if (data.Title === search.value) {
//             document.getElementById("title").innerHTML =
//                 data.Title;
//             document.getElementById("synopsis").innerHTML =
//                 data.Plot;
//             document.getElementById("image").src = `${data.Poster}`
//         } else {
//             alert("ce film n'existe pas") 
//         }
//         })
        // .catch((error) => console.log(`${error} film not found`))
        // le catch ne fonctionne pas ici car je chercher que pour un id donc peu importe 
        // ce que je tape il me retournera tjrs le meme film mon id n'est pas dynamique
// }

// EXERCICE 3 MUSIC SEARCH doesn't work version

// let search = document.getElementById("searchmusic");
// let result = document.getElementById("result");
// let affiche = document.getElementById("videos");

// function listeArtists(jasondata) {
//     for (i = 0; i < jasondata.length; i++) {
//         console.log(jasondata[i].id)
//         let listItem = document.createElement("li");
//         listItem.innerHTML = jasondata[i].name;
//         listItem.id = jasondata[i].id;
//         result.appendChild(listItem);
//         listItem.addEventListener("click", () => {
//             fetch("https://musicdemons.com/api/v1/artist/12/songs")
//             .then((response) => response.json())
//             .then((donnee) => {
//                 for(z=0; z<donnee.length; z++) {
//                     console.log(donnee[z].pivot.artist_id);
//                     if(parseInt(listItem.id) === donnee[z].pivot.artist_id) {
//                         console.log("j'ai passé la condition")
//                         for (y=0; y<donnee.length; y++) {
//                             let videoItem = document.createElement("video");
//                             videoItem.innerHTML = donnee[y].youtube_id;
//                             affiche.appendChild(videoItem);
//                         }
//                     } 
//                 }
//                 // console.log((donnee[0].pivot), typeof(listItem.id))

                
//             })  
//         })
//     }
    
// }

// function fetchArtists(event) {
//     if (event.currentTarget.value != "") {
//         let innit = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",
//             },
//             body: `name=${event.currentTarget.value}`
//         }
//         fetch("https://musicdemons.com/api/v1/artist/autocomplete", innit)
//             .then((response) => response.json())
//             // .then(trier => trier.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
//             // .sort it's for "sort" an array in an alphabetic order or your own order here we sort an array of objects(a, b)
//             .then(data => listeArtists(data))
//     } else {
//         result.innerHTML = "";
//     }
//     result.innerHTML = "";
// }

// search.addEventListener("keyup", fetchArtists);

// music search the work version


let search = document.getElementById("searchmusic");
let result = document.getElementById("result");

function fetchArtists(event) {
    if (event.currentTarget.value != "") {
        fetch("https://musicdemons.com/api/v1/artist/autocomplete", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `name=${event.currentTarget.value}`
            })
            .then((response) => response.json())
            .then(data => data.map(obj => {
                let listItem = document.createElement("li");
                listItem.innerHTML = obj.name;
                result.appendChild(listItem);
                let getId = obj.id;
                listItem.addEventListener("click", () => {
                    fetch(`https://musicdemons.com/api/v1/artist/${getId}/songs`)
                        .then((responce) => responce.json())
                        .then(data => data.map(obj => {
                            console.log(obj)
                            let getId = obj.youtube_id;
                            let afficheVideos = document.getElementById("videos");
                            afficheVideos.src =  `https://www.youtube.com/embed/${getId}?playlist=${getId}&loop=1`;
                            // le probleme ca m'affiche une videos alors que ca devrait m'afficher plusieurs
                        }))
                })
            }))
    } else {
        result.innerHTML = "";
    }
    result.innerHTML = "";
}
search.addEventListener("keyup", fetchArtists);


