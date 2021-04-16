// Write your Character component here
import React from "react";

function Characters(props) {
  const { charObj } = props;

  return (
    <div className="char-container">
      <div className="char-info">
        <p>{charObj.name}</p>

        <p>Gender: {charObj.gender}</p>

        <p>Height: {charObj.height}</p>

        <p>Mass: {charObj.mass}</p>

        <p>Birth Year: {charObj.birth_year}</p>

        <p>Eye Color: {charObj.eye_color}</p>

        <p>Hair Color: {charObj.hair_color}</p>

        <p>Skin Color: {charObj.skin_color}</p>
      </div>
    </div>
  );
}

export default Characters;
