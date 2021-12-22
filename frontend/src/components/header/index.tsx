import {css, tw} from 'twind/css';

/*
const customStyle = tw(
  css({
    '&::before': {
      content: '"🙁"'


    },
  }),
)
*/

const customStyle = tw(
  css({
    '&': {
      //'position': 'relative',
      //'height': '300px'
    },
    '&::before': {
      'content': '" "',
      'position': "fixed",
      'width': "100%",
      'height': '100%',
      'top': '0',
      'background': "url('/yellow_bg.jpg') no-repeat center top",
      //'transform': 'translateZ(-1px) scale(1.5)',
      'background-size': 'cover',
      //'background-attachment': "fixed",
      //'background-size': "center",
      'will-change': "transform",
      'z-index': "-1"
    }
  })
);

/*
main::before {
  content: '';
  position: fixed;
  width: 100%;
  height: 100%;
  background: url('/some-beautiful-image.png') no-repeat center center;
  background-attachment: fixed;
  background-size: cover;
  will-change: transform;
  z-index: -1;
}
 */
// lg:bg-hero-pattern sm:bg-local md:bg-scroll lg:bg-local xl:bg-fixed bg-cover bg-no-repeat bg-bottom -webkit-transform: translate3d(0,0,0)

const Header = () => (
  <div>
    <div className={tw(`${customStyle} relative max-w-full h-96 bg-transparent`)}>
      <div className={tw(`max-w-5xl mx-auto pt-36`)}>
        <div className={tw(`text-6xl font-semibold text-gray-800`)}>businessresponsibility.ch</div>
        <div className={tw(`text-2xl mt-4 text-gray-800`)}>Digitale Plattform für Nachhaltigkeitsberichterstattung in
          der Schweiz
        </div>
      </div>
    </div>
    <div className={tw(`mx-auto pt-20 px-16 sm:px-6 lg:px-8 bg-white`)}>
      <div className={tw(`mx-auto max-w-4xl px-4`)}>
        <p className={tw(`text-gray-700 text-center font-medium lg:text-3xl`)}>
          Ab 2023 sind Schweizer Firmen per
          <span className={tw(`text-yellow-dark underline text-decoration-solid`)}> Gesetz </span>
          verpflichtet, einen jährlichen <span className={tw(`text-yellow-dark underline text-decoration-solid`)}>nicht-finanziellen Bericht</span> zu
          publizieren.
        </p>
        <p className={tw(`pt-12 px-20  text-gray-600 text-center font-medium lg:text-3xl`)}>
          Wir informieren über die Berichterstattung der <span
          className={tw(`text-yellow-dark underline text-decoration-solid`)}>betroffenen Firmen</span>.
        </p>
      </div>
    </div>
  </div>
);

export default Header;
