import {css, tw} from 'twind/css';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(30vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-center leading-snug text-gray-800`)}>
        businessresponsibility.ch
      </h1>
      <div className={tw(`max-w-xxl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          is a project to strengthen transparency and democratic control over the human rights performance of Swiss
          companies.
        </p>
      </div>
    </div>
  </header>
);

export default Header;
