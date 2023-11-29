import { CharacterCard, Character } from "../characterCard";

export type CharacterListProps = {
  items: Character[];
};

export function CharacterList({ items }: CharacterListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.fullname}>
          <CharacterCard content={item} />
        </li>
      ))}
      ;
    </ul>
  );
}
