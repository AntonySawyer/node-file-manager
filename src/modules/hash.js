import fs from 'fs/promises';
import crypto from 'crypto';


export const printFileHash = async (filePath) => {
  try {
    const content = await fs.readFile(filePath);
    const fileHash = crypto.createHash('sha256')
      .update(content)
      .digest('hex');

    console.log(fileHash);
  } catch (error) {
    throw new Error(error);
  }
}
