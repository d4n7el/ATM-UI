import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { useLocation } from 'react-router-dom';

export const Nav = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const links = [
    {
      href: '/users',
      label: 'Users',
    },
    {
      href: '/accounts',
      label: 'Accounts',
    },
    {
      href: '/transactions',
      label: 'Transactions',
    },
  ];
  return (
    <Navbar>
      <NavbarBrand>
        <p className='font-bold text-inherit'>ACME</p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {links.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              color={pathName.includes(item.href) ? 'primary' : 'foreground'}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
