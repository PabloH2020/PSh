import { Navbar } from "./Navbar"
import { Chart as ChartJS, defaults} from 'chart.js/auto'
import {Doughnut} from 'react-chartjs-2'
import { useContext, useEffect, useState } from 'react';
import { StatsContext } from "../context/StatsContext";
import confetti from "canvas-confetti";
import { TopThree } from "./TopThree";

defaults.maintainAspectRatio = false;
defaults.responsive =true;
defaults.plugins.legend.align="center"

export const StatsInfo = ()=>{

    useEffect(()=>{
        confetti()
    },[])

    const {stats}=useContext(StatsContext)
    const [topThree,setTopThree]=useState()
    const [topThreeFullElement,setTopThreeFullElement]=useState()

    useEffect(()=>{
        const bestThree = stats?.slice(0,3).map(el=>{
            return {"label":el.nickname,"value":el.score}
                }
            )
        const bestThreeFull = stats?.slice(0,3).map(el=>{
            return el
                }
            )
        setTopThree(bestThree)   
        setTopThreeFullElement(bestThreeFull)

    },[stats])
    

    return(
        <main className="stats-container">
            <Navbar/>
            <div className="h-[90vh] w-full p-8 flex text-white items-center flex">
                <div id="chart-container" className="w-1/2 h-5/6 bg-custom-gray/75">
                    <h2 className="text-black font-bold pt-4 pl-4">Top Three</h2>
                    <Doughnut
                        data={{
                            labels:topThree?.map((data)=>data.label),
                            datasets:[
                                {
                                    label:"Count",
                                    data:topThree?.map((data)=>data.value),
                                    backgroundColor:[
                                        "rgba(43,63,229,0.8)",
                                        "rgba(250,192,19,0.8)",
                                        "rgba(253,135,135,0.8)",
                                    ]
                            
                                },
                            ]
                        }}
                    />
                </div>
                {topThreeFullElement && <TopThree topThreeFullElement={topThreeFullElement}/>}
            </div>
        </main>
    )
}