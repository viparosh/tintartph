import Link from 'next/link'
import { AdminLayout } from '../../components'

const Dashboard = () => {
  
  const tableHeaders = [
    {
      name:"no",
      label:"No." 
    },
    {
      name:"name",
      label:"Name" 
    },
    {
      name:"product",
      label:"Product." 
    },
    {
      name:"Status",
      label:"Status" 
    }
  ]

  return (
    <AdminLayout>
      <div className="overflow-y-auto w-full gap-y-8 flex p-10 flex-col">
        <p className="text-4xl font-bold">Dashboard</p>
        <div className="flex gap-x-4">
          <div className="px-7 py-5 gap-y-4 flex bg-white rounded-md w-1/3 flex-col justify-start">
            <p className="text-gray-500">Total Sales</p>
            <div className="flex justify-between items-end">
              <p className="font-bold text-4xl">PHP 10K</p>
              <p className="text-sm text-gray-500">Month</p>
            </div>
          </div>
          <div className="px-7 py-5 gap-y-4 flex bg-white rounded-md w-1/3 flex-col justify-start">
            <p className="text-gray-500">Average Order</p>
            <div className="flex justify-between items-end">
              <p className="font-bold text-4xl">378</p>
              <p className="text-sm text-gray-500">Month</p>
            </div>
          </div>
          <div className="px-7 py-5 gap-y-4 flex bg-white rounded-md w-1/3 flex-col justify-start">
            <p className="text-gray-500">Total Order</p>
            <div className="flex justify-between items-end">
              <p className="font-bold text-4xl">1948</p>
              <p className="text-sm text-gray-500">Month</p>
            </div>
          </div>
        </div>
        
        <p className="text-4xl font-bold">Recent Orders</p>
        <table className="bg-white">
          <tr className="bg-violet-500 text-white">
            <th>No.</th>
            <th>Name</th>
            <th>Product</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>#87</td>
            <td>Slovaki Slovana</td>
            <td>7765</td>
            <td>Delivered</td>
          </tr>
       
        </table>
      </div>

    </AdminLayout> 
  )
}

export default Dashboard
