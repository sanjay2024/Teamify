'use strict';
import {Model} from 'sequelize'
module.exports = (sequelize: any, DataTypes:any) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsToMany(models.User,{through:'user_project',foreignKey:'project_id'});
    }
  }
  Project.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      project_name: {
        type: DataTypes.STRING,
      },
      company_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Company",
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
      status:{
        type:DataTypes.STRING,
        allowNull:false
      }
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};