import { Navbar } from "./Navbar"

export const Home = ()=>{
    
    return(
        <main className="home-container overflow-auto flex justify-between flex-col">
            <Navbar/>
            <div className="h-[90vh] flex text-white items-center">
                <div className="w-1/2 m-16 h-1/2 flex flex-col gap-[3rem]">
                    <h1 className="text-5xl">Galactic Odyssey: Stellar Explorers</h1>
                    <p className="text-lg">Embark on a thrilling cosmic journey with Galactic Odyssey: Stellar Explorers! Lead your crew through uncharted territories, discover alien worlds, and conquer the stars. Join now and unleash the adventure of a lifetime!</p>
                    <button className="bg-custom-red w-1/2 h-[3rem] self-center rounded text-center text-xl">Download now</button>
                </div>           
            </div>
        </main>
    )
}