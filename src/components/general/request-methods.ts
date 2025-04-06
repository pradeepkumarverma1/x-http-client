import HttpRequestMenu from "../../menu/http-request-menu";
import { useState } from "../../services/manage-state";
import DropDown from "../ui/drop-down";

const RequestMethod = () => {

    const handleOptionChange = (event: Event) => {
        const option = (event.target as HTMLInputElement).value;
        useState('reqMethod', option);
    }

    const requestMenu = DropDown({
        menu: HttpRequestMenu(),
        menuName: 'requestMethod',
        onChange: handleOptionChange
    });

    return requestMenu;
}

export default RequestMethod;