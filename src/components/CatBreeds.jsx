import { useContext } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { CatsContext } from "../contexts/CatsContext";

const Card = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 2rem;
  margin: 2rem;
  width: 15rem;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CatBreeds = () => {
  const { catBreeds } = useContext(CatsContext);

  if (!catBreeds) {
    return (
      <center>
        <h1>Loading...</h1>
      </center>
    );
  }

  return (
    <Container>
      {catBreeds.map((catBreed) => (
        <Card>
          <img src={catBreed.url} alt="Breed" width={240} height={180} />
          {catBreed.breeds.map((breed) => (
            <div>
              {breed.name} - {breed.origin}
            </div>
          ))}
          <Link to={`/details/${catBreed.id}`}>View Details</Link>
        </Card>
      ))}
    </Container>
  );
};

export default CatBreeds;
