let my_info = {
    first_name : "Harika",
    last_name : "Akena",
    email_id : "akena.harika@gmail.com"
};
let dt = Object.keys(my_info);
console.log(dt);

for(let i=0;i<dt.length;i=i+1) {
    let ip = Object.values(my_info);
    console.log(ip[i]);
}