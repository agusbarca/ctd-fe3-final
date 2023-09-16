import React from "react";
import Card from "../Components/Card/Card";
import { useGlobalStates } from "../Context/Context";

const Favs = () => {

  const {state} = useGlobalStates()

  return (
    <div className={state.theme}>
      <h1>⭐ DENTISTAS FAVORITOS ⭐</h1>
      <div className="card-grid">
        {state.favs.map(fav => <Card odontologo={fav} key={fav.id}/>)}
      </div>
    </div>
  );
};

export default Favs;