const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('statsdb','root','pablo12345',{
    host:'localhost',
    dialect:'mysql'
});
const authSequelize = async () => {
    await sequelize.authenticate();
}

try {
    authSequelize();
    console.log('Connected')
    
} catch (error) {
    console.log('Unable to Connect to database:',error)
}