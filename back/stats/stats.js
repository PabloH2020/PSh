// import mysql from 'mysql2/promise'
const mysql = require('mysql2/promise');
const { DATEONLY } = require('sequelize');
const uuid = require('uuid');

const config = {
  host:'localhost',
  user:'root',
  port:3306,
  password:'pablo12345',
  database:'statsdb'
}

const pool = mysql.createPool(config)

const insertStatsValues =  (values)=>{
        const date = new Date().toLocaleDateString('en-CA');
     values.forEach(async(value)=>{
        
        await pool.execute(`INSERT INTO stats (statId,playerId,nickname,profileImage,score,statdate) VALUES ("${value.statId}","${value.playerId}","${value.nickname}","${value.profileImage}","${value.score}","${date}");`)
    })
}

class GameStatsModel{
    static async getAll(){
            
        const [result,tableInfo] = await pool.execute('SELECT statId,playerId,nickname,profileImage,score,statdate FROM stats ORDER BY score DESC LIMIT 10;')

        return result
    }

    static async getById({id}){

    }
    static async create({values}){
        const newStats = values;
        try{
            await insertStatsValues(newStats)
            return 200
        } catch(e){
            throw new Error('Error generating stats records')
        }
            
                 
    }

}

module.exports = {GameStatsModel}