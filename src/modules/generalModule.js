import { getStartDir } from './index.js';

export const initApp = () => {
  const startDir = getStartDir();

  process.chdir(startDir);
}
