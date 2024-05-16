/* -------------------------------------------

	Name:		Theme+
	Date:		2021/11/01

---------------------------------------------  */
/*global document, createElementWithClass, Validator, window, append_url, Cookies, BVSelect, wrap, openPopup, setTimeout, semanticTabs, toggle_dropdowns_simple, noUiSlider, Masonry, simplyCountdown, Fancybox, CountUp, new_css, close_dropdown, enquire,navigator, Promise, IntersectionObserver, Event , console, FormData, DOMParser, fetch, CustomEvent, routes, randomize, handleCookieAccept, handleCookieDecline, whatInput, ImageCompare, sal, isMobile, clearTimeout, newsletter_popup_testmode, general, Datepicker, create_slider, Typewriter */

var html_tag = document.documentElement,
	body_tag = document.getElementsByTagName('body')[0],
	footer_id = document.getElementsByClassName('shopify-section-footer')[0],
	nav_main,
	nav_id = document.getElementById('nav'),
	nav_bar_id = document.getElementById('nav-bar'),
	nav_user_id = document.getElementById('nav-user'),
	nav_top_id = document.getElementById('nav-top'),
	header_id = document.getElementsByClassName('shopify-section-header')[0],
	header_main = document.getElementById('header'),
	header_inner = document.getElementById('header-inner'),
	header_outer = document.getElementById('header-outer'),
	search_id = document.getElementById('search'),
	search_input,
	root_id = document.getElementById('root'),
	root_styles = document.querySelector(':root'),
	totop_id = document.getElementById('totop'),
	top_bar = document.getElementsByClassName('shopify-section-announcement-bar')[0],
	all_list_drop = document.querySelectorAll('.l4dr'),
	ne = document.querySelectorAll('a[aria-controls="nav"]'),
	evt,
	global_dir,
	changeEvent = new Event('change'),
	navEvt = new CustomEvent("nav"),
	navtopEvt = new CustomEvent("navTop"),
	stickyNavEvt = new CustomEvent("stickyNav"),
	searchEvt = new CustomEvent("search"),
	semanticInputEvt = new CustomEvent("semanticInput"),
	semanticSelectEvt = new CustomEvent("semanticSelect"),
	fancyboxEvt = new CustomEvent("fancybox"),
	productVariantsEvt = new CustomEvent("productVariants"),
	productcardVariantsEvt = new CustomEvent("productcardVariants"),
	stickyAddToCartEvt = new CustomEvent("stickyAddToCart"),
	productOptionsEvt = new CustomEvent("productOptions"),
	sellingplansEvt = new CustomEvent("sellingplans"),
	pickupAvailabilityEvt = new CustomEvent("pickupAvailability"),
	productBuybarBtnEvt = new CustomEvent("productBuybarBtn"),
	recommendedProductsEvt = new CustomEvent("recommendedProducts"),
	recentlyViewedProductsEvt = new CustomEvent("recentlyViewedProducts"),
	modulePanelEvt = new CustomEvent("modulePanel"),
	modulePanelAnchorEvt = new CustomEvent("modulePanelAnchor"),
	accordeonEvt = new CustomEvent("accordeon"),
	alertsEvt = new CustomEvent("alerts"),
	ratingsEvt = new CustomEvent("ratings"),
	mainProductSlideToEvt = new CustomEvent("mainProductSlideTo"),
	moduleFeaturedSlideToEvt = new CustomEvent("moduleFeaturedSlideTo"),
	listCollectionSliderUpdateEvt = new CustomEvent("listCollectionSliderUpdate"),
	showHideDataElementEvt = new CustomEvent("showHideDataElement"),
	listDropEvt = new CustomEvent("listDrop"),
	rangeSliderEvt = new CustomEvent("rangeSlider"),
	masonryEvt = new CustomEvent("masonry"),
	countdownEvt = new CustomEvent("countdown"),
	collectionSortEvt = new CustomEvent("collectionSort"),
	initFiltersEvt = new CustomEvent("initFilters"),
	collectionLoadMoreEvt = new CustomEvent("collectionLoadMore"),
	navAsideEvt = new CustomEvent("navAside"),
	gridListSwitchEvt = new CustomEvent("gridListSwitch"),
	mobileFiltersEvt = new CustomEvent("mobileFilters"),
	tooltipEvt = new CustomEvent("tooltip"),
	updateSlidersEvt = new CustomEvent("updateSliders"),
	popupsEvt = new CustomEvent("popups"),
	announcementEvt = new CustomEvent("announcement"),
	dataChangeEvt = new CustomEvent("dataChange"),
	removeSDCcssEvt = new CustomEvent("removeSDCcss"),
	schemeTooltipEvt = new CustomEvent("schemeTooltip"),
	listScrollableEvt = new CustomEvent("listScrollable"),
	imageCompareEvt = new CustomEvent("imageCompare"),
	inputDateEvt = new CustomEvent("inputDate"),
	listCartEvt = new CustomEvent("listCart"),
	heightLimitEvt = new CustomEvent("heightLimit"),
	hotspotsEvt = new CustomEvent("hotspots"),
	maqrueeEvt = new CustomEvent("maqruee"),
	bindInputEvt = new CustomEvent("bindInput"),
	formValidateEvt = new CustomEvent("formValidate"),
	shopTheLookDrawerEvt = new CustomEvent("shopTheLookDrawer");

if (nav_bar_id) {
    nav_main = nav_bar_id;
} else if (nav_id) {
    nav_main = nav_id;
}

if (search_id) {
	search_input = search_id.querySelectorAll('input');
}

// Get direction
if (html_tag.getAttribute('dir') === 'rtl') {
	global_dir = ['rtl', false];
} else {
	global_dir = ['ltr', true];
}

function loadRes(u, c, i) {
	'use strict';
	if (html_tag.classList.contains(i)) {
		c();
		return true;
	}
	var s = document.createElement('script');
	s.src = u;
	s.async = true;
	s.onload = c;
	document.body.appendChild(s);
	if (!html_tag.classList.contains(i)) {
		html_tag.classList.add(i);
	}
	return true;
}

function close_dropdown(element) {
	'use strict';
	html_tag.classList.remove('user-form-active');
	if (element.classList.contains('toggle') && !element.classList.contains('mtoggle')) {
		element.classList.remove('toggle');
		element.setAttribute('aria-expanded', false);
		return true;
	}
	return false;
}

function assignIndex(em) {
	'use strict';
	Array.from(em).forEach(function (el, index) {
		el.style.zIndex = em.length - index;
	});
}

function close_mobile_nav() {
	'use strict';
	html_tag.classList.remove('m2a', 'nav-hover');
	Array.from(document.querySelectorAll('a[aria-controls="nav"]')).forEach(function (el) {
		el.setAttribute('aria-expanded', false);
	});
	enquire.register('screen and (max-width: 1000px)', function () {
		Array.from(document.getElementById('nav').querySelectorAll('a')).forEach(function (el) {
			el.setAttribute('tabindex', -1);
		});
	});
}

function remove_active_submenus(el) {
	'use strict';
	Array.from(el).forEach(function (el) {
		if (el.parentElement.classList.contains('toggle')) {
			el.parentElement.classList.remove('toggle');
			el.parentElement.setAttribute('aria-expanded', false);
		}
	});
}

function clear_mobile_nav() {
	if (nav_top_id) {
		remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
	}
	if (nav_user_id) {
		remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
	}
	if (nav_bar_id) {
		remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
	}
	if (nav_id) {
		setTimeout(function () {
			Array.from(nav_id.querySelectorAll('a.toggle')).forEach(function (el) {
				if (el.parentElement.classList.contains('toggle')) {
					el.parentElement.classList.remove('toggle');
				}
			});
			if (nav_id.hasAttribute('data-type')) {
				nav_id.removeAttribute('data-type');
			}
			Array.from(nav_id.querySelectorAll('li.mtoggle')).forEach(function (el) {
				el.classList.remove('mtoggle');
			});
			Array.from(nav_id.querySelectorAll('ul.ul-toggle')).forEach(function (el) {
				el.classList.remove('ul-toggle');
			});
			Array.from(nav_id.getElementsByClassName('header-before')).forEach(function (el) {
				el.classList.remove('data-title-active');
			});
		}, 400);
	}
}

function toggle_dropdowns(el, selector) {
	'use strict';
	var j = document.querySelectorAll(selector),
		i;
	html_tag.classList.remove('user-form-active');
	if (el.parentElement.classList.contains('toggle')) {
		el.parentElement.classList.remove('toggle');
		el.parentElement.setAttribute('aria-expanded', false);
		if (el.parentNode.classList.contains('has-form') && !el.parentNode.classList.contains('currency') && !el.parentNode.classList.contains('lang')) {
			html_tag.classList.remove('user-form-active');
		}
	} else {
		if (selector !== undefined) {
			Array.from(document.querySelectorAll(selector + ' li.toggle')).forEach(function (em) {
				em.classList.remove('toggle');
			});
		}
		if (el.parentNode.classList.contains('has-form')) {
			setTimeout(function () {
				html_tag.classList.add('user-form-active');
			}, 0);
		}
		Array.from(el.closest('ul').children).forEach(function (el) {
			el.classList.remove('toggle');
		});
		el.parentElement.classList.add('toggle');
		el.parentElement.setAttribute('aria-expanded', true);
		el.parentElement.focus(); // this will avoid page scroll down when user click with MOUSE on the element and then press space bar to toggle it
	}
}
/**
 * @04
 * This function is super big and it's doing a lot of stuffs! If you start moving around to specific functions some pieces of that code, you'll end up with a smaller function and it will be easier to do future changes
 */

// #nav-top
window.addEventListener("navTop", function(evt) {
	"use strict";
	var nav_id = document.getElementById('nav'),
		nav_user_id = document.getElementById('nav-user'),
		nav_top_id = document.getElementById('nav-top'),
		header_id = document.getElementsByClassName('shopify-section-header')[0];
	if (nav_top_id) {
		// Handle #nav-top submenus
		Array.from(nav_top_id.querySelectorAll('a.toggle')).forEach(function (el) {

			function click_handler(el) {
				close_mobile_nav();
				if (nav_id) {
					remove_active_submenus(nav_id.querySelectorAll('a.toggle'));
				}
				if (nav_user_id) {
					remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
				}
				toggle_dropdowns(el);
			}
			el.addEventListener('click', function (e) {
				click_handler(el);
				e.preventDefault();
			});
			el.addEventListener('keyup', function (e) {
				if (e.key === ' ') {
					click_handler(el);
					e.preventDefault();
				}
			});
			if (!isMobile) {
				if (el.nextElementSibling !== null) {
					el.nextElementSibling.addEventListener('mouseleave', function () {
						close_dropdown(el.parentElement);
					});
				}
			}
		});

		// If #nav exists, create a #nav-top for mobile menu
		if (nav_id && nav_top_id) {
			Array.from(nav_top_id.querySelectorAll('ul[data-type]')).forEach(function (el) {
				var clone_me = el.cloneNode(true);
				clone_me.classList.add('nav-top');
				nav_id.appendChild(clone_me);
			});
		}
		if (!html_tag.classList.contains('t1nt')) {
			html_tag.classList.remove('t1nt');
		}
	} else {
		if (!html_tag.classList.contains('t1nt')) {
			html_tag.classList.add('t1nt');
		}
	}
});
window.dispatchEvent(navtopEvt);

// moved to custom-async.js (.m2a)
function customMega() {
    "use strict";
    if (nav_main) {
        root_styles.style.setProperty('--mega_nav_mah', window.innerHeight - nav_main.getBoundingClientRect().bottom + 'px');
    }
}

// #nav-bar
function nav_burger() {
	"use strict";
	html_tag.classList.add('has-nav');
	Array.from(nav_id.querySelectorAll('a.toggle')).forEach(function (el) {
		el.parentElement.classList.remove('toggle');
	});
	if (nav_top_id) {
		remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
	}
	if (nav_user_id) {
		remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
	}
	if (nav_bar_id) {
		remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
	}
	html_tag.classList.remove('nav-hover');
	if (html_tag.classList.contains('m2a')) {
		close_mobile_nav();
	} else {
		customMega();
		html_tag.classList.add('m2a');
		html_tag.classList.remove('search-compact-active', 'search-full', 'search-full-mode', 'user-form-active');
		if (search_id) {
			search_id.classList.remove('full', 'has-text');
		}
		nav_id.querySelectorAll('a').item(1).focus();
		setTimeout(function () {
			nav_id.querySelectorAll('li:not(.nav-bar-element) > a:not(.toggle)')[0].focus();
		}, 100);
		Array.from(ne).forEach(function (el) {
			el.setAttribute('aria-expanded', true);
		});
		enquire.register('screen and (max-width: 1000px)', function () {
			Array.from(nav_id.querySelectorAll('a')).forEach(function (el) {
				el.removeAttribute('tabindex');
			});
		});
		new_css('css-menu', window.filepaths['async_menu_css']);
	}
}

function navSubHover(el) {
	var nav_id = document.getElementById('nav');
	"use strict";
	if (el.classList.contains('sub') || el.classList.contains('show-all')) {
		html_tag.classList.add('nav-hover');
	} else {
		html_tag.classList.remove('nav-hover');
	}
	var d = el.dataset.index,
		p = el.closest('ul');
	if (el.classList.contains('sub')) {
		Array.from(nav_id.querySelectorAll('.ul-inner')[0].children).forEach(function (el) {
			el.classList.remove('hover');
			el.setAttribute('aria-expanded', false);
			if (el.matches('[data-index="' + d + '"]')) {
				el.classList.add('hover');
				if (el.querySelectorAll('ul ul a:not(.toggle)')[0] !== undefined) {
					setTimeout(function () {
						el.querySelectorAll('ul ul a:not(.toggle)')[0].focus();
					}, 100);
				}
				el.setAttribute('aria-expanded', true);
			}
		});
		Array.from(p.children).forEach(function (el) {
			el.parentElement.parentElement.classList.add('ul-hover');
			el.classList.remove('hover');
			el.setAttribute('aria-expanded', false);
		});
		el.classList.add('hover');
		Array.from(el.children).forEach(function (em) {
			if (em.tagName.toLowerCase() === 'ul') {
				p.parentElement.setAttribute('data-items', em.children.length);
				if (em.parentElement.classList.contains('sub-classic') && em.children.length > 5) {
					p.parentElement.setAttribute('data-items', 1);
				}
			}
		});
		el.setAttribute('aria-expanded', true);
	} else {
		Array.from(p.children).forEach(function (el) {
			el.removeAttribute('aria-expanded', false);
		});
	}
}

window.addEventListener("nav", function(evt) {
	var nav_id = document.getElementById('nav'),
		nav_bar_id = document.getElementById('nav-bar'),
		nav_user_id = document.getElementById('nav-user'),
		nav_top_id = document.getElementById('nav-top'),
		header_id = document.getElementsByClassName('shopify-section-header')[0],
		root_id = document.getElementById('root'),
		all_list_drop = document.querySelectorAll('.l4dr'),
		dt,
		ne = document.querySelectorAll('a[aria-controls="nav"]'),
		nav_bar_li,
		nav_id_ul,
		nav_id_btn,
		nav_id_sub_cont,
		na,
		nb,
		nc,
		nd,
		ng,
		s,
		t,
		nf,
		ni,
		nj = document.querySelectorAll('#nav > ul[data-type="main-nav"] > li > ul');

	if (nav_id && !isMobile) {
		nav_id.addEventListener('mouseover', function () {
			new_css('css-menu', window.filepaths['async_menu_css']);
		});
	}
	if (header_id) {
		Array.from(header_id.querySelectorAll('a.toggle')).forEach(function (el) {
			el.addEventListener('click', function () {
				new_css('css-menu', window.filepaths['async_menu_css']);
			});
		});
	}
	if (nav_bar_id || nav_id ) {
		html_tag.classList.remove('t1mn');
	} else {
		html_tag.classList.add('t1mn');
	}
	if (document.querySelector('.has-menu-bar')) {
		html_tag.classList.remove('t1nn');
	} else {
		html_tag.classList.add('t1nn');
	}

	if (nav_bar_id) {
		if (!isMobile) {
			nav_bar_id.addEventListener('mouseover', function () {
				new_css('css-menu', window.filepaths['async_menu_css']);
			});
		}
		append_url(nav_bar_id.children[0], 'Close', 'close');
		Array.from(nav_bar_id.querySelectorAll('a.toggle')).forEach(function (el) {
			el.parentElement.classList.add('sub');

			function click_handler(el) {
				close_mobile_nav();
				if (nav_id) {
					remove_active_submenus(nav_id.querySelectorAll('a.toggle'));
				}
				if (nav_top_id) {
					remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
				}
				if (nav_user_id) {
					remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
				}
				toggle_dropdowns(el);
				if (nav_bar_id.querySelectorAll('[data-type="horizontal-nav"] > li.sub.toggle').length) {
					html_tag.classList.add('nav-hover');
				} else {
					html_tag.classList.remove('nav-hover');
				}
			};
			el.addEventListener('click', function (e) {
				click_handler(el);
				e.preventDefault();
			});
			el.addEventListener('keyup', function (e) {
				if (e.key === ' ') {
					click_handler(el);
					e.preventDefault();
				}
			});
		});

		// If #nav exists, create a #nav-bar for mobile menu
		if (nav_id) {
			var nav_bar_li = [],
				nav_id_ul = document.querySelectorAll('#nav > ul'),
				nav_id_btn = document.querySelectorAll('#header > .link-btn a, #header-inner > .link-btn a');
			nav_id_sub_cont = document.createElement('li');
			Array.from(document.querySelectorAll('#nav-bar > ul > li')).forEach(function (el) {
				if (!isMobile) {
					el.addEventListener('mouseover', function () {
						html_tag.classList.remove('m2a');
					});
				}
				if (el.classList.contains('collapse-item')) {
					Array.from(el.querySelectorAll(':scope > ul > li > ul > li')).forEach(function (el) {
						var clone_me = el.cloneNode(true);
						clone_me.classList.add('nav-bar-element');
						nav_bar_li.push(clone_me);
					});
				} else {
					var clone_me = el.cloneNode(true);
					clone_me.classList.add('nav-bar-element');
					nav_bar_li.push(clone_me);
				}

			});
			if(nav_id_btn.length){
				nav_id_sub_cont.classList.add('nav-bar-element', 'nav-bar-element-main');
				nav_id_sub_cont.innerHTML = '<a href="./" class="toggle-wide"><span>' + nav_id_btn[0].textContent + '</span> <span class="hidden">alle</span></a> <ul></ul>';
				if (nav_id_btn[0].classList.contains('mobile-hide')) {
					nav_id_sub_cont.classList.add('mobile-hide');
				}
				if (nav_id_btn[0].classList.contains('mobile-text-uppercase')) {
					nav_id_sub_cont.classList.add('mobile-text-uppercase');
				}
				if(nav_bar_id.hasAttribute('aria-label')){
					Array.from(nav_id_sub_cont.querySelectorAll('span.hidden')).forEach(function (el) {
						el.innerHTML = nav_bar_id.getAttribute('aria-label');
					});
				}
				nav_id_ul[0].prepend(nav_id_sub_cont);
				nav_bar_li.forEach(function (el) {
					nav_id_ul[0].appendChild(el)
				});
				html_tag.classList.remove('t1nb');
			} else {
				html_tag.classList.add('t1nb');
			}
		}
		// handle mouseovers
		if (!isMobile && nav_bar_id.children[0] !== undefined) {
			Array.from(nav_bar_id.children[0].children).forEach(function (el) {
				el.addEventListener('mouseover', function (e) {
					if (el.classList.contains('sub') || el.classList.contains('show-all')) {
						html_tag.classList.add('nav-hover');
					} else {
						html_tag.classList.remove('nav-hover');
					}
				});
				el.addEventListener('mouseleave', function (e) {
					html_tag.classList.remove('nav-hover');
				});
			});
		}
	}

	if (nav_id) {
		var na = document.createElement('ul'),
			nb = document.createElement('a'),
			nc = nav_id.children,
			nd = nc[0].children,
			ng = document.createElement('div');
		// Detect if category images are in use
		ni = document.querySelectorAll('#nav > ul:first-child > li > a > img, #nav-bar > ul:first-child > li > a > img');
		if (ni.length) {
			Array.from(ni).forEach(function (el) {
				var cl = 'category-img';
				el.closest('[id^="nav"]').classList.add(cl);
				el.closest('ul').classList.add(cl);
			});
		}

		// Create a back link for mobile menu
		Array.from(document.querySelectorAll('#nav > ul > li > a.toggle')).forEach(function (el) {
			var clone_me = el.cloneNode(true);
			clone_me.classList.add('toggle-back');
			el.parentElement.prepend(clone_me);
			if (!el.parentNode.querySelectorAll('li > ul:first-child').length) {
				el.parentElement.classList.add('sub-classic');
			}
		});
		if (nav_bar_id) {
			Array.from(nav_id.querySelectorAll('a.toggle-wide')).forEach(function (el) {
				el.addEventListener('click', function (e) {
					html_tag.classList.toggle('nav-more-active');
					e.preventDefault();
				});
			});
		}

		// Handle #nav submenus for mobile
		Array.from(nav_id.querySelectorAll('a.toggle')).forEach(function (el) {
			el.parentElement.classList.add('sub');

			function click_handler(el) {
				var mobileHeader = nav_id.getElementsByClassName('header-before')[0];
				if (nav_top_id) {
					remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
				}
				if (nav_bar_id) {
					remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
				}
				if (nav_user_id) {
					remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
				}
				if (el.parentElement.classList.contains('toggle')) {
					el.parentElement.classList.remove('toggle', 'mtoggle');
					el.closest('ul').classList.remove('ul-toggle');
					if (el.parentElement.hasAttribute('data-title')) {
						mobileHeader.classList.remove('data-title-active');
					}
				} else {
					Array.from(el.closest('ul').children).forEach(function (el) {
						el.classList.remove('toggle');
					});
					el.parentElement.classList.add('toggle', 'mtoggle');
					el.closest('ul').classList.add('ul-toggle');
					nav_id.setAttribute('data-type', el.closest('[data-type]').getAttribute('data-type'));
					if (el.parentElement.hasAttribute('data-title')) {
						mobileHeader.innerHTML = el.parentElement.getAttribute('data-title');
						mobileHeader.classList.add('data-title-active');
					}
				}
				if (nav_id.querySelectorAll('.ul-toggle').length === 0) {
					nav_id.removeAttribute('data-type');
				}
				if (nav_id.querySelectorAll('[data-type="main-nav"] > li.sub.toggle').length) {
					html_tag.classList.add('nav-hover');
				} else {
					html_tag.classList.remove('nav-hover');
				}
			}
			el.addEventListener('click', function (e) {
				click_handler(el);
				e.preventDefault();
			});
			el.addEventListener('keyup', function (e) {
				if (e.key === ' ') {
					click_handler(el);
					e.preventDefault();
				}
			});
		});

		Array.from(nd).forEach(function (el, index) {
			el.setAttribute('data-index', nd.length - index);
		});

		na.classList.add('inner', 'ul-inner');
		nb.classList.add('close', 'close-nav');
		nb.innerHTML += 'Close';
		nb.setAttribute('href', './');
		nav_id.appendChild(na);
		nc[0].appendChild(nb);

		Array.from(nd).forEach(function (el) {
			na.appendChild(el.cloneNode(true));
		});
		Array.from(nav_id.querySelectorAll('.close-nav')).forEach(function (el) {
			nav_id.appendChild(el.cloneNode(true));
		});
		var s = nav_id.querySelectorAll('.ul-inner')[0].children,
			t = nav_id.querySelectorAll('.close-nav');
		nav_id.after(t[0].cloneNode(true));

		// #nav hover
		Array.from(nd).forEach(function (el) {
			if (!isMobile) {
				el.addEventListener('mouseover', function (e) {
					navSubHover(el);
					e.preventDefault();
				});
				el.addEventListener('mouseleave', function (e) {
					html_tag.classList.remove('nav-hover');
				});
			}
			Array.from(el.querySelectorAll('a.toggle:not(.toggle-back)')).forEach(function (em) {
				em.addEventListener('click', function (e) {
					navSubHover(el);
				});
			});

		});
		if (!isMobile) {
			Array.from(nd).forEach(function (el) {
				el.addEventListener('mouseover', function (e) {
					if (el.classList.contains('sub') || el.classList.contains('show-all')) {
						html_tag.classList.add('nav-hover');
					} else {
						html_tag.classList.remove('nav-hover');
					}
				});
				el.addEventListener('mouseleave', function (e) {
					html_tag.classList.remove('nav-hover');
				});
			});

			na.addEventListener('mouseleave', function () {
				nav_id.classList.remove('ul-hover');
			});
		}

		na.addEventListener('mouseleave', function () {
			nav_id.classList.remove('ul-hover');
		});

		// #nav submenu
		if (nav_id.hasAttribute('aria-label')) {
			var nf = createElementWithClass('div', 'header');
			nf.innerHTML = nav_id.getAttribute('aria-label');
			nav_id.prepend(nf);
		}
		ng.classList.add('header-before', 'header');
		nav_id.prepend(ng);

		// #nav mobile close
		Array.from(header_id.getElementsByClassName('close-nav')).forEach(function (el) {
			el.addEventListener('click', function (e) {
				clear_mobile_nav();
				close_mobile_nav();
				e.preventDefault();
			});
		});

		// #nav burger
		if (!html_tag.classList.contains('t1nn')) {
			html_tag.classList.remove('t1nn');
		}
	}
	if (ne) {
		Array.from(ne).forEach(function (el) {
			el.addEventListener('click', function (e) {
				nav_burger();
				e.preventDefault();
			});
			el.addEventListener('keyup', function (e) {
				if (e.key === ' ') {
					nav_burger();
					e.preventDefault();
				}
			});
		});
	}

	if (!nav_id && !nav_bar_id) {
		if (!html_tag.classList.contains('t1nn')) {
			html_tag.classList.add('t1nn');
		}
	}

	// .sub-static
	if (header_id && !isMobile) {
		var sub_static = header_id.querySelectorAll('.sub-static li > ul:not(:first-child:last-child)');
		Array.from(sub_static).forEach(function (el) {
			"use strict";
			el.parentElement.addEventListener('mouseenter', function () {
				if (el.parentElement.parentElement.clientHeight < (el.clientHeight + el.parentElement.offsetTop - Math.abs(el.offsetTop))) {
                    el.classList.add('rounded-b2r');
				}
			});
		});
	}

	function linkSmallPopup(em) {
		"use strict";
		if (em.getElementsByClassName('inner')[0].clientWidth < em.getElementsByClassName('inner-text')[0].clientWidth) {
			em.classList.add('longer');
		} else {
			em.classList.remove('longer');
		}
	}

	if (header_id) {
		var list_usp_header = header_id.getElementsByClassName('l4us');
		if (list_usp_header.length) {
			Array.from(list_usp_header).forEach(function (el, in1) {
				"use strict";
				Array.from(el.querySelectorAll('li, .li')).forEach(function (em, in2) {
					var innerText = em.innerHTML,
						linkable,
						linkedPopup,
						isSwiper;
					em.setAttribute('data-index', 'usp-' + in1 + in2);
					em.innerHTML = '<span class="outer"><span class="inner">' + innerText + '</span> <a href="./" class="linked" data-popup="' + em.getAttribute('data-index') + '">' + translations.readmore_text + '</a> <span class="inner-text">' + innerText + '</span></span>';
					Array.from(el.querySelectorAll('.inner-text a')).forEach(function (en) {
						en.setAttribute('tabindex', '-1');
					});
					em.classList.add('rendered');
					linkSmallPopup(em);
					window.addEventListener('resize', function () {
						setTimeout(function () {
							linkSmallPopup(em);
						}, 1);
					});
					linkedPopup = document.createElement('div');
					linkedPopup.classList.add('popup-a', 'w360');
					linkedPopup.setAttribute('data-title', em.getAttribute('data-index'));
					linkedPopup.innerHTML = '<p>' + innerText + '</p>';
					root_id.appendChild(linkedPopup);
				  if (el.classList.contains('slider-single') && el.classList.contains('s4wi')) {
						isSwiper = el.getElementsByClassName('swiper-outer')[0].swiper;
						if (isSwiper !== undefined) {
							append_url(em.querySelectorAll('.outer')[0], 'Next', 'next-item');
							Array.from(el.getElementsByClassName('next-item')).forEach(function (eo) {
								eo.addEventListener('click', function (e) {
									isSwiper.slideNext();
									e.preventDefault();
								});
							});
						}
					}
				});
			});
		}
	}


	// #nav-user
	if (nav_user_id) {
		// Create a close links for form dropdown (login)
		Array.from(nav_user_id.querySelectorAll('li > form')).forEach(function (el) {
			"use strict";
			el.parentNode.classList.add('has-form');
			el.closest('#nav-user').classList.add('has-form');
			append_url(el, 'Toggle', 'toggle');
			append_url(el.parentElement, 'Toggle', 'toggle');
		});

		// Handle #nav-user submenus
		Array.from(nav_user_id.querySelectorAll('a.toggle')).forEach(function (el) {
			"use strict";

			function click_handler(el) {
				close_mobile_nav();
				if (nav_id) {
					remove_active_submenus(nav_id.querySelectorAll('a.toggle'));
				}
				if (nav_top_id) {
					remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
				}
				if (nav_bar_id) {
					remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
				}
				toggle_dropdowns(el);
			}
			el.addEventListener('click', function (e) {
				click_handler(el);
				e.preventDefault();
			});
			el.addEventListener('keyup', function (e) {
				if (e.key === ' ') {
					click_handler(el);
					e.preventDefault();
				}
			});
			if (!isMobile) {
				if (el.nextElementSibling !== null && el.nextElementSibling.tagName.toLowerCase() !== 'form') {
					el.nextElementSibling.addEventListener('mouseleave', function () {
						close_dropdown(el.parentElement);
					});
				}
			}
		});

		// If #nav exists, create a #nav-user for mobile menu
		if (nav_id) {
			Array.from(nav_user_id.querySelectorAll('ul[data-type]')).forEach(function (el) {
				"use strict";
				var clone_me = el.cloneNode(true);
				clone_me.classList.add('nav-user');
				nav_id.appendChild(clone_me);
			});
			var nav_user_form = nav_id.getElementsByClassName('user-login')[0];
			if (nav_user_form !== undefined) {
				nav_user_form.remove();
			}
		}

		// If #nav & .shopify-section-footer exists, create a contact module for mobile menu
		if (footer_id && nav_id) {
			var f_m6cn = footer_id.getElementsByClassName('m6cn'),
				f_l4sc = footer_id.getElementsByClassName('l4sc'),
				f_lang;

			if (!nav_id.getElementsByClassName('m6cn').length && f_m6cn.length) {
				nav_id.appendChild(f_m6cn[0].cloneNode(true));
			}
			if (!nav_id.getElementsByClassName('l4sc').length && f_l4sc.length) {
				nav_id.appendChild(f_l4sc[0].cloneNode(true));
			}
			Array.from(nav_user_id.querySelectorAll('ul[data-type="user-nav"] > li:not(.cart, .lang, .currency) img')).forEach(function (el) {
				"use strict";
				var clone_me = el.parentNode.cloneNode(true);
				clone_me.classList.add('has-img');
				clone_me.classList.remove('mobile-hide');

				nav_id.appendChild(clone_me);
			});
			f_lang = footer_id.querySelectorAll('li.lang a[aria-controls="nav"], li.currency a[aria-controls="nav"]');
			if (f_lang.length) {
				Array.from(f_lang).forEach(function (el) {
					"use strict";
					el.addEventListener('click', function (e) {
						var nv_cl;
						if (el.closest('li').classList.contains('lang')) {
							nv_cl = nav_id.querySelectorAll('.lang > a.toggle:not(.toggle-back)')[0];
						} else if (el.closest('li').classList.contains('currency')) {
							nv_cl = nav_id.querySelectorAll('.currency > a.toggle:not(.toggle-back)')[0];
						}
						nv_cl.click();
						setTimeout(function () {
							nv_cl.focus();
						}, 100);
						e.preventDefault();
					});
				});
			}
		}
	}

});
window.dispatchEvent(navEvt);

