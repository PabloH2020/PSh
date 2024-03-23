
export const StatsTable = ({stats})=>{
    return(
        <table className="w-5/6 bg-custom-red/75">
                    <thead className="text-custom-dark bg-white">
                        <tr className="h-[2.5rem] sm:h-16">
                            <th scope="col">Nickname</th>
                            <th scope="col">profile Image</th>
                            <th scope="col">Score</th>
                            <th scope="col">Score Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {stats && stats.map(row=>(
                            <tr className="h-[2.5rem] sm:h-16" key={row.statId}>
                                <th>{row.nickname}</th>
                                <th className="flex justify-center h-[2.5rem] sm:h-16" scope="row"><img className="rounded-full h-5/6 self-center" src={row.profileImage}/></th>
                                <th>{row.score}</th>
                                <th>{new Date(row.statdate).toLocaleDateString()}</th>
                            </tr>
                        ))}
                        
                        </tbody>
                </table>
    )
}