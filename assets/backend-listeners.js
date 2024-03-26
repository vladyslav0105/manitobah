document.addEventListener("shopify:section:load", function (event) {
    var section = event.srcElement;
    console.log('section load:', section);
    if (Shopify.visualPreviewMode && section.closest('shopify-editor') != null) {
        section.closest('shopify-editor').id = 'root';
    }
    window.dispatchEvent(createColsEvt);
    if (event.srcElement.classList.contains('shopify-section-announcement-bar-container')) {
        window.dispatchEvent(stickyNavEvt);
        window.dispatchEvent(announcementSliderEvt);
    }
    if (event.srcElement.getElementsByClassName('l4us').length) {
        window.dispatchEvent(listUspSliderEvt);
    }
    if (event.srcElement.getElementsByClassName('f8vl').length) {
        window.dispatchEvent(accordeonEvt);
        window.dispatchEvent(semanticInputEvt);
        ajaxCart.init();
    }
    if (event.srcElement.classList.contains('shopify-section-header')) {
        html_tag.classList.remove('t1sr');
        html_tag.classList.remove('t1sn');
        html_tag.classList.remove('t1nb');
        html_tag.classList.remove('t1nn');
        html_tag.classList.remove('t1mn');
        window.dispatchEvent(navEvt);
        window.dispatchEvent(navtopEvt);
        window.dispatchEvent(searchClassesEvt);
        window.dispatchEvent(searchEvt);
        window.dispatchEvent(stickyNavEvt);
        window.dispatchEvent(topEvt);
    }
    if (event.detail.sectionId.endsWith('main-password') || event.detail.sectionId.endsWith('main-giftcard')) {
        window.dispatchEvent(backgroundEvt);
    }
    if (event.srcElement.getElementsByClassName('product-recommendations').length) {
        setTimeout(function () {
            window.dispatchEvent(recommendedProductsEvt);
        }, 50);
    }
    if (event.srcElement.getElementsByClassName('m6tb').length) {
        window.dispatchEvent(moduleTabsEvt);
    }
    if (event.srcElement.querySelector('.l4cl.slider') != null) {
        window.dispatchEvent(listCollectionSliderEvt);
    }
    if (event.srcElement.getElementsByClassName('l4cl').length) {
        window.dispatchEvent(ratingsEvt);
        window.dispatchEvent(formZindexEvt);
        window.dispatchEvent(semanticInputEvt);
        window.dispatchEvent(schemeTooltipEvt);
        window.dispatchEvent(popupsEvt);
        window.dispatchEvent(listScrollableEvt);
        window.check_limit_event();
        ajaxCart.init();
        quickShop.init();
    }
    if (event.srcElement.getElementsByClassName('l4hs').length) {
        window.dispatchEvent(hotspotsEvt);
        ajaxCart.init();
        quickShop.init();
    }
    if (event.srcElement.getElementsByClassName('m6fr').length) {
        window.dispatchEvent(moduleFeaturedSliderEvt);
    }
    if (event.srcElement.querySelector('.l4ft.cols') != null) {
        window.dispatchEvent(masonryEvt);
    }
    if (event.srcElement.querySelector('.l4ft.static') != null) {
        window.dispatchEvent(fancyboxEvt);
    }
    if (
        event.srcElement.getElementsByClassName('m6cu').length ||
        event.srcElement.getElementsByClassName('countdown-container').length
    ) {
        window.dispatchEvent(countdownEvt);
    }
    if (event.srcElement.getElementsByClassName('l4ts').length) {
        window.dispatchEvent(ratingsEvt);
        window.dispatchEvent(listTestimonialsSliderEvt);
    }
    if (event.srcElement.getElementsByClassName('img-compare').length) {
        window.dispatchEvent(imageCompareEvt);
    }
    if (event.srcElement.getElementsByClassName('l4st').length) {
        window.dispatchEvent(listStaticSliderEvt);
    }
    if (event.srcElement.querySelectorAll("input[type='date']").length) {
        window.dispatchEvent(inputDateEvt);
    }
    if (event.srcElement.getElementsByClassName('m6lm').length) {
        window.dispatchEvent(heightLimitEvt);
        linkMore();
    }
    if (event.srcElement.getElementsByClassName('n6as').length) {
        window.dispatchEvent(navAsideEvt);
    }
    if (event.srcElement.querySelectorAll('[data-val][data-of]').length) {
        window.dispatchEvent(ratingsEvt);
    }
    if (event.srcElement.querySelectorAll('video.lazy').length) {
        window.dispatchEvent(lazyVideoEvt);
    }
    if (section.classList.contains('recently-viewed-products')) {
        window.dispatchEvent(recentlyViewedProductsEvt);
    }
    if (event.detail.sectionId.endsWith('sticky-add-to-cart')) {
        window.dispatchEvent(productVariantsEvt);
        window.dispatchEvent(productOptionsEvt);
        window.dispatchEvent(semanticSelectEvt);
        window.dispatchEvent(stickyAddToCartEvt);
        ajaxCart.init();
    }
    if (event.srcElement.getElementsByClassName('m6pr').length) {
        window.dispatchEvent(stickyAddToCartEvt);
        window.dispatchEvent(ratingsEvt);
        window.dispatchEvent(productVariantsEvt);
        window.dispatchEvent(productOptionsEvt);
        window.dispatchEvent(listProductSliderEvt);
        window.dispatchEvent(listDropEvt);
        window.dispatchEvent(semanticSelectEvt);
        window.dispatchEvent(showHideDataElementEvt);
        window.dispatchEvent(sellingplansEvt);
        window.dispatchEvent(pickupAvailabilityEvt);
        window.dispatchEvent(modulePanelEvt);
        window.dispatchEvent(modulePanelAnchorEvt);
        window.dispatchEvent(formZindexEvt);
        window.dispatchEvent(fancyboxEvt);
        window.dispatchEvent(dataChangeEvt);
        window.dispatchEvent(schemeTooltipEvt);
        window.dispatchEvent(popupsEvt);
        window.dispatchEvent(rangeSliderEvt);
    }
    if (event.srcElement.getElementsByClassName('popup-a').length) {
        window.dispatchEvent(popupsEvt);
    }
    if (event.detail.sectionId.endsWith('main-collection') || event.detail.sectionId.endsWith('main-search')) {
        window.dispatchEvent(initFiltersEvt);
        window.dispatchEvent(rangeSliderEvt);
        window.dispatchEvent(collectionSortEvt);
        window.dispatchEvent(collectionLoadMoreEvt);
        linkMore();
        window.dispatchEvent(gridListSwitchEvt);
        window.dispatchEvent(mobileFiltersEvt);
        window.dispatchEvent(modulePanelAnchorEvt);
        window.dispatchEvent(modulePanelEvt);
        window.dispatchEvent(semanticSelectEvt);
    }
    if (event.detail.sectionId.endsWith('main-giftcard')) {
        if (document.getElementById('background')) {
            document.documentElement.classList.add('t1as');
            document.documentElement.classList.remove('t1pl');
        } else {
            document.documentElement.classList.remove('t1as');
            document.documentElement.classList.add('t1pl');
        }
    }
});

