document.addEventListener("DOMContentLoaded", function(event) {
    var discount_item = document.querySelectorAll(".quantity-discount-bar .discount-step");
    var input;
    var cnt = 0;
    const priceShowCtrl = document.querySelector('.f8pr-price');
    let oldPrice,oldMetafieldPrice;
    discount_item.forEach(item => {
        cnt ++;
        item.setAttribute("data-index", cnt);
    });

    const processShowCtrl = (selectedQuantity) => {
        let price = oldPrice;
        let metafieldPrice = oldMetafieldPrice;
        
        if(selectedQuantity === 2) {
            price *= 0.85;
            metafieldPrice *= 0.85;
        } else if (selectedQuantity === 3) {
            price *= 0.8;
            metafieldPrice *= 0.8;
        } else if(selectedQuantity > 3) {
            price *= 0.75;
            metafieldPrice *= 0.75;
        }

        if(selectedQuantity === 1) {
            priceShowCtrl.innerHTML = `${price.toFixed(2)}€<span class='small'>Base price  ${metafieldPrice.toFixed(2)}€ / kg</span>`;
        } else {
            priceShowCtrl.innerHTML = `${price.toFixed(2)}€<span class='original-price'>${oldPrice.toFixed(2)}€</span><span class='small'>Base price  ${metafieldPrice.toFixed(2)}€<span class="original-price meta-field">(${oldMetafieldPrice.toFixed(2)}€)</span> / kg</span>`;
        }
    }
    const getOldPrice = () => {
        const tsPrice = priceShowCtrl.innerText;
        const metafieldValue = priceShowCtrl.querySelector('span').innerText;
        const i = tsPrice.indexOf('€');
        const j = metafieldValue.indexOf('€');
        const k = metafieldValue.indexOf('Base price  ');
        oldPrice = parseFloat(tsPrice.substring(0, i));
        oldMetafieldPrice = parseFloat(metafieldValue.substring(k + 12, j));
    }
    getOldPrice();
    let hTime = setTimeout(function() {
        clearTimeout(hTime);
        input = document.querySelector(".semantic-amount input");

        discount_item[parseInt(input.value) - 1].classList.add("active");

        input.addEventListener("change", function(event) {
            if(this.value <= 0) {
                return;
            }
            discount_item.forEach(item => {
                item.classList.remove("active");
            });

            // if(parseInt(this.value) > discount_item.length) {
            //     discount_item[discount_item.length - 1].classList.add("active");
            //     return;
            // }
            const quantity = parseInt(this.value);
            if(quantity >= 4) {
                discount_item[2].classList.add('active');
            } else if(quantity === 3) {
                discount_item[1].classList.add('active');
            } else if(quantity === 2) {
                discount_item[0].classList.add('active');
            }
            processShowCtrl(quantity);
            // discount_item[parseInt(this.value) - 1].classList.add("active");
        })
        discount_item.forEach(item => {
            item.addEventListener("click", function() {
                console.log(item);
                discount_item.forEach(item => {
                    item.classList.remove("active");
                });
                item.classList.add("active");
                const quantity = parseInt(item.getAttribute("data-quantity"));
                input.value = quantity;
                processShowCtrl(quantity);
            })
        });
        discount_item.forEach(item=>{
            item.classList.remove('active');
        });
        
    }, 1000);
});