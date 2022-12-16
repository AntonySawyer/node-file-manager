import fs from 'fs/promises';


export const catFile = async ({ context }, filePath) => {
  try {
    const fileReadStream = (await fs.open(filePath)).createReadStream({ encoding: 'utf-8' });

    fileReadStream.on('data', (chunk) => (
      console.log(chunk)
    ));
  } catch (error) {
    throw new Error(error);
  }
};

export const addFile = async ({ context }, fileName) => {
  try {
    await fs.writeFile(fileName, '', { encoding: 'utf-8' });
  } catch (error) {
    throw new Error(error);
  }
};

export const renameFile = async ({ context }, filePath, newFileName) => {
  try {
    await fs.rename(filePath, newFileName)
  } catch (error) {
    throw new Error(error);
  }
};

export const copyFile = async (options, filePath, newFilePath) => {
  try {
    await addFile(options, newFilePath);
    const fileReadStream = (await fs.open(filePath)).createReadStream({ encoding: 'utf-8' });
    const fileWriteStream = (await fs.open(newFilePath, 'w')).createWriteStream({ encoding: 'utf-8' });

    fileReadStream.on('data', (chunk) => {
      fileWriteStream.write(chunk);
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const removeFile = async ({ context }, filePath) => {
  try {
    await fs.rm(filePath);
  } catch (error) {
    throw new Error(error);
  }
};

export const moveFile = async (options, filePath, newFilePath) => {
  try {
    await copyFile(options, filePath, newFilePath);
    await removeFile(options, filePath);
  } catch (error) {
    throw new Error(error);
  }
};
