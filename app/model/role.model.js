module.exports = (sequelize, DataTypes) => {
    const Role  = sequelize.define('roles', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        
    }, {
        timestamps: false,
    });

    return Role;
}
