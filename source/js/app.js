
const urlFieldEl = document.querySelector("#url");

const urlTriggerEl = document.querySelector(".url__trigger");
const urlFinalEl = document.querySelector("#final-url");

urlTriggerEl.addEventListener("click",function(e){
 e.preventDefault();
  // let url = urlFieldEl.value;
  // console.log(url);


  fetch("/uri/shorten",{
   method:'post',
   headers: {
     'Content-Type': 'application/json;charset=utf-8'
   },
   body: JSON.stringify({longUrl: urlFieldEl.value})
  }).then(response=>{
  return  response.json();
  }).then(data=>{
 
   console.log(data.shortUrl);
   urlFinalEl.value = data.shortUrl;
   
  })



})

