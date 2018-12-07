let highlight = ({tag = 'a', activeClass = 'active', container = null,}) => {
    let links;
    if (container !== null) {
        links = document.querySelector(container).querySelectorAll("a");
    } else {
        links = document.querySelectorAll("a");
    }
    for (const key of links) {
        if (key.getAttribute('href').includes('http') && key.getAttribute('href') === window.location.href) {
            key.setAttribute('class', activeClass);
        } else if (window.location.href.includes(key.getAttribute('href'))) {
            key.setAttribute('class', activeClass);
        }
    }
};
