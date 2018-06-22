import inquirer from 'inquirer';

export default () => {
  const questions = [
    {
      name: 'title',
      type: 'input',
      message: 'Title:',
      validate: (value) => {
        if (value.length) {
          return true;
        }
        return 'Please enter a title.';
      },
    },
    {
      name: 'artist',
      type: 'input',
      message: 'Artist:',
      validate: (value) => {
        if (value.length) {
          return true;
        }
        return 'Please enter an artist.';
      },
    },
    {
      name: 'album',
      type: 'input',
      message: 'Album:',
      validate: (value) => {
        if (value.length) {
          return true;
        }
        return 'Please enter an album.';
      },
    },
    {
      name: 'year',
      type: 'input',
      message: 'Release year:',
      validate: (value) => {
        if (value.length) {
          return true;
        }
        return 'Please enter a release year.';
      },
    },
  ];
  return inquirer.prompt(questions);
};
