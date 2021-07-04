// Function to set mode for production or development
const mode = process.env.NODE_ENV === 'production'
? 'production'
: 'development';

module.exports = {
  mode: mode,
  module: {
    rules: [
      {
        // Set up to test for sass, scss and css files
        test: /\.(s[ac]|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: './dist',
  },
}