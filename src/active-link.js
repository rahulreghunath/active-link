/**
 * Highlight the current links with given properties
 * @param {string} [activeClass = active] - class to be added to active element
 * @param {string} container - element,id or class of containing element
 * @param {boolean} [highlightParent = false] - if want to highlight parent element
 * @param {int} [parentLevels = 1] - if want to go more level upper from the link element to add active class
 */
let highlight = ({activeClass = 'active', container, highlightParent = false, parentLevels = 1}) => {

    let links, element;

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

        element = key;
        /**
         * If current page url
         */
        if (key.href === window.location.href) {

            /**
             * If highlight parent element
             */
            if (highlightParent) {

                /**
                 * to travel up from the link(a) element
                 */
                for (i = 0; i < parentLevels; i++) {
                    element = element.parentElement;
                }

                element.classList.add(activeClass)
            } else {
                key.classList.add(activeClass)
            }
        }
    }
};
