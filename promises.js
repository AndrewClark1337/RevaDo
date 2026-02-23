const responsePromise = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
const responseBody=responsePromise.then(
    (response)=>{
    console.log(response.status);
    return response.json();
}).then(
    (responseBody)=>{
    console.log("body retrieved");
}).catch(
    (error)=>{
    console.error(error);
})
.finally(()=>{
    console.log("Always runs at the end");
})


async function getPikachuInfo(){
    const response =await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    console.log(response);
    const responseBody=await response.json();
    console.log(responseBody.name);
}
async function callGetPikachuInfo(params) {
    
}
getPikachuInfo()