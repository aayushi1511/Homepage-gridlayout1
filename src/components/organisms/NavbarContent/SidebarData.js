import home from '../../../assets/home.svg';
import listadd from '../../../assets/listadd.svg';
import browse from '../../../assets/browse.svg';
import search from '../../../assets/search.svg';
import account from '../../../assets/account.svg';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: home,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: listadd,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: browse,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: search,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: account,
    cName: 'nav-text'
  },
];