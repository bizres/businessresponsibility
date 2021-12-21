import {tw} from 'twind';
import Button from '@/components/button';
import {useIntl} from "react-intl";
import {useRouter} from "next/router";
import {Link} from "@mui/material";

const exploreLinks = [
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

const followLinks=  [
  {
    label: `Facebook`,
    href: `https://facebook.com`,
  },
  {
    label: `Twitter`,
    href: `https://twitter.com`,
  },
  {
    label: `LinkedIn`,
    href: `https://linkedin.com`,
  }
];

const aboutLinks = [
  {
    label: `Contact`,
    href: `/contact`,
  },
  {
    label: `Privacy Policy`,
    href: `/privacy`,
  },
  {
    label: `Terms of Service`,
    href: `/terms`,
  },
];



const Footer = () => {
  const {formatMessage: f} = useIntl();
  const router = useRouter();
  const {locale} = router;

  return (
    <footer className={tw(`bg-gray-900 border-t border-gray-400 pt-14 pb-16`)}>
      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
        <div className={tw(`mb-14 flex items-center w-full`)}>
          <img className={tw(`h-12 w-12 mr-4 bg-transparent`)} src="/logo_transparent.png" alt="logo" width={48}
               height={48}/>
          <p className={tw(`text-2xl text-yellow-bright font-bold`)}>businessresponsibility.ch</p>
        </div>
        <div className={tw(`w-full lg:w-1/2`)}>
          <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
            <li className={tw(`w-1/3 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={tw(`text-white text-base font-bold mb-1`)}>Explore</h4>
                <ul>
                  {exploreLinks.map((link) => (
                    <li className={tw(`text-white text-sm font-medium leading-6`)} key={link.label}>
                      <Link
                        key={`footer-main-${link.label}`} href={`/${locale}${link.href}`}
                        className={tw(`text-white text-sm font-medium leading-6 no-underline hover:text-yellow-bright`)}
                      >

                        {f({id: link.label})}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className={tw(`w-1/3 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={tw(`text-white text-base font-bold mb-1`)}>Follow</h4>
                <ul>
                  {followLinks.map((link) => (
                    <li className={tw(`text-white text-sm font-medium leading-6`)} key={link.label}>
                      <Link
                        key={`footer-main-${link.label}`} href={`${link.href}`} target={'_blank'}
                        className={tw(`text-white text-sm font-medium leading-6 no-underline hover:text-yellow-bright`)}
                      >
                        {f({id: link.label})}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className={tw(`w-1/3 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={tw(`text-white text-base font-bold mb-1`)}>Legal</h4>
                <ul>
                  {aboutLinks.map((link) => (
                    <li className={tw(`text-white text-sm font-medium leading-6`)} key={link.label}>
                      <Link
                        key={`footer-main-${link.label}`} href={`/${locale}${link.href}`}
                        className={tw(`text-white text-sm font-medium leading-6 no-underline hover:text-yellow-bright`)}
                      >
                        {f({id: link.label})}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/6 mt-12 lg:mt-0`)} />
        <div className={tw(`w-full lg:w-1/3 mt-12 lg:mt-0`)}>
          <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
            <h4 className={tw(`font-mono  text-white mb-4`)}>Subscribe our newsletter</h4>
            <div className={tw(`flex w-full`)}>
              <input
                aria-label="email address"
                type="text"
                className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded py-2 px-3 mr-2 placeholder:italic placeholder:text-blue-400`)}
                placeholder="Enter your email"
              />
              <Button primary={true}>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
