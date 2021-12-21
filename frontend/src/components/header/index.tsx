import {css, tw} from 'twind/css';


const Header = () => (
  <div >
    <div className={tw(`max-w-full h-96 lg:bg-hero-pattern bg-fixed bg-cover bg-no-repeat bg-bottom`)}>
      <div className={tw(`max-w-5xl mx-auto pt-36`)}>
        <div className={tw(`text-6xl font-semibold text-gray-800`)}>businessresponsibility.ch</div>
        <div className={tw(`text-2xl mt-4 text-gray-800`)}>Digitale Plattform für Nachhaltigkeitsberichterstattung in der Schweiz</div>
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
  </div>
);

export default Header;
