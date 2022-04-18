import { useState } from "react";
import "./App.css";
import GlobalStyle from "./components/globalStyle/GlobalStyle";
import TelaInicial from "./pages/TelaInicial";
import TelaMatches from "./pages/TelaMatches";
import Header from "./components/header/header";

const App = () => {
  const [page, setPage] = useState("");

  const escolherTela = () => {
    switch (page) {
      case "TelaInicial":
        return <TelaInicial mudarTela={mudarTela} />;
      case "TelaMatches":
        return <TelaMatches mudarTela={mudarTela} />;
      default:
        return <TelaInicial mudarTela={mudarTela} />;
    }
  };

  const mudarTela = (nomeTela) => {
    setPage(nomeTela);
  };

  return(
    <>
      <GlobalStyle/>
      {escolherTela()}
    </>
  )
}
export default App;
