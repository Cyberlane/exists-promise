import fs from 'fs';

const exists = filepath =>
  new Promise((resolve, reject) => {
    fs.access(filepath, fs.constants.F_OK, (err) => {
      if (err) {
        reject(`Path not found: ${filepath}`);
      } else {
        resolve(filepath);
      }
    });
  });

export default exists;
