import fs from 'fs/promises';


export const catFile = async (filePath) => {
  try {
    const fileReadStream = (await fs.open(filePath)).createReadStream({ encoding: 'utf-8' });

    fileReadStream.on('data', (chunk) => (
      console.log(chunk)
    ));
  } catch (error) {
    throw new Error(error);
  }
};

export const addFile = async (fileName) => {
  try {
    await fs.writeFile(fileName, '', { encoding: 'utf-8' });
  } catch (error) {
    throw new Error(error);
  }
};

export const renameFile = async (filePath, newFileName) => {
  try {
    await fs.rename(filePath, newFileName)
  } catch (error) {
    throw new Error(error);
  }
};

export const copyFile = async (filePath, newFilePath) => {
  try {
    await addFile(newFilePath);
    const fileReadStream = (await fs.open(filePath)).createReadStream({ encoding: 'utf-8' });
    const fileWriteStream = (await fs.open(newFilePath, 'w')).createWriteStream({ encoding: 'utf-8' });

    fileReadStream.on('data', (chunk) => {
      fileWriteStream.write(chunk);
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const removeFile = async (filePath) => {
  try {
    await fs.rm(filePath);
  } catch (error) {
    throw new Error(error);
  }
};

export const moveFile = async (filePath, newFilePath) => {
  try {
    await copyFile(filePath, newFilePath);
    await removeFile(filePath);
  } catch (error) {
    throw new Error(error);
  }
};
