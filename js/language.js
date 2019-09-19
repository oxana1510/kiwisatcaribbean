
var languages = {
    en: 'En',
    es: 'Es',
};

var DEFAULT_LANGUAGE = 'en';

var menuElem = document.getElementById('dropdown-menu');
var titleElem = menuElem.querySelector('.title');

// Set currently selected value (English in our case)
function selectOption(optionName) {
    titleElem.dataset.language = optionName
	titleElem.innerText = languages[optionName]
    titleElem.setAttribute("style", "background: url(img/flag_"+optionName+".png) no-repeat left center;background-size: 23px 18px;");
}
selectOption(DEFAULT_LANGUAGE)

// Handle dropdown opening
titleElem.onclick = function() {
    menuElem.classList.toggle('open');
};

// Handle selecting new language
var optionsHolter = menuElem.querySelector('ul')
optionsHolter.onclick = function (event) {
    menuElem.classList.remove('open');
    console.log(event.target.dataset.language)
    if (event.target.dataset && event.target.dataset.language) {
        selectOption(event.target.dataset.language)
    }
}