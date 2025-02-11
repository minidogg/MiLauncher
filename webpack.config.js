import path from 'path'
const __dirname = path.resolve("./")

export default {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module:{
    rules: [
        {
            test: /\.html|\.css$/,
            use:[
                {
                    loader:path.resolve("./wpackloader.js")
                }
            ]
        }
    ]
  }
};