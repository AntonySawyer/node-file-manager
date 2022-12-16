import { getStartDir } from './index.js';

export const initApp = () => {
  const startDir = getStartDir();

  process.chdir(startDir);
}

export const handleExit = ({ context }) => {
  context.readlineInterface.close();
};
