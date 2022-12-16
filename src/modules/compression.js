import fs from 'fs/promises';
import { createBrotliDecompress, createBrotliCompress } from 'zlib';

const applyCompressModifier = async (compressor, pathFrom, pathTo) => {
  const fileReadStream = (await fs.open(pathFrom)).createReadStream();
  const fileWriteStream = (await fs.open(pathTo, 'w')).createWriteStream();

  fileReadStream.pipe(compressor).pipe(fileWriteStream);
}

export const compress = async (options, pathFrom, pathTo) => {
  const compressor = createBrotliCompress();
  try {
    await applyCompressModifier(compressor, pathFrom, pathTo);
  } catch (error) {
    throw error;
  }
}

export const decompress = async (options, pathFrom, pathTo) => {
  const decompressor = createBrotliDecompress();
  try {
    await applyCompressModifier(decompressor, pathFrom, pathTo);
  } catch (error) {
    throw error;
  }
}
