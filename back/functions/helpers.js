const axios = require('axios')
const uuid = require('uuid')

const getRandomIntInclusive = (min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const statsFactory = async()=>{

    let newStats=[]
    const date= new Date();
    console.log("ejecutando statsFactory")
    //generate a random number between 1 and 10
    const number = getRandomIntInclusive(1,10);
    console.log("number:",number)
    //get nickname and profile from api for each
    for (let i = 0; i < number; i++) {
    const response = await axios.get('https://randomuser.me/api');
    const r = response.data
        
        const newStat = {
                statId:uuid.v4(),
                playerId:uuid.v1(),
                nickname:r.results[0].login.username,
                profileImage:r.results[0].picture.thumbnail,
                score:getRandomIntInclusive(1,100),
                statdate:date
            } 
        newStats.push(newStat)
            
                
    }

    console.log(newStats)
    return newStats
}

module.exports = {statsFactory}