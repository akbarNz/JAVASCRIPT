// fetch get post update delete

// get



// function keyCode(event) {
//     var enter = event.keyCode;
//     if (enter == 13) {
//         let name = document.getElementById("studentname").value
//         fetch("http://10.20.0.214:2525/watch")
//             .then((response) => response.json())
//             .then(data => {
//                 data.map(studentItem => {
//                     // console.log(studentItem.studentName)
//                     if (name === studentItem.studentName) {
//                         // console.log("hello")
//                         console.log(studentItem)
//                         let studentWatch = document.getElementById("affichestudent");
//                         let createP = document.createElement("p");
//                         createP.innerHTML = `Nom: ${studentItem.studentName} <br>
//                         Id: ${studentItem.id} <br>
//                         Next Watch: ${studentItem.nextWatch} <br>
//                         Watch Subject: ${studentItem.watchSubject}<br>
//                         `
//                         studentWatch.appendChild(createP);
//                         let pastWatch = document.createElement("ol");
//                         pastWatch.innerHTML = `Past Watch:`
//                         studentWatch.appendChild(pastWatch);

//                         studentItem.pastWatch.map(watch => {
//                             // console.log(watch);
//                             let liItem = document.createElement("li");
//                             liItem.innerHTML = `${watch}`
//                             pastWatch.appendChild(liItem);
//                         })
//                         let pastSubWatch = document.createElement("ol");
//                         pastSubWatch.innerHTML = `Past Subject Watch:`;
//                         studentWatch.appendChild(pastSubWatch);

//                         studentItem.pastWatchSubject.map(subject => {
//                             let subjectItem = document.createElement("li");
//                             subjectItem.innerHTML = `${subject}`
//                             pastSubWatch.appendChild(subjectItem);
//                         })


//                     }
//                 })
//             })
//     }
// }



// post

// function postName(event) {
//     let enter = event.keyCode;
//     if(enter == 13) {
//         let name = document.getElementById("name") ;
//         // console.log(name)
//         fetch("http://10.20.0.214:2525/watch/new", {
//         method: "POST",
//         headers: {
//             "Accept" : "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({studentName : name.value})
//         })   
//     }
// }

// update

// put the id manually


// function nextWatch(event) {
//     let x = event.keyCode;
//     if (x == 13) {
//         let updateWatch = document.getElementById("nextWatch");
//         fetch("http://10.20.0.214:2525/watch?id=414d5532-9f5c-4069-bed3-1dc737d2e333", {
//             method: "PUT",
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 nextWatch: updateWatch.value
//             }),

//         })

//     }
// }


// get the id automatically


function nextWatch(event) {
    let press = event.keyCode;
    if (press == 13) {
        let nom = document.getElementById("studentname").value;
        fetch("http://10.20.0.214:2525/watch")
            .then((response) => response.json())
            .then(data => data.map(studentItem => {
                if (nom == studentItem.studentName) {
                    let getId = studentItem.id;
                    console.log(getId);
                    let updateWatch = document.getElementById("nextWatch");
                    fetch(`http://10.20.0.214:2525/watch?id=${getId}`, {
                        method: "PUT",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            nextWatch: updateWatch.value
                        }),
                    })
                }
            }))
    }

}
// PUT method is not the same like update , put just search if there isn't the element you 
// want to put on the server(database) and put create it
// the code stay the same you have just to put update in place of put


// delete

function deleteName(event) {
    let valid = event.keyCode;
    if (valid == 13) {
        let getInput = document.getElementById("deleteName").value;
        fetch("http://10.20.0.214:2525/watch")
            .then((response) => response.json())
            .then(data => {
                data.map(obj => {
                    if(getInput == obj.studentName) {
                        let getId = obj.id;
                        console.log(getId)
                        fetch(`http://10.20.0.214:2525/watch?id=${getId}`, {
                            method:"DELETE",
                            headers:{
                                "Accept": "application/json",
                                "Content-Type": "application/json" 
                            }
                        }
                        )
                    }
                })
            })
            
    }
}