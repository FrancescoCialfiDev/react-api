import { FooterComponent } from "./components/FooterComponent/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { MainComponent } from "./components/MainComponent/MainComponent";

export const App = () => (
  <>
    <HeaderComponent /> {/* Componente Header */}
    <MainComponent /> {/* Componente Main */}
    <FooterComponent /> {/* Componente Footer */}
  </>
);

