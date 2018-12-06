let searchbar = document.getElementById("searchbar");
searchbar.addEventListener('keyup', function(event) {
    console.log(event.target.value);
    let myInit = {
        url: "https://musicdemons.com/api/v1/person/autocomplete",
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `name=${event.target.value}`,
    }
    fetch("https://musicdemons.com/api/v1/person/autocomplete", myInit)
        .then(response => response.json())
        .then(jsonData => createResultList(jsonData));
})


