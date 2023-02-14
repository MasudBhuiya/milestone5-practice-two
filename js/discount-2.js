document.getElementById('btn-discount').addEventListener('click', function(){
    const price = document.getElementById('price-field');
    const getPriceString = price.innerText;
    const getPrice = parseFloat(getPriceString);
    const discount = getPrice - 1000 * 0.3;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = discount;
})
