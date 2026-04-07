import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ViewSwitcher } from "./view-switcher";

const tabs = [
  {
    label: "Board",
    screenshot: {
      src: "/images/view-board.png",
      alt: "Kanban board view in Notion",
      width: 958,
      height: 599,
    },
  },
  {
    label: "Table",
    screenshot: {
      src: "/images/view-table.png",
      alt: "Table view in Notion",
      width: 958,
      height: 599,
    },
  },
  {
    label: "Timeline",
    screenshot: {
      src: "/images/view-timeline.png",
      alt: "Timeline view in Notion",
      width: 958,
      height: 599,
    },
  },
];

describe("ViewSwitcher", () => {
  it("shows the first tab's screenshot by default", () => {
    render(<ViewSwitcher tabs={tabs} />);
    expect(screen.getByRole("tab", { name: "Board" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(
      screen.getByAltText("Kanban board view in Notion"),
    ).toBeInTheDocument();
  });

  it("switches the active tab and screenshot on click", async () => {
    const user = userEvent.setup();
    render(<ViewSwitcher tabs={tabs} />);

    await user.click(screen.getByRole("tab", { name: "Table" }));

    expect(screen.getByRole("tab", { name: "Table" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("tab", { name: "Board" })).toHaveAttribute(
      "aria-selected",
      "false",
    );
    expect(
      await screen.findByAltText("Table view in Notion"),
    ).toBeInTheDocument();
  });

  it("moves selection and focus with ArrowRight", async () => {
    const user = userEvent.setup();
    render(<ViewSwitcher tabs={tabs} />);

    screen.getByRole("tab", { name: "Board" }).focus();
    await user.keyboard("{ArrowRight}");

    expect(screen.getByRole("tab", { name: "Table" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("tab", { name: "Table" })).toHaveFocus();
  });

  it("wraps to the last tab when pressing ArrowLeft on the first tab", async () => {
    const user = userEvent.setup();
    render(<ViewSwitcher tabs={tabs} />);

    screen.getByRole("tab", { name: "Board" }).focus();
    await user.keyboard("{ArrowLeft}");

    expect(screen.getByRole("tab", { name: "Timeline" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});
