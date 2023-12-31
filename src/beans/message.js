const {DataTypes} = require('sequelize');

module.exports = {
    messageId: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    conversationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    content: {  // Message content
        type: DataTypes.STRING,
        allowNull: false,
    },
}