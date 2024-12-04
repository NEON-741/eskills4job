const {Model, DataTypes}= require("sequelize")
const db= require("../Database/database");

class Department extends Model{}

Department.init(
    {
       department_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       },
       department_name: {
        type: DataTypes.STRING,
        allowNull: false,
       },
    },
    {
        sequelize: db,
        tableName: "departments",
        modelName:"department",
        timestamps: false,
    }
);



module.exports = Department;