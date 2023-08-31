// const db = require("../config/database")
const { sq } = require('../config/database')
const Sequelize = require('sequelize')
const {DataTypes} = require('sequelize')


const User = sq.define('users',{
    Name:{
        type:DataTypes.STRING,
        allowNull: false,

    },
    Email:{
        type:DataTypes.STRING,
        allowNull: false,
        primaryKey:true,
    },
    PhoneNumber:{
        type:DataTypes.STRING,
        allowNull: false
    },
    Password:{
        type:DataTypes.STRING
    },
    HomeAddress: {
        type: DataTypes.STRING,
    },
    WorkAddress: {
        type: DataTypes.STRING,
    },
    OtherAddress: {
        type: DataTypes.STRING,
    },

})

User.sync().then(()=>{
    console.log('User model synced')
})



module.exports = User