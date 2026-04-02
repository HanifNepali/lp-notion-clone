export interface DropdownItem {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  dropdownItems?: DropdownItem[];
}

export interface CtaLink {
  label: string;
  href: string;
  showArrow?: boolean;
}
