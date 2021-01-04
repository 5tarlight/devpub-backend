import { Sequelize, Model, DataTypes } from 'sequelize';
import configure from './configure';

export class User extends Model {}

class Database {
  private readonly seq: Sequelize;

  constructor() {
    const {
      db: { database, host, user, password },
    } = configure();

    // @ts-ignore
    this.seq = new Sequelize(database, user, password, {
      host: host,
      dialect: 'mariadb',
      logging: console.log,
    });

    this.seq.authenticate().catch(error => {
      console.error('Unable to connect to the database:' + error.toString());
    })

    User.init({
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      }
    }, {
      modelName: 'user',
      tableName: 'user',
      sequelize: this.seq,
      timestamps: true,
      createdAt: true,
      updatedAt: true
    });

    const option = {
      alter: true
    };

    User.sync(option);
  }
}

export default Database;
