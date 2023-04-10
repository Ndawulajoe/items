const removeBtns=document.querySelectorAll('.remove')
const payDisplay=document.querySelector('.amount-to-display')
const buyingBtns=document.querySelectorAll('.buy-btn');
const priceOfTheItem=document.querySelector('.price')
let sum=0
function adds(num){
    sum += num
    return sum;
}

function subtracts(num){
     if(sum > num){
        sum -= num
    }
    return sum;
}

for(let buyingBtn of buyingBtns){
    buyingBtn.addEventListener('click',(e)=>{
//  console.log(e.target.value)
        const ans=e.target.value
        const res = parseInt(ans)
        payDisplay.innerHTML=adds(res)
    })
}
for(let removeBtn of removeBtns){
    removeBtn.addEventListener('click',(e)=>{
        let results=parseInt(e.target.value)
        payDisplay.innerHTML=subtracts(results)
    })
}