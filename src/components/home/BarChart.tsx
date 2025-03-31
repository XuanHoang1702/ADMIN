import { ChartOptions } from 'chart.js';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';

const BarChart: React.FC = () => {
    const barData = {
        labels: ['Pending', 'Shipped', 'Delivered'],
        datasets: [
            {
                label: 'Số đơn hàng',
                data: [20, 15, 25],
                backgroundColor: '#4f46e5',
            },
        ],
    };

    const barOptions: ChartOptions<'bar'> = {
        responsive: true,
        plugins: { legend: { position: 'top' } },
    };

    return (
        <Card title="Trạng thái đơn hàng" className="shadow-md rounded-lg">
            <Chart type="bar" data={barData} options={barOptions} />
        </Card>
    );
};
export default BarChart;