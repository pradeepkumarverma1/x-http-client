import { getState } from "../../services/manage-state";
import Input from "../ui/input";
import RequestMethod from "./request-methods";

const Navigation = () => {

    const currentMethod = getState('reqMethod', (currentValue) => { console.log(currentValue) });
    console.log(currentMethod);

    const nav = document.createElement('div');
    nav.className = 'p-5 w-full flex justify-between items-center';

    const requestMethods = RequestMethod();
    nav.appendChild(requestMethods);

    const requestInput = Input({ type: 'text' });
    nav.appendChild(requestInput);

    return nav;
}

export default Navigation;