const {Model, DataTypes} = require("sequelize");
const db = require("../Database/database");

const Department = require("./departmentModel");

class Student extends Model{}

Student.init(
    {
        student_id:{
            type: DataTypes.STRING,
            primaryKey: true,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,     
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        dob:{
            type: DataTypes.DATE,
        },
        department_id:{
            type: DataTypes.INTEGER,
        }

    },
    {
        sequelize: db,
        tableName:"students",
        modelName:"student",
        timestamps: false,
}
);

Student.belongsTo(Department, {
    foreignkey: "department_id",
    as: "department",
});

module.exports = Student;
