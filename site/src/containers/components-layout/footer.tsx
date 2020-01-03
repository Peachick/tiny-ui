import React from 'react';
import { Link } from 'react-router-dom';
import { COMPONENT_MENU, GUIDE_MENU, RouterItem } from '../../routers';
import { Icon } from '../../../../components';

// flat menu array
const menus: RouterItem[] = [...GUIDE_MENU, ...COMPONENT_MENU].reduce((res: RouterItem[], menu) => {
  if (menu.children) {
    menu.children.forEach(child => {
      res.push({ title: child.title, route: child.route });
    });
  } else {
    res.push({ title: menu.title, route: menu.route });
  }
  return res;
}, []);

const getSiblingMenus = (routerName: string) => {
  const idx = menus.findIndex(menu => {
    return menu.route === routerName;
  });
  if (idx === 0) {
    return [null, menus[idx + 1]];
  } else if (idx === menus.length - 1) {
    return [menus[idx - 1], null];
  } else {
    return [menus[idx - 1], menus[idx + 1]];
  }
};

const ComponentFooter = ({ routeName }: { routeName: string }) => {
  const routers = getSiblingMenus(routeName.toLowerCase());
  return (
    <footer className="component-page__footer">
      {routers[0] ? (
        <Link to={routers[0].route!}>
          <Icon name="left" className="component-page__footer-icon-left" />
          <span className="component-page__footer-label">{routers[0].title}</span>
        </Link>
      ) : (
        <div />
      )}
      {routers[1] && (
        <Link to={routers[1].route!}>
          <span className="component-page__footer-label">{routers[1].title}</span>
          <Icon name="right" className="component-page__footer-icon-right" />
        </Link>
      )}
    </footer>
  );
};

export default ComponentFooter;
