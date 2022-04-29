import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import ButtonThreeDSmall from "../components/ButtonThreeDSmall/ButtonThreeDSmall";
import { goBack } from "../routes/coordinator";
import useRequestData from "../hooks/useRequestData";
import useForm from "../hooks/useForm";
import Loading from "../components/Loading/Loading";

const Container = styled.div`
  padding: 20px;
`;

const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2{
    text-align: center;
    font-size: 32px;
    color: white;
    text-shadow: 2px 2px 2px #000000cf;
  }
  @media screen and (min-device-width : 768px) and (max-device-width : 1200px) {
    h2{
      font-size: 26px;
    }
  }
  @media screen and (max-width: 767px){
    h2{
      font-size: 18px;
    }
  }
`;

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const BlankSpace = styled.div`
  width: 20px;
  height: 23px;
  padding: 12px 42px;
  @media screen and (min-device-width : 768px) and (max-device-width : 1200px) {
    width: 0;
    height: 0;
    padding: 0;
  }
  @media screen and (max-width: 767px){
    width: 0;
    height: 0;
    padding: 0;
  }
`;

const InputForm = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 8px;
  font-size: 16px;
  margin-bottom: 15px;
  @media screen and (min-device-width : 768px) and (max-device-width : 1200px) {
    width: 94%;
  }
  @media screen and (max-width: 767px){
    width: 90%;
    height: 40px;
  }
`;

const SelectForm = styled.select`
  width: 420px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 8px;
  font-size: 16px;
  margin-bottom: 15px;
  @media screen and (min-device-width : 768px) and (max-device-width : 1200px) {
    width: 96%;
  }
  @media screen and (max-width: 767px){
    width: 96%;
    height: 40px;
  }
`;

const ContainerButton = styled.div`  
  margin-top: 15px;
`;

