interface InputProps {
    type: string,
    name?: string,
    value?: string,
    id?: string,
    placeholder?: string,
    onInput?: (event: Event) => void,
    onChange?: (event: Event) => void,
}

const Input = (props: InputProps) => {
    const inputElem = document.createElement('input');

    inputElem.className = 'border border-orange-100 rounded-sm'
    inputElem.type = props.type;

    /**
     * Define the properties
     */
    if (props.name) inputElem.name = props.name;
    if (props.id) inputElem.id = props.id;
    if (props.placeholder) inputElem.placeholder = props.placeholder;
    if (props.value) inputElem.value = props.value;

    /**
     * Add event listeners
     */
    if (props.onInput) inputElem.oninput = props.onInput;
    if (props.onChange) inputElem.onchange = props.onChange;

    return inputElem;
}

export default Input;