let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll('.card');

for(const card of cards){
    card.addEventListener('click', function(){
        const title = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = titleCount+'. '+title;
        const indiItem = document.getElementById('indi-item');
        indiItem.innerText = titleCount;
        const indiItemList = document.getElementById('indi-item-list');
        indiItemList.innerText = titleCount+' Items';

        titleContainer.appendChild(p);
        titleCount++;
        totalPrice+=price;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    })
}

const btn =document.getElementById('apply-btn');
btn.addEventListener('click', function(){
    const couponElement = document.getElementById('input-field').value;
    const couponCode = couponElement.split(' ').join('').toUpperCase();
    if(totalPrice >= 200){
        if(couponCode === 'SELL200'){
            const discountElelemnt = document.getElementById('discountPrice');
            const discountAmount = totalPrice * 0.2;
            discountElelemnt.innerText = discountAmount.toFixed(2);
            const restTotal = document.getElementById('total');
            restTotal.innerText = totalPrice - discountAmount.toFixed(2);
            document.getElementById('input-field').value = '';
        }else{
            alert('Inavlid Coupon Code!');
            document.getElementById('input-field').value = '';
        }
    }else{
        alert('Minimum 200 $ required to avail the coupon!');
        document.getElementById('input-field').value = '';
    }
})