// Mobile nav to be keyboard accessible only on mobile devices
if (nav_id) {
	enquire.register('screen and (max-width: 1000px)', function () {
		"use strict";
		Array.from(nav_id.querySelectorAll('a')).forEach(function (el) {
			el.setAttribute('tabindex', -1);
		});
	}).register('screen and (min-width: 1001px)', function () {
		"use strict";
		Array.from(nav_id.querySelectorAll('a')).forEach(function (el) {
			el.removeAttribute('tabindex');
		});
	});
}


// Remove all dropdowns once clicked on ESC
document.addEventListener('keydown', function (evt) {
	"use strict";
	evt = evt || window.event;
	if (evt.key === 'Escape' || evt.key === 'Esc') {
		close_mobile_nav();
		if (nav_id) {
			remove_active_submenus(nav_id.querySelectorAll('a.toggle'));
		}
		if (nav_top_id) {
			remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
		}
		if (nav_user_id) {
			remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
		}
		if (nav_bar_id) {
			remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
		}
		if (all_list_drop.length > 0) {
			Array.from(all_list_drop).forEach(function (element) {
				remove_active_submenus(element.querySelectorAll('a.toggle'));
			});
		}
	}
});

// Add Toggleable functionality to all ".l4dr" elements
window.addEventListener("listDrop", function(evt) {
	var all_list_drop = document.querySelectorAll('.l4dr');
	Array.from(all_list_drop).forEach(function (element) {
		"use strict";
		Array.from(element.querySelectorAll('a.toggle')).forEach(function (el) {
			function click_handler(el) {
				toggle_dropdowns(el, '.l4dr');
				new_css('css-menu', window.filepaths['async_menu_css']);
			}
			el.addEventListener('click', function (e) {
				click_handler(el);
				e.preventDefault();
			});
			el.addEventListener('keyup', function (e) {
				if (e.key === ' ') {
					click_handler(el);
					e.preventDefault();
				}
			});
			if (!isMobile) {
				el.nextElementSibling.addEventListener('mouseleave', function () {
					close_dropdown(el.parentElement);
				});
			}
		});
	});
});
window.dispatchEvent(listDropEvt);


document.onclick = function (evt) {
	"use strict";
	evt = evt || window.event;
	var clicked_element = evt.target;
	var all_aria_expanded = document.querySelectorAll('[aria-expanded="true"]'),
		el_aria_expanded,
		closest_link;
	// if there's no dropdown open, do nothing
	if (all_aria_expanded.length === 0) {
		return
	}

	// loop through all opened dropdowns and check if click was inside/outside of it to determine if keeps opened or not
	// it will keeps opened only if click in an inside element that's not a children of a clickable link
	for (el_aria_expanded of all_aria_expanded) {
		if (el_aria_expanded === clicked_element) {
			continue;
		}
		// .contains() will check if clicked_element belongs to el_aria_expanded
		// and if belongs to, don't do anything (leave dropdown opened)
		if (el_aria_expanded.contains(clicked_element)) {
			// close dropdown when clicked in any of the links <a> present in dropdown
			closest_link = clicked_element.closest("a:not(.toggle, .show)");
			if (closest_link && closest_link.contains(clicked_element)) {
				close_dropdown(el_aria_expanded);
			}
			continue;
		}

		close_dropdown(el_aria_expanded);
	}
};


/////////////////////////////////////

function aria_hide(el) {
	'use strict';
	if (el) {
		el.setAttribute('aria-hidden', true);
		el.setAttribute('focusable', false);
	}
}

function aria_show(el) {
	'use strict';
	if (el) {
		el.setAttribute('aria-hidden', false);
		el.setAttribute('focusable', true);
	}
}

function getSiblings(el) {
	'use strict';
	if (el) {
		return Array.from(el.parentNode.children).filter(function (sibling) {
			return sibling !== el;
		});
	}
}

// check if string ends with any of array suffixes
function endsWithAny(suffixes, string) {
	'use strict';
	for (let suffix of suffixes) {
		if (string.endsWith(suffix))
			return true;
	}
	return false;
}

// function new_css moved to custom.js

// Get direction
// Load some less crucial CSS styles with a delay
function asyncCSS() {
	"use strict";
	new_css('async-css', window.filepaths['async_css']);
	new_css('hovers-css', window.filepaths['async_hovers_css']);
}
if (!isMobile) {
	document.addEventListener('mousemove', function () {
		"use strict";
		asyncCSS();
	});
}

document.addEventListener('keydown', function () {
	"use strict";
	asyncCSS();
});
document.addEventListener('touchstart', function () {
	"use strict";
	asyncCSS();
});
document.addEventListener('scroll', function () {
	"use strict";
	asyncCSS();
});

// Assign aria elements to the #skip links
var skip_id = document.getElementById('skip');
if (skip_id) {
	if (nav_bar_id) {
		skip_id.querySelectorAll('a[href="#nav"]')[0].setAttribute('href', '#nav-bar');
	}
	Array.from(skip_id.querySelectorAll('a')).forEach(function (el) {
		'use strict';
		el.addEventListener('focus', function () {
			this.setAttribute('aria-hidden', false);
		});
		el.addEventListener('blur', function () {
			this.setAttribute('aria-hidden', true);
		});
	});
}


// Form validation
function validate_me(el) {
	"use strict";
	loadRes(window.filepaths['plugin_validator_js'], function () {
		if (typeof Validator === 'function') {
			el.noValidate;
			var validationPlugin = new Validator(el, {
				autoScroll: false,
				showValid: true
			});

			if (!validationPlugin.hasError()) {
				validationPlugin.setSubmitEnabled();
			}
		}
		new_css('form-validation-css', window.filepaths['async_validation_css']);
	}, 'validator-loaded');

}
function validator_run(el) {
	'use strict';
	var formElement = el,
		el_required = formElement.querySelectorAll('[required]');
	if (el_required.length) {
		Array.from(el_required).forEach(function (en) {
			if (en.value === '' && (en.tagName.toLowerCase() === 'input' || en.tagName.toLowerCase() === 'textarea')) {
				en.classList.add('required-empty');
			}
		});
		if (formElement.querySelectorAll('.required-empty').length) {
			Array.from(formElement.querySelectorAll('button[type="submit"]')).forEach(function (em) {
				em.disabled = true;
			});
		}
	}
	Array.from(formElement.querySelectorAll('p, ul')).forEach(function (em) {
		if (!em.classList.contains('form-group') && !em.classList.contains('l4ch')) {
			em.appendChild(createElementWithClass('span', 'invalid-feedback'));
			em.classList.add('form-group');
			Array.from(em.getElementsByClassName('invalid-feedback')).forEach(function (en) {
				if (en.previousElementSibling !== null) {
					en.previousElementSibling.classList.add('last-child');
				}
			});
			Array.from(em.querySelectorAll('span[class*="size-"] + .invalid-feedback')).forEach(function (en) {
				en.previousElementSibling.before(en);
			});
		}
	});
	Array.from(formElement.querySelectorAll('input, select, textarea, button')).forEach(function (formInputs) {
		formInputs.addEventListener('focus', function () {
			validate_me(formElement);
		});
		formInputs.addEventListener('change', function () {
			validate_me(formElement);
		});
	});
	if (!isMobile) {
		formElement.addEventListener('mouseover', function () {
			validate_me(formElement);
		});
		formElement.addEventListener('mouseenter', function () {
			validate_me(formElement);
		});
	}
	if (el.querySelectorAll('footer.hidden').length) {
		el.addEventListener('submit', function (e) {
			el.classList.add('submitted');
			e.preventDefault();
		});
	}
}

window.addEventListener("formValidate", function (evt) {
	var form_validate = document.getElementsByClassName('f8vl');
	if (form_validate.length) {
		Array.from(form_validate).forEach(function (el) {
			"use strict";
			validator_run(el);
		});
	}
});
window.dispatchEvent(formValidateEvt);

var changeInputsRequired = function(addAttribute, container) {
	Array.from(container.querySelectorAll('input, textarea')).forEach(function (el) {
		if (!addAttribute) {
			el.checked = false;
			el.setAttribute('disabled', 'disabled');
			if (el.getAttribute('data-required') != undefined) {
				el.removeAttribute('required');
			}
		} else {
			el.removeAttribute('disabled');
			if (el.getAttribute('data-required') != undefined) {
				el.setAttribute('required', 'required');
			}
		}
	});
};

function data_show_me(el) {
	el.addEventListener('click', function (e) {
		Array.from(document.querySelectorAll('[data-element]')).forEach(function (el) {
			el.classList.add('hidden');
		});
		Array.from(document.querySelectorAll('[data-element="' + el.getAttribute('data-enable') + '"]')).forEach(function (el) {
			el.classList.remove('hidden');
		});
		if (el.tagName.toLowerCase() === 'a') {
			e.preventDefault();
		}
	});
}

function data_hide_me(el) {
	el.addEventListener('click', function (e) {
		Array.from(document.querySelectorAll('[data-element="' + el.getAttribute('data-disable') + '"]')).forEach(function (el) {
			el.classList.add('hidden');
		});
		if (el.tagName.toLowerCase() === 'a') {
			e.preventDefault();
		}
	});
}

function data_togg_me(el) {
	el.addEventListener('click', function (e) {
		var parent = el.parentElement;
    Array.from(document.querySelectorAll('[data-element="' + el.getAttribute('data-toggle') + '"]')).forEach(function (el) {
      if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
      if (el.closest('.l4cl.box') !== null) {
        lastVis(el.closest('.l4cl.box'));
      }
    });
		if (el.tagName.toLowerCase() === 'a') {
      if (parent.classList.contains('link-toggle-clicked')) {
				parent.classList.remove('link-toggle-clicked');
			} else {
				parent.classList.add('link-toggle-clicked');
			}
			e.preventDefault();
		}
	});
}
// Show/hide/toggle [data-element]
window.addEventListener("showHideDataElement", function (evt) {
	var data_show = document.querySelectorAll('a[data-enable]:not(.data-enable-listening), input[data-enable]:not(.data-enable-listening), button[data-enable]:not(.data-enable-listening)'),
		data_hide = document.querySelectorAll('a[data-disable]:not(.data-disable-listening), input[data-disable]:not(.data-disable-listening), button[data-disable]:not(.data-disable-listening)'),
		data_toggle = document.querySelectorAll('a[data-toggle]:not(.data-toggle-listening), input[data-toggle]:not(.data-toggle-listening), button[data-toggle]:not(.data-toggle-listening)');
	if (data_show.length || data_hide.length || data_toggle.length) {
		Array.from(data_show).forEach(function (el) {
			'use strict';
			el.classList.add('data-enable-listening');
			data_show_me(el);
		});
		Array.from(data_hide).forEach(function (el) {
			'use strict';
			el.classList.add('data-disable-listening');
			data_hide_me(el);
		});
		Array.from(data_toggle).forEach(function (el) {
			'use strict';
			el.classList.add('data-toggle-listening');
			data_togg_me(el);
		});
	}
});
window.dispatchEvent(showHideDataElementEvt);


// Toggle input type
var a_show = document.querySelectorAll('a.show');
if (a_show.length) {
	// renamed i to index. Below you do a for-loop and use the same variable name i. This can be really confusing
	// and, as you assign in the for loop the i variable, this i from the function(el, i) is never used - could be removed from code
	Array.from(a_show).forEach(function (el) {
		'use strict';
		var c = el.children,
			d = el.parentElement.nextElementSibling,
			i,
			all;
		el.parentElement.classList.add('has-show');
		d.addEventListener('keyup', function (e) {
			if (d.value === '') {
				el.parentElement.classList.remove('not-empty');
			} else {
				el.parentElement.classList.add('not-empty');
			}
		});
		el.addEventListener('click', function (e) {
			el.classList.toggle('show-toggle');
			for (i = 0, all = c.length; i < all; i = i + 1) {
				c[i].classList.toggle('hidden');
			}
			if (d.getAttribute('type') === 'password') {
				d.setAttribute('type', 'text');
			} else {
				d.setAttribute('type', 'password');
			}
			e.preventDefault();
		});
	});
}

function amountRun(el) {
	el.classList.add('semantic-input-initialized');
	var inc = createElementWithClass('a', 'incr'),
		dec = createElementWithClass('a', 'decr');

	inc.setAttribute('role', 'button');
	dec.setAttribute('role', 'button');
	inc.setAttribute('aria-label', 'Increase by 1');
	dec.setAttribute('aria-label', 'Descrease by 1');
	el.innerHTML = '<span class="semantic-amount">' + el.innerHTML + '</span>';

	Array.from(el.children).forEach(function (el) {
		var inp = el.querySelector('input');
		el.appendChild(inc);
		el.appendChild(dec);
		if (parseFloat(inp.value) === 1 || inp.value === '') {
			el.querySelector('.decr').classList.add('disabled');
		}
		if (inp.hasAttribute('min') && parseFloat(inp.value) < parseFloat(inp.getAttribute('min')) + 1) {
			el.querySelector('.decr').classList.add('disabled');
		}
		if (inp.hasAttribute('max') && parseFloat(inp.value) === parseFloat(inp.getAttribute('max'))) {
			el.querySelector('.incr').classList.add('disabled');
		}
	});
	if (el.parentNode.classList.contains('submit')) {
		Array.from(el.parentNode.querySelectorAll('button')).forEach(function (em) {
			if (em.classList.contains('size-m')) {
				el.classList.add('size-m');
			}
			if (em.classList.contains('size-l')) {
				el.classList.add('size-l');
			}
		});
	}
}

function amountClick(el) {
	Array.prototype.slice.call(el).map(function (el) {
		el.classList.add('input-amount-listening');
		return {
			input: el.querySelector('input'),
			decr: el.querySelector('.decr'),
			incr: el.querySelector('.incr'),
			get value() {
				return parseInt(this.input.value);
			},
			set value(newValue) {
				var input = el.querySelector("input"),
					decrElements,
					incrElements,
					dataLink,
					inputLink,
					decrElementLinkData,
					incrElementLinkData;
				input.value = newValue;

				decrElements = [this.decr]; // if has data-link, it will change decr for data-link element too
				incrElements = [this.incr]; // if has data-link, it will change decr for data-link element too

				// check if input has a data-link attribute. If it has, get element associated with and set new value
				dataLink = input.getAttribute("data-link");
				if (dataLink) {
					inputLink = document.querySelector(dataLink);
					if (inputLink) {
						inputLink.value = newValue;

						decrElementLinkData = inputLink.closest(".input-amount");
						incrElementLinkData = inputLink.closest(".input-amount");
						if (decrElementLinkData) {
							decrElementLinkData = decrElementLinkData.querySelector(".decr");
							decrElements.push(decrElementLinkData);
						}
						if (incrElementLinkData) {
							incrElementLinkData = incrElementLinkData.querySelector(".incr");
							incrElements.push(incrElementLinkData);
						}
					}
				}

				// loop through all decr elements to change its class if needed
				Array.from(decrElements).forEach(function (decrEl) {
					var st = 2;
					if (input.hasAttribute('min')) {
						st = parseFloat(input.getAttribute('min')) + 1;
					}
					if (parseFloat(newValue) < st) {
						decrEl.classList.add('disabled');
					} else {
						if (decrEl.classList.contains('disabled')) {
							decrEl.classList.remove('disabled');
						}
					}
				});
				Array.from(incrElements).forEach(function (incrEl) {
					if (input.hasAttribute('max')) {
						if (parseFloat(newValue) >= parseFloat(input.getAttribute('max'))) {
							incrEl.classList.add('disabled');
						} else {
							if (incrEl.classList.contains('disabled')) {
								incrEl.classList.remove('disabled');
							}
						}
					}
				});
			}
		};
	}).forEach(function (el) {
		var step = 1;
		if (el.input.hasAttribute('step')) {
			step = parseFloat(el.input.getAttribute('step'));
		}
		el.decr.addEventListener('click', function (e) {
			if (el.input.hasAttribute('min')) {
				if (el.value > parseFloat(el.input.getAttribute('min'))) {
					el.value -= step;
				}
			} else {
				if (el.value > 1) {
					el.value -= step;
				}
			}
			el.input.dispatchEvent(changeEvent);
			e.preventDefault();
		});
		el.incr.addEventListener('click', function (e) {
			if (el.input.hasAttribute('max')) {
				if (el.value < parseFloat(el.input.getAttribute('max'))) {
					el.value += step;
				}
			} else {
				el.value += step;
			}
			if (isNaN(el.value)) {
				el.value = 1;
			}
			el.input.dispatchEvent(changeEvent);
			e.preventDefault();
		});
		el.input.addEventListener('change', function () {
			el.value = parseFloat(el.value);
			if (isNaN(el.value)) {
				el.value = 1;
				el.decr.classList.add('disabled');
			}
		});
	});
}

// +/- input
window.addEventListener("semanticInput", function (evt) {
	"use strict";
	var input_amount = document.querySelectorAll('.input-amount:not(.semantic-input-initialized)');
	if (input_amount.length) {
		Array.from(input_amount).forEach(function (el) {
			el.classList.add('semantic-input-initialized');
			if (el.closest('[class^="popup-"]:not(html)') === null) {
				amountRun(el);
			} else {
				el.classList.add('in-popup');
			}
		});
		amountClick(document.querySelectorAll('.input-amount:not(.in-popup, .input-amount-listening)'));
	}
});
window.dispatchEvent(semanticInputEvt);

// Togglable input
window.addEventListener("accordeon", function (evt) {
	var input_show = document.querySelectorAll('.input-show > label');
	if (input_show.length) {
		Array.from(input_show).forEach(function (el) {
			"use strict";
			append_url(el, 'Toggle', 'toggle');
			el.querySelectorAll('a.toggle')[0].addEventListener('click', function (e) {
				el.parentElement.classList.toggle('toggle');
				setTimeout(function () {
					el.parentElement.querySelectorAll('input, textarea')[0].focus();
				}, 0);
				e.preventDefault();
			});
		});
	}
});
window.dispatchEvent(accordeonEvt);

// .l4ne.featured - prepend the big image before the list on mobile device (blog)
var list_news = document.getElementsByClassName('l4ne');
if (list_news.length) {
	Array.from(list_news).forEach(function (el) {
		"use strict";
		if (el.classList.contains('featured')) {
			Array.from(el.querySelectorAll('li:first-child')).forEach(function (el) {
				var clone_me = el.cloneNode(true),
					clone_cont = document.createElement('ul'),
					list = el.closest('.l4ne');
				clone_cont.classList.add('mobile-only', 'l4ne', 'l4ne-figure-before');
				el.closest('li').classList.add('mobile-hide');
				list.before(clone_cont);
				if (list.previousElementSibling.classList.contains('l4ne-figure-before')) {
					list.previousElementSibling.append(clone_me);
				}
			});
		}
	});
}

// Update text based on title (product page)
function dataChange(el, en, eo = '.inner') {
	Array.from(document.querySelectorAll(en)).forEach(function (em) {
		Array.from(em.querySelectorAll(eo)).forEach(function (en) {
			en.innerHTML = el;
		});
	});
}
window.addEventListener("dataChange", function (evt) {
	var data_change = document.querySelectorAll('a[data-change][title]:not(.listening-data-change), input[data-change][title]:not(.listening-data-change)'),
		data_change_to = document.querySelectorAll('[class^="data-change-to"]:not(.listening-data-change)');

	if (data_change_to.length) {
		Array.from(data_change_to).forEach(function (el) {
			var oldCont = createElementWithClass('span', 'hidden');
			oldCont.innerHTML = el.innerHTML;
			el.innerHTML = '<span class="inner">' + el.innerHTML + '</span>';
			el.appendChild(oldCont);
			el.classList.add('listening-data-change');
		});
	}
	if (data_change.length) {
		Array.from(data_change).forEach(function (el) {
			"use strict";
			el.classList.add('listening-data-change');
			el.addEventListener('click', function (e) {
				dataChange(el.getAttribute('title'), el.getAttribute('data-change'), ['.inner', '.hidden']);
				if (el.tagName.toLowerCase() === 'a') {
					e.preventDefault();
				}
			});
			if (!isMobile) {
				if (el.tagName.toLowerCase() === 'input' && el.nextElementSibling.tagName.toLowerCase() === 'label') {
					el.nextElementSibling.addEventListener('mouseenter', function (e) {
						dataChange(el.getAttribute('title'), el.getAttribute('data-change'));
					});
					el.nextElementSibling.addEventListener('mouseleave', function (e) {
						dataChange(document.querySelectorAll(el.getAttribute('data-change') + ' .hidden')[0].innerText, el.getAttribute('data-change'));
					});
				}
			}
		});
	}
});
window.dispatchEvent(dataChangeEvt);

// Self-embedded YouTube/Vimeo
var data_self_video = document.querySelectorAll('a[data-youtube], a[data-vimeo]');
if (data_self_video.length) {
	Array.from(data_self_video).forEach(function (el) {
		"use strict";
		el.addEventListener('click', function (e) {
			var iframeCont = createElementWithClass('iframe', 'iframe-playing');
			iframeCont.setAttribute('frameborder', 0);
			iframeCont.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
			iframeCont.setAttribute('allowfullscreen', '');
			if (el.hasAttribute('data-youtube')) {
				iframeCont.setAttribute('src', 'https://www.youtube.com/embed/' + el.getAttribute('data-youtube') + '?autoplay=1&amp;rel=0');
			}
			if (el.hasAttribute('data-vimeo')) {
				iframeCont.setAttribute('src', 'https://player.vimeo.com/video/' + el.getAttribute('data-vimeo') + '?autoplay=1');
			}
			el.appendChild(iframeCont);
			e.preventDefault();
		});
	});
}

