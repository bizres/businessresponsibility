import {tw} from 'twind';

const Statistics = () => (
  <section className={tw(`lg:py-14 pt-14 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white text-center`)}>
      <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>
        Responsibility in Numbers
      </h2>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8  items-center`)}>
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
