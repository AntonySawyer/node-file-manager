import fs from 'fs/promises';
import crypto from 'crypto';

export const printFileHash = async (options, filePath) => {
  const content = await fs.readFile(filePath);
  const fileHash = crypto.createHash('sha256')
    .update(content)
    .digest('hex');

  console.log(fileHash);
}
