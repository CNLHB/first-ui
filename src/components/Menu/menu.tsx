import React, { createContext, useState } from "react";
import classNames from "classnames";
import MenuItem, { MenuItemProps } from "./menuItem";
type MenuMode = "horizontal" | "vertical";
type selectCallBack = (selectedIndex: string) => void;
interface ParentMenu extends React.FC<MenuProps> {
  MenuItem: React.FC<MenuItemProps>;
  SubItem?: React.FC<MenuItemProps>;
}
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: selectCallBack;
  defaultOpenSubMenus?: string[];
}
interface IMenuContext {
  index: string;
  onSelect?: selectCallBack;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}
export const MenuContext = createContext<IMenuContext>({ index: "0" });
const Menu: ParentMenu = (props) => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("seven-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode: mode,
    defaultOpenSubMenus,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;

      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error("Warning: Menu has a child whick is not a MenuItem");
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
};

Menu.MenuItem = MenuItem;
export default Menu;
