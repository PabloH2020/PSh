import {useEffect, createContext ,useState} from "react";
import axios from 'axios'

export const StatsContext = createContext();

export const StatsProvider = ({children})=>{

    const [stats,setStats] = useState()

    const fetchGameData = async()=>{
        await axios.get(`${import.meta.env.VITE_GET_MY_DATA_URL}/gameData`)
        .then(res=>{
            setStats(res.data.stats)
            
        }).catch(err=>console.log(err))
    };
    

    setInterval(fetchGameData,10000)

    useEffect(()=>{
        fetchGameData()
    },[])

    return(
        <StatsContext.Provider value={{stats,setStats}}>
            {children}
        </StatsContext.Provider>    
    )
}