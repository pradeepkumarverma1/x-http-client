interface TabProps {
    text: string,
    onClick?: (event?: Event) => void,
    contentAreaItem: any,
}

/**
 * Index to track the number of tabs created so far.
 */
let tabIndex = 0;


/**
 * TabGroup is a function that creates a tab system with a main container, 
 * a tab container, and a content area container. It returns an object 
 * containing the main container and a Tab function that can be used to 
 * create individual tabs.
 * 
 * @returns {Object} An object containing the main container and the Tab function.
 * @example
 * const { mainContainer, Tab } = TabGroup();
 * const tab1 = Tab({ text: 'Tab 1', contentAreaItem: 'This is the content of Tab 1' });
 * const tab2 = Tab({ text: 'Tab 2', contentAreaItem: 'This is the content of Tab 2' });
 */
const TabGroup = () => {

    /**
     * Create the main container for the tab system
     */
    const mainContainer = document.createElement('div');
    mainContainer.id = 'main-tab-container';
    mainContainer.className = 'w-full bg-white rounded-md shadow-md';


    /**
     * Create the tab container to hold all the tabs
     */
    const tabContainer = document.createElement('div');
    tabContainer.id = 'tab-container';
    tabContainer.className = 'flex gap-1 pt-1 px-1 bg-indigo-300 rounded-t-md';


    /**
     * Create the content area container to hold all the 
     * content area for each tab
     */
    const contentAreaContainer = document.createElement('div');
    contentAreaContainer.id = 'tab-content-area-container';
    contentAreaContainer.className = 'w-full rounded-b-md bg-white';



    /**
     * Creates a new tab with the given properties.
     * 
     * @param {TabProps} props - The properties of the tab.
     * @param {string} props.text - The text to be displayed on the tab.
     * @param {(event?: Event) => void} [props.onClick] - The function to be called when the tab is clicked.
     * @param {*} props.contentAreaItem - The content to be displayed in the tab's content area.
     * @returns {HTMLElement} The created tab element.
     */
    const Tab = (props: TabProps): HTMLElement => {
        /**
         * Create the tab
         */
        const tab = document.createElement('button');
        tab.innerText = props.text;
        tab.id = `tab-${tabIndex}`;
        tab.className = `modern-tab cursor-pointer px-4 py-2 text-sm font-medium border border-white rounded-t-md transition-colors duration-150 
        text-gray-600 bg-gray-900 text-white`;

        /**
         * Create the content area for the tab
         */
        const tabContentArea = document.createElement('div');
        tabContentArea.id = `tab-content-${tabIndex}`;
        tabContentArea.className = `w-full h-48 overflow-y-auto rounded-md bg-white tab-content-area transition-opacity duration-150 ${tabIndex !== 0 ? 'hidden' : ''}`;

        /**
         * If content area item has been provided
         * append it to the current tabContentArea
         */
        if (props.contentAreaItem) {
            if (typeof props.contentAreaItem == 'string') {
                tabContentArea.innerHTML = props.contentAreaItem;
            } else {
                tabContentArea.append(props.contentAreaItem);
            }
        }

        /**
         * Remove the border classes from all tabs except the first tab
         */
        if (tabIndex != 0) {
            tab.classList.remove('bg-gray-900');
        }

        /**
         * Define the event listeners
         */
        tab.addEventListener('click', () => {

            /**
             * Get all the tabs and remove their borders
             */
            const allTabs = document.querySelectorAll('.modern-tab');
            allTabs.forEach(tab => tab.classList.remove('bg-gray-900'));

            /**
             * Add border to the current active tab
             */
            tab.classList.add('bg-gray-900');

            /**
             * Get all the content area to add hidden class to them 
             * if not already present
             */
            const allContentArea = document.querySelectorAll('.tab-content-area')

            if (allContentArea) {
                allContentArea.forEach(c => {
                    if (!c.classList.contains('hidden')) {
                        c.classList.add('hidden');
                    }
                });

                tabContentArea.classList.toggle('hidden');
            }


            /**
             * Execute the function passed by the user (if any)
             */
            if (props.onClick) {
                props.onClick();
            }

        });

        /**
         * Increase the tabIndex by 1
         */
        tabIndex++;

        /**
         * Append the tab to the tab container
         */
        tabContainer.appendChild(tab);

        /**
         * Append the tab content area to the tab content container
         */
        contentAreaContainer.appendChild(tabContentArea)

        return tab;
    }


    /**
     * Append the tab container and content area to the main container
     */
    mainContainer.appendChild(tabContainer);
    mainContainer.appendChild(contentAreaContainer);


    return { mainContainer, Tab };
}

export default TabGroup;