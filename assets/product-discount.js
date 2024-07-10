document.addEventListener("DOMContentLoaded", function(event) {
    var discount_item = document.querySelectorAll(".quantity-discount-bar .discount-step");
    const currencySymbol = document.getElementById('currency-symbol').value;
    var input;
    var cnt = 0;
    const priceShowCtrl = document.querySelector('.f8pr-price');
    let oldPrice,oldMetafieldPrice;
    let oldPricePerOne,oldMetafieldPricePerOne;

    const weight_per_pack = document.querySelector('.packungsgewicht');
    const product_title = document.getElementById('product--title').value;
    const originalValues = {};
    const unitArr = {};

    discount_item.forEach(item => {
        cnt ++;
        item.setAttribute("data-index", cnt);
    });

    const getOriginalValues = () => {
        const len = weight_per_pack.innerHTML.length;
        let iNumber = -1;
        for(let i = 0;i < len;i ++) {
            const ch = weight_per_pack.innerHTML.charAt(i);
            const nCh = parseInt(ch);
            if(!isNaN(nCh)) {
                if(iNumber === -1) {
                    iNumber = i;
                    originalValues['front_str'] = weight_per_pack.innerHTML.substring(0, i);
                }
            }
            else if(ch !== '.') {
                if(iNumber != -1) {
                    originalValues['weight'] = parseFloat(weight_per_pack.innerHTML.substring(iNumber, i - iNumber));
                    break;
                }
            }
        }
        if(!originalValues['weight']) {
            originalValues['weight'] = parseFloat(weight_per_pack.innerHTML.substring(iNumber));
        }
    }
    const initUnitArr = () => {
        unitArr['Baldrian-Hopfen-Kapseln'] = 'St';
        unitArr['Nobilin Abnehm-Kombi'] = 'St';
        unitArr['Nobilin Biotin 5 mg N'] = 'St';
        unitArr['Nobilin Fett-Blocker'] = 'St';
        unitArr['Nobilin Gelenk Fit® Trinkampullen'] = 'ml';
        unitArr['Vitamin C Shot 1.000 mg'] = 'ml';
    }
    initUnitArr();
    getOriginalValues();
    const changePrice = (quantity) => {
        oldPrice = oldPricePerOne * quantity;
        oldMetafieldPrice = oldMetafieldPricePerOne;
    }
    const processShowCtrl = (selectedQuantity) => {
        let price = oldPrice;
        let metafieldPrice = oldMetafieldPrice;
        
        if(selectedQuantity === 2) {
            price *= 0.85;
            metafieldPrice = oldMetafieldPrice * 0.85;
        } else if (selectedQuantity === 3) {
            price *= 0.8;
            metafieldPrice = oldMetafieldPrice  * 0.8;
        } else if(selectedQuantity > 3) {
            price *= 0.75;
            metafieldPrice = oldMetafieldPrice * 0.75;
        }

        const tsMetafieldPrice = priceShowCtrl.querySelector('span.small').innerText;
        const i = tsMetafieldPrice.lastIndexOf(currencySymbol);
        const j = tsMetafieldPrice.indexOf(')',i);
        const frontStr = tsMetafieldPrice.substring(0, findPricePos(tsMetafieldPrice));
        let backStr;
        if(j !== -1) {
            backStr = tsMetafieldPrice.substring(j + 1);
        } else {
            backStr = tsMetafieldPrice.substring(i + 1);
        }
        if(selectedQuantity === 1) {
            priceShowCtrl.innerHTML = `${price.toFixed(2)}${currencySymbol}<span class='small'>${frontStr}${metafieldPrice.toFixed(2)}${currencySymbol}${backStr}</span>`;
        } else {
            priceShowCtrl.innerHTML = `${price.toFixed(2)}${currencySymbol}<span class='original-price'>${oldPrice.toFixed(2)}${currencySymbol}</span><span class='small'>${frontStr}${metafieldPrice.toFixed(2)}€<span class="original-price meta-field">(${oldMetafieldPrice.toFixed(2)}€)</span>${backStr}</span>`;
        }

        showPack_Weight(selectedQuantity);
    }
    const showPack_Weight = (quantity) => {
        // if(quantity === 1) {
        //     weight_per_pack.innerHTML = `${unitArr[product_title] ? '': originalValues['front_str']}${originalValues.weight} ${unitArr[product_title]?unitArr[product_title]:'g'}`;
        // } else {
        //     weight_per_pack.innerHTML = `${unitArr[product_title] ? '': originalValues['front_str']}${quantity} Pack :  ${originalValues.weight * quantity} ${unitArr[product_title]?unitArr[product_title]:'g'}`;
        // }

        weight_per_pack.innerHTML = `${unitArr[product_title] ? '': originalValues['front_str']}${quantity} Pack :  ${originalValues.weight * quantity} ${unitArr[product_title]?unitArr[product_title]:'g'}`;
    }
    const getOldPrice = () => {
        const tsPrice = priceShowCtrl.innerText;
        const metafieldValue = priceShowCtrl.querySelector('span').innerText;
        const i = tsPrice.indexOf(currencySymbol);
        const j = metafieldValue.indexOf(currencySymbol);
        const k = findPricePos(metafieldValue);
        oldPricePerOne = oldPrice = parseFloat(tsPrice.substring(0, i).replace(',','.'));
        oldMetafieldPricePerOne = oldMetafieldPrice = parseFloat(metafieldValue.substring(k, j).replace(',','.'));
    }
    const findPricePos = (str) => {
        const len = str.length;
        for(let i = 0;i < len; i++) {
            const ch = parseInt(str.charAt(i));
            if(!isNaN(ch)) {
                return i;
            }
        }
        return -1;
    }
    getOldPrice();
    let hTime = setTimeout(function() {
        input = document.querySelector(".semantic-amount input");
        if(input) {
            clearTimeout(hTime);
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
                changePrice(parseInt(this.value));
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
                    discount_item.forEach(item => {
                        item.classList.remove("active");
                    });
                    item.classList.add("active");
                    const quantity = parseInt(item.getAttribute("data-quantity"));
                    input.value = quantity;
                    changePrice(quantity);
                    processShowCtrl(quantity);
                })
            });
            discount_item.forEach(item=>{
                item.classList.remove('active');
            });
        }
        
    }, 1000);
    showPack_Weight(1);

});