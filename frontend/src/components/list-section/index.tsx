import {tw} from 'twind';
import TableSvg from '@/constants/svg/table.svg';
import Button from "@/components/button";

const ListSection = () => (
  <section className={tw(`overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Find the reports</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Business Responsibility Reports
        </p>
      </div>
      <div className={tw(`mt-2 pb-4 text-center`)}>
        <div className={tw(`flex w-full`)}>
          <input
            aria-label="search reports"
            type="text"
            className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
            placeholder="Search company reports"
          />
          <Button>Search</Button>
        </div>
        <div className={tw(`mt-2 pb-4 text-center`)}>
          <TableSvg className={tw(``)}/>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
