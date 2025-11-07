import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} />;

export type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
};

export const navData = [
  {
    title: 'Přehled',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'Uživatel',
    path: '/user',
    icon: icon('ic-user'),
  },
  {
    title: 'Produkty',
    path: '/products',
    icon: icon('ic-cart'),
    info: (
      <Label color="error" variant="inverted">
        +3
      </Label>
    ),
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: icon('ic-blog'),
  },
  {
    title: 'Přihlášení',
    path: '/sign-in',
    icon: icon('ic-lock'),
  },
  {
    title: 'Nenalezeno',
    path: '/404',
    icon: icon('ic-disabled'),
  },
];
