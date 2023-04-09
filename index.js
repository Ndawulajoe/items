
const buyingBtns=document.querySelectorAll('.buy-btn');
const priceOfTheItem=document.querySelector('.price')
for(let buyingBtn of buyingBtns){
    buyingBtn.addEventListener('click',(e)=>{
        console.log(e)
    })
}
