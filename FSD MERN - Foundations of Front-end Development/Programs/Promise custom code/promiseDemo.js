let obj = new Promise((resolved,rejected)=> {
    resolved("successfully done!")
   // rejected("error generated")
});

obj.then(result=>console.log("then called :"+result)).catch(error=>console.log("catch called: "+error)).finally(()=>console.log("finally block"))

console.log("normal statement1")
console.log("normal statement2")