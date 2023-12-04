import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBreedDetails } from "../services/cats.service";
import { styled } from "styled-components";

const Page = styled.div`
  padding: 2rem;
`;

const CatBreedDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    (async () => {
      const data = await getBreedDetails(id);
      setDetails(data);
    })();
  }, [id]);

  if (!details) {
    return (
      <Page>
        <center>
          <h1>Loading...</h1>
        </center>
      </Page>
    );
  }

  return (
    <Page>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <br /> <br />
      <center>
        <img src={details.url} alt="Breed" width={400} height={300} />
        {details?.breeds?.map((breed) => {
          return (
            <>
              <h3>Breed Details</h3>
              <div>Name: {breed.name}</div>
              <div>Origin: {breed.origin}</div>
              <div>Weight (metrics): {breed.weight.metric}</div>
              <div>Hairless: {breed.hairless}</div>
              Wikipedia URL:{" "}
              <a href={breed.wikipedia_url} target="_blank" rel="noreferrer">
                {breed.wikipedia_url}
              </a>
            </>
          );
        })}
      </center>
    </Page>
  );
};

export default CatBreedDetails;
