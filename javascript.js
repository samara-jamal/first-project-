var arr = [
    'jeans', 
    'T-shirt',
     'croop', 
     'dress',
      'jacket'
    ];
// console.log(arr);
var inputbox = document.getElementById("search");
var outputbox = document.querySelector("#result-box");
inputbox.onkeyup = function(){
    var result=[];
    var  input = inputbox.value;
    if(input.length){
        result = arr.filter((keyword)=>{
           return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        })
        
        console.log(result);
    }
    display(result);
}
function display(result){
    const content = result.map((list)=> {
        return  list ;
    })
     outputbox.innerHTML = content ;
} 

var user = document.getElementById("sticker4");
user.onclick=function(){
    console.log("yes");
}

var shop=document.querySelectorAll("button.btn");


shop.forEach((ele)=>{
    ele.addEventListener("click",function(){
      alert("This item has been bought..!")
         ele.style.background='white';
         ele.style.color='black';
    })
})