window.addEventListener("bindInput", function (evt) {
	var data_bind_input = document.querySelectorAll('input[data-bind], textarea[data-bind]');
	if (data_bind_input.length) {
		Array.from(data_bind_input).forEach(function (el) {
			"use strict";
			el.addEventListener('change', function (e) {
				var binded = document.querySelectorAll('input[id="' + el.getAttribute('data-bind') + '"], textarea[id="' + el.getAttribute('data-bind') + '"]'),
					check_cont;
				Array.from(binded).forEach(function (em) {
					if (em.tagName === 'INPUT') {
						check_cont = em.closest('.check');
						em.checked = el.checked;
						if (check_cont !== null && el.checked === true) {
							check_cont.getElementsByClassName('invalid-feedback')[0].innerHTML = '';
						}
					} else if (em.tagName === 'TEXTAREA') {
						em.value = el.value;
						// em.setAttribute('xname', em.getAttribute('name'));
						em.removeAttribute('name');
					}
				});
			});
		});
	}
});
window.dispatchEvent(bindInputEvt);

// f8ps extra space & display (product page)
var form_product_sticky = document.getElementsByClassName('f8ps'),
	form_product = document.getElementsByClassName('f8pr');
if (form_product_sticky.length) {
	Array.from(form_product_sticky).forEach(function (el) {
		"use strict";
		if(!el.classList.contains('align-top')){
			html_tag.classList.add('has-f8ps');
		} else {
			html_tag.classList.add('has-f8ps-top');
		}
		html_tag.classList.add('product-not-scrolled');
		aria_hide(el);
		root_styles.style.setProperty('--f8ps_h', el.offsetHeight + 'px');
		root_styles.style.setProperty('--shopify_section_header_height', header_id.offsetHeight + 'px');
		root_styles.style.setProperty('--header_outer_height', header_outer.offsetHeight + 'px');
		window.addEventListener('scroll', function () {
			root_styles.style.setProperty('--f8ps_h', el.offsetHeight + 'px');
			root_styles.style.setProperty('--header_outer_height', header_outer.offsetHeight + 'px');
		});
		if (totop_id) {
			totop_id.style.paddingBottom = el.offsetHeight + 'px';
		}
		Array.from(el.querySelectorAll('a, input, button, select, textarea, [role="button"]')).forEach(function (el) {
			el.setAttribute('tabindex', -1);
		});
	});
}

// Cookie bar
var cookie_id = document.getElementById('cookie-bar'),
	cookie_popup = document.querySelector('[data-title*="cookie"][data-popup-delay]'),
	cookiebanner_testmode = general.cookiebanner_testmode,
	age_verify_popup_testmode = general.age_verify_popup_testmode;

function hideCookieBanner() {
	"use strict";
	if (cookie_popup) {
		cookie_popup.removeAttribute('data-popup-delay');
	}
	setTimeout(function () {
		html_tag.classList.remove('cookie-on');
	}, 400);
	if (!form_product_sticky.length) {
		root_id.removeAttribute('style');
		if (totop_id) {
			totop_id.removeAttribute('style');
		}
	}
}

function cookieClick(el) {
	"use strict";
	html_tag.classList.add('cookie-toggle');
	if (el.classList.contains('cookie-accept')) {
		handleCookieAccept();
	} else if (el.classList.contains('cookie-decline')) {
		handleCookieDecline();
	} else {
		hideCookieBanner();
	}
	if (!form_product_sticky.length) {
		root_id.removeAttribute('style');
		if (totop_id) {
			totop_id.removeAttribute('style');
		}
	}
	setTimeout(function () {
		html_tag.classList.remove('cookie-on');
	}, 400);
	Cookies.set('cookie-bar', 'no', { expires: 30, sameSite: 'none', secure: true });
}

function handleCookieAccept() {
	"use strict";
	Cookies.set('cookie-bar', 'no', { expires: 30, sameSite: 'none', secure: true });
	window.Shopify.customerPrivacy.setTrackingConsent(true, hideCookieBanner);
}

function handleCookieDecline() {
	"use strict";
	Cookies.set('cookie-bar', 'no', { expires: 30, sameSite: 'none', secure: true });
	window.Shopify.customerPrivacy.setTrackingConsent(false, hideCookieBanner);
}

if (cookie_id || cookie_popup || document.querySelector('.popup-blocker[data-title="age-verifier-popup"] .age-verifier-popup-cookie-text') ) {
	window.Shopify.loadFeatures([
			{
				name: 'consent-tracking-api',
				version: '0.1',
			}
		],
		function (error) {
			if (error) {
				throw error;
			}
			const shouldShowGDPRBanner = window.Shopify.customerPrivacy.shouldShowGDPRBanner();
			if (!shouldShowGDPRBanner) {
				Cookies.set('cookie-bar', 'no', { expires: 30, sameSite: 'none', secure: true });
			}
		});

	if (document.querySelector('.popup-blocker[data-title="age-verifier-popup"] .age-verifier-popup-cookie-text')) {
		if (age_verify_popup_testmode) {
			Cookies.remove('cookie-bar', { sameSite: 'none', secure: true });
		}
	} else if (cookiebanner_testmode) {
		Cookies.remove('cookie-bar', { sameSite: 'none', secure: true });
	}

	if (!form_product_sticky.length && cookie_id) {
		html_tag.classList.remove('cookie-on');
		root_id.style.paddingBottom = cookie_id.offsetHeight + 'px';
		if (totop_id) {
			totop_id.style.paddingBottom = cookie_id.offsetHeight + 'px';
		}
	}
	append_url(root_id, 'Close', 'cookie-close');
	Array.from(document.querySelectorAll('.cookie-close, .cookie-decline, .cookie-accept')).forEach(function (el) {
		"use strict";
		el.addEventListener('click', function (e) {
			cookieClick(el);
			e.preventDefault();
		});
	});
}

if (Cookies.get('cookie-bar') === 'no' || document.getElementsByClassName('popup-blocker').length) {
	if (cookie_popup) {
		cookie_popup.removeAttribute('data-popup-delay');
	}
	if (Cookies.get('cookie-bar') === 'no' && document.querySelector('.popup-blocker[data-title="age-verifier-popup"] .age-verifier-popup-cookie-text')) {
		document.querySelector('.popup-blocker[data-title="age-verifier-popup"] .age-verifier-popup-cookie-text').remove();
		document.querySelector('.popup-blocker[data-title="age-verifier-popup"] .cookie-accept').classList.remove('cookie-accept');
	}
	html_tag.classList.remove('cookie-on');
	if (!form_product_sticky.length) {
		root_id.removeAttribute('style');
		if (totop_id) {
			totop_id.removeAttribute('style');
		}
	}
} else {
	html_tag.classList.add('cookie-on');
}

// f8pr - sticky compact form
if (form_product.length) {
	if (form_product_sticky.length) {
		window.addEventListener('resize', function () {
			new_css('css-product-scrolled', window.filepaths['async_product_scrolled_css']);
		});
		window.addEventListener('scroll', function () {
			new_css('css-product-scrolled', window.filepaths['async_product_scrolled_css']);
		});
	}
	Array.from(form_product).forEach(function (el) {
		"use strict";
		var dist;
		if (el.closest('.l4cl') === null) {
			if (header_id) {
				dist = header_id.offsetHeight;
			} else {
				dist = 0;
			}

			function io(entries) {
				entries.map((entry) => {
					if (entry.isIntersecting) {
						html_tag.classList.remove('product-scrolled');
						html_tag.classList.add('product-not-scrolled');
						if (form_product_sticky.length) {
							aria_hide(form_product_sticky[0]);
						}
					} else {
						html_tag.classList.add('product-scrolled', 'f8ps-css');
						html_tag.classList.remove('product-not-scrolled');
						if (form_product_sticky.length) {
							aria_show(form_product_sticky[0]);
						}
						if (form_product_sticky.length) {
							new_css('css-product-scrolled', window.filepaths['async_product_scrolled_css']);
						}
					}
				});
			}
			new IntersectionObserver(io, {
			}).observe(el);
		}
	});
}

// Custom look of select boxes
function selectRun(el) {
	var sp = '',
		bvsel,
		findSwiper;
	if (el.hasAttribute('data-search-placeholder')) {
		sp = el.getAttribute('data-search-placeholder');
	}
	el.setAttribute('tabindex', -1);
	if (el.querySelectorAll('option[selected]:not([disabled], .disabled, [data-class="disabled"])').length) {
		el.parentNode.classList.add('done');
	}
	if (!isMobile) {
		if (!el.classList.contains('select-init')) {
			wrap(el, document.createElement('span'), 'select-wrapper');
			randomize(el);
			bvsel = new BVSelect({
				selector: '#' + el.getAttribute('id') + '[data-random="' + el.dataset.random + '"]',
				searchbox: true,
				search_placeholder: sp,
				search_autofocus: true,
				offset: false
			});
			Array.from(el.nextSibling.querySelectorAll('.bv_ul_inner a')).forEach(function (em) {
				em.addEventListener('click', function () {
					el.dispatchEvent(changeEvent);
					if (em.closest('.form-group') !== null) {
						em.closest('.form-group').classList.remove('is-invalid');
					}
					if (em.parentNode.classList.contains('has-scroll')) {
						document.querySelectorAll(em.getAttribute('href'))[0].scrollIntoView();
					}
					if (em.hasAttribute('data-l4pr-index')) {
						findSwiper = document.querySelectorAll('.l4pr.s4wi')[0].children[0].swiper;
						if (findSwiper !== undefined) {
							findSwiper.slideTo(em.getAttribute('data-l4pr-index'));
						}
					}
					if (em.hasAttribute('data-slide-to')) {
						if (em.closest('li') !== null) {
							findSwiper = em.closest('li').querySelectorAll('.s4wi')[0];
							if (findSwiper !== undefined) {
								findSwiper.children[0].swiper.slideTo(em.getAttribute('data-slide-to'));
							}
						}
					}
				});
			});
			Array.from(el.parentNode.getElementsByClassName('bv_atual')).forEach(function (em) {
				em.addEventListener('click', function () {
					new_css('css-select', window.filepaths['async_select_css']);
				});
				em.addEventListener('focus', function () {
					new_css('css-select', window.filepaths['async_select_css']);
				});
			});
		}
		el.classList.add('select-init');
	}
}

// Custom look of select boxes
window.addEventListener("semanticSelect", function (evt) {
	var select_tag = document.querySelectorAll('select[id]:not(.semantic-select-initialized):not(.js-hidden)');
	if (select_tag.length && !isMobile) {
		loadRes(window.filepaths['plugin_selects_js'], function () {
			"use strict";
			Array.from(select_tag).forEach(function (el) {
				el.classList.add('semantic-select-initialized');
				if (el.closest('[class^="popup-"]:not(html, .rendered)') === null || el.closest('.box-outer') !== null) {
					selectRun(el);
				}
			});
		}, 'selects-loaded');
	}
});
window.dispatchEvent(semanticSelectEvt);

// sidebar sliding from the edge (product page, cart)
var module_product = document.getElementsByClassName('m6pr'),
	module_collection = document.querySelectorAll('.m6cl.sticky');
if (module_product.length || module_collection.length) {
	html_tag.classList.add('t1pr');
}

// sidebar sliding from the edge (product page, cart)
var module_panel = document.getElementsByClassName('m6pn'),
	a_module_panel = document.querySelectorAll('a[data-panel]');

function negTabIn(el) {
	"use strict";
	// Elements won't be tabbable.
	Array.from(el.querySelectorAll('a, input, button, select, textarea, [role="button"]')).forEach(function (el) {
		el.setAttribute('tabindex', -1);
	});
}
function posTabIn(el) {
	"use strict";
	// Elements will be tabbable.
	Array.from(el.querySelectorAll('a, input, button, select, textarea, [role="button"]')).forEach(function (el) {
		el.removeAttribute('tabindex');
	});
}

function hidePanels() {
	"use strict";
	var cld, m6pn_clicked;
	html_tag.classList.remove('m6pn-open');
	html_tag.classList.remove('f8fl-open');
	Array.from(module_panel).forEach(function (el) {
		// negTabIn(el);
		el.classList.remove('toggle');
		el.setAttribute('aria-hidden', true);
		Array.from(el.querySelectorAll('a, input, button, select, textarea, [role="button"]')).forEach(function (el) {
			el.setAttribute('tabindex', -1);
		});
	});
	m6pn_clicked = document.getElementsByClassName('m6pn-clicked');
	if (m6pn_clicked.length) {
		if (whatInput.ask() === 'keyboard') {
			setTimeout(function () {
				document.getElementsByClassName('m6pn-clicked')[0].focus();
			}, 100);
		}
	}
}

//to check when element gets position sticky
function getStickyFooters() {
	"use strict";
	var sticky_in_panel = document.querySelectorAll('.sticky-in-panel:not(.sticky-panel-initialized)');
	if (sticky_in_panel.length) {
		Array.from(sticky_in_panel).forEach(function (eo) {
			eo.classList.add('sticky-panel-initialized');
			if (eo.classList.contains('sticky-in-panel')) {
				if (!eo.getElementsByClassName('offset-dist').length) {
					var trickDiv = createElementWithClass('div', 'offset-dist');
					eo.prepend(trickDiv);
				}
				const observer = new IntersectionObserver(
					([e]) => e.target.parentElement.classList.toggle('is-sticky', e.intersectionRatio < 1), {
						threshold: [1, 0]
					}
				);
				observer.observe(eo.getElementsByClassName('offset-dist')[0]);
			}
		});
	}
}

if (module_panel.length) {
	function openPanel(id) {
		var linked = document.querySelectorAll('.m6pn[id="' + id + '"]'),
			a_source = document.querySelectorAll('a[data-panel="' + id + '"]');
		overlayClose();
		asyncCSS();
		html_tag.classList.add('has-panels', 'm6pn-open');
		Array.from(a_module_panel).forEach(function (em) {
			em.classList.remove('m6pn-clicked');
		});
		Array.from(a_source).forEach(function (em) {
			em.classList.add('m6pn-clicked');
		});
		Array.from(module_panel).forEach(function (el) {
			el.setAttribute('aria-hidden', true);
			el.classList.remove('toggle');
		});
		Array.from(linked).forEach(function (el) {
			el.classList.add('toggle');
			el.setAttribute('aria-hidden', false);
			posTabIn(el);
			setTimeout(function () {
				el.querySelectorAll('a, input, button, select, textarea, [role="button"]')[0].focus();
			}, 100);
		});
		if (document.getElementsByClassName('f8fl').length) {
			new_css('css-filters', window.filepaths['async_filters_css']);
		}
		getStickyFooters();
		new_css('css-panels', window.filepaths['async_panels_css']);
	}

	window.addEventListener("modulePanel", function(evt) {
		module_panel = document.querySelectorAll('.m6pn');
		Array.from(module_panel).forEach(function (el) {
			"use strict";
			el.setAttribute('aria-hidden', true);
			Array.from(el.getElementsByClassName('m6pn-close')).forEach(function (em) { em.remove(); });
			append_url(el, 'Close', 'm6pn-close');
			Array.from(el.querySelectorAll('a, input, button, select, textarea, [role="button"]')).forEach(function (el) {
				el.setAttribute('tabindex', -1);
			});
			Array.from(el.getElementsByClassName('m6pn-close')).forEach(function (em) {
				"use strict";
				em.addEventListener('click', function (e) {
					hidePanels();
					e.preventDefault();
				});
			});
			Array.from(el.querySelectorAll('.l4pr.aside-pager')).forEach(function (em) {
				em.classList.remove('aside-pager');
			});
		});
		document.onkeydown = function (evt) {
			"use strict";
			evt = evt || window.event;
			if (evt.key === 'Escape') {
				hidePanels();
			}
		};
	});
	window.dispatchEvent(modulePanelEvt);
}

if (a_module_panel.length) {
	window.addEventListener("modulePanelAnchor", function(evt) {
		var a_module_panel = document.querySelectorAll('a[data-panel]:not(.listening)');
		Array.from(a_module_panel).forEach(function (el) {
			"use strict";
			var id = el.dataset.panel,
				href = el.getAttribute('href'),
				linked = document.querySelectorAll('.m6pn[id="' + id + '"]');
			el.classList.add('listening');

			if (linked.length) {
				el.setAttribute('aria-haspopup', true);
				el.setAttribute('aria-controls', id);
				if (el.tagName.toLowerCase() === 'a') {
					el.addEventListener('click', function (e) {
						if (id == 'cart') {
							e.preventDefault();
							ajaxCart.load();
						} else {
							e.preventDefault();
							openPanel(id);
							if (!href.includes('#')) {
								e.preventDefault();
							}
						}
					});
					el.addEventListener('keyup', function (e) {
						if (e.key === ' ') {
							e.preventDefault();
							if (id == 'cart') {
								ajaxCart.load();
								return;
							} else {
								openPanel(id);
							}
						}
					});
				}
			}
		});
	});
	window.dispatchEvent(modulePanelAnchorEvt);
}

window.addEventListener("imageCompare", function(evt) {
	var image_compare = document.getElementsByClassName('img-compare');
	if (image_compare.length) {
		loadRes(window.filepaths['plugin_compare_js'], function () {
			"use strict";
			new_css('compare-css', window.filepaths['async_compare_css']);
			Array.from(image_compare).forEach(function (el) {
				var a, b,
					opt_vertical = false,
					opt_start = 50,
					opt_labels = false,
					opt_labels_bef = 'Before',
					opt_labels_aft = 'After';

				if (el.querySelectorAll('img').length === 2) {
					if (el.classList.contains('vertical')) {
						opt_vertical = true;
					} else {
						if (global_dir[1] === false) {
							a = el.children[0],
								b = a.cloneNode(true);
							el.appendChild(b);
							el.removeChild(a);
						}
					}
					if (el.getAttribute('data-start') !== null) {
						if (global_dir[1] === false) {
							opt_start = 100 - parseFloat(el.getAttribute('data-start'));
						} else {
							opt_start = parseFloat(el.getAttribute('data-start'));
						}
					}
					if (el.getAttribute('data-label-before') === '') {
						el.classList.add('no-label-before');
					}
					if (el.getAttribute('data-label-after') === '') {
						el.classList.add('no-label-after');
					}
					if (el.getAttribute('data-label-before') !== null || el.getAttribute('data-label-after') !== null) {
						opt_labels = true;
						if (el.getAttribute('data-label-before') !== null) {
							opt_labels_bef = el.getAttribute('data-label-before');
						} else {
							el.classList.add('no-label-before');
						}
						if (el.getAttribute('data-label-after') !== null) {
							opt_labels_aft = el.getAttribute('data-label-after');
						} else {
							el.classList.add('no-label-after');
						}
					}
					if (el.children.length === 2) {
						new ImageCompare(el, {
							verticalMode: opt_vertical,
							startingPoint: opt_start,
							showLabels: opt_labels,
							labelOptions: {
								before: opt_labels_bef,
								after: opt_labels_aft
							}
						}).mount();
					}
				}
			}, 'compare-loaded');
		});
	}
});
window.dispatchEvent(imageCompareEvt);

