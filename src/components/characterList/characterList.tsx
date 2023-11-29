import { CharacterCard, Character } from "../characterCard";

export type CharacterListProps = {
  characters: Character[];
};

export function CharacterList({ characters }: CharacterListProps) {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.fullname}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
}
