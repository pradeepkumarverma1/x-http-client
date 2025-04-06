interface DropDownProps {
    menu: string[],
    menuName: string,
    onChange?: (event: Event) => void;
}

const DropDown = (props: DropDownProps) => {
    const dropDownElement = document.createElement('select');
    dropDownElement.name = props.menuName;

    /**
     * Add the option menu
     */
    props.menu.forEach(item => {
        const option = document.createElement('option');
        option.textContent = item;
        option.value = item;

        dropDownElement.append(option);
    });

    /**
     * Add event listeners
     */
    if (props.onChange) dropDownElement.addEventListener('change', props.onChange);

    return dropDownElement;
}

export default DropDown;