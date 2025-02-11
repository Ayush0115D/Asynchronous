const URL="https://cat-fact.herokuapp.com/facts";

const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");
const getFacts=async()=>{
console.log("gettng data....");
let response=await fetch(URL);
console.log(response);// json format
let data= await response.json();
console.log(data);

factPara.innerText=data[0].text; // ny changing index u can get other facts too
};
btn.addEventListener("click",getFacts);




