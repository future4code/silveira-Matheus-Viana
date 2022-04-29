import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "./constants/urls";
import GlobalStyle from "./components/globalStyle/GlobalStyle";
import TelaInicial from "./pages/TelaInicial";
import TelaMatches from "./pages/TelaMatches";

const App = () => {
  const [page, setPage] = useState("");

  const escolherTela = () => {
    switch (page) {
      case "TelaInicial":
        return (
          <TelaInicial
            mudarTela={mudarTela}
            person={person}
            getProfileToChoose={getProfileToChoose}
          />
        );
      case "TelaMatches":
        return (
          <TelaMatches
            mudarTela={mudarTela}
            person={person}
            getProfileToChoose={getProfileToChoose}
          />
        );
      default:
        return (
          <TelaInicial
            mudarTela={mudarTela}
            person={person}
            getProfileToChoose={getProfileToChoose}
          />
        );
    }
  };

  const mudarTela = (nomeTela) => {
    setPage(nomeTela);
  };

  const [person, setPerson] = useState("");

  const getProfileToChoose = () => {
    axios
      .get(`${BASE_URL}/person`)
      .then((res) => {
        res.data.profile !== null && setPerson(res.data.profile);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return(
    <>
      <GlobalStyle/>
      {escolherTela()}
    </>
  )
}
export default App;
