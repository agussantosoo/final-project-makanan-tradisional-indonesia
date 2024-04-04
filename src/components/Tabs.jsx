import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function Tabs({ tab, setTab }) {
  return (
    <Nav className="mb-4  justify-content-center" pills>
      <NavItem>
        <NavLink active={tab === 0 ? true : false} onClick={() => setTab(0)}>
          Makanan
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={tab === 1 ? true : false} onClick={() => setTab(1)}>
          Minuman
        </NavLink>
      </NavItem>
    </Nav>
  );
}
