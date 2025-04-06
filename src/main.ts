import Navigation from './components/general/navigation';
import MainLayout from './layouts/main-layout';
import './style.css'

const mainElement = document.querySelector<HTMLDivElement>('#app')!;

mainElement.appendChild(
  MainLayout(
    Navigation(),
  )
);