const ApplicationFormPage = (props) => {
  const navigate = useNavigate();  
  const [isLoading, setIsLoading] = useState(false);
  
  const { form, onChangeForm, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "", 
    country: "",
    tripId: ""
  });

  /* Lista com informações das Viagens */
  const [tripsList,,undefined] = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-mantini-silveira/trips"
  );

  const onClickApplicate = (e) => {
    e.preventDefault();
    setIsLoading(true);

      const body = {
        name: form.name,
        age: form.age,
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country
      }

      axios
        .post(
          `https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-mantini-silveira/trips/${form.tripId}/apply`,
          body
        )
        .then((response) => { 
          alert("Inscrição realizada com sucesso!");
          cleanFields();
          navigate("/trips/application/"); 
          setIsLoading(false);
        })
        .catch((error) => {
          alert(error.response.message);
        });
  }

  return (
    <Container>
      <ContainerTitulo>
          <ButtonThreeDSmall text={<i className="fas fa-long-arrow-alt-left"></i>} cor="red" onClick={() => goBack(navigate)} />
          <h2>Inscreva-se para uma viagem</h2>
          <BlankSpace/>
      </ContainerTitulo>

      {isLoading && <Loading/>}
        {!isLoading &&

      <ContainerForm onSubmit={onClickApplicate}>    
      <SelectForm name={"tripId"} defaultValue={""} onChange={onChangeForm} required>
          <option value="" disabled>Escolha uma Viagem</option>
          {tripsList && tripsList.trips.map((trip) => {
              return (
                  <option key={trip.id} value={trip.id}>{trip.name}</option>
              )
          })}
      </SelectForm>
        <InputForm name="name" type="text" value={form.name} onChange={onChangeForm} placeholder="Nome" pattern={"^.{3,}"} title={"O nome deve ter no mínimo 3 letras."} required/>
        <InputForm name="age" type="number" value={form.age} onChange={onChangeForm} placeholder="Idade" min={18} required/>
        <InputForm name="applicationText" value={form.applicationText} onChange={onChangeForm} placeholder="Porque sou um bom candidato(a)?" pattern={"^.{30,}"} title={"O texto deve ter no mínimo 30 caracteres."} required/>
        <InputForm name="profession" type="text" value={form.profession} onChange={onChangeForm} placeholder="Profissão"pattern={"^.{4,}"} title={"O nome deve ter no mínimo 4 letras."} required/>
        <SelectForm name={"country"} defaultValue={""} onChange={onChangeForm} required>
          <option value="" disabled>Escolha um País</option>
          <option value="Brasil">Brasil</option>
          <option value="Afeganistão">Afeganistão</option>
          <option value="África do Sul">África do Sul</option>
          <option value="Albânia">Albânia</option>
          <option value="Alemanha">Alemanha</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Anguilla">Anguilla</option>
          <option value="Antilhas Holandesas">Antilhas Holandesas</option>
          <option value="Antárctida">Antárctida</option>
          <option value="Antígua e Barbuda">Antígua e Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Argélia">Argélia</option>
          <option value="Armênia">Armênia</option>
          <option value="Aruba">Aruba</option>
          <option value="Arábia Saudita">Arábia Saudita</option>
          <option value="Austrália">Austrália</option>
          <option value="Áustria">Áustria</option>
          <option value="Azerbaijão">Azerbaijão</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrein">Bahrein</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belize">Belize</option>
          <option value="Benim">Benim</option>
          <option value="Bermudas">Bermudas</option>
          <option value="Bielorrússia">Bielorrússia</option>
          <option value="Bolívia">Bolívia</option>
          <option value="Botswana">Botswana</option>
          <option value="Brunei">Brunei</option>
          <option value="Bulgária">Bulgária</option>
          <option value="Burkina Faso">Burkina Faso</option>
          <option value="Burundi">Burundi</option>
          <option value="Butão">Butão</option>
          <option value="Bélgica">Bélgica</option>
          <option value="Bósnia e Herzegovina">Bósnia e Herzegovina</option>
          <option value="Cabo Verde">Cabo Verde</option>
          <option value="Camarões">Camarões</option>
          <option value="Camboja">Camboja</option>
          <option value="Canadá">Canadá</option>
          <option value="Catar">Catar</option>
          <option value="Cazaquistão">Cazaquistão</option>
          <option value="Chade">Chade</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Chipre">Chipre</option>
          <option value="Colômbia">Colômbia</option>
          <option value="Comores">Comores</option>
          <option value="Coreia do Norte">Coreia do Norte</option>
          <option value="Coreia do Sul">Coreia do Sul</option>
          <option value="Costa do Marfim">Costa do Marfim</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Croácia">Croácia</option>
          <option value="Cuba">Cuba</option>
          <option value="Dinamarca">Dinamarca</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="Egito">Egito</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Emirados Árabes Unidos">Emirados Árabes Unidos</option>
          <option value="Equador">Equador</option>
          <option value="Eritreia">Eritreia</option>
          <option value="Escócia">Escócia</option>
          <option value="Eslováquia">Eslováquia</option>
          <option value="Eslovênia">Eslovênia</option>
          <option value="Espanha">Espanha</option>
          <option value="Estados Federados da Micronésia">Estados Federados da Micronésia</option>
          <option value="Estados Unidos">Estados Unidos</option>
          <option value="Estônia">Estônia</option>
          <option value="Etiópia">Etiópia</option>
          <option value="Fiji">Fiji</option>
          <option value="Filipinas">Filipinas</option>
          <option value="Finlândia">Finlândia</option>
          <option value="França">França</option>
          <option value="Gabão">Gabão</option>
          <option value="Gana">Gana</option>
          <option value="Geórgia">Geórgia</option>
          <option value="Gibraltar">Gibraltar</option>
          <option value="Granada">Granada</option>
          <option value="Gronelândia">Gronelândia</option>
          <option value="Grécia">Grécia</option>
          <option value="Guadalupe">Guadalupe</option>
          <option value="Guam">Guam</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Guernesei">Guernesei</option>
          <option value="Guiana">Guiana</option>
          <option value="Guiana Francesa">Guiana Francesa</option>
          <option value="Guiné">Guiné</option>
          <option value="Guiné Equatorial">Guiné Equatorial</option>
          <option value="Guiné-Bissau">Guiné-Bissau</option>
          <option value="Gâmbia">Gâmbia</option>
          <option value="Haiti">Haiti</option>
          <option value="Honduras">Honduras</option>
          <option value="Hong Kong">Hong Kong</option>
          <option value="Hungria">Hungria</option>
          <option value="Ilha Bouvet">Ilha Bouvet</option>
          <option value="Ilha de Man">Ilha de Man</option>
          <option value="Ilha do Natal">Ilha do Natal</option>
          <option value="Ilha Heard e Ilhas McDonald">Ilha Heard e Ilhas McDonald</option>
          <option value="Ilha Norfolk">Ilha Norfolk</option>
          <option value="Ilhas Cayman">Ilhas Cayman</option>
          <option value="Ilhas Cocos (Keeling)">Ilhas Cocos (Keeling)</option>
          <option value="Ilhas Cook">Ilhas Cook</option>
          <option value="Ilhas Feroé">Ilhas Feroé</option>
          <option value="Ilhas Geórgia do Sul e Sandwich do Sul">Ilhas Geórgia do Sul e Sandwich do Sul</option>
          <option value="Ilhas Malvinas">Ilhas Malvinas</option>
          <option value="Ilhas Marshall">Ilhas Marshall</option>
          <option value="Ilhas Menores Distantes dos Estados Unidos">Ilhas Menores Distantes dos Estados Unidos</option>
          <option value="Ilhas Salomão">Ilhas Salomão</option>
          <option value="Ilhas Virgens Americanas">Ilhas Virgens Americanas</option>
          <option value="Ilhas Virgens Britânicas">Ilhas Virgens Britânicas</option>
          <option value="Ilhas Åland">Ilhas Åland</option>
          <option value="Indonésia">Indonésia</option>
          <option value="Inglaterra">Inglaterra</option>
          <option value="Índia">Índia</option>
          <option value="Iraque">Iraque</option>
          <option value="Irlanda do Norte">Irlanda do Norte</option>
          <option value="Irlanda">Irlanda</option>
          <option value="Irã">Irã</option>
          <option value="Islândia">Islândia</option>
          <option value="Israel">Israel</option>
          <option value="Itália">Itália</option>
          <option value="Iêmen">Iêmen</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Japão">Japão</option>
          <option value="Jersey">Jersey</option>
          <option value="Jordânia">Jordânia</option>
          <option value="Kiribati">Kiribati</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Laos">Laos</option>
          <option value="Lesoto">Lesoto</option>
          <option value="Letônia">Letônia</option>
          <option value="Libéria">Libéria</option>
          <option value="Liechtenstein">Liechtenstein</option>
          <option value="Lituânia">Lituânia</option>
          <option value="Luxemburgo">Luxemburgo</option>
          <option value="Líbano">Líbano</option>
          <option value="Líbia">Líbia</option>
          <option value="Macau">Macau</option>
          <option value="Macedônia">Macedônia</option>
          <option value="Madagáscar">Madagáscar</option>
          <option value="Malawi">Malawi</option>
          <option value="Maldivas">Maldivas</option>
          <option value="Mali">Mali</option>
          <option value="Malta">Malta</option>
          <option value="Malásia">Malásia</option>
          <option value="Marianas Setentrionais">Marianas Setentrionais</option>
          <option value="Marrocos">Marrocos</option>
          <option value="Martinica">Martinica</option>
          <option value="Mauritânia">Mauritânia</option>
          <option value="Maurícia">Maurícia</option>
          <option value="Mayotte">Mayotte</option>
          <option value="Moldávia">Moldávia</option>
          <option value="Mongólia">Mongólia</option>
          <option value="Montenegro">Montenegro</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Moçambique">Moçambique</option>
          <option value="Myanmar">Myanmar</option>
          <option value="México">México</option>
          <option value="Mônaco">Mônaco</option>
          <option value="Namíbia">Namíbia</option>
          <option value="Nauru">Nauru</option>
          <option value="Nepal">Nepal</option>
          <option value="Nicarágua">Nicarágua</option>
          <option value="Nigéria">Nigéria</option>
          <option value="Niue">Niue</option>
          <option value="Noruega">Noruega</option>
          <option value="Nova Caledônia">Nova Caledônia</option>
          <option value="Nova Zelândia">Nova Zelândia</option>
          <option value="Níger">Níger</option>
          <option value="Omã">Omã</option>
          <option value="Palau">Palau</option>
          <option value="Palestina">Palestina</option>
          <option value="Panamá">Panamá</option>
          <option value="Papua-Nova Guiné">Papua-Nova Guiné</option>
          <option value="Paquistão">Paquistão</option>
          <option value="Paraguai">Paraguai</option>
          <option value="País de Gales">País de Gales</option>
          <option value="Países Baixos">Países Baixos</option>
          <option value="Peru">Peru</option>
          <option value="Pitcairn">Pitcairn</option>
          <option value="Polinésia Francesa">Polinésia Francesa</option>
          <option value="Polônia">Polônia</option>
          <option value="Porto Rico">Porto Rico</option>
          <option value="Portugal">Portugal</option>
          <option value="Quirguistão">Quirguistão</option>
          <option value="Quênia">Quênia</option>
          <option value="Reino Unido">Reino Unido</option>
          <option value="República Centro-Africana">República Centro-Africana</option>
          <option value="República Checa">República Checa</option>
          <option value="República Democrática do Congo">República Democrática do Congo</option>
          <option value="República do Congo">República do Congo</option>
          <option value="República Dominicana">República Dominicana</option>
          <option value="Reunião">Reunião</option>
          <option value="Romênia">Romênia</option>
          <option value="Ruanda">Ruanda</option>
          <option value="Rússia">Rússia</option>
          <option value="Saara Ocidental">Saara Ocidental</option>
          <option value="Saint Martin">Saint Martin</option>
          <option value="Saint-Barthélemy">Saint-Barthélemy</option>
          <option value="Saint-Pierre e Miquelon">Saint-Pierre e Miquelon</option>
          <option value="Samoa Americana">Samoa Americana</option>
          <option value="Samoa">Samoa</option>
          <option value="Santa Helena, Ascensão e Tristão da Cunha">Santa Helena, Ascensão e Tristão da Cunha</option>
          <option value="Santa Lúcia">Santa Lúcia</option>
          <option value="Senegal">Senegal</option>
          <option value="Serra Leoa">Serra Leoa</option>
          <option value="Seychelles">Seychelles</option>
          <option value="Singapura">Singapura</option>
          <option value="Somália">Somália</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Suazilândia">Suazilândia</option>
          <option value="Sudão">Sudão</option>
          <option value="Suriname">Suriname</option>
          <option value="Suécia">Suécia</option>
          <option value="Suíça">Suíça</option>
          <option value="Svalbard e Jan Mayen">Svalbard e Jan Mayen</option>
          <option value="São Cristóvão e Nevis">São Cristóvão e Nevis</option>
          <option value="São Marino">São Marino</option>
          <option value="São Tomé e Príncipe">São Tomé e Príncipe</option>
          <option value="São Vicente e Granadinas">São Vicente e Granadinas</option>
          <option value="Sérvia">Sérvia</option>
          <option value="Síria">Síria</option>
          <option value="Tadjiquistão">Tadjiquistão</option>
          <option value="Tailândia">Tailândia</option>
          <option value="Taiwan">Taiwan</option>
          <option value="Tanzânia">Tanzânia</option>
          <option value="Terras Austrais e Antárticas Francesas">Terras Austrais e Antárticas Francesas</option>
          <option value="Território Britânico do Oceano Índico">Território Britânico do Oceano Índico</option>
          <option value="Timor-Leste">Timor-Leste</option>
          <option value="Togo">Togo</option>
          <option value="Tonga">Tonga</option>
          <option value="Toquelau">Toquelau</option>
          <option value="Trinidad e Tobago">Trinidad e Tobago</option>
          <option value="Tunísia">Tunísia</option>
          <option value="Turcas e Caicos">Turcas e Caicos</option>
          <option value="Turquemenistão">Turquemenistão</option>
          <option value="Turquia">Turquia</option>
          <option value="Tuvalu">Tuvalu</option>
          <option value="Ucrânia">Ucrânia</option>
          <option value="Uganda">Uganda</option>
          <option value="Uruguai">Uruguai</option>
          <option value="Uzbequistão">Uzbequistão</option>
          <option value="Vanuatu">Vanuatu</option>
          <option value="Vaticano">Vaticano</option>
          <option value="Venezuela">Venezuela</option>
          <option value="Vietname">Vietname</option>
          <option value="Wallis e Futuna">Wallis e Futuna</option>
          <option value="Zimbabwe">Zimbabwe</option>
          <option value="Zâmbia">Zâmbia</option>
        </SelectForm>
        <ContainerButton>
          <ButtonThreeDSmall text={<i className="fas fa-save"></i>} cor="green" />
        </ContainerButton>
      </ContainerForm>
      
    }

    </Container>
  );
};

export default ApplicationFormPage;
