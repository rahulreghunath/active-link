/**
 * Highlight the current links with given properties
 * @param {string} [activeClass = active]
 * @param {string} container - element,id or class of containing element
 * @param {boolean} [highlightParent = false] - if want to highlight parent element
 */
let highlight = ({activeClass = 'active', container, highlightParent = false}) => {

    let links;

    /**
     * Throw error if container element not given
     */
    try {
        links = document.querySelector(container).querySelectorAll("a");
    } catch (e) {
        throw ('container element not give');
    }

    /**
     * Loop through the links
     */
    for (const key of links) {

        /**
         * If current page url
         */
        if (key.href === window.location.href) {

            /**
             * If highlight parent element
             */
            if (highlightParent) {
                key.parentElement.setAttribute('class', activeClass);
            } else {
                key.setAttribute('class', activeClass);
            }
        }
    }
};
