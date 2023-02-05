module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
    'stylelint-config-prettier-scss',
    'stylelint-config-standard-scss'
  ],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ]
}
