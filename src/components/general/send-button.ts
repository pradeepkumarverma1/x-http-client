import { outputArea } from "../general/json-res-field";
import HttpClient from "../../services/http-client";
import { getState } from "../../services/manage-state";
import Button from "../ui/button";
import { bodyTextarea, headerTextarea } from "./get-textarea";
import ColorJson from "../../services/color-json";
import { resBadge } from "./get-badges";

const SendButton = () => {

    const handleClick = async (event: Event) => {

        const btnRef = (event.target as HTMLButtonElement);

        /**
         * Get the current req method and current url 
         * from the global state
         */
        const currentRequestMethod = getState('reqMethod');
        const url = getState('reqUrl');

        if (currentRequestMethod && url) {

            const headers = currentRequestMethod !== 'GET' ? headerTextarea.value : {};
            const body = currentRequestMethod !== 'GET' ? bodyTextarea.value : null;


            /**
             * Show the processing to the end user
             */
            outputArea.innerHTML = `
                <div class="flex justify-center items-center h-32">
                    <h1 class="text-xl font-medium text-gray-600 animate-pulse">Loading...</h1>
                </div>
            `;

            btnRef.innerHTML = `
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
            `;
            btnRef.disabled = true;

            const data = await HttpClient({
                url: url,
                method: currentRequestMethod,
                headers: headers,
                body: body
            });

            btnRef.innerHTML = 'Send';
            btnRef.disabled = false;

            /**
             * Update the status and response time for the request made
             */
            resBadge.statusBadge.innerText = `Status: ${data.status}`;
            resBadge.timeBadge.innerText = `Time: ${data.time.toFixed(0)}ms`;

            outputArea.innerHTML = ColorJson(JSON.stringify(data.json, null, 2));
        }
    }

    const button = Button({ text: 'Send', onClick: handleClick });

    return button;
}

export default SendButton;