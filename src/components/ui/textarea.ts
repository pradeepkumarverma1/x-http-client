interface TextareaProps {
    name: string,
    id?: string,
    placeholder?: string,
    onChange?: (event: Event) => void,
    onInput?: (event: Event) => void,
}

const Textarea = (props: TextareaProps) => {

    const textarea = document.createElement('textarea');
    textarea.name = props.name;
    textarea.className = 'w-full h-full p-3';

    /**
     * Define the properties
     */
    if (props.id) textarea.id = props.id;
    if (props.placeholder) textarea.placeholder = props.placeholder;

    /**
     * Define the event listeners
     */
    if (props.onChange) textarea.onchange = props.onChange;
    if (props.onInput) textarea.oninput = props.onInput;


    return textarea;
}

export default Textarea;