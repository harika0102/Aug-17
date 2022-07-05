// let p = document.getElementsByClassName("something");
// console.log(p);

// let s = document.getElementsByTagName("span");
// console.log(s);

// document.getElementsByName();

// let s = document.querySelectorAll("[required]");
// console.log(s);
// document.querySelectorAll();

// function check_password() {
//     let ip = document.getElementById("pass");
//     let pass = ip.value;
//     if(pass.length > 5) {
//         alert("you can proceed");
//     } else {
//         alert("use better password");
//     }
// }

// function show_password() {
//     let ip = document.getElementById("pass");
//     ip.type = "text";
// }

// function hide_password() {
//     let ip = document.getElementById("pass");
//     ip.type = "password";
// }

// function password_check() {
//     let i = document.getElementById("password1").value;
//     let j = document.getElementById("password2").value;
//     let p = document.getElementById("change");
//     if(i == j) {
//         p.innerText = "passwords are same"; 
//     } else {
//         p.innerText = "Passwords dont match";
//     }
// }

// function add_new_list_item() {
//     let l = document.createElement("li");
//     l.innerText = "Created using JS function";
//     //  let i = document.createElement("img");
//     //  i.src = "https:/alskdhfadsfhio";
    
//     // let c = document.getElementById("container");
//     // c.appendChild(l);
//     let tr = document.createElement("tr");
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     td1.innerText = "col 1";
//     td2.innerText = "col 2";
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     let t_container = document.getElementById("table_container");
//     t_container.appendChild(tr);

// }




// Task  - have a unordered list, have an input and a button
// when i click on the button, add a new li to my ul.
// the content of that new li should come from what i have typed in the input.

function display_data_from_input() {
    let ip = document.createElement("li");
    ip.innerText = document.getElementById("input_data").value;
    let bd = document.getElementById("content_ul");
    bd.appendChild(ip);    
}



