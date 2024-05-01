import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'Home',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  
  {
    name: 'Help',
    imgUrl: profile,
    link: '/touse',
  },
  {
    name: 'Logout',
    imgUrl: logout,
    link: '/logout',
    //disabled: true,
  },
];