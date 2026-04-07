import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileNav } from "./mobileNav";

const navLinks = [
  {
    label: "Product",
    href: "#",
    dropdownItems: [{ label: "Wikis", href: "#" }],
  },
  { label: "Pricing", href: "#" },
];

const actions = {
  requestDemo: { label: "Request a demo", href: "#" },
  login: { label: "Log in", href: "#" },
  primaryCta: { label: "Get Notion free", href: "/landing" },
};

describe("MobileNav", () => {
  it("opens the drawer when the hamburger button is clicked", async () => {
    const user = userEvent.setup();
    render(<MobileNav navLinks={navLinks} actions={actions} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /open menu/i }));

    expect(
      await screen.findByRole("dialog", { name: /menu/i }),
    ).toBeInTheDocument();
  });

  it("closes the drawer when the close button is clicked", async () => {
    const user = userEvent.setup();
    render(<MobileNav navLinks={navLinks} actions={actions} />);

    await user.click(screen.getByRole("button", { name: /open menu/i }));
    await screen.findByRole("dialog");

    await user.click(screen.getByRole("button", { name: /close menu/i }));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("closes the drawer when Escape is pressed and returns focus to the trigger", async () => {
    const user = userEvent.setup();
    render(<MobileNav navLinks={navLinks} actions={actions} />);

    const trigger = screen.getByRole("button", { name: /open menu/i });
    await user.click(trigger);
    await screen.findByRole("dialog");

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      expect(trigger).toHaveFocus();
    });
  });
});
