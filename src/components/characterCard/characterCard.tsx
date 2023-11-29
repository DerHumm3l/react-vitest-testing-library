import { Character } from "./character";

export type CharacterCardProps = {
  content: Character;
};

export function CharacterCard({ content }: CharacterCardProps) {
  return (
    <section>
      <header>
        <hgroup>
          <h2>{character.fullname}</h2>
          {character.nickname ? <p>{character.nickname}</p> : null}
        </hgroup>
      </header>
      <p>{character.description}</p>
      <footer>
        <button>Like</button>
        <button>Fav</button>
      </footer>
    </section>
  );
}
