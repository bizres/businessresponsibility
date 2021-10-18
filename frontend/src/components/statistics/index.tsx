import {tw} from 'twind';
import {Doughnut} from 'react-chartjs-2';

const options = {
  plugins: {
    tooltip: {
      displayColors: false,
      backgroundColor: 'rgba(6,104,189,0.95)',
      padding: 16,
      bodyColor: 'rgb(255,255,255)',
      bodySpacing: 6,
      bodyFont: {
        size: 18
      }
    },
    legend: {
      display: true,
      align: 'start',
      labels: {
        color: 'rgba(68,64,64,0.87)',
        padding: 24,
        font: {
          size: 18
        }
      }
    }
  }
};

const data = {
  labels: [
    'For 143 companies, the report status is unknown',
    '89 companies have a complete report for 2020',
    '136 companies have submitted a partial report for the year 2020',
    '528 companies have not yet reported for 2020'
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [143, 89, 136, 528],
      backgroundColor: [
        'rgba(59,54,54,0.2)',      // unknown
        'rgba(82,136,32,0.68)',    // fully reported
        'rgba(30,136,8,0.45)',     // partially reported
        'rgba(255,159,64,0.96)'    // not reported
      ],
      borderColor: [
        'rgba(58,56,56,0.34)',
        'rgba(76,155,10,0.89)',
        'rgba(114,171,22,0.93)',
        'rgba(248,134,3,0.94)',
      ],
      borderWidth: 1,
    },
  ],
};

const Statistics = () => (
  <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner lg:py-14 pt-14 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-center`)}>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`max-w-4xl mx-auto p-4 sm:p-6 lg:p-8  items-center`)}>
          <h2 className={tw(`text-base text-blue-800 font-semibold tracking-wide uppercase`)}>
            businessresponsibility.ch provides information on the non-financial reporting obligations of Swiss companies.
          </h2>
          <div className={tw(`max-w-2xl mx-auto text-center`)}>
            <Doughnut data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Statistics;
