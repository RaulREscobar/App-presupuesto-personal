module.exports = (sequelize,dataTypes) => {
    let alias = "Operations"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11), 
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        concept : {
            type: dataTypes.STRING(255),
            allowNull: false,
        },
        amount : {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        date : {
            type: dataTypes.DATE(),
            allowNull: false,
        },
        tipe : {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        user_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        }
    }

    let config = {
        tableName: "Operations",
        timestamps: false
    }

    const Operations = sequelize.define(alias,cols,config)

    Operations.associate = models => {
        Operations.belongsTo( models.Users, {
            as: 'Operations',
            foreignKey: 'user_id'
        })
    }
    return Operations

}   