window.addEventListener("inputDate", function(evt) {
	var input_date = document.querySelectorAll('input[type="date"]:not(.datepicker-initialized)'),
		global_lang = general.language;
	if (input_date.length && !isMobile) {
		var datepicker_path,
			datepicker_langs = ['ar', 'az', 'bg', 'bm', 'bn', 'br', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr', 'gl', 'he', 'hi', 'hr', 'hu', 'hy', 'id', 'is', 'it', 'ja', 'ka', 'kk', 'km', 'ko', 'lt', 'lv', 'me', 'mk', 'mn', 'mr', 'ms', 'nl', 'no', 'oc', 'pl', 'pt', 'ro', 'ru', 'si', 'sk', 'sl', 'sq', 'sr', 'sv', 'sw', 'ta', 'tg', 'th', 'tk', 'tr', 'uk', 'uz', 'vi'],
			datepicker_options = {
				orientation: 'bottom',
				format: 'yyyy-mm-dd',
				todayHighlight: true,
				language: global_lang
			};
		new_css('datepicker-css', window.filepaths['async_datepicker_css']);
		if (datepicker_langs.includes(global_lang)) {
			if (window.Shopify === undefined) {
				datepicker_path = 'js/datepicker-lang/datepicker-lang-' + global_lang + '.js';
			} else {
				datepicker_path = datepicker_path_global;
			}
			loadRes(window.filepaths['plugin_datepicker_js'], function () {
				loadRes(datepicker_path, function () {
					Array.from(input_date).forEach(function (el) {
						var minDate = null,
							maxDate = null;
						if (el.getAttribute('data-min-date') == 'today') {
							minDate = new Date();
						}
						if (el.getAttribute('data-max-days') != null) {
							maxDate = new Date();
							maxDate.setDate(maxDate.getDate() + parseInt(el.getAttribute('data-max-days')));
						}
						datepicker_options['minDate'] = minDate;
						datepicker_options['maxDate'] = maxDate;
						el.classList.add('datepicker-initialized');
						el.setAttribute('type', 'text');
						new Datepicker(el, datepicker_options);
					}, 'datepicker-loaded');
				}, 'datepicker-lang-loaded');
			});
		} else {
			loadRes(window.filepaths['plugin_datepicker_js'], function () {
				Array.from(input_date).forEach(function (el) {
					var minDate = null,
						maxDate = null;
					if (el.getAttribute('data-min-date') == 'today') {
						minDate = new Date();
					}
					if (el.getAttribute('data-max-days') != null) {
						maxDate = new Date();
						maxDate.setDate(maxDate.getDate() + parseInt(el.getAttribute('data-max-days')));
					}
					datepicker_options['minDate'] = minDate;
					datepicker_options['maxDate'] = maxDate;
					el.classList.add('datepicker-initialized');
					el.setAttribute('type', 'text');
					new Datepicker(el, datepicker_options);
				}, 'datepicker-loaded');
			});
		}
	}
});
window.dispatchEvent(inputDateEvt);

window.addEventListener("listCart", function(evt) {
	var list_cart = document.getElementsByClassName('l4ca');
	if (list_cart.length) {
		var removeHidden = function() {
			if (document.querySelector('#cart .empty.hidden') && document.querySelector('#cart .l4ca > li') === null) {
				document.querySelector('#cart .empty').classList.remove('hidden');
			}
			if (document.querySelector('.cart-empty.hidden') && document.querySelector('.form-cart .l4ca > li') === null) {
				document.querySelector('.cart-empty').classList.remove('hidden');
				document.querySelector('.cart-empty ~ *').classList.add('hidden');
			}
		};
		Array.from(list_cart).forEach(function (el) {
			var hide_delay = 10000000;
			if (el.getAttribute('data-delay')) {
				hide_delay = parseFloat(el.getAttribute('data-delay'));
			}
			Array.from(el.querySelectorAll('a .icon-trash')).forEach(function (em) {
				em.closest('a').classList.add('remove');
			});
			if(el.classList.contains('in-panel')){
				Array.from(el.children).forEach(function (em) {
					if(em.querySelectorAll('select').length){
						em.classList.add('has-select');
					}
				});
			}
			Array.from(el.querySelectorAll('a.remove')).forEach(function (em) {
				var par = em.closest('li');
				if (par !== undefined) {
					par.addEventListener('removing', function (e) {
						asyncCSS();
						if (!par.classList.contains('removing')) {
							par.classList.add('removing');
							var timeout = setTimeout(function () {
								if (par.classList.contains('removing')) {
									//par.remove();
									par.classList.add('removing2');
									setTimeout(function () {
										par.remove();
										removeHidden();
									}, 400);
								}
							}, hide_delay);
						} else {
							par.classList.remove('removing');
							removeHidden();
							clearTimeout(timeout);
						}
						e.preventDefault();
					});
				}
			});
		});
	}
});
window.dispatchEvent(listCartEvt);


// Searchbox
function removeTextSearch() {
	"use strict";
	html_tag.classList.remove('search-full', 'user-form-active');
	html_tag.classList.add('search-cleared');
	search_id.classList.remove('has-text', 'not-empty');
	search_input[0].value = '';
	search_input[0].focus();
	if (!search_input[0] === document.activeElement) {
		setTimeout(function () {
			search_input[0].focus();
		}, 250);
	}
}

function overlayClose(n) {
	"use strict";
	html_tag.classList.remove('search-compact-active', 'search-full', 'search-full-mode', 'user-form-active', 'm2a', 'nav-hover', 'f8fl-open');
	if (search_id) { search_id.classList.remove('full', 'has-text', 'not-empty'); }
	if (search_input) { search_input[0].value = ''; }

	if (nav_id) {
		clear_mobile_nav();
	}
	if (nav_top_id) {
		remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
	}
	if (nav_bar_id) {
		remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
	}
	if (nav_user_id) {
		remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
	}
	if (n !== true) {
		if (module_panel.length) {
			hidePanels();
		}
	}
}

window.addEventListener("search", function(evt) {
	var search_id = document.getElementById('search'),
		header_id = document.getElementsByClassName('shopify-section-header')[0];

	if (search_id) {
		var search_input = search_id.querySelectorAll('input');
		append_url(search_id, 'Toggle', 'toggle');
		if (search_id.classList.contains('compact')) {
			var search_compact_cont = document.createElement('span'),
				v_cm; //,
			if (nav_user_id) {
				if (nav_user_id.querySelectorAll('li.search.mobile-only').length) {
					v_cm = false;
				}
			}
			search_compact_cont.classList.add('search-compact-cont');
			append_url(search_compact_cont, 'Close', 'search-compact-toggle', '#search');
			search_compact_cont.getElementsByClassName('search-compact-toggle')[0].setAttribute('aria-controls', 'search');
			if (v_cm === false) {
				search_compact_cont.classList.add('mobile-hide');
				html_tag.classList.add('t1srn');
			}
			if (search_id.classList.contains('blur')) {
				html_tag.classList.add('search-blur');
			}
		}
		if (search_id.classList.contains('compact') && !search_id.classList.contains('compact-desktop') && !search_id.classList.contains('compact-mobile')) {
			negTabIn(search_id.getElementsByTagName('fieldset')[0]);
		} else if (search_id.classList.contains('compact-mobile')) {
			enquire.register('screen and (max-width: 760px)', function () {
				negTabIn(search_id.getElementsByTagName('fieldset')[0]);
			});
		} else if (search_id.classList.contains('compact-desktop')) {
			html_tag.classList.add('compact-desktop');
			enquire.register('screen and (min-width: 761px)', function () {
				negTabIn(search_id.getElementsByTagName('fieldset')[0]);
			});
		}
		if (search_id.classList.contains('no-overlay')) {
			html_tag.classList.add('no-search-overlay');
		}
		Array.from(search_id.querySelectorAll('form > p, fieldset > p')).forEach(function (el) {
			"use strict";
			append_url(el, 'Clear', 'clear-toggle');
			append_url(el, 'Clear', 'search-back');
			el.getElementsByClassName('search-back')[0].setAttribute('aria-controls', 'search');
			Array.from(el.querySelectorAll('.clear-toggle')).forEach(function (em) {
				em.addEventListener('click', function (e) {
					e.preventDefault();
					removeTextSearch();
				});
			});
		});
		search_id.addEventListener('submit', function (e) {
			"use strict";
			search_id.classList.add('processing');
		});
		Array.from(search_input).forEach(function (el) {
			"use strict";
			el.addEventListener('keyup', function () {
				html_tag.classList.remove('m2a');
				if (el.value.length === 0) {
					html_tag.classList.remove('search-full', 'search-full-mode', 'user-form-active');
					search_id.classList.remove('full', 'has-text', 'not-empty', 'processing');
				} else {
					html_tag.classList.add('search-full', 'search-full-mode');
					search_id.classList.add('full', 'has-text', 'not-empty', 'processing');
					setTimeout(function () {
						liveSearch(el);
					}, 300);
				}
			});
			el.addEventListener('focus', function () {
				html_tag.classList.add('search-focus');
				html_tag.classList.remove('nav-hover');
				if (nav_id) {
					remove_active_submenus(nav_id.querySelectorAll('a.toggle'));
				}
				if (nav_top_id) {
					remove_active_submenus(nav_top_id.querySelectorAll('a.toggle'));
				}
				if (nav_user_id) {
					remove_active_submenus(nav_user_id.querySelectorAll('a.toggle'));
				}
				if (nav_bar_id) {
					remove_active_submenus(nav_bar_id.querySelectorAll('a.toggle'));
				}

				new_css('css-search', window.filepaths['async_search_css']);
			});
		});
		Array.from(search_id.querySelectorAll('a.toggle')).forEach(function (el) {
			"use strict";
			el.addEventListener('click', function (e) {
				clearCompactSearch();
				search_id.classList.remove('full', 'has-text', 'not-empty');
				html_tag.classList.remove('search-focus', 'search-full', 'search-full-mode', 'user-form-active');
				e.preventDefault();
			});
		});
		Array.from(header_id.querySelectorAll('[aria-controls="search"]')).forEach(function (el) {
			"use strict";
			el.setAttribute('href', '#' + search_id.getAttribute('id'));
			el.addEventListener('click', function (e) {
				compactSearch();
				e.preventDefault();
			});
			if (!isMobile) {
				el.addEventListener('mouseover', function () {
					new_css('css-search', window.filepaths['async_search_css']);
				});
			}
		});
		Array.from(header_id.querySelectorAll('[aria-controls="cart"]')).forEach(function (el) {
			"use strict";
			if (!isMobile) {
				el.addEventListener('mouseover', function () {
					html_tag.classList.add('cart-hover');
				});
				el.addEventListener('mouseout', function () {
					html_tag.classList.remove('cart-hover');
				});
			}
		});

		// Hide #search when clicked outside;
		enquire.register('screen and (min-width: 761px)', function () {
			document.addEventListener('click', function (event) {
				"use strict";
				if (!(event.target.getAttribute('aria-controls') === 'search' || (event.target.closest('a[aria-controls]') !== null && event.target.closest('a[aria-controls]').getAttribute('aria-controls') === 'search') || event.target.closest('#search') !== null || event.target.closest('.user-login') !== null)) {
					clearCompactSearch();
				}
			});
		});


		function clearCompactSearch() {
			"use strict";
			html_tag.classList.remove('search-compact-active', 'search-full', 'search-full-mode', 'user-form-active');
			search_id.classList.remove('full', 'has-text', 'not-empty');
			negTabIn(search_id.getElementsByTagName('fieldset')[0]);
			search_input[0].value = '';
		}

		function compactRoom() {
			"use strict";
			var logo_id = document.getElementById('logo'),
				lg_off,
				el_off;

			if (html_tag.getAttribute('dir') === 'rtl') {
				el_off = header_outer.clientWidth - search_id.offsetLeft - search_id.clientWidth;
				lg_off = header_outer.clientWidth - logo_id.offsetLeft - logo_id.clientWidth;
			} else {
				el_off = search_id.offsetLeft;
				lg_off = logo_id.offsetLeft;
			}

			if (search_id.clientWidth + el_off < lg_off - logo_id.clientWidth) {
				html_tag.classList.add('has-logo-room');
				html_tag.classList.remove('no-logo-room');
			} else {
				html_tag.classList.add('no-logo-room');
				html_tag.classList.remove('has-logo-room');
			}
		}

		function compactSearch() {
			"use strict";
			if (html_tag.classList.contains('search-compact-active')) {
				clearCompactSearch();
			} else {
				new_css('css-search', window.filepaths['async_search_css']);
				html_tag.classList.add('search-compact-active');
				html_tag.classList.remove('user-form-active', 'm2a', 'nav-hover', 'search-full-mode', 'f8fl-open');
				search_id.classList.remove('full', 'has-text', 'not-empty');
				search_input[0].value = '';
				search_input[0].focus();
				if (!search_input[0] === document.activeElement) {
					setTimeout(function () {
						search_input[0].focus();
					}, 250);
				}
				posTabIn(search_id.getElementsByTagName('fieldset')[0]);
			}
		}

	}
});
window.dispatchEvent(searchEvt);

// Newsletter pop-up
var newsletter_popup = document.querySelector('.popup-a[data-title="newsletter-popup"]');

window.addEventListener("schemeTooltip", function (evt) {
	// Create tooltips
	var scheme_tooltip = document.querySelectorAll('.s1tt:not(.ready)');
	if (scheme_tooltip.length) {
		Array.from(scheme_tooltip).forEach(function (el, in1) {
			var innerText = el.innerHTML,
				nr = Math.floor(Math.random() * 1000000);
			if (el.closest('p, h1, h2, h3, h4, h5, h6') !== null) {
				el.closest('p, h1, h2, h3, h4, h5, h6').classList.add('s1tt-cont');
			}
			if (!(el.getAttribute('data-panel') || el.getAttribute('data-panel'))) {
				el.setAttribute('data-index', 'tip-' + nr);
				if (el.tagName.toLowerCase() === 'a') {
					el.setAttribute('data-popup', 'tip-' + nr);
				} {
					append_url(el, 'Popup', 's1tt-popup');
					el.getElementsByClassName('s1tt-popup')[0].setAttribute('data-popup', 'tip-' + nr);
				}
				var linkedPopup = document.createElement('div');
				linkedPopup.classList.add('popup-a', 'w360');
				linkedPopup.setAttribute('data-title', el.getAttribute('data-index'));
				linkedPopup.innerHTML = '<p>' + innerText + '</p>';
				root_id.appendChild(linkedPopup);
			}
			var icon = createElementWithClass('i', 'icon-info');
			icon.setAttribute('aria-hidden', 'true');
			el.appendChild(icon);
			el.classList.add('ready');
		});
	}
});
window.dispatchEvent(schemeTooltipEvt);

// Popups async (move the loaded function at the top of scripts-async + delete the below if buggy)
var loadPopup = function (id, c) {
	"use strict";
	loadRes(window.filepaths['plugin_popups_js'], function () {
		var allPopups = document.querySelectorAll('[class^="popup-"]:not(html):not(.ready, .initialized-popup)'),
			i_amount;
		if (allPopups.length > 0) {
			allPopups.semanticPopup();
		}
		openPopup(id);
		Array.from(allPopups).forEach(function (el) {
			if (!el.classList.contains('rendered')) {
				Array.from(el.getElementsByClassName('m6tb')).forEach(function (em) {
					if (typeof semanticTabs === 'function' && !el.classList.contains('tabs-initialized')) {
						semanticTabs(em);
					}
					em.classList.add('tabs-initialized');
				});
				Array.from(el.getElementsByClassName('f8vl')).forEach(function (em) {
					validator_run(em);
				});
				Array.from(el.querySelectorAll('a[data-enable], input[data-enable], button[data-enable]')).forEach(function (em) {
					data_show_me(em);
				});
				Array.from(el.querySelectorAll('a[data-disable], input[data-disable], button[data-disable]')).forEach(function (em) {
					data_hide_me(em);
				});
				Array.from(el.querySelectorAll('a[data-toggle], input[data-toggle], button[data-toggle]')).forEach(function (em) {
					data_togg_me(em);
				});
				loadRes(window.filepaths['plugin_selects_js'], function () {
					Array.from(el.getElementsByTagName('select')).forEach(function (el) {
						selectRun(el);
					});
				}, 'selects-loaded');
				var form_children = document.querySelectorAll('form > *, fieldset > *, .has-select');
				if (form_children) {
					assignIndex(form_children);
				}
				i_amount = el.getElementsByClassName('input-amount');
				if (i_amount.length) {
					Array.from(el.getElementsByClassName('input-amount')).forEach(function (el) {
						amountRun(el);
					});
					amountClick(i_amount);
				}
			}
		});
		if (cookie_popup) {
			Array.from(cookie_popup.querySelectorAll('.cookie-decline, .cookie-accept')).forEach(function (el) {
				"use strict";
				el.addEventListener('click', function (e) {
					cookieClick(el);
					e.preventDefault();
				});
			});
		}
		if (newsletter_popup) {
			Array.from(newsletter_popup.querySelectorAll('a.close')).forEach(function (el) {
				el.addEventListener("click", function(event) {
					Cookies.set('has-newsletter', 'no', { sameSite: 'none', secure: true });
				});
			});
			newsletter_popup.querySelector('form').addEventListener("submit", function(event) {
				Cookies.set('has-newsletter', 'no', { sameSite: 'none', secure: true });
			});
		}
		if (document.getElementById(id).classList.contains('popup-blocker')) {
			html_tag.classList.add('page-blocked');
			Array.from(document.querySelectorAll('.popup-blocker a.close')).forEach(function (el) {
				var popup_delay_not_blocker = document.querySelectorAll('[data-popup-delay][data-title]:not(.popup-blocker)');
				el.addEventListener('click', function (e) {
					Cookies.set('age', 'old', { sameSite: 'none', secure: true });
					cookieClick(el);
					html_tag.classList.remove('page-blocked');
					if (popup_delay_not_blocker.length) {
						delayHandler(popup_delay_not_blocker[0]);
					}
				});
			});
		}
		if (!html_tag.classList.contains(id + '-loaded') && typeof c === 'function') {
			c();
			return true;
		}
		if (!html_tag.classList.contains(id + '-loaded')) {
			html_tag.classList.add(id + '-loaded');
		}
		return true;
	}, 'popup-loaded');
};

var allApopups = document.querySelectorAll('a[data-popup], form[data-popup]'),
	formPopups = document.querySelectorAll('form[data-popup]'),
	age_verify_popup_testmode  = general.age_verify_popup_testmode,
	newsletter_popup_testmode = general.newsletter_popup_testmode;

function popupFocus(im) {
	setTimeout(function () {
		if (document.querySelectorAll('[data-title="' + im + '"]')[0].querySelectorAll('a, input, button, select, textarea, [role="button"]')[0] != undefined) {
			document.querySelectorAll('[data-title="' + im + '"]')[0].querySelectorAll('a, input, button, select, textarea, [role="button"]')[0].focus();
		}
	}, 100);
}

function delayHandler(el) {
	var proceed = false;
	if (el.getAttribute('data-title') === 'newsletter-popup') {
		if (Cookies.get('has-newsletter') != 'no' || newsletter_popup_testmode) {
			proceed = true;
		}
	} else {
		proceed = true;
	}
	if (proceed) {
		if (parseFloat(el.getAttribute('data-popup-delay')) === 0) {
			loadPopup(el.getAttribute('data-title'));
			popupFocus(el.getAttribute('data-title'));
		} else {
			setTimeout(function () {
				loadPopup(el.getAttribute('data-title'));
				popupFocus(el.getAttribute('data-title'));
			}, el.getAttribute('data-popup-delay'));
		}
	}
}
window.addEventListener("popups", function(evt) {
	allApopups = document.querySelectorAll('a[data-popup]:not(.initialized-popup), form[data-popup]'),
		formPopups = document.querySelectorAll('form[data-popup]');
	for (var i = 0; i < allApopups.length; i++) {
		var rootPopup = document.querySelector('#root > [class^=popup][data-title="' + allApopups[i].getAttribute('data-popup') + '"]');
		if (rootPopup && document.querySelectorAll('[class^=popup][data-title="' + allApopups[i].getAttribute('data-popup') + '"]').length > 1) {
			if (rootPopup.classList.contains('shown')) {
				html_tag.classList.remove('popup-shown');
			}
			rootPopup.remove();
		}
		root_id.appendChild(document.querySelector('[class^=popup][data-title="' + allApopups[i].getAttribute('data-popup') + '"]'));
		allApopups[i].classList.add('initialized-popup');
		allApopups[i].addEventListener('click', function (event) {
			event.preventDefault();
			loadPopup(this.getAttribute('data-popup'));
			popupFocus(this.getAttribute('data-popup'));
		});
		Array.from(formPopups).forEach(function (el) {
			if (!el.classList.contains('f8vl')) {
				el.addEventListener('submit', function (event) {
					event.preventDefault();
					loadPopup(this.getAttribute('data-popup'));
					popupFocus(this.getAttribute('data-popup'));
				});
			}
		});
	}
	var popup_delay = document.querySelectorAll('[data-popup-delay][data-title]');
	if (popup_delay.length) {
		Array.from(popup_delay).forEach(function (el) {
			"use strict";
			if (el.classList.contains('popup-blocker')) {
				if (Cookies.get('age') === undefined || age_verify_popup_testmode) {
					delayHandler(el);
				} else if (document.querySelectorAll('[data-popup-delay][data-title]:not(.popup-blocker)')[0]) {
					delayHandler(document.querySelectorAll('[data-popup-delay][data-title]:not(.popup-blocker)')[0]);
				}
			} else {
				if (!document.getElementsByClassName('popup-blocker').length) {
					delayHandler(el);
				}
			}
		});
	}
});
window.dispatchEvent(popupsEvt);

window.addEventListener("listScrollable", function(evt) {
	// .l4cl
	var list_collection = document.getElementsByClassName('l4cl');
	if (list_collection.length) {
		Array.from(list_collection).forEach(function (el) {
			"use strict";

			var data_li = el.querySelectorAll('li, .li');

      if (el.classList.contains('box')) {
        lastVis(el);
      }

			if (el.parentNode.tagName.toLowerCase() === 'li') {
				el.parentNode.classList.add('has-l4cl', 'has-ul-class');
			}

			if (data_li.length) {
				Array.from(data_li).forEach(function (em) {
					var data_img = em.querySelectorAll('.check.color li[data-img]'),
						any_img = em.querySelectorAll('img'),
						first_img = any_img[0],
						second_img = first_img;

					if (em.querySelectorAll('picture ~ picture').length && em.classList.contains('second-img-hover')) {
						if (em.classList.contains('second-img-first')) {
							first_img = em.querySelectorAll('picture ~ picture img')[0];
							second_img = em.querySelectorAll('picture img')[0];
						} else {
							first_img = em.querySelectorAll('picture img')[0];
							second_img = em.querySelectorAll('picture ~ picture img')[0];
						}
					}
					if (data_img.length && first_img !== undefined) {
						var productCard = em.closest('.product-card');
						// Check if variant picker is present
						if(productCard.querySelector('.variant-picker')) {
							Array.from(data_img).forEach(function (en) {
								en.addEventListener('click', function () {
									Array.from(any_img).forEach(function (eo) {
										eo.setAttribute('src', en.getAttribute('data-img'));
										if (eo.hasAttribute('srcset')) {
											eo.removeAttribute('srcset');
										}
									});
								});
							});
						} else {
							if (first_img !== undefined) {
								em.addEventListener('mouseover', function () {
									Array.from(em.querySelectorAll('picture img')).forEach(function (eo) {
										if (!eo.hasAttribute('data-src-initial')) {
											eo.setAttribute('data-src-initial', eo.getAttribute('src'));
										}
										if (!eo.hasAttribute('data-srcset-initial') && eo.hasAttribute('srcset')) {
											eo.setAttribute('data-srcset-initial', eo.getAttribute('srcset'));
										}
									});
								});
								em.addEventListener('mouseleave', function () {
									Array.from(em.querySelectorAll('picture img')).forEach(function (eo) {
										eo.setAttribute('src', eo.getAttribute('data-src-initial'));
										if (eo.hasAttribute('data-srcset-initial')) {
											eo.setAttribute('srcset', eo.getAttribute('data-srcset-initial'));
										}
									});
								});
							}
							Array.from(data_img).forEach(function (en) {
								en.addEventListener('mouseover', function () {
									Array.from(any_img).forEach(function (eo) {
										eo.setAttribute('src', en.getAttribute('data-img'));
										if (eo.hasAttribute('srcset')) {
											eo.removeAttribute('srcset');
										}
									});
								});
							});
						}
					}
				});
			}

			// Prepend big image before the list on mobile (index)
			Array.from(el.querySelectorAll('li:first-child figure.overlay')).forEach(function (el) {
				var clone_me = el.cloneNode(true);
				clone_me.classList.add('mobile-only', 'l4cl-figure-before');
				el.closest('li').classList.add('mobile-hide');
				el.closest('.l4cl').before(clone_me);
			});

			// Slider in popup (product)
			if (el.classList.contains('in-popup') && el.classList.contains('slider')) {
				if (el.children.length > 3) {
					el.classList.add('im-sliding');
				}
			}
			Array.from(el.querySelectorAll('picture.slider')).forEach(function (em) {
				var closestFig = em.closest('figure'),
					closestLi = em.closest('li'),
					let_touch_d = false,
					let_touch_m = false;
				if (el.classList.contains('mobile-scroll')) {
					let_touch_m = true;
				}
				if (!el.classList.contains('slider')) {
					let_touch_d = true;
				}
				if (closestFig !== null && closestLi !== null) {
					function initializeSlider() {
						if (!closestFig.classList.contains('slider-ready')) {
							randomize(closestFig);
							create_slider(em, {
								direction: 'horizontal',
								allowTouchMove: false,
								loop: false,
								autoHeight: true,
								slidesPerView: 1,
								spaceBetween: 1,
								lazy: {
									loadPrevNext: true
								},
								navigation: {
									nextEl: '[data-random="' + closestFig.getAttribute('data-random') + '"] .swiper-button-next',
									prevEl: '[data-random="' + closestFig.getAttribute('data-random') + '"] .swiper-button-prev'
								},
								breakpoints: {
									0: {
										allowTouchMove: let_touch_m
									},
									760: {
										allowTouchMove: let_touch_d
									}
								}
							});
						}
						closestFig.classList.add('slider-ready');
					}
					closestLi.addEventListener('mouseenter', function () {
						initializeSlider();
					});

					function io(entries) {
						entries.map((entry) => {
							if (entry.isIntersecting) {
								initializeSlider();
							}
						});
					}
					new IntersectionObserver(io).observe(closestLi);
				}
			});
			Array.from(el.querySelectorAll('figure select')).forEach(function (em) {
				var closestFig = em.closest('figure'),
					closestLi = em.closest('li'),
					closestForm = em.closest('form');
				if (closestFig !== null && closestLi !== null && closestForm !== null) {
					closestLi.addEventListener('mouseenter', function () {
						closestLi.style.setProperty('--dh', closestFig.offsetHeight - closestForm.offsetHeight + 'px');
					});
					window.addEventListener('resize', function () {
						closestLi.style.setProperty('--dh', closestFig.offsetHeight - closestForm.offsetHeight + 'px');
					});
				}
			});
		});
	}
});
window.dispatchEvent(listScrollableEvt);

function lastVis(cont) {
	var other_li = cont.children,
		last_visible = Array.from(cont.querySelectorAll('li:not(.hidden, .has-link-more)')).pop();
	Array.from(other_li).forEach(function (el) {
		el.classList.remove('last-visible');
	});
	last_visible.classList.add('last-visible');
}

// More link
function linkMore() {
	"use strict";
	var a_more = document.querySelectorAll('a.link-more:not(.link-more-initialized)');
	if (a_more.length) {
		Array.from(a_more).forEach(function (el) {
			if (el.tagName.toLowerCase() === 'a') {
				var parent = el.parentElement,
					parents = parent.parentElement,
					other_links = parents.querySelectorAll('a.link-more'),
					limit = 5, // default limit that can be overwritten by defining the [data-limit] attribute
					inner_p;

				if (parents.classList.contains('check')) {
					if (el.hasAttribute('data-limit')) {
						limit = parseFloat(el.getAttribute('data-limit'));
					}
					Array.from(parents.querySelectorAll('li:nth-child(n+' + (limit + 1) + ')')).forEach(function (el) {
						if (!el.classList.contains('link-more')) {
							el.classList.add('hidden');
						}
					});
				}
				var elements = parents.querySelectorAll('.hidden, .was-hidden');

				el.classList.add('link-more-initialized');
				function detectLong(el, em) {
					if (el.clientHeight < el.scrollHeight) {
						em.classList.add('long');
					} else if (el.clientHeight === 0) {
					} else {
						em.classList.remove('long');
					}
				}
				if (parents.classList.contains('info')) {
					inner_p = parents.children[0];
					if (parents.querySelectorAll('p.hidden, p:not(.link-more) .hidden').length) {
						parents.classList.add('long');
					} else {
						detectLong(inner_p, parents);
						window.addEventListener('resize', function () {
							detectLong(inner_p, parents);
						});
					}
				}

				parent.classList.add('has-link-more');

				if (el.closest('.l4cl.box') !== null) {
					lastVis(el.closest('.l4cl.box'));
				}
				Array.from(other_links).forEach(function (el, index) {
					el.setAttribute('data-no', other_links.length - index);
				});
				el.addEventListener('click', function (e) {
					var parent = el.parentElement,
						parents = parent.parentElement,
						elements = parents.querySelectorAll('.hidden, .was-hidden');
					Array.from(elements).forEach(function (em) {
						if (em.classList.contains('hidden')) {
							em.classList.remove('hidden');
							em.classList.add('was-hidden');
						} else if (em.classList.contains('was-hidden')) {
							em.classList.remove('was-hidden');
							em.classList.add('hidden');
						}
					});
					if (parents.classList.contains('link-more-clicked')) {
						parents.classList.remove('link-more-clicked');
					} else {
						parents.classList.add('link-more-clicked');
					}
          if (el.closest('.l4cl.box') !== null) {
            lastVis(el.closest('.l4cl.box'));
          }
					e.preventDefault();
				});
			}
		});
	}
}
linkMore();


// .n6as (collection)
window.addEventListener("navAside", function(evt) {
	var nav_aside = document.querySelectorAll('.n6as a.toggle:not(.n6as-initalized)');
	if (nav_aside.length) {
		nav_aside.forEach(function (el) {
			"use strict";
			el.classList.add('n6as-initalized');
			el.addEventListener('click', function (e) {
				toggle_dropdowns_simple(el.parentElement);
				e.preventDefault();
			});
		});
	}
});
window.dispatchEvent(navAsideEvt);

window.addEventListener("gridListSwitch", function(evt) {
	// grid/list switcher (independent)
	var list_view = document.querySelectorAll('.l4vw, .l4in');
	if (list_view.length) {
		Array.from(list_view).forEach(function (el) {
			"use strict";
			html_tag.classList.add('t1cl');
			if (el.getAttribute('aria-controls') !== null) {
				var im = el,
					view_item = el.querySelectorAll('li'),
					view_list = document.getElementById(im.getAttribute('aria-controls'));
				el.querySelectorAll('a > i[data-collection_grid_view], a[data-collection_img_view]').forEach(function (el) {
					el.parentElement.addEventListener('click', function (e) {
						view_item.forEach(function (el) {
							el.classList.remove('active');
						});
						if (el.dataset.collection_img_view) {
							var collection_img_view = el.dataset.collection_img_view;
							saveCollectionview('collection_img_view', collection_img_view);
							if(document.querySelector('li picture.slider') != null) {
								view_list.querySelectorAll('li picture.slider').forEach(function (el) {
									if(el.firstChild.nodeName == 'DIV') {
										if (collection_img_view != 'first') {
											if(el.querySelectorAll('.second-first').length) {
												el.children[0].swiper.slideTo(0, 0, false);
											} else {
												el.children[0].swiper.slideTo(1, 0, false);
											}
										} else {
											if(el.querySelectorAll('.second-first').length) {
												el.children[0].swiper.slideTo(1, 0, false);
											} else {
												el.children[0].swiper.slideTo(0, 0, false);
											}
										}
									} else {
										if (collection_img_view != 'first') {
											let img = el.querySelector('img[data-index="2"]');
											if(img.closest('a') !== null) {
												img = img.closest('a');
											}
											el.prepend(img);
										} else {
											let img = el.querySelector('img[data-index="1"]');
											if(img.closest('a') !== null) {
												img = img.closest('a');
											}
											el.prepend(img);
										}
									}
								});
 							} else {
								view_list.querySelectorAll('li picture + picture').forEach(function (el) {
									if (collection_img_view != 'first') {
										el.closest('li').classList.add('second-img-first');
									} else {
										el.closest('li').classList.remove('second-img-first');
									}
								});
							}

						} else {
							var collection_grid_view = el.dataset.collection_grid_view;
							saveCollectionview('collection_grid_view', collection_grid_view);
							view_list.classList.remove('w50', 'w33', 'w25', 'w20', 'w100-mobile', 'w50-mobile');
							collection_grid_view = collection_grid_view.split(' ');
							for (var i = 0; i < collection_grid_view.length; i++) {
								view_list.classList.add(collection_grid_view[i]);
							};
						}
						el.closest('li').classList.add('active');
						e.preventDefault();
					});
				});
			}
		});
	}
});
window.dispatchEvent(gridListSwitchEvt);

// .input-range (collection)
window.addEventListener("rangeSlider", function(evt) {
	var input_range = document.getElementsByClassName('input-range'),
		input_range_steps;

	if (input_range.length) {
		var input_range_steps = document.getElementsByClassName('input-range-steps');
		loadRes(window.filepaths['plugin_sliders_js'], function () {
			"use strict";
			new_css('form-sliders-css', window.filepaths['async_ui_sliders_css']);
			Array.from(input_range).forEach(function (el) {
				el.appendChild(createElementWithClass('div', 'range-inner'));
				var data_min = el.querySelectorAll('input[min]')[0],
					data_max = el.querySelectorAll('input[max]')[0],
					data_el = el.querySelectorAll('input')[0],
					evt = new Event('change'),
					opt_connect = true,
          opt_start = [parseFloat(data_min.value), parseFloat(data_max.value)],
          is_tooltip = false;

				if (el.classList.contains('single')) {
					opt_connect = 'lower';
					data_min = data_el;
					data_max = data_min;
					opt_start = parseFloat(data_el.value);
				}
        if (el.classList.contains('tip')) {
          is_tooltip = true;
        }
				if (!el.classList.contains('slider-is-here')) {
					el.querySelectorAll('.range-inner').forEach(function (eo) {
						noUiSlider.create(eo, {
							start: opt_start,
							connect: opt_connect,
							step: 1,
							direction: global_dir[0],
							range: {
								'min': [parseFloat(data_min.getAttribute('min'))],
								'max': [parseFloat(data_max.getAttribute('max'))]
							},
              tooltips: is_tooltip,
              format: {
                to: function (value) {
                  return Math.round(value);
                },
                from: function (value) {
					return Math.round(value);
                }
              }
						});
						eo.noUiSlider.on('update', function (values, handle, unencoded, tap, positions, noUiSlider) {
							if (handle) {
								data_max.value = parseFloat(values[handle]).toFixed();
							} else {
								data_min.value = parseFloat(values[handle]).toFixed();
							}
						});
						eo.noUiSlider.on('change', function (handle) {
							if (handle) {
								data_max.dispatchEvent(evt);
							} else {
								data_min.dispatchEvent(evt);
							}
						});
						Array.from(eo.querySelectorAll('[role="slider"]')).forEach(function (em) {
							em.setAttribute('aria-label', 'slider');
						});
						el.querySelectorAll('input').forEach(function (en) {
							en.addEventListener('keyup', function () {
								if (en.hasAttribute('min')) {
									eo.noUiSlider.set([parseFloat(en.value), null]);
								} else if (en.hasAttribute('max')) {
									eo.noUiSlider.set([null, parseFloat(en.value)]);
								}
							});
						});
					});
					window.dispatchEvent(inputPaddingEvt);
				}
				el.classList.add('slider-is-here');
			});
			if (input_range_steps.length) {
				Array.from(input_range_steps).forEach(function (el) {
					Array.from(el.children).forEach(function (el) {
						el.innerHTML = '<span class="inner">' + el.innerHTML + '</span>';
					});
					var prevEl = el.previousElementSibling,
						clone_me = el.cloneNode(true);
					if (prevEl !== null && prevEl.classList.contains('input-range')) {
						clone_me.removeAttribute('class');
						clone_me.classList.add('range-cloned');
						prevEl.getElementsByClassName('noUi-base')[0].appendChild(clone_me);
					}

				});
			}
		}, 'sliders-loaded');
	}
});
window.dispatchEvent(rangeSliderEvt);

// moved to custom-async.js (stickyNav)
function customStickyNav() {
    if (nav_main) {
        root_styles.style.setProperty('--drop_nav_mah', window.innerHeight - nav_main.clientHeight - nav_main.getBoundingClientRect().bottom + 'px');
        root_styles.style.setProperty('--drop_nav_mah_fixed', window.innerHeight - nav_main.clientHeight - nav_main.offsetTop + 'px');
        root_styles.style.setProperty('--mega_nav_mah_fixed', window.innerHeight - nav_main.offsetTop + 'px');
        root_styles.style.setProperty('--sticky_nav_mah', window.innerHeight - nav_main.clientHeight + 'px');
    }
}

// sticky header
window.addEventListener("stickyNav", function(evt) {
	var nav_id = document.getElementById('nav'),
		nav_top_id = document.getElementById('nav-top'),
		nav_bar_id = document.getElementById('nav-bar'),
		header_main = document.getElementById('header'),
		header_inner = document.getElementById('header-inner'),
		header_id = document.getElementsByClassName('shopify-section-header')[0];
	if (header_id) {

		if (document.querySelector('#nav-top:not(.no-js)')) {
			html_tag.classList.remove('t1nt');
		} else {
			html_tag.classList.add('t1nt');
		}

		if (nav_id) {
			if (nav_id.classList.contains('sticky-menu')) {
				html_tag.classList.add('t1sn');
			} else {
				html_tag.classList.remove('t1sn');
			}
		}

		var sa, le, distance_counter, distance_spacer, n_el;
		if ((nav_top_id !== null || html_tag.classList.contains('t1nt')) && nav_top_id !== null) {
			sa = nav_top_id.offsetHeight;
		} else {
			sa = 0;
		}
		if (nav_bar_id) {
			if (nav_bar_id.closest('#header-inner') !== null) {
				n_el = nav_id;
			} else {
				n_el = nav_bar_id;
			}
		} else {
			n_el = nav_id;
		}
		if (html_tag.classList.contains('t1sn') || n_el && n_el.classList.contains('sticky') || header_inner && header_inner.classList.contains('sticky-nav')) {
			html_tag.classList.add('t1sn');
			le = n_el;
			sa = 0;
		} else {
			le = header_id;
		}

		function io(entries) {
			entries.map((entry) => {
				if (entry.isIntersecting) {
					le.classList.remove('fixed');
				} else {
					le.classList.add('fixed');
					customStickyNav();
					if (le.id === 'nav' || le.id === 'nav-bar') {
						enquire.register('screen and (min-width: 1000px)', function () {
							overlayClose(true);
						});
					}
					new_css('css-menu', window.filepaths['async_menu_css']);
				}
			});
		}

		distance_counter = document.createElement('div');
		distance_counter.setAttribute('id', 'distance-counter');

		distance_spacer = document.createElement('div');
		distance_spacer.setAttribute('id', 'distance-spacer');
		distance_spacer.style.height = le.clientHeight + 'px';

		le.after(distance_spacer);

		window.addEventListener('resize', function () {
			distance_spacer.style.height = le.clientHeight + 'px';
		});

		if (html_tag.classList.contains('t1sn')) {
			header_main.append(distance_counter);
		} else {
			distance_counter.style.top = window.scrollY + sa + 'px';
			root_id.append(distance_counter);
		}

		if (header_inner.classList.contains('no-sticky')) {
			header_main.classList.add('no-sticky');
			html_tag.classList.add('no-sticky');
		} else {
			header_main.classList.remove('no-sticky');
			html_tag.classList.remove('no-sticky');
		}
		if (header_inner.classList.contains('mobile-visible-search')) {
			header_id.classList.add('has-mobile-visible-search');
		}
		if (header_inner.classList.contains('hide-btn-mobile')) {
			header_id.classList.add('hide-btn-mobile');
		}
		if (header_main.classList.contains('no-sticky')) {
			html_tag.classList.add('t1ns');
		}

		if (header_main && !header_main.classList.contains('no-sticky')) {
			new IntersectionObserver(io, {
				root: null,
				rootMargin: '0px',
				threshold: 0.9
			}).observe(distance_counter);
		} else {
			html_tag.classList.add('t1st');
		}
	}

	// Closeable top bar
	top_bar = document.getElementsByClassName('shopify-section-announcement-bar')[0];
	if (top_bar) {
		append_url(top_bar, 'Close', 'close');
		top_bar.querySelector('a.close').addEventListener('click', function (e) {
			"use strict";
			top_bar.parentNode.removeChild(top_bar);
			if (typeof Shopify !== 'undefined' && Shopify.designMode) { } else {
				Cookies.set('notice', 'closed');
			}
			distance_counter.style.top = le.getBoundingClientRect().top + window.scrollY + sa + 'px';
			e.preventDefault();
		});
		if (Cookies.get('notice', { sameSite: 'none', secure: true }) === 'closed') {
			if (top_bar.parentNode !== null) {
				top_bar.parentNode.removeChild(top_bar);
			}
		} else {
			new_css('announcement-css', window.filepaths['async_announcement_css']);
			html_tag.classList.add('show-notice');
		}
	}

	if (top_bar) {
		append_url(top_bar, 'Close', 'overlay-close');
	}

	if (header_id) {
		append_url(root_id, 'Close', 'overlay-close');
		append_url(header_id, 'Close', 'overlay-close');
		if (search_id) {
			if (nav_id) {
				append_url(nav_id, 'Close', 'overlay-close');
			}
			if (nav_bar_id) {
				append_url(nav_bar_id, 'Close', 'overlay-close');
			}
		}
		if (header_outer) {
			append_url(header_outer, 'Close', 'overlay-close');
		}
		if (nav_top_id) {
			append_url(nav_top_id, 'Close', 'overlay-close');
		}
		if (header_main) {
			append_url(header_main, 'Close', 'overlay-close');
		}
		Array.from(document.querySelectorAll('a.overlay-close')).forEach(function (el) {
			"use strict";
			el.addEventListener('click', function (e) {
				overlayClose();
				e.preventDefault();
			});
		});
	}
});
window.dispatchEvent(stickyNavEvt);

function insertAfter(referenceNode, newNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


var sticky_top = 0;
var last_top = 0;
console.log(document.getElementsByClassName("mobile-sticky")[0]);
if(document.getElementsByClassName("mobile-sticky")[0] != undefined) {
  sticky_top = document.getElementsByClassName("mobile-sticky")[0].offsetTop;
}

window.onscroll = function() {
  if(document.getElementsByClassName("mobile-sticky")[0] == undefined) {
    return;
  }
  if(window.innerWidth < 915) {
    return;
  }

  var node_width =  document.getElementsByClassName("mobile-sticky")[0].closest("form").parentElement.clientWidth;
  document.getElementsByClassName("mobile-sticky")[0].style.width = node_width + "px";
  if(document.documentElement.scrollTop - last_top < 0) {
    if (document.documentElement.scrollTop <= sticky_top) {
      document.getElementsByClassName("mobile-sticky")[0].style.position = "relative";
      document.getElementsByClassName("mobile-sticky")[0].style.position = "relative";
      document.getElementsByClassName("mobile-sticky")[0].style.top = "0";
    }
  }else {
    if (document.documentElement.scrollTop <= document.getElementsByClassName("mobile-sticky")[0].offsetTop) {
      document.getElementsByClassName("mobile-sticky")[0].style.position = "relative";
      document.getElementsByClassName("mobile-sticky")[0].style.top = "0";
    } else {
      document.getElementsByClassName("mobile-sticky")[0].style.position = "fixed";
      document.getElementsByClassName("mobile-sticky")[0].style.top = "160px";
    }
  }
  last_top = document.documentElement.scrollTop;
};

window.addEventListener("mobileFilters", function(evt) {
	return;
	// .f8sr (collection)
	var form_sort = document.getElementsByClassName('f8sr');
	if (form_sort.length) {
		Array.from(form_sort).forEach(function (el) {
			"use strict";
			html_tag.classList.add('t1cl');
			if (el.classList.contains('mobile-sticky')) {
				var trickDiv = createElementWithClass('div', 'offset-dist'),
					trickDist = createElementWithClass('div', 'inner-dist'),
					trg = el.getElementsByClassName('link-btn')[0],
					clone_me;

				el.prepend(trickDiv);
				trickDist.style.height = el.clientHeight + 'px';
				el.prepend(trickDist);
				const observer = new IntersectionObserver(
					([e]) => e.target.parentNode.classList.toggle('fixed', e.intersectionRatio < 1), {
						threshold: [1, 0]
					}
				);
				observer.observe(el.getElementsByClassName('offset-dist')[0]);
				if (trg !== undefined) {
					clone_me = trg.cloneNode(true);
					clone_me.classList.add('clone');
					insertAfter(trg, clone_me);
				}
			}
		});
	}

	// .f8fl (collection)
	var form_filter = document.getElementsByClassName('f8fl');
	if (form_filter.length) {
		Array.from(form_filter).forEach(function (el) {
			"use strict";
			html_tag.classList.add('t1cl');
			append_url(el, 'Close', 'f8fl-toggle');
			if (el.hasAttribute('id')) {
				Array.from(document.querySelectorAll('[href="#' + el.getAttribute('id') + '"]')).forEach(function (el) {
					el.classList.add('f8fl-toggle');
				});
			}
			Array.from(el.querySelectorAll('h1, h2, h3, h4, h5, h6')).forEach(function (el) {
				append_url(el, 'Close', 'header-toggle');
				el.querySelector('a.header-toggle').addEventListener('click', function (e) {
					toggle_dropdowns_simple(el);
					if (!el.hasAttribute('id')) {
						e.preventDefault();
					}
				});
			});
		});
		Array.from(document.getElementsByClassName('f8fl-toggle')).forEach(function (el) {
			"use strict";
			el.setAttribute('aria-controls', 'filter');
		});
		Array.from(document.querySelectorAll('a[aria-controls="filter"]')).forEach(function (el) {
			"use strict";
			el.addEventListener('click', function (e) {
				html_tag.classList.add('has-filters');
				if (html_tag.classList.contains('f8fl-open')) {
					html_tag.classList.remove('f8fl-open');
				} else {
					hidePanels();
					html_tag.classList.add('f8fl-open');
				}
				if (el.closest('.m6pn') !== null) {
					overlayClose();
				}
				getStickyFooters();
				new_css('css-filters', window.filepaths['async_filters_css']);
				e.preventDefault();
			});
		});
	}
});
window.dispatchEvent(mobileFiltersEvt);

// Countdown timer
window.addEventListener("countdown", function(evt) {
	var countdown_tag = document.getElementsByClassName('countdown');
	var countdown_container = document.getElementsByClassName('f8pr-shipping-timer');
	if (countdown_container.length) {
		Array.from(countdown_container).forEach(function (el) {
			if (el.children.length == 0) {
				el.remove();
			}
		});
	}
	if (countdown_tag.length) {
		loadRes(window.filepaths['plugin_countdown_js'], function () {
			"use strict";
			Array.from(countdown_tag).forEach(function (el) {
				var container = el.closest('li, article'),
					now = new Date(),
					nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()),
					show_until = new Date(el.getAttribute('data-show-until')),
					show_from = new Date(el.getAttribute('data-show-from')),
					show_days = el.getAttribute('data-show-days'),
					word_day,
					word_days,
					word_hour,
					word_hours,
					word_min,
					word_mins,
					word_sec,
					word_secs;

				var ended = function() {
					if (container.querySelector('.countdown-ended-show') !== null) {
						el.remove();
						container.querySelector('.countdown-ended-hide').remove();
						container.querySelector('.countdown-ended-show').classList.remove('hidden');
					} else {
						container.remove();
					}
				}
				if (show_from > now || now > show_until || !show_days.includes(nowUTC.getDay())) {
					ended();
					return;
				}

				el.innerHTML = '<span class="hidden">' + el.innerHTML + '</span>';

				if (el.getAttribute('data-day') !== null) {
					word_day = el.getAttribute('data-day');
				} else {
					word_day = 'day';
				}
				if (el.getAttribute('data-days') !== null) {
					word_days = el.getAttribute('data-days');
				} else {
					word_days = 'days';
				}
				if (el.getAttribute('data-hour') !== null) {
					word_hour = el.getAttribute('data-hour');
				} else {
					word_hour = 'hour';
				}
				if (el.getAttribute('data-hours') !== null) {
					word_hours = el.getAttribute('data-hours');
				} else {
					word_hours = 'hours';
				}
				if (el.getAttribute('data-minute') !== null) {
					word_min = el.getAttribute('data-minute');
				} else {
					word_min = 'minute';
				}
				if (el.getAttribute('data-minutes') !== null) {
					word_mins = el.getAttribute('data-minutes');
				} else {
					word_mins = 'minutes';
				}
				if (el.getAttribute('data-second') !== null) {
					word_sec = el.getAttribute('data-second');
				} else {
					word_sec = 'second';
				}
				if (el.getAttribute('data-seconds') !== null) {
					word_secs = el.getAttribute('data-seconds');
				} else {
					word_secs = 'seconds';
				}

				function renderMe() {
					if (!el.classList.contains('done')) {
						simplyCountdown(el, {
							year: show_until.getFullYear(),
							month: show_until.getMonth() + 1,
							day: show_until.getDate(),
							hours: show_until.getHours(),
							minutes: show_until.getMinutes(),
							seconds: show_until.getSeconds(),
							enableUtc: false,
							zeroPad: true,
							onEnd: function() {
								ended();
							},
							words: {
								days: {
									singular: word_day,
									plural: word_days
								},
								hours: {
									singular: word_hour,
									plural: word_hours
								},
								minutes: {
									singular: word_min,
									plural: word_mins
								},
								seconds: {
									singular: word_sec,
									plural: word_secs
								}
							}
						});
						el.classList.add('done');
						container.classList.add('done');
					}

				}
				renderMe();
			});
		}, 'countdown-loaded');
	}
});
window.dispatchEvent(countdownEvt);

// Count up (l4cu)
var list_count = document.getElementsByClassName('l4cu');
if (list_count.length) {
	loadRes(window.filepaths['plugin_countup_js'], function () {
		"use strict";
		Array.from(list_count).forEach(function (em) {
			Array.from(em.querySelectorAll('span:first-child')).forEach(function (el) {
				var clone_me = el.cloneNode(true),
					str = el.innerHTML;
				el.innerHTML = '<span class="main">' + el.innerHTML + '</span>';
				clone_me.classList.add('clone');
				clone_me.setAttribute('data-val', str);
				el.appendChild(clone_me);
				el.classList.add('cont');
			});

			function renderMe() {
				Array.from(em.querySelectorAll('span.clone')).forEach(function (el) {
					var decimals,
						str = el.innerHTML,
						counting;
					if (el.innerHTML.indexOf('+') > -1) {
						el.innerHTML = el.innerHTML.replace('+', '');
						str = str.replace('+', '');
						el.classList.add('has-plus');
					}
					if (el.innerHTML.indexOf('.') > -1) {
						decimals = str.length - str.indexOf('.') - 1;
					} else {
						decimals = 0;
					}
					if (typeof CountUp === 'function') {
						counting = new CountUp(el, parseFloat(el.getAttribute('data-val')), {
							decimalPlaces: decimals,
							duration: 3
						});
						if (!counting.error) {
							counting.start();
						}
					}
				});
			}
			if (em.getBoundingClientRect().y < window.innerHeight) {
				renderMe();
			}

			function io(entries) {
				entries.map((entry) => {
					if (entry.isIntersecting) {
						renderMe();
					}
				});
			}
			new IntersectionObserver(io).observe(em);
		});
	}, 'countup-loaded');
}

function updateSliders(el) {
	"use strict";
	if (el.classList.contains('s4wi')) {
		var sl_el = el.querySelector('.swiper-outer');

		function io(entries) {
			entries.map((entry) => {
				if (entry.isIntersecting) {
					if (sl_el.swiper !== null) {
						sl_el.swiper.updateAutoHeight();
					}
				}
			});
		}
		new IntersectionObserver(io).observe(el);
		setTimeout(function () {
			if (sl_el.swiper !== null && sl_el.swiper !== undefined) {
				sl_el.swiper.updateAutoHeight();
			}
		}, 300);
	}
}
window.addEventListener("updateSliders", function(evt) {
	var list_collection_slider = document.querySelectorAll('.l4cl.slider:not(.in-popup)');
	if (list_collection_slider.length) {
		Array.from(list_collection_slider).forEach(function (em) {
			"use strict";
			updateSliders(em);
		});
	}
	var module_featured = document.querySelectorAll('.m6fr');
	if (module_featured.length) {
		Array.from(module_featured).forEach(function (em) {
			"use strict";
			updateSliders(em);
		});
	}
});
window.dispatchEvent(updateSlidersEvt);

// Floating alerts (l4al)
window.addEventListener("alerts", function(evt) {
	var list_alerts = document.querySelectorAll('.l4al:not(.inline):not(.l4al-trustbadge)');
	function countUs(element) {
		"use strict";
		if (element.children.length === element.querySelectorAll('li.hidden').length) {
			element.classList.add('all-hidden');
		} else {
			element.classList.remove('all-hidden');
		}
	}
	if (list_alerts.length) {
		Array.from(list_alerts).forEach(function (em) {
			"use strict";
			countUs(em);
			Array.from(em.querySelectorAll('a.close')).forEach(function (el) {
				asyncCSS();
				el.addEventListener('click', function (e) {
					el.closest('li').classList.add('fade-me-out');
					setTimeout(function () {
						el.closest('li').classList.add('hidden');
					}, 400);
					e.preventDefault();
				});
			});
			if (em.parentNode.id === 'root') {
				Array.from(em.querySelectorAll('li')).forEach(function (es) {
					var dl = 5000;
					asyncCSS();
					setTimeout(function () {
						es.classList.add('fade-me-out');
					}, dl);
					setTimeout(function () {
						es.classList.add('hidden');
						countUs(em);
					}, dl + 400);
				});
			}
		});
	}
});
window.dispatchEvent(alertsEvt);

// Print page
var link_print = document.getElementsByClassName('link-print');
if (link_print.length) {
	Array.from(link_print).forEach(function (el) {
		"use strict";
		el.addEventListener('click', function (e) {
			new_css('css-print', window.filepaths['async_print_css']);
			setTimeout(function () {
				window.print();
			}, 400);
			e.preventDefault();
		});
	});
}
window.matchMedia('print').addListener(function (e) {
	if (e.matches) {
		new_css('css-print', window.filepaths['ascyn_print_css']);
	}
});

var link_copy = document.querySelectorAll('a[data-copy]');
if (link_copy.length) {
	const copyToClipboardAsync = str => {
		if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
			return navigator.clipboard.writeText(str);
		}
		return Promise.reject('The Clipboard API is not available.');
	};
	Array.from(link_copy).forEach(function (el) {
		"use strict";
		el.addEventListener('click', function (e) {
			el.classList.add('clicked');
			copyToClipboardAsync(el.dataset.copy);
			setTimeout(function () {
				el.classList.remove('clicked');
			}, 2000);
			e.preventDefault();
		});
	});
}

