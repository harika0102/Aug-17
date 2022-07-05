// function hello_world() {
//     console.log("Hello World");
// }
// hello_world();


// let session_information = {
//    'instructor_name' : "Aayush Sinha",
//     'date':"July-04",
//     'is_live':true,
//     'participants': ["Harika","samanyu","sravan"]
// };
// // console.log(session_information["instructor_name"]);

// // let key = "date";
// // console.log(session_information[key]);
// // console.log(session_information.instructor_name);

// // session_information.today_topic = "JAVASCRIPT";
// // console.log(session_information);

// // session_information_hello = function() {
// //     console.log("Hello from session");
// // }
// // session_information.hello();

// let calculator = {
//     'name' : "My calculator",
//     "sum"  : function(a,b) {
//         let s = a + b;
//         return s;
//     },
//     "subtraction"   : function(x,y) {
//         let sub = x - y;
//         return sub;
//     },
//     "multiplication" : function(c,d) {
//         let mul = c * d;
//         return mul;
//     },
//     "division" : function(e,f) {
//         let div = e / f;
//         return div;
//     }
// }
// let sum_result = calculator.sum(10,25);
// console.log(sum_result);
// let sub_result = calculator.subtraction(25,10);
// console.log(sub_result);
// let multi_result = calculator.multiplication(10,20);
// console.log(multi_result);
// let div_result = calculator.division(35,5);
// console.log(div_result);

// console.log("ABCD");
// console.info("ABCD");
// console.log(typeof document);
// document.write("Hey everyone");//This is not a good practice.
// function document_fun() {
//     let p = document.getElementById("some_para");
//     console.log(p);
//     p.innerText = "Hey Everyone";
// }
let count = 0;
function increment() {
    count = count + 1;
    let p = document.getElementById("counter");
    p.innerText = count ;
    

}

function decrement() {
    let p = document.getElementById("counter");
    p.innerText = count;
    count = count - 1;
}