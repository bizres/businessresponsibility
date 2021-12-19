import {tw} from 'twind';
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';

const data = [
  {name: '136  Unternehmen berichten über einzelne Themen', value: 136},
  {name: '89  Unternehmen berichten über einzelne Themen', value: 89},
  {name: '528  Unternehmen haben keinen Bericht', value: 528},
  {name: 'Für 143 Unternehmen ist der Berichtsstatus unbekannt', value: 143},
];

const COLORS = ['#FFE69AFF', '#f1b605', '#919191', '#c2c2c2'];
const renderLabel = ({cx, cy, midAngle, innerRadius, outerRadius, value, index}) => {
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="#6B6A73FF"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {data[index].name}
    </text>
  );
};
const Statistics = () => (
  <section className={tw(`overflow-hidden`)}>
    <div className={tw(`mt-12 mb-10 mx-auto text-center item-center`)}>
      <div className={tw(`h-96 mx-auto`)}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data}
              innerRadius={60}
              outerRadius={150}
              fill="#8884d8"
              label={renderLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  </section>
);

export default Statistics;
