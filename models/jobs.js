const Sequelize=require('sequelize');
const sequelize=require('../database/db');

const Jobs=sequelize.define('jobs',{
    id:{type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
        unique:true
    },
    jobName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    location:Sequelize.STRING,
    graduation:Sequelize.STRING,
    skillsRequired:Sequelize.STRING,
    description:Sequelize.STRING
});

module.exports=Jobs;