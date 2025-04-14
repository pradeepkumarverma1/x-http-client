import { tabs } from './components/general/generate-tabs';
import { resBadge } from './components/general/get-badges';
import { outputArea } from './components/general/json-res-field';
import { navigation } from './components/general/navigation';
import MainLayout from './layouts/main-layout';
import './style.css'

const mainElement = document.querySelector<HTMLDivElement>('#app')!;

mainElement.appendChild(
  MainLayout(
    navigation,
    tabs,
    resBadge.resBadgeDiv,
    outputArea
  ),
);
