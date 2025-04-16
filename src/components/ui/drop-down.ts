interface DropDownProps {
    menu: string[],
    menuName: string,
    onChange?: (event: Event) => void;
}

const DropDown = (props: DropDownProps) => {
    const dropDownElement = document.createElement('select');
    dropDownElement.name = props.menuName;
    dropDownElement.className = 'border border-gray-300 bg-white rounded-md px-3 py-2 text-sm font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500';

    /**
     * Add the option menu
     */
    props.menu.forEach((item, index) => {
        const option = document.createElement('option');
        option.textContent = item;
        option.value = item;

        /**
         * By default keep the first option selected
         */
        if (index === 0) option.selected = true;

        dropDownElement.append(option);
    });

    /**
     * Add event listeners
     */
    if (props.onChange) {
        dropDownElement.addEventListener('change', props.onChange);

        /** 
         * Trigger an event to make the first value selected
         */
        const changeEvent = new Event('change');
        dropDownElement.dispatchEvent(changeEvent);

    }

    return dropDownElement;
}

export default DropDown;