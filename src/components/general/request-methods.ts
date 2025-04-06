import HttpRequestMenu from "../../menu/http-request-menu";
import DropDown from "../ui/drop-down";

const RequestMethod = () => {

    const handleInputChange = (event: Event) => {
        console.log((event.target as HTMLInputElement).value);
    }

    const requestMenu = DropDown({
        menu: HttpRequestMenu(),
        menuName: 'requestMethod',
        onChange: handleInputChange
    });

    return requestMenu;
}

export default RequestMethod;