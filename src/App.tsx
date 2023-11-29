import "./App.css";
import { Character } from "./components/characterCard";
import { CharacterList } from "./components/characterList";

const items: Character[] = [
  {
    fullname: "Panam Palmer",
    description: "Aldecados tribe member.",
  },
  {
    fullname: "Rogue Amendiares",
    description: "Well-known fixer in Night City.",
  },
  {
    fullname: "Elizabeth Borden",
    nickname: "Lizzie",
    description: "Joy girl, that founded The Mox.",
  },
];

export default function App() {
  return (
    <>
      <h2>Cyberpunk 2077 characters</h2>
      <CharacterList items={items} />
    </>
  );
}
