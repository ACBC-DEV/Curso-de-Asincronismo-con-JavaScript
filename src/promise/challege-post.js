import fetch  from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi,data){
    const response = fetch(urlApi,{
        method:'POST',
        mode:'cors',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    return response;
}
const data={
    "title": "YoFui",
    "price": 1000,
    "description": "YO FUI.COM",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products/`,data)
    .then(resp=>resp.json())
    .then(data=>console.log(data))

