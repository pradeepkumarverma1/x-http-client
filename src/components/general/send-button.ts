import { outputArea } from "../general/json-res-field";
import HttpClient from "../../services/http-client";
import { getState } from "../../services/manage-state";
import Button from "../ui/button";

const SendButton = () => {

    const handleClick = async () => {

        /**
         * Get the current req method and current url 
         * from the global state
         */
        const currentRequestMethod = getState('reqMethod');
        const url = getState('reqUrl');

        if (currentRequestMethod && url) {
            const data = await HttpClient({ url: url, method: currentRequestMethod })
            outputArea.innerText = JSON.stringify(data, null, 2);
        }
    }

    const button = Button({ text: 'Send', onClick: handleClick });

    return button;
}

export default SendButton;