import InputField from "./input-field";
import RequestMethod from "./request-methods";
import SendButton from "./send-button";

const Navigation = () => {

    const nav = document.createElement('div');
    nav.className = 'py-5 w-full flex justify-between items-center gap-2';

    /**
     * Get the dropdown with request methods
     */
    const requestMethods = RequestMethod();
    nav.appendChild(requestMethods);

    /**
     * Get the input field
     */
    const requestInput = InputField();
    nav.appendChild(requestInput);

    /**
     * Get the send request button
     */
    const sendButton = SendButton();
    nav.appendChild(sendButton);

    return nav;
}

const navigation = Navigation();

export { navigation };