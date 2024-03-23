import { Link } from 'react-router-dom'
import { PshIcon } from '../icons/PshIcon'

export const Navbar = ()=>{
    return(
        <nav className="flex justify-between p-4">
          <div>
            <PshIcon/>
          </div>
          <div className="flex justify-evenly min-w-80 content-center items-center font-bold text-white" >
            <Link className='cursor-pointer  hover:text-slate-300 hover:underline' to="/">Home</Link>
            <Link className='cursor-pointer  hover:text-slate-300 hover:underline' to="/report">Report</Link>
            <Link className='cursor-pointer  hover:text-slate-300 hover:underline' to="/stats">Statistics</Link>
          </div>      
        </nav>
    )
}