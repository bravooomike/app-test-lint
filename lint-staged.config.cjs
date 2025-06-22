module.exports = {
  '*.{ts,tsx}': ['yarn prettify', 'yarn typecheck:files', 'yarn lint'],
};
