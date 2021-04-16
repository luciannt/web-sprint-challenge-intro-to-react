// Write your Character component here
function Characters(props) {
  const { charObj } = props;

  return (
    <div className="char-container">
      <div className="char-info">
        <p>{charObj.name}</p>

        <p>Gender: {charObj.gender}</p>

        <p>Height: {charObj.height}</p>

        <p>Mass: {charObj.mass}</p>

        <p>Birth Year: {charObj.birthYear}</p>

        <p>Eye Color: {charObj.eyeColor}</p>

        <p>Hair Color: {charObj.hairColor}</p>

        <p>Skin Color: {charObj.skinColor}</p>
      </div>
    </div>
  );
}
