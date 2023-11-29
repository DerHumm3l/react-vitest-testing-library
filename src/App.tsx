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
    <main className="flex justify-center">
      <h1>Cyberpunk 2077 characters</h1>
      <CharacterList characters={items} />
    </main>
  );
}
