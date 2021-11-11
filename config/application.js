import {ENV, ENV_LIST} from '../env';
import developmentConfig from './environments/development';
import productionConfig from './environments/production';

let applicationConfig = {};

switch (ENV) {
  case ENV_LIST.DEVELOPMENT:
    applicationConfig = developmentConfig;
    break;
  case ENV_LIST.STAGING:
    applicationConfig = stagingConfig;
    break;
  case ENV_LIST.PRODUCTION:
    applicationConfig = productionConfig;
    break;
  default:
    break;
}

export default applicationConfig;
