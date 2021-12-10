import {css, tw} from 'twind/css';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(30vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`mx-auto py-20 px-14 sm:px-6 lg:px-8 bg-gray-800`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-center leading-snug text-yellow-bright`)}>
        businessresponsibility.ch
      </h1>
      <div className={tw(`mx-auto max-w-5xl`)}>
        <p className={tw(`mt-10 text-white text-center text-xl lg:text-3xl`)}>
          is a project to strengthen transparency and democratic control over the human rights performance of Swiss companies.
        </p>
      </div>
    </div>
  </header>
);

export default Header;
