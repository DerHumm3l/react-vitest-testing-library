import { CardContent } from "./cardContent";

export type CardProps = {
  content: CardContent;
};

export function Card({ content }: CardProps) {
  return (
    <div>
      <h3>{content.title}</h3>
      {content.subTitle ? <h4>{content.subTitle}</h4> : null}
      <p>{content.description}</p>
    </div>
  );
}
