
const pkg = require('./package.json');

module.exports = {
  name: pkg.name,
  script: 'yarn',
  args: 'docs:dev',
  cwd: './',
};
