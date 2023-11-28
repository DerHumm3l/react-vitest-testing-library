import { Card, CardContent } from "../card";

export type CardListProps = {
  items: CardContent[];
};

export function CardList({ items }: CardListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.title}>
          <Card content={item} />
        </li>
      ))}
      ;
    </ul>
  );
}
