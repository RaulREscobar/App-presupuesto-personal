module.exports = (sequelize,dataTypes) => {
    let alias = "Users"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11), 
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        email:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password:{
            type: dataTypes.STRING(70),
            allowNull: false
        },
      
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    const Users = sequelize.define(alias,cols,config)
    return Users

}   