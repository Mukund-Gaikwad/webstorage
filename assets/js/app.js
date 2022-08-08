let cl = console.log;
const info = document.getElementById('info');
const pdata=document.getElementById('data');
let data = [
        {
          userId: 1,
          id: 1,
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          userId: 1,
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
];

// To convert javascript Object into JSON data >> JSON.stringify()

let jsonData = JSON.stringify(data);
// cl(jsonData);
// console.table(data);

// to store data in localStorage we use >> .setItem()
localStorage.setItem('setData',jsonData)

// to remove the data from local storage by manually we use >> localStorage.clear();
// localStorage.clear()

// to get data from localStorage/sessionStorage we use >> .getItem();
let getData = localStorage.getItem('setData');
console.log(getData);

// to get js data from JSON we use >> JSON.parse();
let getJsData = JSON.parse(getData);
cl(getJsData)

let result = '';
getJsData.forEach((ele, i) => {
    result += `
            <tr>
                <td>${i+1}</td>
                <td>${ele.id}</td>
                <td>${ele.userId}</td>
                <td>${ele.title}</td>
                <td>${ele.body}</td>
            
            </tr>
    
    `
});

info.innerHTML = result;

let person = {
  name : 'Mukund',
  email : 'mukund@gmail.com',
  candrive : false
}

// store data by using sessionStorage

sessionStorage.setItem('saveperson',JSON.stringify(person));

// let getperson = sessionStorage.getItem('saveperson')
let getperson = JSON.parse(sessionStorage.getItem('saveperson'));
cl(getperson)

// const pdata=document.getElementById('data'); declare at top
pdata.innerHTML = getperson.name;




