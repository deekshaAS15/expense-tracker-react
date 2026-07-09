import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Pie ,Doughnut} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const ExpenseChart = ({income,expense,transactions}) => {
    const categoryTotals={};
    transactions.filter((t)=>t.type === "Expense").forEach((t)=>{
        categoryTotals[t.category]=(categoryTotals[t.category] || 0 + Number(t.amount))
    })

    const chartData={
        labels:Object.keys(categoryTotals),
        datasets:[
            {
                data:Object.values(categoryTotals),
                backgroundColor:[
                    '#3B82F6',
                    "#10B981",
                    "#F59E0B",
                    "#EF4444",
                    "#8B5CF6",
                    "#06B6DA"
                ]
            }
        ]
    }
    const data={
        labels:["Income","Expense"],
        datasets:[
            {
                data:[income,expense],
                backgroundColor:["green","red"],
            },
        ],
    }
  return (
    <div className='grid grid-cols-1 gap-5 mt-6'>
    <div className="bg-white mt-6 p-8 rounded-lg  shadow">
        <h2 className="text-xl font-bold mb-4">Income vs Expense</h2>

        <Pie data={data} />
    </div>
    
     <div className="bg-white mt-6 p-8 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Category-wise Expenses</h2>

        <Doughnut data={chartData} />
    </div>
    </div>
    )
}

export default ExpenseChart