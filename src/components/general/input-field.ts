import { useState } from "../../services/manage-state";
import Input from "../ui/input";

const InputField = () => {

    const handleOnChange = (event: Event) => {
        const url = (event.target as HTMLInputElement).value;

        /**
         * Store the current url into global state
         */
        useState('reqUrl', url);
    }

    const inputField = Input({
        type: 'text',
        placeholder: 'Enter the API URL',
        onChange: handleOnChange,
    });

    return inputField;
}

export default InputField;