document.addEventListener('shopify:block:select', function (event) {
    var section = document.getElementById('shopify-section-' + event.detail.sectionId + '');

    if (section.classList.contains('shopify-section-header') && event.srcElement.classList.contains('sub')) {
        navSubHover(event.srcElement);
        event.srcElement.classList.add('toggle');
    }

    if (section.querySelector('.m6fr') != null) {
        var slideIndex = event.srcElement.dataset.slideIndex;
        if (slideIndex) {
            var swiper = section.querySelector('.m6fr .swiper-outer').swiper;
            if (swiper != null) {
                swiper.slideTo(slideIndex, 500);
            }
        }
    }
    if (section.querySelector('.l4cl.slider') != null) {
        var slideIndex = event.srcElement.dataset.slideIndex;
        if (slideIndex) {
            var swiper = section.querySelector('.l4cl.slider .swiper-outer').swiper;
            if (swiper != null) {
                swiper.slideTo(slideIndex, 500);
            }
        }
    }
    if (section.querySelector('.accordion-a') != null) {
        window.dispatchEvent(accordeonEvt);
        Array.from(section.querySelectorAll('details')).forEach(function (el) {
            el.removeAttribute('open');
        });
        event.srcElement.setAttribute('open', '');
    }
    if (section.querySelector('.m6tb') != null && event.srcElement.dataset.index) {
        window.dispatchEvent(moduleTabsEvt);
        var tabIndex = event.srcElement.dataset.index,
            tabs = event.srcElement.closest('.m6tb'),
            active_class = 'active',
            custom_active_class = '';
        if (tabs.classList.contains('btn')) {
            active_class = 'link-btn';
        }
        if (tabs.getAttribute('data-active-class')) {
            custom_active_class = tabs.getAttribute('data-active-class');
        }
        Array.from(tabs.querySelectorAll('li[data-index], div[data-index]')).forEach(function (el) {
            el.classList.remove(active_class, custom_active_class);
            el.classList.add('hidden');
        });
        tabs.querySelector("li[data-index='" + tabIndex + "']").classList.add(active_class, custom_active_class);
        tabs.querySelector("div[data-index='" + tabIndex + "']").classList.remove('hidden', custom_active_class);
    }
});
document.addEventListener('shopify:section:reorder', function (event) {
    window.dispatchEvent(createColsEvt);
});
