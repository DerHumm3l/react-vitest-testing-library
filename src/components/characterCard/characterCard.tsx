import { Character } from "./character";

export type CharacterCardProps = {
  content: Character;
};

export function CharacterCard({ content }: CharacterCardProps) {
  return (
    <div>
      <h3>{content.fullname}</h3>
      {content.nickname ? <h4>{content.nickname}</h4> : null}
      <p>{content.description}</p>
    </div>
  );
}