// tooltip
window.addEventListener("tooltip", function (evt) {
	var scheme_tip = document.getElementsByClassName('scheme-tip');
	Array.from(scheme_tip).forEach(function (el) {
		"use strict";
		el.innerHTML = '<a class="tip-toggle" href="./"></a> <span class="tip"><span class="tip-inner">' + el.innerHTML + '</span> <a class="tip-toggle" href="./">Close</a></span>';
		Array.from(el.getElementsByClassName('tip-toggle')).forEach(function (em) {
			em.addEventListener('click', function (e) {
				el.classList.toggle('toggle');
				e.preventDefault();
			});
		});
		el.classList.add('ready');
	});
});
window.dispatchEvent(tooltipEvt);

window.addEventListener("fancybox", function (evt) {
	// has-more toggles fancybox
	var swipper_bullets = document.querySelectorAll('a.swiper-pagination-bullet');
	Array.from(swipper_bullets).forEach(function (el, index) {
		"use strict";
		el.addEventListener('click', function (e) {
			if (el.classList.contains('has-more')) {
				var data_fancybox = document.querySelectorAll('[data-fancybox]');
				data_fancybox[index].click();
			}
			return true;
		});
	});

	// Fancybox
	function createFancyboxAndShowItem(itemIndex, fancyName) {
		"use strict";
		// Enable/disable swipe support for fancybox based on the type of the displayed item
		function toogleTouchSupportOnItem(item, fancybox) {
			var touchStateForItem = true;
			if (item.type !== "image") {
				touchStateForItem = false;
			}

			if (fancybox.Carousel.Panzoom.options.touch !== touchStateForItem) {
				fancybox.Carousel.Panzoom.options.touch = touchStateForItem;
				fancybox.Carousel.updatePanzoom();
			}
		}
		var showItems = [],
			all_items = document.querySelectorAll(`[data-fancybox="${fancyName}"]`),
			item,
			fbox;

		all_items.forEach(item => {
			var src_type = null,
				hrefItem = item.getAttribute('href'),
				thumbImg = item.querySelector('img').getAttribute('src'),
				caption = item.getAttribute('data-caption'),
				alt = item.getAttribute('data-alt'),
				title = item.getAttribute('data-title');
			if (endsWithAny(['jpg', 'jpeg', '.gif', '.png', '.webp'], hrefItem)) {
				src_type = 'image';
			}
			if (hrefItem.indexOf('youtube.com/watch') !== -1 || hrefItem.indexOf('vimeo.com/') !== -1) {
				src_type = 'video';
			}
			if (endsWithAny(['mp4', 'webm', 'ogg'], hrefItem)) {
				src_type = 'html5video';
			}
			// check if item was already added to showItems array to avoid duplication
			if (!showItems.find(_item => _item.src === hrefItem)) {
				showItems.push({
					src: hrefItem,
					type: src_type,
					preload: false,
					animated: false,
					caption: caption,
					thumb: thumbImg,
					baseClass: 'myCustomClass'
				});
			}
		});
		fbox = new Fancybox(showItems, {
			startIndex: itemIndex || 0,
			Carousel: {
				Panzoom: {
					touch: true
				}
			},
			Html: {
				video: {
					autoplay: false
				}
			},
			slug: 'gallery',
			hash: true,
			on: {
				ready: function (_fancybox) {
					toogleTouchSupportOnItem(_fancybox.items[_fancybox.Carousel.page], _fancybox);
					// show thumbs
					_fancybox.plugins.Thumbs.toggle();
					if (_fancybox.plugins.Thumbs.state == 'hidden') {
						_fancybox.plugins.Thumbs.show();
					}
				},
				done: function (_fancybox, carousel, slide) {
					// check if there's model-viewer
					var slides = _fancybox.$container.querySelectorAll('div.fancybox__thumbs div.carousel__slide'),
						all_items = document.querySelectorAll('[data-fancybox]'),
						getClass = _fancybox.$container.querySelectorAll('.fancybox__slide.is-selected')[0];
					if (slides.length < all_items.length) {
						return;
					}
					var ar_buttons = _fancybox.$container.querySelectorAll('div.fancybox__carousel model-viewer + [data-shopify-xr]');
					if (ar_buttons.length) {
						ar_buttons.forEach(function (el, index) {
							el.style.bottom = _fancybox.$container.querySelectorAll('div.fancybox__thumbs')[0].offsetHeight + 23 + "px";
						});
					}
					all_items.forEach(function (el, index) {
						if (el.querySelectorAll('model-viewer').length > 0) {
							slides[index].classList.add("has-cube");
						}
					});
					if (getClass !== undefined) {
						_fancybox.$container.setAttribute('data-class', getClass.getAttribute('class'));
						if (getClass.querySelector('video')) {
							getClass.querySelector('video').play();
						}
					}
				},
				"Carousel.change": function (_fancybox, carousel, slide) {
					var getClass;
					var iframe = _fancybox.$container.getElementsByTagName("iframe");
					Array.from(iframe).forEach(function (el) {
						var url = el.getAttribute('src');
						el.setAttribute('src', '');
						el.setAttribute('src', url);
					});
					setTimeout(function () {
						getClass = _fancybox.$container.querySelectorAll('.fancybox__slide.is-selected')[0];
						if (getClass !== undefined) {
							_fancybox.$container.setAttribute('data-class', getClass.getAttribute('class'));
							if (getClass.querySelector('video')) {
								getClass.querySelector('video').play();
							}
						}
					}, 100);
					toogleTouchSupportOnItem(_fancybox.items[carousel.page], _fancybox);

				}
			}
		});
	}
	var data_fancybox = document.querySelectorAll('[data-fancybox]');
	if (data_fancybox.length) {
		Array.from(data_fancybox).forEach(function (el, index) {
			"use strict";
			var hrefItem = el.getAttribute('href');
			if (hrefItem.indexOf('youtube.com/watch') !== -1 || hrefItem.indexOf('vimeo.com/') !== -1) {
				el.setAttribute('data-type', 'video');
			}
			if (endsWithAny(['mp4', 'webm', 'ogg'], hrefItem)) {
				el.setAttribute('data-type', 'html5video');
			}
			el.addEventListener('click', function (e) {
				var itemIndex = 0,
					fancybox_name = '',
					list;
				if (el.getAttribute('data-fancybox')) {
					fancybox_name = el.getAttribute('data-fancybox');
					list = document.querySelectorAll('[data-fancybox="' + el.getAttribute('data-fancybox') + '"]');
					for (var i = 0; i < list.length; i++) {
						if (list[i] == el) {
							itemIndex = i;
							break;
						}
					}

					Array.from(document.querySelectorAll('[data-fancybox="' + el.getAttribute('data-fancybox') + '"] model-viewer')).forEach(function (el) {
						el.addEventListener('click', function (e) {
							e.preventDefault();
							e.stopPropagation();
							e.cancelBubble = true;
							return false;
						});
					});
				}
				loadRes(window.filepaths['plugin_fancybox_js'], function () {
					new_css('css-fancybox', window.filepaths['async_fancybox_css']);
					createFancyboxAndShowItem(itemIndex, fancybox_name);
				}, 'fancybox-loaded');
				e.preventDefault();
			});
		});
	}
});
window.dispatchEvent(fancyboxEvt);


