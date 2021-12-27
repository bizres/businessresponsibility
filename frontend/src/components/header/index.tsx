import {css, tw} from 'twind/css';

const customStyle = tw(
  css({
    '&::before': {
      'content': '" "',
      'position': "fixed",
      'width': "100%",
      'height': '100%',
      'top': '0',
      'background': "url('/yellow_bg.jpg') no-repeat center top",
      'background-size': 'cover',
      'will-change': "transform",
      'z-index': "-1"
    }
  })
);

const Header = () => (
  <div>
    <div className={tw(`${customStyle} relative max-w-full h-96 bg-transparent`)}>
      <div className={tw(`max-w-5xl mx-auto pt-36`)}>
        <div className={tw(`text-6xl font-ms-bold text-gray-800`)}>businessresponsibility.ch</div>
        <div className={tw(`font-ms-regular text-2xl mt-4 text-gray-800`)}>Digitale Plattform für Nachhaltigkeitsberichterstattung in
          der Schweiz
        </div>
      </div>
    </div>
    <div className={tw(`mx-auto pt-20 px-16 sm:px-6 lg:px-8 bg-white`)}>
      <div className={tw(`mx-auto max-w-4xl px-4`)}>
        <p className={tw(`text-gray-700 text-center font-ms-regular lg:text-3xl`)}>
          Ab 2023 sind Schweizer Firmen per
          <span className={tw(`font-ms-semi-bold text-yellow-dark underline text-decoration-solid`)}> Gesetz </span>
          verpflichtet, einen jährlichen <span className={tw(`font-ms-semi-bold text-yellow-dark underline text-decoration-solid`)}>nicht-finanziellen Bericht</span> zu
          publizieren.
        </p>
        <p className={tw(`pt-12 px-20 text-gray-600 text-center font-ms-regular lg:text-3xl`)}>
          Wir informieren über die Berichterstattung der <span
          className={tw(`font-ms-semi-bold text-yellow-dark underline text-decoration-solid`)}>betroffenen Firmen</span>.
        </p>
      </div>
    </div>
  </div>
);

export default Header;
