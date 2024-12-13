module.exports = (sequelize, datatype) => {
    const User = sequelize.define("users", {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: datatype.STRING,
            allowNull: false
        }
    });
    return User;
};