export interface ImenuItem {
  classname: string,
  type: string,
  iconClass: string,
  link: string,
  name: string,
  auth?: boolean,
  nav?: string,
}

export const menuItems:ImenuItem[] = [
  {
    classname: '',
    type: 'link',
    iconClass: 'fas fa-users',
    link: '/page2',
    name: 'page2',
  },
  {
    classname: 'home',
    type: 'link',
    iconClass: 'fas fa-heart',
    link: '/',
    name: 'Home',
  },
];

