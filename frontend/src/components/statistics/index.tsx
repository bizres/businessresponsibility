import {tw} from 'twind';
import {Doughnut} from 'react-chartjs-2';

const options = {
  plugins: {
    tooltip: {
      displayColors: false,
      backgroundColor: 'rgb(255,230,155)',
      padding: 8,
      bodyColor: 'rgb(93,90,90)',
      bodySpacing: 6,
      bodyFont: {
        size: 16
      }
    },
    legend: {
      display: false,
      align: 'start' as 'start',
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
        'rgb(242,242,242)',     // unknown
        'rgb(255,192,2)',       // fully reported
        'rgb(255,230,154)',     // partially reported
        'rgb(192,192,192)'      // not reported
      ],
      borderColor: [
        'rgba(0,0,0,0)',
        'rgba(0,0,0,0)',
        'rgba(0,0,0,0)',
        'rgba(0,0,0,0)',
      ],
      borderWidth: 1,
    },
  ],
};

const Statistics = () => (
  <section className={tw(`overflow-hidden`)}>
    <div className={tw(`pt-12 pb-8 mx-auto text-center item-center`)}>
        <div className={tw(`w-1/4 mx-auto`)}>
            <Doughnut data={data} options={options} />
        </div>
    </div>
  </section>
);

export default Statistics;
