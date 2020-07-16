let budget =document.getElementById('budget')
let balancevalue=document.getElementById('balancevalue')

function add_balance(){
    balancevalue.innerText=budget.value-total_value.innerText
}

var apple = 10
var mango  =20
var banana  =5



let appleconplus = document.getElementById('apple-con-plus')
let mangoconplus = document.getElementById('mango-con-plus')
let bananaconplus = document.getElementById('banana-con-plus')

let appleconmin = document.getElementById('apple-con-min')
let mangoconmin = document.getElementById('mango-con-min')
let bananaconmin= document.getElementById('banana-con-min')

let applecon =document.getElementById('apple-con')
let mangocon =document.getElementById('mango-con')
let bananacon =document.getElementById('banana-con')


let total_value =document.getElementById('total_value')

// apple countiti increament and dectrament
appleconplus.onclick=function(){
    if(balancevalue.innerText>0 && balancevalue.innerText>=apple){
    applecon.innerText=parseInt(applecon.innerText)+1
    total_value.innerText=parseInt(total_value.innerText)+1*apple
    balance_add(apple)
    }

}
appleconmin.onclick=function(){
    if(total_value.innerText>0 && applecon.innerText>0){
    applecon.innerText=parseInt(applecon.innerText)-1
    total_value.innerText=parseInt(total_value.innerText)-1*apple
    balance_minus(apple)
    }

}

// mango countiti increament and dectrament


mangoconplus.onclick=function(){
    if(balancevalue.innerText>0 && balancevalue.innerText>=mango){
    mangocon.innerText=parseInt(mangocon.innerText)+1
    total_value.innerText=parseInt(total_value.innerText)+1*mango
    balance_add(mango)
    }

}
mangoconmin.onclick=function(){
    if(total_value.innerText>0 && mangocon.innerText>0){
    mangocon.innerText=parseInt(mangocon.innerText)-1
    total_value.innerText=parseInt(total_value.innerText)-1*mango
    balance_minus(mango)
    }


}


bananaconplus.onclick=function(){
    if(balancevalue.innerText>0 && balancevalue.innerText>=banana){
    bananacon.innerText=parseInt(bananacon.innerText)+1
    total_value.innerText=parseInt(total_value.innerText)+1*banana
    balance_add(banana)
    }
    
}
bananaconmin.onclick=function(){
    if(total_value.innerText>0 && bananacon.innerText>0){
    bananacon.innerText=parseInt(bananacon.innerText)-1
    total_value.innerText=parseInt(total_value.innerText)-1*banana
    balance_minus(banana)
    }


}


function balance_minus(value){
    if(total_value.innerText>=0){
    balancevalue.innerText=parseInt(balancevalue.innerText)+value
    }
}
function balance_add(value){
    if(value<=balancevalue.innerText){
    balancevalue.innerText=parseInt(balancevalue.innerText)-value
    }
}