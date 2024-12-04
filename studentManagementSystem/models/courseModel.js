const {Model, DataTypes}= require("sequelize");
const db = require("../Database/database");

const Department = require("./departmentModel");

class Course extends Model{}

Course.init(
    {
    course_id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    course_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    department_id: {
        type: DataTypes.INTEGER,
    }
},
{
    sequelize: db,
    tableName: 'courses',
    modelName: 'Course',
    timestamps: false,
}
);

Course.belongsTo(Department,{
    foreignKey:"department_id",
    as:"department",
});

module.exports= Course;