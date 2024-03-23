
export const TopThree = ({topThreeFullElement})=>{
    
    return(
        <div id="chart-container" className="w-1/2 h-5/6 bg-custom-gray/75 flex flex-col justify-center gap-[5vh]">
                    <div className="flex items-center gap-[3vw]">
                        <img className="h-[8vh] w-[8vh] rounded-full border-2 border-custom-dark" src={topThreeFullElement[0]?.profileImage} alt="Image of Best of Top Three" />
                        <h3 className="text-custom-red text-2xl font-bold">{topThreeFullElement[0]?.nickname}</h3>
                        <p className="text-custom-red text-2xl font-bold">Score: {topThreeFullElement[0]?.score}</p>
                    </div>
                    <div className="flex items-center gap-[3vw]">
                        <img className="h-[8vh] w-[8vh] rounded-full border-2 border-custom-dark" src={topThreeFullElement[1]?.profileImage} alt="Image of Best of Top Three" />
                        <h3 className="text-custom-red text-2xl font-bold">{topThreeFullElement[1]?.nickname}</h3>
                        <p className="text-custom-red text-2xl font-bold">Score: {topThreeFullElement[1]?.score}</p>
                    </div>
                    <div className="flex items-center gap-[3vw]">
                        <img className="h-[8vh] w-[8vh] rounded-full border-2 border-custom-dark" src={topThreeFullElement[2]?.profileImage} alt="Image of Best of Top Three" />
                        <h3 className="text-custom-red text-2xl font-bold">{topThreeFullElement[2]?.nickname}</h3>
                        <p className="text-custom-red text-2xl font-bold">Score: {topThreeFullElement[2]?.score}</p>
                    </div>
                </div>
    )
}