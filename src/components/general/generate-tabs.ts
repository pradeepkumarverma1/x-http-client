import TabGroup from "../ui/tab";
import { bodyTextarea, headerTextarea } from "./get-textarea";

const Tabs = () => {
    const tabGroup = TabGroup();
    tabGroup.Tab({ text: "Headers", contentAreaItem: headerTextarea });
    tabGroup.Tab({ text: "Body", contentAreaItem: bodyTextarea });

    return tabGroup.mainContainer;
}

const tabs = Tabs();

export { tabs };
export default Tabs;