import { Navbar } from "./Navbar"
import { useContext } from 'react';
import { StatsContext } from "../context/StatsContext";
import { CSVLink } from "react-csv";
import { StatsTable } from "./StatsTable";

export const ReportInfo = ()=>{
    
    const {stats}=useContext(StatsContext)
    
    

    return(
        <main className="report-container overflow-auto flex justify-between flex-col">
            <Navbar/>
            <div className="h-[90vh] w-full p-8 flex text-white items-center flex justify-center lg:h-[75vh]">
                <StatsTable stats={stats}/>
                <button className="absolute bottom-6 right-6 rounded bg-custom-green p-2">
                    <CSVLink data={stats}>Export as CSV</CSVLink>
                </button>
            </div>
        </main>
    )
}