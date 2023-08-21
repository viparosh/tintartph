import { MdKeyboardDoubleArrowLeft , MdManageAccounts} from 'react-icons/md'
import { GrDashboard } from 'react-icons/gr'
import { BiBriefcaseAlt2 } from 'react-icons/bi'
import { LuClipboardList } from 'react-icons/lu'
import { VscFeedback } from 'react-icons/vsc'
import Link from 'next/link'

const Navigator = () => {

  const menuLinks = [
    {
      icon: <GrDashboard />,
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      icon: <MdManageAccounts />,
      name: 'Accounts',
      link: '/accounts',
    },
    {
      icon: <BiBriefcaseAlt2 />,
      name: 'Products',
      link: '/products',
    },
    {
      icon: <LuClipboardList />,
      name: 'Orders',
      link: '/orders',
    },
    {
      icon: <VscFeedback />,
      name: 'Customer Feedbacks',
      link: '/feedbacks',
    }
  ]

  const linkLayout = (link) => {
    return link.map(({ icon, name, link }, index) => (
      <li
        key={index}
        className="cursor-pointer hover:text-primary"
      >
        <Link href={link}>
          <div
            className={`gap-x-3 flex items-center p-4 rounded-lg`}
          >
            <span className="text-xl">{icon}</span>
            <p className=" text-slate-900 font-semibold text-xl">{name}</p>
          </div>
        </Link>
      </li>
    ))
  }

  return (
    <div className="w-1/5 bg-white h-full">
        <div className="px-5 py-6 flex justify-between items-center w-full bg-[#8d78c1]">
            <div className="flex w-full items-center justify-between">
            <p className="text-2xl font-bold">TintArt</p>
            <p className="text-white rounded-md text-xs px-3 bg-[#4a348d] py-1 font-semibold">ADMIN</p> 
            </div>
            <button className="pl-4 font-extrabold text-2xl">
            <MdKeyboardDoubleArrowLeft/>
            </button>
        </div>

        <div className="flex px-2 items-start flex-col">
            <ul className="mt-7 gap-y-4 flex flex-col">
            {linkLayout(menuLinks)}
            </ul>
        </div>
    </div>        
  
  )
}

export default Navigator
