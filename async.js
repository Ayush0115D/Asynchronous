// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,4000); //timeout
console.log("one");
console.log("two");
setTimeout(()=>{
console.log("hello");
},4000); //timeout
console.log("three");
//
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){ 
    sumCallback(a,b);
}
calculator(1,2,sum); // ()na lgate sum k sath nhi toh pura fucn pass ho jayega
//
function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
    //2s
    setTimeout(()=>{
        console.log("data",dataId);
        resolve("success"); // same aese reject hojata with a error
        if(getNextData){
            getNextData();
        }
    },7000);
});
}
// promise chaining
// console.log("getting data1....");
// getData(1)
// .then((res)=>{
    // console.log("getting data2....");
//     return getData(2);
// })
// .then((res)=>{ 
//     console.log("getting data3....");
//     return getData(3);
// })
// .then((res)=>{
// console.log(res);
// });
//callback hell
// getData(1,()=>{
//     console.log("getting data2...");
//     getData(2,()=>{
//         console.log("getting data3....");
//     getData(3,()=>{
//         console.log("getting data4....");
//     getData(4);
// });
// });
// });

//PROMISES
//  let promise= new Promise((resolve,reject)=>{
    // console.log("i am a promise");
    // resolve("success");
//     reject("some erroe occured");
//  });
const getPromise=()=>{
return new Promise((resolve,reject)=>{
    console.log("i am a promise");
    // resolve("success");
    reject("network error");
});
};
let promise=getPromise();
promise.then((res)=>{
    console.log("promise fulfilled",res); // ab kbhi ye na ayega o/p as error came
});
promise.catch((err)=>{
    console.log("rejected",err);
});
function asyncFunc1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log("data1");
            resolve("success");
        },4000);
    });
}
function asyncFunc2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log("data2");
            resolve("success");
        },4000);
    });
}
// console.log("fetching data1..");
// let p1=asyncFunc1();
// p1.then((res) =>{
//     console.log(res)
// });
// console.log("fetching data2..");
// let p2=asyncFunc2();
// p2.then((res) =>{
//     console.log(res)
// }); // isme dono ek sath result aarha
console.log("fetching data1..");
asyncFunc1().then((res) =>{
console.log("fetching data2.."); // phle data 1 fetch hua then  data2
asyncFunc2().then((res) =>{});
}); 
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}
//async await
async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);  
}
//IIFE
(async function () { // fucn def krne ke zaroort nhi
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);  
})();