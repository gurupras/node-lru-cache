const baseConfig = {
	mode: 'production',
	entry: {
		index: './index.mjs'
	}
}

module.exports = [
{
	...baseConfig,
  output: {
    library: {
      type: 'commonjs2',
    },
  },
},
{
	experiments: {
		outputModule: true
	},
	...baseConfig,
  output: {
    library: {
      type: 'module',
    },
  },
}
]
