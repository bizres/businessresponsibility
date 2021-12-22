import {tw} from 'twind';
import {useState} from 'react';
import Button from '@/components/button';
import Link from 'next/link'
import {FormControl, Menu, MenuItem, Select} from "@mui/material";
import {useRouter} from "next/router";
import {useIntl} from 'react-intl';


interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links = [
  {
    label: `Home`,
    href: `/`,
  },
  {
    label: `Reporting Obligations`,
    href: `/reporting_obligations`,
  },
  {
    label: `Methods & Data`,
    href: `/method_data`,
  },
  {
    label: `About Us`,
    href: `/about_us`,
  }
];

const secondaryLinks = [
  {
    label: `Login`,
    href: `/login`,
  }
];

type Language = {
  label: string;
  code: string;
};
const languages = [
  {label: 'Deutsch', code: 'de'},
  {label: 'Français', code: 'fr'},
  {label: 'Italiano', code: 'it'},
  {label: 'English', code: 'en'}
];

const MenuButton = ({toggleMenu, showMenu}: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    )}
  </button>
);

const MobileMenu = () => {
  const {formatMessage: f} = useIntl();
  return (
    <div className={tw(`md:hidden`)}>
      <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
        {links.map((link: Link) => (
          <a href={link.href} className={tw(`text-gray-500 block px-3 py-2 text-base font-medium`)} key={link.label}>
            {f({id: link.label})}
          </a>
        ))}
      </div>
      <div className={tw(`pt-4 pb-3 border-t border-gray-400`)}>
        <div className={tw(`px-2 space-y-1`)}>
          {secondaryLinks.map((link: Link) => (
            <Link key={`mobile-navi-${link.label}`} href={link.href}>
              <a key={`mobile-${link.label}`}
                 className={tw(`block px-3 py-2 text-base font-medium text-yellow-dark`)}>
                {f({id: link.label})}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
const Navigation = () => {
  const {formatMessage: f} = useIntl();
  const router = useRouter();
  const {pathname, asPath, query, locale} = router

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const [selectedIndex, setSelectedIndex] = useState("de");

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index.props.value);
    router.push({pathname, query}, asPath, {locale: index.props.value})
  };

  return (
    <nav className={tw(`bg-white pt-4`)}>
      <div className={tw(`max-w-7xl mx-auto grid place-items-end`)}>
        <FormControl className={tw(``)}>
          <Select
            id="language-selector"
            value={locale}
            onChange={handleMenuItemClick}
          >
            {
              languages.map((lang: Language, index) => (
                <MenuItem value={`${lang.code}`}>{lang.label}</MenuItem>))
            }
          </Select>
        </FormControl>
      </div>
      <div className={tw(`max-w-7xl mx-auto mt-12`)}>
        <div className={tw(`hidden md:block`)}>
          <div className={tw(`grid grid grid-cols-4 gap-4 place-items-center`)}>
            {links.map((link: Link) => (
              <Link key={`main-${link.label}`} href={link.href}>
                <a key={`navi-link-${link.label}`}
                   className={tw(`text-gray-500 hover:text-yellow-dark-900 rounded-md font-medium text-lg`)}>
                  {f({id: link.label})}
                </a>
              </Link>
            ))}

          </div>
        </div>
      </div>
      <div className={tw(`hidden md:block`)}>
        <div className={tw(`ml-4 flex items-center md:ml-6 hidden`)}>
          <Button modifier="border-0 mr-2">Login</Button>
        </div>
      </div>
      <div className={tw(`-mr-2 flex md:hidden`)}>
        <MenuButton showMenu={showMenu} toggleMenu={toggleMenu}/>
      </div>
      {showMenu ? <MobileMenu/> : null}
    </nav>
  );
};

export default Navigation;
