import { useState } from "react";
import burguer from "../img/burguer.svg";
import "./style.css";

function Header({ iDoNotKnow }) {
  const [userInput, setUserInput] = useState("");
  console.log(userInput);
  return (
    <div className="header-div">
      <img src={burguer} alt="Burger Kenzie" />
      <form className="search-div">
        <input
          placeholder="Digitar pesquisa"
          type="search"
          value={userInput}
          onChange={(ev) => {
            ev.preventDefault();
            setUserInput(ev.target.value);
          }}
        />
        <button
          onClick={(ev) => {
            ev.preventDefault();
            iDoNotKnow(userInput);
            setUserInput('')
          }}
        >
          Pesquisar
        </button>
      </form>
    </div>
  );
}

export default Header;
