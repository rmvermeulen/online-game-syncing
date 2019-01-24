module.exports = {
  hooks: {
    'package.json': ['prettier-package-json', 'git add'],
    '/**/*.{ts,json}': [
      'tslint --fix',
      'prettier --write',
      'git add',
      'jest --findRelatedTests'
    ]
  }
};
