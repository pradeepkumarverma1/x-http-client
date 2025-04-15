/**
 * I have zero knowledge about regex.
 * This code was generated by ChatGPT.
 * I just copied/pasted and changed the color classes.
 * 
 * BTW this function give pretty look to the json.
 * 
 * @param jsonString - The JSON string you want to make look nice.
 * @return string - The HTML string with color-coded JSON.
 */
const ColorJson = (jsonString: string) => {

    // Color keys (blue)
    jsonString = jsonString.replace(/"([^"]+)"\s*:/g, '<span class="text-orange-600">"$1"</span>:');

    // Color string values (green)
    jsonString = jsonString.replace(/: "([^"]*)"/g, ': <span class="text-blue-600">"$1"</span>');

    // Color numbers (purple)
    jsonString = jsonString.replace(/: (\d+)/g, ': <span class="text-purple-600">$1</span>');

    // Color booleans (orange)
    jsonString = jsonString.replace(/: (true|false|null)/g, ': <span class="text-blue-600">$1</span>');

    return jsonString;
}

export default ColorJson;