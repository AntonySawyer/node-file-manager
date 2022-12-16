import { ERROR_CODE, ERROR_MESSAGE } from "../constants/error.js";

export const handleError = (error, errorCode) => {
  switch (errorCode) {
    case ERROR_CODE.EXECUTION_FAIL:
      console.error(ERROR_MESSAGE.EXECUTION_FAIL);
      break;

    case ERROR_CODE.INVALID_COMMAND:
      console.error(ERROR_MESSAGE.INVALID_COMMAND);
      break;

    default:
      break;
  }
}
