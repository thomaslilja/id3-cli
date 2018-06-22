import fs from 'fs';
import chalk from 'chalk';
import NodeID3 from 'node-id3';
import inquirer from './set-questions';

export default (file) => {
  fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
    if (err) {
      console.log(chalk.red(`File '${file}' ${err.code === 'ENOENT' ? 'does not exist.' : 'is read-only.'}`));
      process.exit(1);
    }
    inquirer().then((tags) => {
      NodeID3.write(tags, file, (writeError) => {
        if (writeError) {
          console.log(chalk.red(`\nFailed to write tags to '${file}'.\n`));
          process.exit(1);
        }
        console.log(chalk.green(`\nSuccessfully wrote tags to '${file}'.\n`));
      });
    });
  });
};
