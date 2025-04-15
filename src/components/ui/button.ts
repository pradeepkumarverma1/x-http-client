interface ButtonProps {
    text: string, // The innerText like "Click Me"
    id?: string,
    onClick?: (event: Event) => void;
    onChange?: (event: Event) => void;
}

const Button = (props: ButtonProps) => {
    const button = document.createElement('button');
    button.className = 'cursor-pointer bg-blue-600 text-white border border-white rounded-md shadow-sm px-3 py-2 text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500';

    /**
     * Define the properties
     */
    button.innerText = props.text;
    if (props.id) button.id = props.id;


    /**
     * Define the event listeners
     */
    if (props.onClick) button.onclick = props.onClick;
    if (props.onChange) button.onchange = props.onChange;

    return button;
}

export default Button;