"use strict";

var elementsToApplyPopupSemantic;
NodeList.prototype.semanticPopup = function () {
	document.documentElement.addClass('spi');
	elementsToApplyPopupSemantic = this;
	for (var i = 0; i < this.length; i++) {
		var element = this[i];
		var dataTitle = element.getAttribute('data-title');
		element.setAttribute('role', 'dialog');
		element.setAttribute('aria-labelledby', dataTitle + '-tab');
		element.setAttribute('aria-describedby', dataTitle + '-tab');
		element.id = dataTitle;
		if (element.getElementsByClassName('box-outer').length) {
			element.classList.add('rendered');
		} else {
			element.innerHTML = '<div class="box-outer"><div class="box-inner"><div class="box-inset">' + element.innerHTML + '<a class="close" href="./">Close</a></div></div><a class="close" href="./">Close</a></div>';
		}
		var dataPopupElements = document.querySelectorAll('[data-popup="' + dataTitle + '"]');
		dataPopupElements.forEach((el) => {
			el.id = dataTitle + '-tab';
			el.setAttribute('aria-controls', dataTitle);
			el.setAttribute('aria-haspopup', 'true');
			el.href = '#' + dataTitle;
		});

		element.querySelectorAll('.close, button[type="reset"], [data-class="close"]:not(.submit)').forEach(el => {
			if (el.previousElementSibling !== null) {
				el.previousElementSibling.addClass("last-child");
			}
			el.addEventListener('click', function (event) {
				if (el.classList.contains('cookie-close')) {
					Cookies.set('cookie-bar', 'no');
				}
				event.preventDefault();
				findAndHideShownElements();
			});
			if (el.tagName.toLowerCase() === 'option' && el.closest('select') !== undefined) {
				el.closest('select').addEventListener('change', function (event) {
					if (el.classList.contains('cookie-close')) {
						Cookies.set('cookie-bar', 'no');
					}
					event.preventDefault();
					findAndHideShownElements();
				});
			}
		});

		element.addClass('ready');
	}
}

/**
 * Find HTMLElement that has data-popup attribute value and open a pop-up from it
 * @param {string} dataPopupAttributeValue data-popup attribute value to be used as reference
 */
function openPopup(dataPopupAttributeValue) {
	new_css('css-popups', window.filepaths['async_popups_css']);
	var el = document.querySelectorAll('a[data-popup="' + dataPopupAttributeValue + '"]');
	if (el) {
		var openedPopups = document.querySelectorAll('[class^=popup].shown');
		openedPopups.removeClass('shown')

		var popupElement = document.querySelector('[class^=popup][data-title="' + dataPopupAttributeValue + '"]')
		if (popupElement) {
			showPopupForElement(popupElement);
		} else {
			throw new Error('Element [class^=popup][data-title="' + dataPopupAttributeValue + '"]' + 'not found');
		}
	}
};

/**
 * Add class to HTMLElement
 * @param {string} className
 * @returns HTMLElement
 */
HTMLElement.prototype.addClass = function (className) {
	if (!this.classList.contains(className)) {
		this.classList.add(className);
	}

	return this;
}

/**
 * Add class to all HTMLElements from a NodeList
 * @param {string} className
 * @returns NodeList
 */
NodeList.prototype.addClass = function (className) {
	for (var i = 0; i < this.length; i++) {
		this[i].addClass(className);
	}

	return this;
}

/**
 * Remove class from HTMLElement
 * @param {string} className
 * @returns HTMLElement
 */
HTMLElement.prototype.removeClass = function (className) {
	if (this.classList.contains(className)) {
		this.classList.remove(className);
	}

	return this;
}

/**
 * Remove class from all HTMLElements from a NodeList
 * @param {string} className
 * @returns NodeList
 */
NodeList.prototype.removeClass = function (className) {
	for (var i = 0; i < this.length; i++) {
		this[i].removeClass(className);
	}

	return this;
}

/**
 * Run callback after timeout seconds
 * @param {number} timeout Milliseconds to run callback
 * @param {function} callback Callback function
 * @returns
 */
HTMLElement.prototype.delay = function (timeout, callback) {
	setTimeout(callback, timeout);
}

/**
 * Find HTMLElements that matches selector in all elements
 * @param {string} selector selector
 * @param {NodeList} elements NodeList
 * @returns {array}
 */
function querySelectorFrom(selector, elements) {
	return [].filter.call(elements, function (element) {
		return element.matches(selector);
	});
}

/**
 * Show Pop-up for element
 * @param {HTMLElement} element
 */
function showPopupForElement(element) {
	element.addClass("shown");
	element.setAttribute("focusable", "true");
	element.setAttribute("aria-hidden", "false");
	document.documentElement.addClass('popup-shown');
	window.addEventListener("keydown", closePopupEscWithEvent);

	var allApopups = element.querySelectorAll('a[data-popup]');
	for (var i = 0; i < allApopups.length; i++) {
		allApopups[i].addEventListener('click', function (event) {
			event.preventDefault();
			openPopup(this.getAttribute('data-popup'));
		}, {
			once: true
		});
	}
}

/**
 * Hide Pop-up from element
 * @param {HTMLElement} element
 */
function hidePopupForElement(element) {
	element.removeClass('shown');
	element.setAttribute("focusable", "false");
	element.setAttribute("aria-hidden", "true");
	element.addClass("unshown");
	element.delay(500, function () {
		element.removeClass('unshown');
	});
	document.documentElement.removeClass('popup-shown');
	window.removeEventListener("keydown", closePopupEscWithEvent);
}

function closePopupEscWithEvent(event) {
	if (event.key === 'Escape' || event.key === 'Esc') {
		findAndHideShownElements();
	}
}

/**
 * Find all HTMLElements from elementsToApplyPopupSemantic and hide their popups
 */
function findAndHideShownElements() {
	var elements = document.querySelectorAll('[class^="popup-"]:not(html)');
	// var elementsWithShown = querySelectorFrom(".shown", elementsToApplyPopupSemantic);
	var elementsWithShown = querySelectorFrom(".shown", elements);
	elementsWithShown.forEach(elShown => {
		hidePopupForElement(elShown);
	});
}

function initializePopups() {
	var html_tag = document.documentElement;
	if (!html_tag.classList.contains('popup-loaded')) {
		var allPopups = document.querySelectorAll('[class^="popup-"]:not(html)');
		if (allPopups && !document.documentElement.classList.contains('spi')) {
			allPopups.semanticPopup();
		}

		var allApopups = document.querySelectorAll('a[data-popup], form[data-popup]');
		for (var i = 0; i < allApopups.length; i++) {
			allApopups[i].addEventListener('click', function (event) {
				event.preventDefault();
				openPopup(this.getAttribute('data-popup'));
			});
		}

		html_tag.classList.add('popup-loaded');
	}
}
initializePopups(); // this is executed as soon as script is loaded
