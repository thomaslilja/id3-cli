import fs from 'fs';
import chalk from 'chalk';
import foreach from 'lodash.foreach';
import pick from 'lodash.pick';
import NodeID3 from 'node-id3';

export default (file) => {
  fs.access(file, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(chalk.red(`File '${file}' does not exist.`));
      process.exit(1);
    }
    NodeID3.read(file, (readError, tags) => {
      if (readError) {
        console.log(chalk.red(`\nFailed to read tags on '${file}'.\n`));
        process.exit(1);
      }
      const tagsToDisplay = pick(tags, ['title', 'artist', 'album', 'year']);
      foreach(tagsToDisplay, (value, key) => {
        console.log(`${chalk.green(`${key.replace(/\b\w/g, l => l.toUpperCase())}:`)} ${chalk.white(value)}`);
      });
    });
  });
};
