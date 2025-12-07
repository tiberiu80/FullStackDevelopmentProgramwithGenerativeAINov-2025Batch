// display data on console 
// fetch("https://jsonplaceholder.typicode.com/todos").
// then(response=>response.json()).then(result=> {
//     console.log(result)
// }).catch(error=> {
//     console.log(error)
// })


// display data on browser 

fetch("https://jsonplaceholder.typicode.com/todos").
then(response=>response.json()).then(result=> {
    //console.log(result)
    result.forEach(data=> {
        console.log(data)
            let div = document.createElement("div");  // <div></div>
           let divTagContent = document.createTextNode(data.id+")"+data.title) // content for div tag 
         div.appendChild(divTagContent); // <div>dynamic content</div>
        document.getElementsByTagName("body")[0].appendChild(div)
    })
}).catch(error=> {
    //console.log(error.message)
        let div = document.createElement("div");  // <div></div>
        let divTagContent = document.createTextNode(error.message) // content for div tag 
         div.appendChild(divTagContent); // <div>dynamic content</div>
        document.getElementsByTagName("body")[0].appendChild(div)
})
