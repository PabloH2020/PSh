import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import './App.css'
import './output.css'
import { Home } from './components/Home'
import {StatsInfo} from './components/StatsInfo'
import {ReportInfo} from './components/ReportInfo'



function App() {

  return (
    <Router>       
        <Routes>
            <Route path="/report" element={<ReportInfo/>}/>
            <Route path="/stats" element={<StatsInfo/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
                
    </Router>
  )
}

export default App
