let highlight = ({activeClass = 'active', container, highlightParent = false}) => {

    let links;

    try {
        links = document.querySelector(container).querySelectorAll("a");
    } catch (e) {
        throw ('container element not give');
    }

    for (const key of links) {
        if (key.getAttribute('href').includes('http') && key.getAttribute('href') === window.location.href) {
            if (highlightParent) {
                key.parentElement.setAttribute('class', activeClass);
            } else {
                key.setAttribute('class', activeClass);
            }
        } else if (window.location.href.includes(key.getAttribute('href'))) {
            if (highlightParent) {
                key.parentElement.setAttribute('class', activeClass);
            } else {
                key.setAttribute('class', activeClass);
            }
        }
    }
};
