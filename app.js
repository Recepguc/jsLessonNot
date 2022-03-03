//* A callback function is a function that is passed as an argument
//* to another function, to be "called back" at a later time.
//* A function that accepts other functions as arguments is called
//* a higher-order function.

//* A callback function always has a specific action which is bound
//* to a specific circumstance. Therefore, a callback function is
//* only called once a clearly defined operation has been performed.
//? Callbacks make sure that a function is not going to run before
//? a task is completed but will run right after the task has completed.

//! 1- Event handlers are a good example of a type of callback function.
// //!--------------------------------------------------------------------
// const increment= ()=>{
//     const counter=document.querySelectorAll("#counter")
//     counter.textContent =Number(counter.textContent)+1;

// }

// document.querySelector("button").addEventListener("click",()=>{
//     const counter=document.querySelector("#counter")
//     counter.textContent =Number(counter.textContent)+1;

// });
// const sum =(a,b)=>a+b;
// const sub =(a,b)=>a-b;
// const mul =(a,b)=>a*b;
// const div =(a,b)=>a/b;
// const calculate =(callback)=>{
//     const num1=Number(prompt("First number"));
//     const num2=Number(prompt("second Number"));
//     console.log("Result:", callback(num1,num2));
// };
// calculate(sum);


//    ARRAY İTERATİON
//1.Method

const student=["bedirhan","recep","halil ibrahim","enes","onur"];
const print=(name)=>{
    console.log(name);
}

student.forEach(print);

//2.method
student.forEach((name)=>console.log(name));

const payments=[100,300,-200,500,-500];
let sum =0
payments.forEach((pay)=> (sum+=pay ));
console.log(sum);

payments.forEach((p,i)=>{
    p>0 ? console.log(i,`you deposit ${p}`) :console.log(i,`you witdraw ${p}`);
    console.log(i,);
});
const numbers=[2,3,4,5]
const doubled=numbers.map(n=>n*2);
console.log(doubled,numbers);