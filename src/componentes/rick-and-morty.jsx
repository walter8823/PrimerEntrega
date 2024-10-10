import { useEffect, useState } from "react";
import { getAllCharacters } from "../servicios/rymService";
import Modal from './modal'; 

export default function RickAndMorty() {
  const [data, setData] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const apiURL = "https://rickandmortyapi.com/api";

  useEffect(() => {
    async function fetchData() {
      const url = apiURL + '/character?limit=20';
      let response = await getAllCharacters(url);
      console.log(response);
      setData(response.results);
    }
    fetchData();
  }, []);

  const handleOpenModal = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      <h1>Lista de personajes</h1>
      <ul>
        {
          data.map((element) => (
          <li key={element.id}>
            <h2>{element.name}</h2>
            <p>Status: {element.status}</p>
            <img
              src={element.image}
              onClick={() => handleOpenModal(element)}
            />
          </li>
        ))}
      </ul>
      <Modal
        character={selectedCharacter}
        open={!!selectedCharacter}
        onClose={handleCloseModal}
      />
    </div>
  );
}