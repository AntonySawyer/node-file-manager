import fs from 'fs/promises';

export const catFile = async ({ commandArguments: filePath }) => {
  try {
    const fileReadStream = (await fs.open(filePath)).createReadStream({ encoding: 'utf-8' });

    fileReadStream.on('data', (chunk) => (
      console.log(chunk)
    ));
  } catch (error) {
    process.emit(ERROR_EVENT.EXECUTION_FAIL);
  }
};

export const addFile = async ({ commandArguments: fileName }) => {
  try {
    fs.writeFile(fileName, '', { encoding: 'utf-8' });
  } catch (error) {
    process.emit(ERROR_EVENT.EXECUTION_FAIL);
  }
};
