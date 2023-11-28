import "./App.css";
import { CardContent } from "./components/card";
import { CardList } from "./components/cardList";

const items: CardContent[] = [
  {
    title: "Panam Palmer",
    description: "Aldecados tribe member.",
  },
  {
    title: "Rogue Amendiares",
    description: "Well-known fixer in Night City.",
  },
  {
    title: "Elizabeth Borden",
    subTitle: "Lizzie",
    description: "Joy girl, that founded The Mox.",
  },
];

export default function App() {
  return (
    <>
      <h2>Cyberpunk 2077 characters</h2>
      <CardList items={items} />
    </>
  );
}