var nextUntil = function (elem, selector, filter) {
	"use strict";
	var siblings = [];
	elem = elem.nextElementSibling;
	while (elem) {
		if (elem.matches(selector)) {
			break;
		}
		if (filter && !elem.matches(filter)) {
			elem = elem.nextElementSibling;
			continue;
		}
		siblings.push(elem);
		elem = elem.nextElementSibling;
	}
	return siblings;
};

var table_drop = document.getElementsByClassName('table-drop');
if (table_drop.length) {
	Array.from(table_drop).forEach(function (el) {
		"use strict";
		Array.from(el.getElementsByTagName('tr')).forEach(function (et) {
			if (!et.classList.contains('sub')) {
				et.classList.add('not-sub');
			}
		});
		Array.from(el.querySelectorAll('a.toggle')).forEach(function (em) {
			em.addEventListener('click', function (e) {
				var next = nextUntil(em.closest('tr'), '.not-sub');
				em.classList.toggle('active');
				Array.from(next).forEach(function (en) {
					en.classList.toggle('hidden');
					en.classList.toggle('active');
				});
				e.preventDefault();
			});
		});
	});
}

var anchor_element = document.querySelectorAll('[id^="section-"]');
if (anchor_element.length) {
	Array.from(anchor_element).forEach(function (el) {
		"use strict";
		if (!el.classList.contains('anchor')) {
			var anchor_tag = createElementWithClass('span', 'anchor');
			anchor_tag.setAttribute('id', el.getAttribute('id'));
			el.classList.add('has-anchor');
			el.removeAttribute('id');
			el.append(anchor_tag);
		}
	});
}

function checkHeight(el) {
	if (el.scrollHeight > el.clientHeight) {
		el.classList.add('high');
	} else {
		el.classList.remove('high');
	}
}
window.addEventListener("heightLimit", function (evt) {
	var module_limit = document.getElementsByClassName('m6lm');
	if (module_limit.length) {
		Array.from(module_limit).forEach(function (el) {
			"use strict";
			checkHeight(el);
			window.addEventListener('resize', function () {
				if (el.closest('.link-more-clicked') === null) {
					checkHeight(el);
				}
			});
			if (el.closest('.m6tb ') !== null) {
				if (el.closest('.m6tb').classList.contains('tabs-initialized')) {
					checkHeight(el);
				}
				Array.from(el.closest('.m6tb').querySelectorAll('.tabs-header')).forEach(function (en) {
					en.addEventListener('click', function (e) {
						checkHeight(el);
					});
				});
			}
		});
	}
});
window.dispatchEvent(heightLimitEvt);

window.addEventListener("hotspots", function (evt) {
	var list_hotspots = document.querySelectorAll('.l4hs:not(.l4hs-initialized)');
	if (list_hotspots.length) {
		new_css('css-hotspots', window.filepaths['async_hotspots_css']);
		Array.from(list_hotspots).forEach(function (el) {
			"use strict";
			el.classList.add('l4hs-initialized');
			if (el.closest('figure') !== null) {
				el.closest('figure').classList.add('has-l4hs');
			}
			var hotspot_panels = el.getElementsByClassName('m6pn');
			if (hotspot_panels.length) {
				Array.from(hotspot_panels).forEach(function (el) {
					document.querySelector('#root').appendChild(el);
				})

			}
			Array.from(el.getElementsByClassName('toggle')).forEach(function (en) {
				if (en.tagName.toLowerCase() === 'a') {
					en.addEventListener('click', function (e) {
						var pt = en.parentNode;
						new_css('css-hotspots', window.filepaths['async_hotspots_css']);
						if (!en.hasAttribute('data-panel') && !en.hasAttribute('data-popup')) {
							if (pt.classList.contains('toggle')) {
								pt.classList.remove('toggle');
							} else {
								Array.from(el.children).forEach(function (em) {
									em.classList.remove('toggle');
								});
								pt.classList.add('toggle');
							}
						}
						e.preventDefault();
					});
				}
			});
			Array.from(el.children).forEach(function (en) {
				var hds = en.offsetLeft;
				if (en.getElementsByClassName('info').length) {
					en.classList.add('has-info');
				}
				if (global_dir[1] === false) {
					hds = el.clientWidth - en.offsetLeft;
				}
				if (hds > el.clientWidth * 0.5) {
					en.classList.add('inv');
				}
				if (en.offsetTop > el.clientHeight * 0.5) {
					en.classList.add('inv-v');
				}
			});
		});
	}
});
window.dispatchEvent(hotspotsEvt);

window.addEventListener("maqruee", function (evt) {
	var module_maqruee = document.querySelectorAll('.m6kn:not(.m6kn-initialized)');
	if (module_maqruee.length) {
		loadRes(window.filepaths['plugin_typewriter_js'], function () {
			Array.from(module_maqruee).forEach(function (el) {
				"use strict";
				el.classList.add('m6kn-initialized');
				var clone_me, clone_li, typewriter, alias = [],
					ul = el.children[0],
					li = ul.children,
					typing_delay = 'natural',
					div_by = 1;
				el.parentElement.classList.add('has-m6kn');
				if (!el.classList.contains('type')) {
					el.style.setProperty('--items', li.length);
					if (ul !== undefined && ul.clientWidth >= 0) {
						if (ul.clientWidth > 0) {
							div_by = ul.clientWidth;
						}
						for (var i = 0; i < Math.ceil(root_id.clientWidth / div_by) + 1; i++) {
							clone_me = el.children[0].cloneNode(true);
							el.appendChild(clone_me);
						}
						el.children[0].classList.add('clone');
					}
				} else {
					el.innerHTML = '<span class="inner">' + el.innerHTML + '</span>';
					for (var i = 0; i < li.length; i++) {
						alias.push(li[i].innerText);
					}
					if (el.classList.contains('fast')) {
						typing_delay = 50;
					}
					if (el.classList.contains('slow')) {
						typing_delay = 200;
					}
					if (el.hasAttribute('data-speed')) {
						typing_delay = parseFloat(el.getAttribute('data-speed'));
					}
					typewriter = new Typewriter(el.children[0], {
						loop: true,
						strings: alias,
						autoStart: true,
						delay: typing_delay
					});
				}
				el.classList.add('done');
			});
		});
		new_css('css-marquee', window.filepaths['async_marquee_css']);
	}
});
window.dispatchEvent(maqrueeEvt);

var share_btn = document.querySelectorAll('a[data-share]');
if (share_btn.length) {
	Array.from(share_btn).forEach(function (el) {
		el.addEventListener('click', function (e) {
			if (navigator.share) {
				navigator.share({
					title: document.title,
					url: el.getAttribute('data-share')
				});
			}
			e.preventDefault();
		});
	});
}

window.addEventListener("removeSDCcss", function(event) {
	var shopify_default_css = document.getElementById('shopify-dynamic-checkout');
	if (shopify_default_css) {
		shopify_default_css.remove();
	}
});
window.dispatchEvent(removeSDCcssEvt);

if (!html_tag.classList.contains('scrolled')) {
	window.addEventListener('resize', function () {
		html_tag.classList.remove('scrolled');
	});
	window.addEventListener('scroll', function () {
		html_tag.classList.add('scrolled');
	});
}

// moved to custom - async.js (header tablet)
function customHeaderT() {
	if (header_id && nav_main) {
		root_styles.style.setProperty('--header_mih_c', header_id.clientHeight + 'px');
	}
}
function customHeaderM() {
	if (header_outer && header_inner) {
		root_styles.style.setProperty('--sticky_offset_m', header_outer.clientHeight + 'px');
	}
}
if (nav_main) {
	enquire.register('screen and (max-width: 1000px)', function () {
		customHeaderT();
	});
	enquire.register('screen and (max-width: 760px)', function () {
		customHeaderM();
	});
}
window.addEventListener('resize', function () {
	'use strict';
	customStickyNav();
	customMega();
});

// Live search
var liveSearch = function (elem) {
	const searchTerm = elem.value.trim();
	getSearchResults(searchTerm);
}
var getSearchResults = function (searchTerm) {
	var liveSearchEl = document.getElementById('livesearch');
	fetch(routes.predictive_search_url + "?q="+searchTerm+"&resources[limit]=4&resources[limit_scope]=each&section_id=livesearch")
		.then((response) => {
			if (!response.ok) {
				var error = new Error(response.status);
				throw error;
			}
			return response.text();
		})
		.then((text) => {
			const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-livesearch').innerHTML;
			liveSearchEl.innerHTML = resultsMarkup;
			search_id.classList.remove('processing');
			if (liveSearchEl.querySelectorAll('[data-search-suggestion]')){
				Array.from(liveSearchEl.querySelectorAll('[data-search-suggestion]')).forEach(function (el) {
					el.addEventListener('click', function (e) {
						e.preventDefault();
						search_input = search_id.querySelectorAll('input');
						search_input[0].value = el.dataset.searchSuggestion;
						search_id.classList.add('processing');
						liveSearch(search_input[0]);
					});
				});
			}
			window.dispatchEvent(ratingsEvt);
		})
		.catch((error) => {
			// this.close();
			throw error;
		});
};

// Ajax cart
var ajaxCart = (function(module) {
	var init, formOverride, addCartItem, handleCartPanel, updateCartPanel, updateCartPage, showCartPanel, updateItemQty, handleCartUpdates, removeItem, updateCartCount, handleErrorMessage; // Define the functions
	var productFormContainer, sideCartContainer, cartPageTemplate, sticky, countElement, formData, formObject, line, quantity, count, config; // Define the data and elements

	init = function () {
		productFormContainer = document.querySelectorAll('form.f8pr:not(.cart-initialized), form.form-card:not(.initialized)');
		cartPageContainer = document.querySelector('form.form-cart, .cart-empty');
		sticky = document.getElementById('sticky-add-to-cart');
		sideCartContainer = document.getElementById('cart');
		countElement = document.getElementById('cart-count');

		if (productFormContainer.length) { formOverride();	} // when there is an product form, initialize the ajax cart for the entire form
		if (cartPageContainer != null) { // when there is an cart form, initialize the ajax cart for the inputs in the form
			cartPageContainer = cartPageContainer.parentElement;
			cartPageTemplate = cartPageContainer.id.replace('shopify-section-', '');
			handleCartUpdates(cartPageContainer);
		}
	};

	formOverride = function () {
		Array.from(productFormContainer).forEach(function (form) {
			form.classList.add('cart-initialized');
			form.addEventListener('submit', function (e) {
				new_css('form-validation-css', window.filepaths['async_validation_css']);
				if(form.classList.contains('processing')) { return; }
				form.classList.add('processing');
				if (sticky) { sticky.classList.add('processing'); }
				e.preventDefault();
				addCartItem(form);
			});
		});
	};

	addCartItem = function(form, listItem, container) {
		formData = new FormData(form);
		if (general.template == 'cart') {
			formData.append('sections', 'side-cart,' + cartPageTemplate);
		} else {
			formData.append('sections', 'side-cart');
		}
		config = {
			method: 'POST',
			body: formData,
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				'Accept': 'application/javascript'
			}
		};
		fetch(routes.cart_add_url, config)
			.then((response) => response.json())
			.then((response) => {
				form.classList.remove('processing');
				if (sticky) { sticky.classList.remove('processing'); }
				document.querySelectorAll('[data-error-key]').forEach(function (el) { el.classList.remove('is-invalid'); });
				if (response.status) {
					if (listItem) {
						listItem.remove();
					}
					hidePanels();
					if (typeof response.description == 'object') {
						let keys = Object.keys(response.description);
						let messages = Object.values(response.description);
						for (let i = 0; i < keys.length; i++) {
							if (document.querySelector('[data-error-key="' + keys[i] + '"]')) {
								document.querySelector('[data-error-key="' + keys[i] + '"]').classList.add('is-invalid');
							}
						}
						for (let i = 0; i < messages.length; i++) {
							handleErrorMessage(messages[i]);
						}
					} else {
						handleErrorMessage(response.description);
					}
					return;
				}
				if (general.enable_cart_drawer) {
					if (listItem) {
						listItem.remove();
						if (general.template == 'cart') {
							updateCartPanel(response, false);
						} else {
							updateCartPanel(response, true, true);
						}
					} else {
						updateCartPanel(response);
					}
					if (general.template == 'cart') {
						updateCartPage(response);
					}
				} else {
					var count = new DOMParser().parseFromString(response.sections["side-cart"], 'text/html').querySelector('#shopify-section-side-cart').querySelector('[data-totalqty]').dataset.totalqty;
					updateCartCount(count);
					window.location.href = routes.cart_url;
				}
			})
			.catch((error) => {
				console.log("addCartItem error", error);
			});
	}

	handleErrorMessage = function(errorMessage = false) {
		if (errorMessage) {
			var alertAttributes = { message: errorMessage, type: "error" },
				showAlertEvent = new CustomEvent("showAlert", {detail: alertAttributes});
			window.dispatchEvent(showAlertEvent);
		}
	}

	showCartPanel = function() {
		openPanel('cart');
	}

	updateCartPage = function(response = false, undoRemove = false) {
		if (response) {
			const resultsMarkup = new DOMParser().parseFromString(response.sections[cartPageTemplate], 'text/html').querySelector("#shopify-section-" + cartPageTemplate).innerHTML;
			handleCartPage(resultsMarkup, undoRemove);
		}
	}

	updateCartPanel = function(response = false, openCartPanel = true, undoRemove = false) {
		if (response) {
			const resultsMarkup = new DOMParser().parseFromString(response.sections["side-cart"], 'text/html').querySelector('#shopify-section-side-cart').innerHTML;
			handleCartPanel(resultsMarkup, openCartPanel, undoRemove);
		} else if (sideCartContainer.childNodes.length < 3){
			fetch(window.Shopify.routes.root + "?section_id=side-cart")
				.then((response) => {
					if (!response.ok) {
						var error = new Error(response.status);
						throw error;
					}
					return response.text();
				})
				.then((text) => {
					const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-side-cart').innerHTML;
					handleCartPanel(resultsMarkup, openCartPanel);
				})
				.catch((error) => {
					console.log("updateCartPanel error", error);
					throw error;
				});
		} else {
			showCartPanel();
		}
		getStickyFooters();
	}

	handleCartPage = function(resultsMarkup, undoRemove) {
		let items = cartPageContainer.querySelectorAll('.l4ca > li');
		cartPageContainer.innerHTML = resultsMarkup;
		Array.from(items).forEach(function (item, index) {
			if (item.classList.contains('removing')) {
				if (undoRemove && cartPageContainer.querySelectorAll('.l4ca > li')[(index + 1)]) {
					cartPageContainer.querySelector('.l4ca').insertBefore(item, cartPageContainer.querySelectorAll('.l4ca > li')[(index + 1)]);
				} else if (undoRemove ) {
					cartPageContainer.querySelector('.l4ca').append(item);
				} else {
					cartPageContainer.querySelector('.l4ca').insertBefore(item, cartPageContainer.querySelectorAll('.l4ca > li')[(index)]);
				}
				if (cartPageContainer.querySelector('.cart-empty:not(.hidden)')) {
					cartPageContainer.querySelector('.cart-empty').classList.add('hidden');
				}
			}
		});

		window.dispatchEvent(listCartEvt);
		window.dispatchEvent(semanticInputEvt);
		window.dispatchEvent(formValidateEvt);
		window.dispatchEvent(accordeonEvt);
		window.dispatchEvent(countdownEvt);
		window.dispatchEvent(bindInputEvt);
		window.dispatchEvent(schemeTooltipEvt);
		window.dispatchEvent(popupsEvt);
		handleCartUpdates(cartPageContainer);
		updateCartCount();
	}

	handleCartPanel = function(resultsMarkup, openCartPanel, undoRemove) {
		let items = sideCartContainer.querySelectorAll('.l4ca > li');
		sideCartContainer.innerHTML = resultsMarkup;
		Array.from(items).forEach(function (item, index) {
			if (item.classList.contains('removing')) {
				if (undoRemove && sideCartContainer.querySelectorAll('.l4ca > li')[(index + 1)]) {
					sideCartContainer.querySelector('.l4ca').insertBefore(item, sideCartContainer.querySelectorAll('.l4ca > li')[(index + 1)]);
				} else if (undoRemove ) {
					sideCartContainer.querySelector('.l4ca').append(item);
				} else {
					sideCartContainer.querySelector('.l4ca').insertBefore(item, sideCartContainer.querySelectorAll('.l4ca > li')[(index)]);
				}
				if (sideCartContainer.querySelector('.empty:not(.hidden)')) {
					sideCartContainer.querySelector('.empty').classList.add('hidden');
				}
			}
		});

		if (sideCartContainer.querySelector('.product-recommendations:not(.product-recommendations-initialized)')) {
			window.dispatchEvent(recommendedProductsEvt);
		}

		window.dispatchEvent(modulePanelEvt);
		window.dispatchEvent(listCartEvt);
		window.dispatchEvent(semanticInputEvt);
		handleCartUpdates(sideCartContainer);
		window.dispatchEvent(formValidateEvt);
		updateCartCount();
		if (openCartPanel) { showCartPanel(); }
	}

	handleCartUpdates = function(container) {
		var updateItemInput = container.querySelectorAll('input[name="updates[]"]'),
			removeItemLink 	= container.getElementsByClassName('remove-from-cart-link');

		Array.from(updateItemInput).forEach(function (input) {
			input.addEventListener('change', function (e) {
				updateItemQty(e.target, container);
			});
		});

		Array.from(removeItemLink).forEach(function (link) {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				removeItem(e.target, container);
			});
		});
	}

	updateItemQty = function(input, container) {
		line = parseInt(input.dataset.line),
			quantity = parseInt(input.value);
		config = {
			method: 'POST',
			body: JSON.stringify({
				'line': line,
				'quantity': quantity,
				'sections': 'side-cart,'+ cartPageTemplate
			}),
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json',
				'Accept': 'application/javascript'
			}
		};
		fetch(routes.cart_change_url, config)
			.then((response) => response.json())
			.then((response) => {
				if (response.status) {
					handleErrorMessage(response.description);
					return;
				}
				if (container === sideCartContainer) {
					updateCartPanel(response);
				}
				if (cartPageContainer != null ) {
					updateCartPage(response);
					if (container != sideCartContainer) {
						updateCartPanel(response, false);
					}
				}
			})
			.catch((error) => {
				console.log("updateItemQty error", error);
			});
	};

	removeItem = function(link, container) {
		line = parseInt(link.dataset.line);
		let item = link.closest('li');
		if (container === sideCartContainer || container == cartPageContainer) {
			if (item.querySelector('.removed') != null) {
				item.classList.add('processing');
			}
		}
		config = {
			method: 'POST',
			body: JSON.stringify({
				'line': line,
				'quantity': 0,
				'sections': 'side-cart,' + cartPageTemplate
			}),
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json',
				'Accept': 'application/javascript'
			}
		};
		fetch(routes.cart_change_url, config)
			.then((response) => response.json())
			.then((response) => {
				if (response.status) {
					handleErrorMessage(response.description);
					return;
				}
				if (container === sideCartContainer || container == cartPageContainer) {
					if (item.querySelector('.removed') != null) {
						item.dispatchEvent(new CustomEvent("removing"));
						item.classList.add('removing');
						item.classList.remove('processing');
						item.querySelector('.removed a').addEventListener('click', function (e) {
							item.classList.add('processing');
							let tempForm = document.createElement('form');
							tempForm.innerHTML = '<input type="hidden" name="id" value="' + e.target.dataset.id + '"><input type="hidden" name="quantity" value="' + e.target.dataset.qty + '">';
							if (e.target.dataset.selling_plan) {
								tempForm.innerHTML += '<input type="hidden" name="selling_plan" value="' + e.target.dataset.selling_plan + '">';
							}
							for (var key in e.target.dataset) {
								if (key.indexOf('property-') === 0) {
									var data = JSON.parse(e.target.dataset[key]);
									tempForm.innerHTML += '<input type="hidden" name="properties[' + data[0] + ']" value="' + data[1] + '">';
								}
							}
							addCartItem(tempForm, item, container);
							tempForm.remove();
						});
					}
					if(container === sideCartContainer) {
						updateCartPanel(response, true);
						if (cartPageContainer != null) {
							updateCartPage(response);
						}
					} else if (container == cartPageContainer) {
						updateCartPage(response);
					}
				} else if (cartPageContainer != null ) {
					updateCartPage(response, true);
					updateCartPanel(response, false);
				}
			})
			.catch((error) => {
				console.log("removeItem error", error);
			});
	};

	updateCartCount = function(count) {
		if (!count){
			count = document.querySelector('[data-totalqty]').dataset.totalqty;
		}
		countElement.innerHTML = count;
	}

	module = {
		init: init,
		load: updateCartPanel
	};
	return module;

}(ajaxCart || {}));
ajaxCart.init();

// Currency/country/language selector
var localization_form = document.querySelectorAll('.localization-form a');
Array.from(localization_form).forEach(function (el) {
	el.addEventListener("click", function(event) {
		event.preventDefault();
		var form = el.closest('form'),
			input = form.querySelector('input[name="locale_code"], input[name="country_code"]');
		input.value = el.dataset.value;
		form.submit();
	})
})

// Collectionpage: sort_by
window.addEventListener("collectionSort", function (evt) {
	var sort_by = document.getElementById('sort_by'),
		sort_by_clone = document.getElementsByClassName('sort_by_clone')[0];
	if (sort_by != null) {
		Shopify.queryParams = {};
		if (location.search.length) {
			for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
				aKeyValue = aCouples[i].split('=');
				if (aKeyValue.length > 1) {
					Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
				}
			}
		}
		sort_by.addEventListener('change', function() {
			var el = this;
			if (sort_by_clone != null) { sort_by_clone.value == el.value; }
			setTimeout(function () {
				Shopify.queryParams.sort_by = el.value;
				url = Object.keys(Shopify.queryParams).map(function(k) {
					return encodeURIComponent(k) + '=' + Shopify.queryParams[k]
				}).join('&');
				location.search = url;
			},1);
		});
	}
});
window.dispatchEvent(collectionSortEvt);

// Grid or list view
var saveCollectionview = function(attribute, value) {
	config = {
		method: 'POST',
		body: JSON.stringify({
			attributes: {
				[attribute]: value
			}
		}),
		headers: {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/json',
			'Accept': 'application/javascript'
		}
	};
	fetch(routes.cart_update_url, config)
		.then((response) => response.json())
		.then((response) => {
			if (response.status) {
				handleErrorMessage(response.description);
				return;
			}
		})
		.catch((error) => {
			console.log("saveCollectionview error", error);
		});
}

var clearRangeInputs = function(minInput, maxInput) {
	var minInput = document.querySelector('#filter input#min'),
		maxInput = document.querySelector('#filter input#max');
	if (minInput && maxInput) {
		minInput.removeAttribute('name');
		maxInput.removeAttribute('name');
	}
}
var clearAllInputs = function() {
	clearRangeInputs();
	var inputs = document.querySelectorAll('#filter input[type="checkbox"]:checked');
	Array.from(inputs).forEach(function (el) {
		el.checked = false;
	});
}

