import { MaineNavigation, MaineNavigationLink } from './Nav.styled';

const Nav = () => {
  return (
    <MaineNavigation>      
      <MaineNavigationLink to="notices/sell">Notices</MaineNavigationLink>
      <MaineNavigationLink to="friends">Our friends</MaineNavigationLink>
    </MaineNavigation>
  );
};

export default Nav;
