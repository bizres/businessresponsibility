import {tw} from 'twind';

const Statistics = () => (
  <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner lg:py-14 pt-14 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-center`)}>
      <h2 className={tw(`text-base text-blue-800 font-semibold tracking-wide uppercase`)}>
        Responsibility in Numbers
      </h2>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8  items-center`)}>
          <div className={tw(`text-base text-gray-900`)}>
            businessresponsibility.ch provides information on the non-financial reporting obligations of Swiss companies.
          </div>
          <img
            src={'images/stats.jpg'}
            alt={'statistics'}
            className={tw(`h-full w-full object-cover overflow-hidden`)}
            height={48}
            width={48}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Statistics;
