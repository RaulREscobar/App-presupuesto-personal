module.exports = (sequelize,dataTypes) => {
    let alias = "Operations"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11), 
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        concept:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        amount: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        date:{
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        type:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        user_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
      
    }

    let config = {
        tableName: "operations",
        timestamps: false
    }

    const Operations = sequelize.define(alias,cols,config)
    return Operations

}   