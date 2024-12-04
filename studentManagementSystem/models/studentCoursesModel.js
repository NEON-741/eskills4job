const {Model, DataTypes} = require("sequelize");
const db = require("../Database/database");

const Department = require("./departmentModel");

class StudentCourses extends Model{}

StudentCourses.init(
    {
        student_id:{
            type: DataTypes.STRING,
            primaryKey: true
        },
        course_id:{
            type:DataTypes.STRING,
            primaryKey:true
        }
},
{
    sequelize: db,
    tableName: "studentCourses",
    modelName:"studentCourse",
    timestamps: false
}
);

StudentCourses.belongsTo(Department,{
    foreignKey: "department_id",
    as: "department"
});

module.exports= StudentCourses;
