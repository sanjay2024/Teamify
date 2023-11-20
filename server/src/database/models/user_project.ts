'use strict';
import { Model } from "sequelize";
module.exports = (sequelize: any, DataTypes: any) => {
  class user_project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  user_project.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "User",
          },
          key: "id",
        },
      },
      project_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Project",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "user_project",
    }
  );
  return user_project;
};