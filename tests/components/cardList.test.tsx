import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardList } from "@/components/cardList";
import { CardContent } from "@/components/card";

describe("CardList", () => {
  it("empty", async () => {
    const items: CardContent[] = [];

    render(<CardList items={items} />);

    await screen.findByRole("list");
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
