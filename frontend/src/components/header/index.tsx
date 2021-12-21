import {css, tw} from 'twind/css';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(30vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>

    <div className={tw(`max-w-full h-60 bg-yellow-bright mt-10`)}>
      <div className={tw(`max-w-7xl mx-auto`)}>
      <div className={tw(`relative`)}>
        <img className={tw(`absolute h-48 w-38 -left-24 -top-24`)} src="/logo.png" alt="logo"/>
      </div>
      <div className={tw(`max-w-5xl mx-auto pt-16`)}>
        <div className={tw(`text-6xl font-semibold text-gray-800`)}>businessresponsibility.ch</div>
        <div className={tw(`text-2xl mt-4 text-gray-800`)}>Digitale Plattform für Nachhaltigkeitsberichterstattung in der Schweiz</div>
      </div>
      </div>
    </div>
    <div className={tw(`mx-auto pt-20 px-16 sm:px-6 lg:px-8`)}>
      <div className={tw(`mx-auto max-w-4xl px-4`)}>
        <p className={tw(`text-gray-700 text-center font-medium lg:text-3xl`)}>
          Ab 2023 sind Schweizer Firmen per
          <span className={tw(`text-yellow-dark underline text-decoration-solid`)}> Gesetz </span>
          verpflichtet, einen jährlichen <span className={tw(`text-yellow-dark underline text-decoration-solid`)}>nicht-finanziellen Bericht</span> zu
          publizieren.
        </p>
        <p className={tw(`pt-12 px-20  text-gray-600 text-center font-medium lg:text-3xl`)}>
          Wir informieren über die Berichterstattung der <span className={tw(`text-yellow-dark underline text-decoration-solid`)}>betroffenen Firmen</span>.
        </p>
      </div>
    </div>
  </header>
);

export default Header;
