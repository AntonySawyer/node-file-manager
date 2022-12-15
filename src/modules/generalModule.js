import { getStartDir } from './index.js';
import { ERROR_EVENT, ERROR_MESSAGE } from '../constants/error.js';

const handleError = (errorEvent) => {
  switch (errorEvent) {
    case ERROR_EVENT.INVALID_COMMAND:
      console.error(ERROR_MESSAGE.INVALID_COMMAND);

      break;

    case ERROR_EVENT.EXECUTION_FAIL:
    default:
      console.error(ERROR_MESSAGE.EXECUTION_FAIL);

      break;
  }
}

export const initApp = () => {
  const startDir = getStartDir();

  process.chdir(startDir);

  process.on(ERROR_EVENT.INVALID_COMMAND, (err) => {
    handleError(ERROR_EVENT.INVALID_COMMAND);
  });

  process.on(ERROR_EVENT.EXECUTION_FAIL, (err) => {
    handleError(ERROR_EVENT.EXECUTION_FAIL);
  });

  process.on('uncaughtException', (err) => {
    handleError(ERROR_EVENT.EXECUTION_FAIL);
  });
}

export const handleExit = ({ context }) => {
  context.readlineInterface.close();
};