window.addEventListener("collectionLoadMore", function (evt) {
	var collection_load_more = document.querySelectorAll('#load-more-button[data-next], #load-more-button[data-prev]');
	if (collection_load_more) {
		Array.from(collection_load_more).forEach(function (button) {
			button.addEventListener('click', function(e) {
				e.preventDefault();
				var template = button.getAttribute('data-section'),
					collectionSection = document.getElementById('shopify-section-' + template),
					curr_products = collectionSection.querySelector('.results, .l4cl'),
					pagination_info = document.getElementById('load-more-info');
				if (button.getAttribute('data-next') != null) {
					var direction = 'next'
				} else {
					var direction = 'prev';
				}
				button.classList.add('loading');
				fetch(button.getAttribute('href'))
					.then((response) => {
						if (!response.ok) {
							var error = new Error(response.status);
							throw error;
						}
						return response.text();
					})
					.then((text) => {
						const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-' + template);
						var	new_products = resultsMarkup.querySelector('.results, .l4cl'),
							new_button = resultsMarkup.querySelector('#load-more-button[data-'+ direction +'], #load-more-button[data-top]'),
							new_pagination_info = resultsMarkup.querySelector('#load-more-info');
						if (direction == 'prev'){
							var lastScrollHeight = curr_products.scrollHeight;
						}
						if (curr_products && new_products) {
							if (direction == 'next') {
								Array.from(new_products.children).forEach(function (el) {
									curr_products.appendChild(el);
								});
							} else {
								Array.from(new_products.children).reverse().forEach(function (el) {
									curr_products.insertBefore(el, curr_products.firstChild);
								});
							}
						}
						if (direction == 'next' && pagination_info && pagination_info.parentNode && new_pagination_info) {
							pagination_info.parentNode.replaceChild(new_pagination_info, pagination_info);
						}
						if (button && button.parentNode && new_button) {
							button.parentNode.replaceChild(new_button, button);
						} else if (button && direction == 'prev') {
							button.remove();
						}
						if (direction == 'prev'){
							var scrollDiff = curr_products.scrollHeight - lastScrollHeight,
								scrollTo = curr_products.scrollTop += scrollDiff;
							window.scrollTo({
								top: scrollTo,
								behavior: 'instant',
							});
						}
						window.history.replaceState({}, '', button.getAttribute('href'));
						saveLoadMoreAnchor();
						window.dispatchEvent(ratingsEvt);
						window.dispatchEvent(semanticInputEvt);
						window.dispatchEvent(schemeTooltipEvt);
						window.dispatchEvent(popupsEvt);
						window.dispatchEvent(collectionLoadMoreEvt);

						window.dispatchEvent(listScrollableEvt);
						window.dispatchEvent(productVariantsEvt);
						window.dispatchEvent(formZindexEvt);
						window.dispatchEvent(semanticSelectEvt);
						ajaxCart.init();
						quickShop.init();
					})
					.catch((error) => {
						console.log("collectionLoadMore error", error);
						throw error;
					});
			});
		});
	}
});
window.dispatchEvent(collectionLoadMoreEvt);

function saveLoadMoreAnchor() {
	let anchors = document.querySelectorAll('#collection > li > figure > a, .m6cl .results > div a, .m6cl .results > .l4ne a');
	if (anchors) {
		Array.from(anchors).forEach(function (el) {
			el.addEventListener('click', function(e) {
				localStorage.setItem('loadMoreItemClicked', el.getAttribute('href'));
			});
		});
	}
}

window.addEventListener("initFilters", function (evt) {
	if (document.getElementById('filter') != null) {
		new_css('form-validation-css', window.filepaths['async_validation_css']);

		// Collectionpage: filters
		var processFilters = function() {
			var filter_form_template = filter_form.dataset.template;
			var collectionSection = document.getElementById('shopify-section-' + filter_form_template);
			let sidebarGlobal = document.querySelector('.filters-aside-initialized');
			filter_form.classList.add('processing');
			if (collectionSection.querySelector('.l4cl')) {
				collectionSection.querySelector('.l4cl').classList.add('processing');
			}
			var minInput = document.querySelector('#filter input#min'),
					maxInput = document.querySelector('#filter input#max');
			if ((minInput && maxInput) && minInput.value == minInput.getAttribute('min') && maxInput.value == maxInput.getAttribute('max')) {
				clearRangeInputs();
			}
			var filterFormData = new FormData(document.getElementById('filter'));
			var filterParams = new URLSearchParams(filterFormData).toString();
			const filterUrl = window.location.pathname + '?section_id=' + filter_form_template + '&' + filterParams;
			fetch(filterUrl)
					.then((response) => {
						if (!response.ok) {
							var error = new Error(response.status);
							throw error;
						}
						return response.text();
					})
					.then((text) => {
						const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-' + filter_form_template);
						Array.from(filter_form.querySelectorAll('h4[data-filter-toggle].toggle')).forEach(function (el) {
							resultsMarkup.querySelector('h4[data-filter-toggle="'+ el.dataset.filterToggle +'"]').classList.add('toggle');
						});
						collectionSection.innerHTML = resultsMarkup.innerHTML;

						// check if drawer is enabled
						if (document.querySelector('.filters-aside-initialized')) {

							// replace HTML
							const drawerMarkup = resultsMarkup.querySelector('#filters-aside')
							sidebarGlobal.innerHTML = drawerMarkup.innerHTML;
							sidebarGlobal.classList.add('processed-filter');

							// remove section filters there is always one.
							document.querySelector('#filters-aside:not(.filters-aside-initialized)').remove();
						}
						window.scrollTo(0, 0);
						history.pushState({ filterParams }, '', `${window.location.pathname}${filterParams && '?'.concat(filterParams)}`);
						window.dispatchEvent(collectionSortEvt);
						window.dispatchEvent(rangeSliderEvt);
						window.dispatchEvent(gridListSwitchEvt);
						linkMore();
						window.dispatchEvent(initFiltersEvt);
						window.dispatchEvent(mobileFiltersEvt);
						window.dispatchEvent(modulePanelEvt);
						window.dispatchEvent(ratingsEvt);
						window.dispatchEvent(semanticInputEvt);
						window.dispatchEvent(semanticSelectEvt);
						window.dispatchEvent(schemeTooltipEvt);
						window.dispatchEvent(popupsEvt);
						window.dispatchEvent(collectionLoadMoreEvt);
						window.dispatchEvent(listScrollableEvt);
						window.dispatchEvent(modulePanelAnchorEvt);
						window.dispatchEvent(productcardVariantsEvt);

						window.check_limit_event();
						ajaxCart.init();
						quickShop.init();
					})
					.catch((error) => {
						console.log("processFilters error", error);
						throw error;
					});
		};

		filter_form = document.getElementById('filter');
		var form_filter_input_anchors = filter_form.querySelectorAll('li label a');
		Array.from(form_filter_input_anchors).forEach(function (el) {
			el.classList.add('no-click');
		});

		var form_filter_clear = filter_form.querySelectorAll('a.remove-all, a.clear-range');
		if (form_filter_clear.length) {
			Array.from(form_filter_clear).forEach(function (el) {
				el.addEventListener('click', function(e) {
					e.preventDefault();
					if (el.classList.contains('remove-all')) {
						clearAllInputs();
					} else {
						clearRangeInputs();
					}
					processFilters();
				})
			});
		}
		var form_filter_inputs = document.querySelectorAll('#filter input');
		if (form_filter_inputs.length) {
			Array.from(form_filter_inputs).forEach(function (el) {
				el.addEventListener('change', function(event) {
					processFilters();
				});
			});
		}

		var layout = document.getElementById('filter').dataset.drawer;
		var filters = document.querySelector('.collection-wrapper').dataset.filters;
		if ( (filtersDrawerContent && layout === 'static') || (!filters && layout === 'drawer') ) {
			document.querySelector('#root .filters-aside-initialized').remove();
			hidePanels();
			return
		}

		var filtersDrawerContent = document.querySelector('#filters-aside');
		if (layout === 'drawer') {
			var editor = filtersDrawerContent.dataset.editor
			if(!document.querySelector('#root .filters-aside-initialized')){
				document.querySelector('#root').appendChild(filtersDrawerContent);
				filtersDrawerContent.classList.add('filters-aside-initialized');
			} else {
				if (editor) {
					if(filtersDrawerContent.classList.contains('inv')){
						document.querySelector('#root .filters-aside-initialized').classList.add('inv')
					} else {
						document.querySelector('#root .filters-aside-initialized').classList.remove('inv')
					}
					if (!document.querySelector('#root .filters-aside-initialized').classList.contains('processed-filter')){
						processFilters();
					}
					document.querySelector('#root .filters-aside-initialized').classList.remove('processed-filter');
				}
			}
			window.dispatchEvent(navAsideEvt);
		}
	}
});
window.dispatchEvent(initFiltersEvt);

// Productpage AR functionality
var model3d = document.querySelectorAll('[data-shopify-xr]');
if (model3d.length) {
	window.ProductModel = {
		loadShopifyXR() {
			Shopify.loadFeatures([
				{
					name: 'shopify-xr',
					version: '1.0',
					onLoad: this.setupShopifyXR.bind(this),
				},
			]);
		},
		setupShopifyXR(errors) {
			if (errors) return;
			if (!window.ShopifyXR) {
				document.addEventListener('shopify_xr_initialized', () =>
					this.setupShopifyXR()
				);
				return;
			}
			document.querySelectorAll('[id^="ProductJSON-"]').forEach((modelJSON) => {
				window.ShopifyXR.addModels(JSON.parse(modelJSON.textContent));
				modelJSON.remove();
			});
			window.ShopifyXR.setupXRElements();
		},
	};
	if (window.ProductModel) window.ProductModel.loadShopifyXR();
}

// Productcards variant select
window.addEventListener("productcardVariants", function (evt) {
	var card_id_input = document.querySelectorAll('.l4ca > li select[name="id"]:not(.listening)');
	var product_card_add_to_cart = document.querySelectorAll('.l4cl .product-card.update-variants select[name="id"]:not(.listening)');
	if (!card_id_input.length && product_card_add_to_cart.length) {
		card_id_input = product_card_add_to_cart;
	}
	if (card_id_input.length) {
		new_css('form-validation-css', window.filepaths['async_validation_css']);
		Array.from(card_id_input).forEach(function (el) {
			el.classList.add('listening');
			var productCard = el.closest('.product-card');

			// Lay-out: Variant picker
			if(productCard.querySelector('ul.variant-picker')) {
				var updateAvailableSizes = function(sizeChanged) {
					var colorContainer = productCard.querySelector('ul.color');
					if(!colorContainer) { return; }
					if(sizeChanged) {
						colorContainer.classList.remove('sizes-initialized');
					}
					if(colorContainer.classList.contains('sizes-initialized')) {
						return;
					}
					colorContainer.classList.add('sizes-initialized');
					// Get available sizes for selected color
					var availableSizes = colorContainer.querySelector('input:checked').getAttribute('data-sizes');
					var availableInventory = colorContainer.querySelector('input:checked').getAttribute('data-sizes-availability');
					var sizes = availableSizes.split('/');
					var inventory = availableInventory.split('/');
					productCard.querySelectorAll('.variant-picker input').forEach(function (input) {
						input.parentElement.style.display = 'none'
						if(sizes.includes(input.value)){
							input.parentElement.style.display = 'block'
							var sizeIndex = sizes.indexOf(input.value);
							if(sizeIndex !== -1) {
								if(input.nextSibling) {
									if (inventory[sizeIndex] == 'true') {
										input.parentElement.querySelector('label').classList.remove('disabled-style');
									} else {
										input.parentElement.querySelector('label').classList.add('disabled-style');
									}
								}
							}
						}
					});
					// If there is only one color swatch and all variants are not available, show all variants
					var totalColorSwatches = productCard.querySelectorAll('.check.color li').length;
					if(totalColorSwatches == 1) {
						var totalDisabled = productCard.getElementsByClassName('disabled-style').length;
						var totalLiElements = productCard.querySelectorAll('.variant-picker li').length - 1;
						if (totalDisabled == totalLiElements) {
							productCard.querySelectorAll('.variant-picker .disabled-style').forEach(function (el) {
								el.parentElement.style.display = 'block'
							});
						}
					}
				}
				productCard.addEventListener('mouseover', function () {
					updateAvailableSizes();
				});
				productCard.querySelectorAll('input[type="radio"]:not(.listening), input[name^="color"]:not(.listening)').forEach(function (radio) {
					radio.classList.add('listening');
					radio.addEventListener('change', function() {
						var updateOptions = function() {
							this.options = Array.from(productCard.querySelectorAll('select[name^="options"], input[type="radio"][name^="options"]:checked, input[type="radio"][name^="color"]:checked'), (select) => select.value);
						}

						var getVariantData = function() {
							var data = [];
							Array.from(productCard.querySelectorAll('select[name="id"] option')).forEach(function (r) {
								data.push(JSON.parse(r.dataset.options));
							});
							this.variantData = data;
							return this.variantData;
						}
						var updateMasterId = function() {
							var variantData = getVariantData();
							this.currentVariant = variantData.find((variant) => {
								return this.options.every((option) => variant.options.includes(option));
							});
						}
						var setUnavailable = function(el) {
							el.classList.add('unavailable');
							el.querySelector('button[type="submit"]').textContent = translations.unavailable_text;
							el.querySelector('button[type="submit"]').setAttribute('disabled', 'disabled');
						}

						var updateVariantInput = function() {
							if (!this.currentVariant) {
								setUnavailable(productCard.querySelector('form'));
							} else {
								const select = productCard.querySelector('select[name="id"]');
								select.value = this.currentVariant.id;
								select.dispatchEvent(changeEvent);
								const input = productCard.querySelector('input[name="product-id"]');
								input.value = this.currentVariant.id;
								input.dispatchEvent(new Event('change', { bubbles: true }));
							}
						}
						updateOptions();
						updateMasterId();
						updateVariantInput();
						updateAvailableSizes(true);

						// Submit form if option is size
						if(this.closest('ul.variant-picker')) {
							if(productCard.querySelector('form').classList.contains('product-options')) {
								// Redirect if product has a third option
								var window_location_url = document.location.origin + productCard.querySelector('a').getAttribute('href');
								if(window_location_url.includes('?')) {
									window_location_url = window_location_url + '&';
								} else {
									window_location_url = window_location_url + '?';
								}
								window_location_url = window_location_url + 'variant=' + productCard.querySelector('form select').value
								window.location.href = window_location_url;
							} else {
								// Add variant to card
								if(radio.nextElementSibling.classList.contains('disabled-style')) {
									return;
								}
								productCard.querySelector('form:not(.process-add-to-cart) button[type="submit"]').click();
								productCard.querySelector('form').classList.add('initialized');
								setTimeout(function () {
									productCard.querySelector('form').classList.remove('initialized');
									radio.checked = false;
								}, 500);
							}
						}
					});
				});
			}

			el.addEventListener('change', function() {
				setTimeout(function () {
					var selected_option = el.options[el.selectedIndex],
						productFormSection = el.closest('li'),
						variant_data = JSON.parse(selected_option.dataset.variantinfo);

					if (variant_data.image) {
						if(productFormSection.querySelector('picture.slider') == undefined) {
							productFormSection.querySelector('img').src = variant_data.image;
							productFormSection.querySelector('img').removeAttribute('srcset', 'sizes');
						}
					}
					if (variant_data.price) {
						productFormSection.querySelector('.price').innerHTML = '<span class="old-price"></span>' + variant_data.price;
					}
					if (variant_data.price_old) {
						productFormSection.querySelector('.old-price').innerHTML = variant_data.price_old;
						productFormSection.querySelector('.old-price').classList.remove('hidden');
					} else {
						productFormSection.querySelector('.old-price').classList.add('hidden');
					}
					window.dispatchEvent(productcardVariantsEvt);
					window.dispatchEvent(semanticSelectEvt);
					ajaxCart.init();
				},1);
			});
		});
	}
});

// Productpage variant select
window.addEventListener("productVariants", function (evt) {
	var main_id_input = document.querySelectorAll('.m6pr select[name="id"]:not(.listening), .m6pr input[type="radio"][name="id"]:not(.listening), .m6pr-compact select[name="id"]:not(.listening), .m6pr-compact input[type="radio"][name="id"]:not(.listening)');
	var product_card_add_to_cart = document.querySelectorAll('.l4cl .product-card.update-variants select[name="id"]:not(.listening)');
	if (main_id_input.length) {
		new_css('form-validation-css', window.filepaths['async_validation_css']);
		Array.from(main_id_input).forEach(function (el) {
			el.classList.add('listening');
			el.addEventListener('change', function() {
				setTimeout(function (token) {
					var selected_variant_id = el.value,
						new_url = el.dataset.url + '?variant=' + selected_variant_id,
						productFormTemplate = el.dataset.template,
						productFormSection = document.querySelector('.m6pr-'+ productFormTemplate),
						sticky = document.getElementById('sticky-add-to-cart');
					if (productFormTemplate.startsWith('quickshop')) {
						productFormTemplate = productFormTemplate.replace('quickshop-', '');
						var isQuickshop = true;
					}
					var renderSections = productFormTemplate;
					if (sticky) {
						renderSections = renderSections + ',sticky-add-to-cart';
						var hasSticky = true;
						sticky.classList.add('processing');
					}
					productFormSection.querySelector('form.f8pr').classList.add('processing');
					fetch(new_url + "&sections=" + renderSections)
						.then((response) => {
							if (!response.ok) {
								var error = new Error(response.status);
								throw error;
							}
							return response.text();
						})
						.then((text) => {
							var sections = JSON.parse(text);
							const resultsMarkupForm = new DOMParser().parseFromString(sections[productFormTemplate], 'text/html');
							if (document.querySelector('.l4pr').dataset.variantImage) {
								productFormSection.querySelector('.l4pr-container').innerHTML = resultsMarkupForm.querySelector('.l4pr-container').innerHTML;
								if (isQuickshop) {
									if (productFormSection.querySelector('.l4pr.no-thumbs-mobile')) { productFormSection.querySelector('.l4pr.no-thumbs-mobile').classList.add('no-thumbs-desktop'); }
									if (productFormSection.querySelector('.l4pr.static')) { productFormSection.querySelector('.l4pr.static').classList.remove('static'); }
									if (productFormSection.querySelector('.l4pr li.sticky')) { productFormSection.querySelector('.l4pr li.sticky').remove(); }
								}
							}
							if (resultsMarkupForm.querySelector('.l4pr .label') != null) { productFormSection.querySelector('.l4pr .label').innerHTML = resultsMarkupForm.querySelector('.l4pr .label').innerHTML; }
							if (resultsMarkupForm.querySelector('.f8ps') != null && productFormSection.querySelector('.f8ps') != null && general.template == 'product' && (productFormSection == document.getElementById('shopify-section-' + productFormTemplate))) { productFormSection.querySelector('.f8ps').innerHTML = resultsMarkupForm.querySelector('.f8ps').innerHTML; }
							if (resultsMarkupForm.querySelector('.f8pr-pickup') != null) {
								Array.from(productFormSection.getElementsByClassName('f8pr-pickup')).forEach(function (el) {
									el.parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-pickup'), el);
								});
							}
							if (resultsMarkupForm.querySelector('.f8pr-stock') != null) {
								Array.from(productFormSection.getElementsByClassName('f8pr-stock')).forEach(function (el) {
									el.parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-stock'), el);
								});
							}
							if (resultsMarkupForm.querySelector('.f8pr-variant-selection') != null) {
								Array.from(productFormSection.querySelectorAll('.f8pr-variant-selection select[id^="option"]')).forEach(function (el) {
									if (isQuickshop) { el.id = el.id.replaceAll('quickshop-', ''); }
									if (el.closest('.select-wrapper')) {
										el.closest('.select-wrapper').parentNode.replaceChild(resultsMarkupForm.querySelector('#' + el.id), el.closest('.select-wrapper'));
									} else {
										el.parentNode.replaceChild(resultsMarkupForm.querySelector('#' + el.id), el);
									}

								});
								Array.from(productFormSection.querySelectorAll('.f8pr-variant-selection ul.check:not(.inline)')).forEach(function (el) {
									el.parentNode.replaceChild(resultsMarkupForm.querySelector('#' + el.id), el);
								});
								if (resultsMarkupForm.querySelector('.f8pr-variant-selection select[name="id"]') != null) {
									if (productFormSection.querySelector('.f8pr-variant-selection select[name="id"]').closest('.select-wrapper')) {
										productFormSection.querySelector('.f8pr-variant-selection select[name="id"]').closest('.select-wrapper').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-variant-selection select[name="id"]'), productFormSection.querySelector('.f8pr-variant-selection select[name="id"]').closest('.select-wrapper'));
									} else {
										productFormSection.querySelector('.f8pr-variant-selection select[name="id"]').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-variant-selection select[name="id"]'), productFormSection.querySelector('.f8pr-variant-selection select[name="id"]'));
									}
								}
								if (isQuickshop) {
									productFormSection.querySelector('.f8pr-variant-selection').innerHTML = productFormSection.querySelector('.f8pr-variant-selection').innerHTML.replaceAll(productFormTemplate, `quickshop-${ productFormTemplate }`).replaceAll('quickshop-quickshop-', 'quickshop-');
									if (productFormSection.querySelector('.f8pr-variant-selection a[data-popup].initialized-popup')) {
										productFormSection.querySelector('.f8pr-variant-selection a[data-popup].initialized-popup').classList.remove('initialized-popup');
									}

								}
							}
							if (resultsMarkupForm.querySelector('.f8pr-codes') != null) {
								productFormSection.querySelector('.f8pr-codes').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-codes'), productFormSection.querySelector('.f8pr-codes'));
							}
							if (resultsMarkupForm.querySelector('.f8pr-price') != null) {
								productFormSection.querySelector('.f8pr-price').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-price'), productFormSection.querySelector('.f8pr-price'));
							}
							if (resultsMarkupForm.querySelector('.f8pr-product-form-installment') != null) {
								productFormSection.querySelector('.f8pr-product-form-installment').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-product-form-installment'), productFormSection.querySelector('.f8pr-product-form-installment'));
							}
							if (resultsMarkupForm.querySelector('.f8pr-fallback-id-input') != null) {
								productFormSection.querySelector('.f8pr-fallback-id-input').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-fallback-id-input'), productFormSection.querySelector('.f8pr-fallback-id-input'));
							}
							if (resultsMarkupForm.querySelector('.f8pr-buy-button') != null) {
								productFormSection.querySelector('.f8pr-buy-button p.submit').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-buy-button p.submit'), productFormSection.querySelector('.f8pr-buy-button p.submit'));
							}
							if (resultsMarkupForm.querySelector('.f8pr-preorder') != null) {
								productFormSection.querySelector('.f8pr-preorder').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-preorder'), productFormSection.querySelector('.f8pr-preorder'));
							}
							if (resultsMarkupForm.querySelector('.f8pr-shipping-timer') != null && productFormSection.querySelector('.f8pr-shipping-timer') != null) {
								productFormSection.querySelector('.f8pr-shipping-timer').parentNode.replaceChild(resultsMarkupForm.querySelector('.f8pr-shipping-timer'), productFormSection.querySelector('.f8pr-shipping-timer'));
								window.dispatchEvent(countdownEvt);
							}
							if (isQuickshop) {
								productFormSection.querySelector('.f8pr-product-form-installment, .f8pr-fallback-id-input').innerHTML = productFormSection.querySelector('.f8pr-product-form-installment, .f8pr-fallback-id-input').innerHTML.replaceAll(productFormTemplate, `quickshop-${ productFormTemplate }`);
								if (productFormSection.querySelector('.pickup') != null) {
									Array.from(productFormSection.getElementsByClassName('pickup')).forEach(function (el) {
										el.remove();
									});
								}
								if (productFormSection.querySelector('.l4pr-container .m6tb')) { productFormSection.querySelector('.l4pr-container .m6tb').remove(); }
							}
							if (hasSticky && (productFormTemplate.endsWith('main-product')) && (!isQuickshop) ) {
								const stickyResultsMarkupForm = new DOMParser().parseFromString(sections['sticky-add-to-cart'], 'text/html');
								sticky.innerHTML = stickyResultsMarkupForm.getElementById('shopify-section-sticky-add-to-cart').innerHTML;
							}

							productFormSection.querySelector('form.f8pr').classList.remove('processing', 'unavailable');
							if (sticky) { sticky.classList.remove('processing', 'unavailable'); }
							if (general.template == 'product' && (productFormTemplate.endsWith('main-product')) && (!isQuickshop) ) { window.history.replaceState({ }, '', new_url); }
							window.dispatchEvent(productVariantsEvt);
							window.dispatchEvent(productOptionsEvt);
							window.dispatchEvent(semanticSelectEvt);
							window.dispatchEvent(showHideDataElementEvt);
							window.dispatchEvent(sellingplansEvt);
							window.dispatchEvent(pickupAvailabilityEvt);
							window.dispatchEvent(modulePanelEvt);
							window.dispatchEvent(modulePanelAnchorEvt);
							window.dispatchEvent(schemeTooltipEvt);
							window.dispatchEvent(popupsEvt);
							window.dispatchEvent(removeSDCcssEvt);
							if (document.querySelector('.l4pr').dataset.variantImage) {
								window.dispatchEvent(listProductSliderEvt);
								window.dispatchEvent(updateSlidersEvt);
								window.dispatchEvent(fancyboxEvt);
							}
							if (resultsMarkupForm.querySelector('.l4pr').dataset.featured_media_position && resultsMarkupForm.querySelector('.l4pr').dataset.mediaSize > 1 ) {
								var swiper = productFormSection.querySelector('.l4pr .swiper-outer').swiper;
								swiper.slideTo((resultsMarkupForm.querySelector('.l4pr').dataset.featured_media_position - 1), 500);
							}
							if (resultsMarkupForm.querySelector('.l4pr').dataset.featured_media_position > 0 && resultsMarkupForm.querySelector('.l4pr').classList.contains('static') ) {
								document.querySelector('#section-product-'+resultsMarkupForm.querySelector('.l4pr').dataset.featured_media_position+'').scrollIntoView();
							}
							window.dispatchEvent(semanticInputEvt);
							window.dispatchEvent(formZindexEvt);
							window.dispatchEvent(dataChangeEvt);
							ajaxCart.init();
							if (hasSticky && (productFormTemplate.endsWith('main-product')) && (!isQuickshop) ) {
								window.dispatchEvent(stickyAddToCartEvt);
							}

						})
						.catch((error) => {
							console.log("Productform variant change error", error);
							throw error;
						});
				},1);
			});
		});
	}
	if (product_card_add_to_cart.length) {
		window.dispatchEvent(productcardVariantsEvt);
	}
});
window.dispatchEvent(productVariantsEvt);

window.addEventListener("stickyAddToCart", function (evt) {
	var stickyAddToCart = document.querySelector('#sticky-add-to-cart');
	if (stickyAddToCart && stickyAddToCart.querySelector('#product_id_sticky:not(.listening)')) {
		stickyAddToCart.querySelector('#product_id_sticky').classList.add('listening');
		stickyAddToCart.querySelector('#product_id_sticky').addEventListener('change', function(el) {
			setTimeout(function () {
				const select = document.querySelector('#main-product select[name="id"]');
				if (select) {
					select.value = el.target.value;
					select.dispatchEvent(changeEvent);
				} else {
					const inputs = document.querySelectorAll('#main-product input[type="radio"][name="id"]');
					Array.from(inputs).forEach(function (input) {
						if (input.value == el.target.value) {
							input.checked = true;
							input.dispatchEvent(changeEvent);
						} else {
							input.checked = false;
						}
					});
				}
			},1);
		})
	}
});
window.dispatchEvent(stickyAddToCartEvt);

