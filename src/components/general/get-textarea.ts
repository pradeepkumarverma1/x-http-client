import Textarea from "../ui/textarea";

const handleTextareaInput = (event: Event) => {
    const element = (event.target as HTMLInputElement);

    try {
        const parsed = JSON.parse(element.value);
        element.value = JSON.stringify(parsed, null, 2);
    } catch (e) {
        /**
         * No need to log the error. In fact this try catch has been used to 
         * prevent any error logging if the provided content is not Json.
         */
    }
}

const HeadersTextarea = () => {

    const headers = Textarea({
        name: 'headers',
        id: 'headers',
        placeholder: '{"Authorization": "Bearer your_token"}',
        onInput: handleTextareaInput,
    });

    return headers;
}

const BodyTextarea = () => {
    const body = Textarea({
        name: 'body',
        id: 'body',
        placeholder: '{"key": "value"}',
        onInput: handleTextareaInput
    });

    return body;
}

/**
 * Initialize all the text areas
 */
const headerTextarea = HeadersTextarea();
const bodyTextarea = BodyTextarea();

export { headerTextarea, bodyTextarea };