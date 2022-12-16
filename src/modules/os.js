import os from 'os';

import { OS_FLAG } from '../constants/osFlag.js';
import { ERROR_MESSAGE } from "../constants/error.js";


const printEolInfo = () => {
  const eolValueToPrint = JSON.stringify(os.EOL);

  console.log(`Default system End-Of-Line is ${eolValueToPrint}`);
}

const printCpuInfo = () => {
  const cpus = os.cpus();

  console.table(cpus, ['model', 'speed']);
  console.log(`Overall amount of CPUS = ${cpus.length || 0}`);
}

const printHomeDir = () => {
  const homedir = os.homedir();

  console.log(`Home directory is "${homedir}"`);
}

const printUsername = () => {
  const { username } = os.userInfo();

  console.log(`Current system user name - "${username}"`);
}

const printArchitectureInfo = () => {
  const arch = os.arch();

  console.log(`Node.js binary has compiled for ${arch}`);
}

export const getOsInfo = ({ context }, flag) => {
  switch (flag) {
    case OS_FLAG.EOL:
      return printEolInfo();

    case OS_FLAG.CPU_INFO:
      return printCpuInfo();

    case OS_FLAG.HOME_DIR:
      return printHomeDir();

    case OS_FLAG.USERNAME:
      return printUsername();

    case OS_FLAG.ARCH:
      return printArchitectureInfo();

    default:
      throw new Error(ERROR_MESSAGE.INVALID_COMMAND);
  }
}
