
document.getElementById('btn-discount').addEventListener('click', function(){
    const price = document.getElementById('price');
    const getPriceString = price.innerText;
    const getPrice = parseFloat(getPriceString);
    const totalPrice = document.getElementById('total-price');
    const coupon = document.getElementById('price-field')
    const getcoupon = coupon.value; 
    coupon.value = '';
    if(getcoupon === 'DISC30'){
    const discount = getPrice - 1000 * 0.3;
    totalPrice.innerText = discount;
    }
    else{
        return (totalPrice.innerText = getPrice);
    }
    
})

