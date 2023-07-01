import {Sequelize} from 'sequelize-typescript';

import {config} from './config/config';

export const sequelize = new Sequelize({
  'username': "postgres",
  'password': "password",
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect,
  'storage': ':memory:',
});
