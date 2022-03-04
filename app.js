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

// const student=["bedirhan","recep","halil ibrahim","enes","onur"];
// const print=(name)=>{
//     console.log(name);
// }

// student.forEach(print);

// //2.method
// student.forEach((name)=>console.log(name));

// const payments=[100,300,-200,500,-500];
// let sum =0
// payments.forEach((pay)=> (sum+=pay ));
// console.log(sum);

// payments.forEach((p,i)=>{
//     p>0 ? console.log(i,`you deposit ${p}`) :console.log(i,`you witdraw ${p}`);
//     console.log(i,);
// });
// const numbers=[2,3,4,5]
// const doubled=numbers.map(n=>n*2);
// console.log(doubled,numbers);
// *********** MAP() *******************
// let grades = [30,50,77,38,44,80]
// grades = grades.map((grade) =>(grade > 50 ? grade*1.1 :grade*1.2).toFixed(2));
// console.log(grades);



// grades = grades.map((grade) =>{
// const newGrade=(grade > 50 ? grade*1.1 :grade*1.2).toFixed(2);
// return `$(index+1). Student Grade : ${newGrade}`;
// console.log(newGrade);
// });

// const words=["mum","kek","gel"];
// const checkPalindrome = words.map((word) =>[...word].reverse().join("")=== word)
// console.log(checkPalindrome);  


//**********FİLTER*********** */


// const words=["mum","kek","gel"];
// const checkPalindrome = words.filter((word) =>[...word].reverse().join("")=== word)
// console.log(checkPalindrome);  



// const words=["mum","kek","gel"];
// const checkPalindrome = words.filter((word) =>[...word].reverse().join("")=== word).map((word)=> word.toUpperCase());
// console.log(checkPalindrome);  


// *-----------------------------------------------------
// *                      REDUCE
// *-----------------------------------------------------

//* calculate the sum of all elements of array
//* and print result into console
// //*-------------------------------------------------------
// const salaries = [100, 150, 32, 43, 250000];
// const avgsalaries =salaries.reduce((acc,salary) => acc+salary,0)/salaries.lengt;
// console.log(avgsalaries);

// const greaterthan2000=salaries.filter((s)=>s>20000).reduce((acc,s)=>acc+s,0);
// console.log(greaterthan2000);
let personels = [
    {
      id: 1,
      name: "Ali",
      surname: "Yılmaz",
      job: "developer",
      age: 30,
      salary: 5000,
    },
    {
      id: 2,
      name: "Ayşe",
      surname: "Yılmaz",
      job: "tester",
      age: 35,
      salary: 3000,
    },
    {
      id: 3,
      name: "Mehmet",
      surname: "Öztürk",
      job: "team lead",
      age: 40,
      salary: 7000,
    },
    {
      id: 4,
      name: "Fatma",
      surname: "Ayaz",
      job: "developer",
      age: 26,
      salary: 4500,
    },
  
    {
      id: 5,
      name: "Can",
      surname: "Deniz",
      job: "tester",
      age: 24,
      salary: 3500,
    },
  ];

  personels.forEach((p) => console.log(p.job));

  
  const ages =personels.map((p)=>p.age+1);
  console.log(ages);