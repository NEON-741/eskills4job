const {Model, DataTypes}= require("sequelize");
const db = require("../Database/database");

const Department = require("./departmentModel");


class User extends Model{}

User.init(
    {
        user_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        },
        user_role:{
            type: DataTypes.STRING,
            allowNull: false
        }
},
{
    sequelize: db,
        tableName:"users",
        modelName:"user",
        timestamps: false,
}
);


module.exports= User;