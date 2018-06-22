#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import program from 'commander';
import figlet from 'figlet';
import pckg from '../package.json';

import get from './get';
import set from './set';

clear();
console.log(
  chalk.yellow(
    figlet.textSync('ID3-CLI', { horizontalLayout: 'full' })
  )
)

program
  .version(pckg.version, '-v, --version');

program
  .command('get <file>')
  .action(get);

program
  .command('set <file>')
  .action(set);

program
  .parse(process.argv);
