

async function getApiData(){
    try{
    let response=await fetch(`https://api.gameofthronesquotes.xyz/v1/random/5`);
  let result= await response.json();
 console.log(result);
  let createCard=document.getElementById('card_1');
 
 if(result.length>0){
    result.forEach((data) => {
        
   
 createCard.innerHTML+=`<div  class="col-lg-6 col-sm-12">
 <div class="card text-center m-3" style="width: 25rem;">
  <div class="card-header"> Character Name : ${data.character.house.name} </div>
<ul class="list-group list-group-flush">
   
    <li class="list-group-item">Slug : ${data.character.house.slug}</li>
    <li class="list-group-item">  ${data.sentence}</li>
   
  </ul>
  </div>
</div>`
});
}
 }

 catch{(err)=>console.log(err)}

 }
 
 getApiData();