window.addEventListener("productOptions", function (evt) {
	var options_input = document.querySelectorAll('.m6pr select[name^="options"]:not(.listening), .m6pr input[type="radio"][name^="options"]:not(.listening), .m6pr-compact select[name^="options"]:not(.listening), .m6pr-compact input[type="radio"][name^="options"]:not(.listening)');
	if (options_input.length) {
		var stickyAddToCart = document.querySelector('#sticky-add-to-cart');
		Array.from(options_input).forEach(function (el) {
			el.classList.add('listening');
			el.addEventListener('change', function() {
				setTimeout(function () {
					var productFormTemplate = el.dataset.template,
						productForm = document.querySelector('.m6pr-'+ productFormTemplate);
					var updateOptions = function() {
						this.options = Array.from(productForm.querySelectorAll('select[name^="options"], input[type="radio"][name^="options"]:checked'), (select) => select.value);
					}
					var getVariantData = function() {
						var data = [];
						Array.from(productForm.querySelectorAll('select[name="id"] option, input[type="radio"][name="id"]')).forEach(function (el) {
							data.push(JSON.parse(el.dataset.options));
						});
						// this.variantData = this.variantData || data;
						this.variantData = data;
						return this.variantData;
					}
					var updateMasterId = function() {
						this.currentVariant = getVariantData().find((variant) => {
							return !variant.options.map((option, index) => {
								return this.options[index] === option;
							}).includes(false);
						});
					}

					var setUnavailable = function(el) {
						el.classList.add('unavailable');
						el.querySelector('button[type="submit"]').textContent = translations.unavailable_text;
						el.querySelector('button[type="submit"]').setAttribute('disabled', 'disabled');
					}

					var updateVariantInput = function() {
						if (!this.currentVariant) {
							setUnavailable(productForm.querySelector('form.f8pr'));
							if (stickyAddToCart) {
								setUnavailable(stickyAddToCart);
							}
						} else {
							const select = productForm.querySelector('select[name="id"]');
							productForm.querySelector('form.f8pr button[type="submit"]').removeAttribute('disabled');
							select.value = this.currentVariant.id;
							select.dispatchEvent(changeEvent);
						}
					}
					updateOptions();
					updateMasterId();
					updateVariantInput();
				},1);
			});
		});
	}
});
window.dispatchEvent(productOptionsEvt);

// Productpage selling plans
window.addEventListener("sellingplans", function (evt) {
	var selling_plan_group_input = document.querySelectorAll('input[name="selling_plan_group"]');
	var selling_plan_input = document.querySelectorAll('input[name="selling_plan"]');
	if (selling_plan_group_input.length) {
		Array.from(selling_plan_group_input).forEach(function (el) {
			var productFormTemplate = el.dataset.template,
				productForm = document.querySelector('.m6pr-'+ productFormTemplate);
			el.addEventListener('change', function() {
				if (productForm.querySelector('input[id^="purchase_option_single"][name="selling_plan_group"]:checked') != null) {
					changeSellingPlanRequired(false, el.getAttribute('data-enable'));
				} else {
					changeSellingPlanRequired(true, el.getAttribute('data-enable'));
				}
			});
		});
		var changeSellingPlanRequired = function(addAttribute, container) {
			Array.from(selling_plan_input).forEach(function (el) {
				el.checked = false;
				el.removeAttribute('required');
				el.setAttribute('type', 'hidden');
				if (el.getAttribute('name')) {
					el.setAttribute('xname', el.getAttribute('name'));
					el.removeAttribute('name');
				}
				if (addAttribute && (el.closest('[data-element]').getAttribute('data-element') == container)) {
					el.setAttribute('required','required');
					el.setAttribute('type', 'radio');
					if (el.getAttribute('xname')) {
						el.setAttribute('name', el.getAttribute('xname'));
						el.removeAttribute('xname');
					}
				}
			});
		};
	}
});
window.dispatchEvent(sellingplansEvt);

// Productpage pickup availability
window.addEventListener("pickupAvailability", function (evt) {
	var pickup_availability_anchor = document.querySelectorAll('[data-panel="pickup-availability"]');
	if (pickup_availability_anchor.length) {
		Array.from(pickup_availability_anchor).forEach(function (el) {
			el.addEventListener('click', function() {
				var selected_variant_id = el.dataset.id;
				fetch(window.Shopify.routes.root + 'variants/'+ selected_variant_id +'/?section_id=pickup-availability')
					.then((response) => {
						if (!response.ok) {
							var error = new Error(response.status);
							throw error;
						}
						return response.text();
					})
					.then((text) => {
						const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').getElementById('pickup-availability').innerHTML;
						var section = document.getElementById('pickup-availability');
						section.innerHTML = resultsMarkup;
						window.dispatchEvent(modulePanelEvt);
					})
					.catch((error) => {
						console.log("pickupAvailability error", error);
						throw error;
					});
			});
		});
	}
});
window.dispatchEvent(pickupAvailabilityEvt);

// Productpage recommended products
window.addEventListener("recommendedProducts", function (evt) {
	var product_recommendations = document.querySelectorAll(".product-recommendations:not(.product-recommendations-initialized)");
	if (product_recommendations.length) {
		Array.from(product_recommendations).forEach(function (el) {
			el.classList.add('product-recommendations-initialized');
			var product_id = el.dataset.productId.split(','),
				limit = el.dataset.limit,
				template = el.dataset.template,
				intents = el.dataset.intent.split(','),
				count = 0,
				calls = intents.length * product_id.length;
			if (product_id === undefined) {
				document.getElementById('shopify-section-' + template).classList.remove('hidden');
				return;
			}
			if (el.classList.contains('cart-upsell')) {
				var cart_upsell = true;
			}
			var fetchRecommendedProducts = function(url, intent) {
				fetch(url)
					.then((response) => {
						if (!response.ok) {
							var error = new Error(response.status);
							throw error;
						}
						return response.text();
					})
					.then((text) => {
						count++;
						const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-' + template + ' .product-recommendations');
						if (calls == 1) {
							el.querySelector('article, .l4cl, .l4ca').innerHTML = resultsMarkup.querySelector('article, .l4cl, .l4ca').innerHTML;
						} else {
							Array.from(resultsMarkup.querySelector('article, .l4cl, .l4ca').children).forEach(function (em) {
								el.querySelector('article, .l4cl, .l4ca').appendChild(em);
							});
						}
						if (count == calls) {
							var seen = {};
							el.querySelectorAll('.l4ca > li[data-product-id]').forEach(function (el) {
								if (seen[el.dataset.productId]) {
									el.remove();
								} else {
									seen[el.dataset.productId] = true;
								}
							});
							if (el.querySelector('.l4cl, .l4ca') && el.querySelector('.l4cl, .l4ca').children.length == 0) {
								el.innerHTML = '';
								if (el.classList.contains('tab')) {
									el.closest('.m6tb').querySelector('nav ul li[data-index="'+ el.getAttribute('data-index') +'"]').remove();
									if (el.closest('.m6tb').querySelector('nav ul li a') != null) {
										el.closest('.m6tb').querySelector('nav ul li a').click();
									}
								}
								return;
							}
							if (resultsMarkup.getAttribute('data-hide') != null) {
								if (intent == 'related') {
									document.getElementById('shopify-section-' + template).innerHTML = ''; return;
								} else {
									el.innerHTML = '';
									return;
								}
							}
							if (template && document.getElementById('shopify-section-' + template)) {
								document.getElementById('shopify-section-' + template).classList.remove('hidden');
							}
							el.classList.remove('hidden');
							window.dispatchEvent(listScrollableEvt);
							window.dispatchEvent(listCollectionSliderEvt);
							window.dispatchEvent(formZindexEvt);
							window.dispatchEvent(semanticInputEvt);
							window.dispatchEvent(ratingsEvt);
							window.dispatchEvent(schemeTooltipEvt);
							window.dispatchEvent(popupsEvt);
							window.dispatchEvent(semanticSelectEvt);
							window.dispatchEvent(productcardVariantsEvt);
							window.check_limit_event();
							ajaxCart.init();
							quickShop.init();
						}
					})
					.catch((error) => {
						console.log("recommendedProducts error", error);
						throw error;
					});
			};
			intents.forEach(function (intent) {
				if (el.classList.contains('cart-upsell') && intent == 'related') {
					limit = 4;
				}
				product_id.forEach(function (id) {
					var url = routes.product_recommendations_url + '?section_id=' + template + (limit ? '&limit=' + limit : '') + '&product_id=' + id + '&intent=' + intent;
					fetchRecommendedProducts(url, intent);
				});
			});
		});
	}
});
window.dispatchEvent(recommendedProductsEvt);

// Recently viewed products
window.addEventListener("recentlyViewedProducts", function (evt) {
	var recently_viewed_products = document.querySelectorAll(".recently-viewed-products:not(.recently-viewed-products-initialized)");
		currProductData = JSON.parse(localStorage.getItem("recentlyViewedProduct"));
	if (general.viewed_product){
		var numberOfProducts = 12,
			productUrl = general.viewed_product,
			productId = general.viewed_product_id,
			productData =  { productUrl: productUrl, productId: productId },
			pushNewProductData = false,
			currProductData, sameProduct, newProductData, sameProductIndex;
		if (currProductData === null) {
			currProductData = [];
			pushNewProductData = true;
		} else {
			sameProduct = currProductData.filter(e => e.productId === productId).length > 0;
			if (sameProduct) {
				sameProductIndex = currProductData.map(function(e) { return e.productId; }).indexOf(productId);
				currProductData.splice(sameProductIndex, 1);
				pushNewProductData = true;
			}
			if (currProductData.length < numberOfProducts && !sameProduct) {
				pushNewProductData = true;
			} else if (currProductData.length >= numberOfProducts && !sameProduct) {
				currProductData.shift();
				pushNewProductData = true;
			}
		}
		if (pushNewProductData) {
			currProductData.push(productData);
			newProductData = JSON.stringify(currProductData);
			localStorage.setItem("recentlyViewedProduct", newProductData);
		}
	}
	if (recently_viewed_products.length) {
		const productData = JSON.parse(localStorage.getItem("recentlyViewedProduct"));
		if (productData == null) {
			Array.from(recently_viewed_products).forEach(function (el) { el.remove(); });
			return;
		}
		var widthClass = 'w33',
			number_of_items = parseInt(recently_viewed_products[recently_viewed_products.length - 1].querySelector('[data-number_of_items]').dataset.number_of_items),
			content_alignment = recently_viewed_products[0].querySelector('[data-content_alignment]').dataset.content_alignment,
			show_title = recently_viewed_products[0].querySelector('[data-show_title]'),
			show_price = recently_viewed_products[0].querySelector('[data-show_price]'),
			fill_images = recently_viewed_products[0].querySelector('[data-fill_images]'),
			images_rounded = recently_viewed_products[0].querySelector('[data-images_rounded]'),
			length = productData.length,
			max = number_of_items;
		switch(max) {
			case 2:
				widthClass = 'w50'
				break;
			case 3:
				widthClass = 'w33'
				break;
			case 4:
				widthClass = 'w25'
				break;
			case 5:
				widthClass = 'w20'
				break;
			case 6:
				widthClass = 'w16'
				break;
			case 7:
				widthClass = 'w14'
				break;
			case 8:
				widthClass = 'w12'
				break;
			default:
				widthClass = 'w10'
				break;
		}
		var recentlyViewedHtml = '',
			recentlyViewedProductsObj = {},
			itemsDone = 0,
			data = productData.reverse();
		Array.from(data).forEach(function (product, index, array) {
			fetch(product.productUrl +'/?section_id=product-item-compact')
				.then((response) => {
					if (!response.ok) {
						var error = new Error(response.status);
						throw error;
					}
					return response.text();
				})
				.then((text) => {
					const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').getElementById('shopify-section-product-item-compact').innerHTML;
					recentlyViewedProductsObj[product.productId] = resultsMarkup;
					itemsDone++;
					if (itemsDone === array.length){
						Array.from(productData).forEach(function (product, index, array) {
							recentlyViewedHtml += recentlyViewedProductsObj[product.productId];
						});
						Array.from(recently_viewed_products).forEach(function (el, index, array) {
							el.classList.add('recently-viewed-products-initialized');
							var list_collection = el.querySelector('.l4cl');
							list_collection.innerHTML = recentlyViewedHtml;
							var placeholder_items = list_collection.querySelectorAll('.placeholder-product');
							Array.from(placeholder_items).forEach(function (el, index, array) {
								el.remove();
							});
							if (el.classList.contains('compact')) {
								var compact = true;
							} else {
								var compact = false;
								if ((length - placeholder_items.length) > max) {
									list_collection.classList.add('slider');
								} else {
									list_collection.classList.add('mobile-compact');
								}
								list_collection.classList.add(widthClass);
							}
							if (compact) {
								Array.from(el.querySelectorAll('.l4cl > li > *:not(figure), .l4cl > li > figure .label, .l4cl > li > figure .link-btn, .l4cl > li > figure form')).forEach(function (em) {
									em.remove();
								});
							}
							if (show_title == null) {
								Array.from(list_collection.querySelectorAll('h3')).forEach(function (el) {
									el.remove();
								});
							}
							if (show_price == null) {
								Array.from(list_collection.querySelectorAll('.price')).forEach(function (el) {
									el.remove();
								});
							}
							Array.from(list_collection.querySelectorAll('img')).forEach(function (el) {
								if (fill_images == null) {
									el.classList.remove('filled');
								} else {
									el.classList.add('filled');
									if(el.getAttribute('src').includes('&pad_color=fff')) {
										el.setAttribute('src', el.getAttribute('src').replace('&pad_color=fff', ''))
									}
									if(el.getAttribute('srcset').includes('&pad_color=fff')) {
										el.setAttribute('srcset', el.getAttribute('srcset').replaceAll('&pad_color=fff', ''))
									}
								}
							});
							if (images_rounded != null) {
								Array.from(list_collection.querySelectorAll('figure')).forEach(function (el) {
									el.classList.add('rounded');
								});
							}
							Array.from(el.querySelectorAll('.l4cl > li')).forEach(function (em) {
								em.classList.remove('text-start', 'text-center');
								em.classList.add(content_alignment);
							});
							window.dispatchEvent(ratingsEvt);
						});
						window.dispatchEvent(listCollectionSliderEvt);
						window.dispatchEvent(formZindexEvt);
						window.dispatchEvent(semanticInputEvt);
						window.dispatchEvent(schemeTooltipEvt);
						window.dispatchEvent(popupsEvt);
						window.dispatchEvent(listScrollableEvt);
						window.check_limit_event();
						ajaxCart.init();
						quickShop.init();
					}
				})
				.catch((error) => {
					console.log("recentlyViewedProducts error", error);
					throw error;
				});
		});
	}
});
window.dispatchEvent(recentlyViewedProductsEvt);

// Address page
var address_delete_button = document.getElementsByClassName("address-delete-button");
if (address_delete_button.length) {
	Array.from(address_delete_button).forEach(function (el) {
		el.addEventListener('click', function (e) {
			e.preventDefault();
			if (confirm(el.dataset.confirmMessage)) {
				var form = document.createElement("form");
				form.setAttribute("method", 'post');
				form.setAttribute("action", el.dataset.target);
				var hiddenField = document.createElement("input");
				hiddenField.setAttribute("type", "hidden");
				hiddenField.setAttribute("name", '_method');
				hiddenField.setAttribute("value", 'delete');
				form.appendChild(hiddenField);
				document.body.appendChild(form);
				form.submit();
				document.body.removeChild(form);
			}
		});
	});
}

// Product reviews button
var add_review_button = document.getElementsByClassName("spr-summary-actions-newreview");
if (add_review_button.length) {
	Array.from(add_review_button).forEach(function (el) {
		el.addEventListener('click', function (e) {
			Array.from(add_review_button).forEach(function (el) {
				el.remove();
			});
			setTimeout(function () {
				if (document.getElementsByClassName("new-review-form").length > 0) {
					document.getElementsByClassName("new-review-form")[0].scrollIntoView(true);
				}
			}, 10);
		});
	});
}

var checkbox_required = document.getElementsByClassName('checkbox-required');
if (checkbox_required.length) {
	Array.from(checkbox_required).forEach(function (form_el) {
		var inputs = form_el.getElementsByTagName('input');
		Array.from(inputs).forEach(function (input_el) {
			input_el.addEventListener('click', function (e) {
				checkIfChecked(form_el);
			});
		});
	});
	var checkIfChecked = function(form) {
		var checked = form.querySelector('input:checked');
		var inputs = form.getElementsByTagName('input');
		if (!checked) {
			if (inputs[0] != null) {
				inputs[0].setAttribute('required', '');
			}
		} else {
			if (inputs != null) {
				Array.from(inputs).forEach(function (el) {
					el.removeAttribute('required');
				});
			}
		}
	}
}

// Quickshop
var quickShop = (function(module) {
	var init, quickshopOverride, openQuickshop, handleQuickshopPanel; // Define the functions
	var quickshopButton; // Define the data and elements

	init = function () {
		quickshopButton = document.querySelectorAll('[data-quickshop]:not(.quickshop-initialized)');
		quickshopContainer = document.getElementById('quickshop');
		if (quickshopButton.length) { quickshopOverride();	}
	};
	quickshopOverride = function () {
		Array.from(quickshopButton).forEach(function (el) {
			el.classList.add('quickshop-initialized');
			el.addEventListener('click', function (e) {
				el.classList.add('loading');
				e.preventDefault();
				quickshopContainer.innerHTML = '';
				openQuickshop(el);
			});
		});
	};

	openQuickshop = function(el) {
		var quickshopUrl = el.getAttribute('href');
		fetch(quickshopUrl)
			.then((response) => {
				if (!response.ok) {
					var error = new Error(response.status);
					throw error;
				}
				return response.text();
			})
			.then((text) => {
				const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('div[id$="main-product"]'),
					container = resultsMarkup.querySelector('.m6pr'),
					sectionId = container.getAttribute('data-template');
				container.classList.add('m6pr-compact');
				container.classList.remove('m6pr');
				if (resultsMarkup.querySelector('header.mobile-only')) { resultsMarkup.querySelector('header.mobile-only').classList.remove('mobile-only'); }
				if (resultsMarkup.querySelector('.l4pr.no-thumbs-mobile')) { resultsMarkup.querySelector('.l4pr.no-thumbs-mobile').classList.add('no-thumbs-desktop'); }
				if (resultsMarkup.querySelector('.l4pr.static')) { resultsMarkup.querySelector('.l4pr.static').classList.remove('static'); }
				if (resultsMarkup.querySelector('.l4pr-container .m6tb')) { resultsMarkup.querySelector('.l4pr-container .m6tb').remove(); }
				Array.from(resultsMarkup.querySelectorAll('a[href="#section-info"], a[href="#section-reviews"]')).forEach(function (el) {
					el.setAttribute('href', quickshopUrl + el.getAttribute('href'));
				});
				Array.from(resultsMarkup.querySelectorAll('.pickup, .has-social, .benefit, .true-size, .l4pr li.sticky, .product-recommendations, header.mobile-hide, #section-info')).forEach(function (el) {
					el.remove();
				});
				resultsMarkup.querySelector('header > h1, header > h2, header > h3, header > h4, header > h5').innerHTML = '<a href="'+ quickshopUrl +'">' + resultsMarkup.querySelector('header > h1, header > h2, header > h3, header > h4, header > h5').innerHTML + '</a>';
				resultsMarkup.innerHTML = resultsMarkup.innerHTML.replaceAll(sectionId, `quickshop-${ sectionId }`);
				handleQuickshopPanel(resultsMarkup.innerHTML, el);
			})
			.catch((error) => {
				console.log("openQuickshop error", error);
				throw error;
			});
	}

	handleQuickshopPanel = function(resultsMarkup, el) {
		quickshopContainer.innerHTML = resultsMarkup;
		window.dispatchEvent(modulePanelEvt);
		window.dispatchEvent(semanticInputEvt);
		window.dispatchEvent(ratingsEvt);
		window.dispatchEvent(productVariantsEvt);
		window.dispatchEvent(productOptionsEvt);
		window.dispatchEvent(listProductSliderEvt);
		window.dispatchEvent(listDropEvt);
		window.dispatchEvent(semanticSelectEvt);
		window.dispatchEvent(showHideDataElementEvt);
		window.dispatchEvent(sellingplansEvt);
		window.dispatchEvent(pickupAvailabilityEvt);
		window.dispatchEvent(modulePanelAnchorEvt);
		window.dispatchEvent(formZindexEvt);
		window.dispatchEvent(fancyboxEvt);
		window.dispatchEvent(accordeonEvt);
		window.dispatchEvent(dataChangeEvt);
		window.dispatchEvent(countdownEvt);
		window.dispatchEvent(schemeTooltipEvt);
		window.dispatchEvent(popupsEvt);
		window.dispatchEvent(moduleTabsEvt);
		if (window.Shopify && Shopify.PaymentButton) {
			Shopify.PaymentButton.init();
		}
		setTimeout(function () {
			window.dispatchEvent(removeSDCcssEvt);
		},1);
		ajaxCart.init();
		if (window.ProductModel) window.ProductModel.loadShopifyXR();
		openPanel('quickshop');
		el.classList.remove('loading');
	}

	module = {
		init: init
	};
	return module;
}(quickShop || {}));
quickShop.init();

if (totop_id) {
	document.addEventListener('scroll', function () {
		if (window.scrollY > window.innerHeight) {
			totop_id.classList.remove('hidden');
		} else {
			totop_id.classList.add('hidden');
		}
	})
}

if (!general.enable_cart_drawer && document.getElementById('cart-count')) {
	fetch(window.Shopify.routes.root + 'cart.js')
		.then(response => response.json())
		.then(data => {
			document.getElementById('cart-count').innerHTML = data.item_count;
		})
		.catch((error) => {
			console.log("cartCount error", error);
		});
}

var address_form = document.getElementsByClassName('address-form');
if (address_form.length) {
	Array.from(address_form).forEach(function (el) {
		let countryInput = el.getElementsByClassName('address-country-option')[0],
			provinceInput = el.getElementsByClassName('address-province-option')[0],
			provinceInputContainer = el.getElementsByClassName('address-provinces')[0];
		let checkForProvinces = function(input) {
			let selected = input;
			setTimeout(function() {
				if (selected.options[selected.selectedIndex].dataset.provinces) {
					let provinces = JSON.parse(selected.options[selected.selectedIndex].dataset.provinces);
					if (provinces.length) {
						provinceInput.innerHTML = '';
						if (provinceInput.dataset.default) {
							var value = provinceInput.dataset.default;
						}
						Array.from(provinces).forEach(function (province) {
							if (value && (value == province[0] || value == province[1])) {
								provinceInput.innerHTML += '<option selected value="' + province[0] + '">' + province[1] + '</option>';
							} else {
								provinceInput.innerHTML += '<option value="' + province[0] + '">' + province[1] + '</option>';
							}
						});
						provinceInputContainer.style.display = '';
						if (provinceInputContainer.querySelector('.select-wrapper')) {
							provinceInputContainer.querySelector('.select-wrapper').parentNode.replaceChild(provinceInput, provinceInputContainer.querySelector('.select-wrapper'));
							provinceInput.classList.remove('semantic-select-initialized');
							provinceInput.removeAttribute('data-random');
							window.dispatchEvent(semanticSelectEvt);
						}
					} else {
						Array.from(provinceInput.querySelectorAll('options:not([value=""][disabled])')).forEach(function (el) {
							el.remove();
						});
						provinceInputContainer.style.display = 'none';
					}
				}
			}, 10);
		}
		if (countryInput.dataset.default) {
			var value = countryInput.dataset.default;
			for (var i = 0, count = countryInput.options.length; i < count; i++) {
				var option = countryInput.options[i];
				if (value == option.value || value == option.innerHTML) {
					option.setAttribute('selected', 'selected');
				}
			}
		}
		checkForProvinces(countryInput);
		countryInput.addEventListener("change", function() {
			checkForProvinces(this);
		});
	})
}
// ShoptheLook Drawer
var shopTheLookDrawer = (function(module) {
	var init, shopTheLookOverride, openShopTheLook, handleQuickshopPanel; // Define the functions
	var shopTheLookBtn; // Define the data and elements
	var shopTheLookContainer;
	var maxItems ;
	init = function () {
		shopTheLookBtn = document.querySelectorAll('[data-shopthelook]:not(.shopthelook-initialized)');
		shopTheLookContainer = document.querySelector('#add-products-to-banner ul');
		maxItems = shopTheLookContainer.dataset.items;
		if (shopTheLookBtn.length) { shopTheLookOverride(); }
	};
	shopTheLookOverride = function () {
		Array.from(shopTheLookBtn).forEach(function (el) {
			el.classList.add('shopthelook-initialized');
			el.addEventListener('click', function (e) {
				el.classList.add('loading');
				e.preventDefault();
				shopTheLookContainer.innerHTML = '';
				var widthClass;
				switch(maxItems) {
					case '4':
						widthClass = 'w25'
						break;
					case '5':
						widthClass = 'w20'
						break;
					default:
						widthClass = 'w16'
						break;
				}
				shopTheLookContainer.classList = `l4cl ${widthClass} slider mobile-compact`;
				openShopTheLook(el);
			});
		});
	};

	openShopTheLook = function(el) {
		var productData = JSON.parse(el.getAttribute('data-products'));
		if (productData.length == 0) { productData = new Array(parseInt(maxItems)); }
		var shopTheLookHTML = ''
		var shopTheLookProductsObj = {}
		var itemsDone = 0;
		Array.from(productData).forEach(function (product, index, array) {
			fetch(product + '/?section_id=product-item')
					.then((response) => {
						if (!response.ok) {
							var error = new Error(response.status);
							throw error;
						}
						return response.text();
					})
					.then((text) => {
						const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').getElementById('shopify-section-product-item').innerHTML;
						shopTheLookProductsObj[product] = resultsMarkup;
						itemsDone++;
						if (itemsDone === array.length) {
							Array.from(productData).forEach(function (product, index, array) {
								shopTheLookHTML += shopTheLookProductsObj[product];
							});
							el.classList.add('shopthelook-initialized-initialized');
							shopTheLookContainer.innerHTML = shopTheLookHTML;
							window.dispatchEvent(ratingsEvt);
							window.dispatchEvent(listCollectionSliderEvt);
							window.dispatchEvent(formZindexEvt);
							window.dispatchEvent(semanticInputEvt);
							window.dispatchEvent(semanticSelectEvt);
							window.dispatchEvent(schemeTooltipEvt);
							window.dispatchEvent(popupsEvt);
							window.dispatchEvent(listScrollableEvt);
							window.check_limit_event();
							ajaxCart.init();
							quickShop.init();
							openPanel('add-products-to-banner');
							el.classList.remove('loading');
						}
					})
					.catch((error) => {
						console.log("shopTheLookDrawer error", error);
						throw error;
					});
		});
	}
	module = {
		init: init
	};
	return module;
}(shopTheLookDrawer || {}));
shopTheLookDrawer.init();