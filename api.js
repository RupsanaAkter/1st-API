function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json.title))
}
function userData(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>displayUser(data))
}
function postData(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data=>console.log(data))
}


function displayUser(data){
  const ul=document.getElementById('users');

  for(const user of data){
//console.log(user.name);
const li=document.createElement('li');
//li.innerText=user.name;
li.innerText=`name:${user.name} Email:${user.email}`
ul.appendChild(li);
  }
}