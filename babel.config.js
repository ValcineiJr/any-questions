module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    'inline-react-svg',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@types': './src/@types',
          '@hooks': './src/hooks',
          '@pages': './src/pages',
          '@router': './src/router',
          '@services': './src/services',
          '@store': './src/store',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@schemas': './src/schemas',
          '@navigation': './src/navigation',
          '@model': './src/model',
        },
      },
    ],
  ],
};
