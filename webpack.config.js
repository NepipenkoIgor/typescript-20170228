module.exports = {
    entry: './lesson-4/flickr/main.ts',
    output: {
        filename: './lesson-4/flickr/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
            }
        ]
    },
   resolve: {
       extensions : ['.ts'],
       modules : [
           "node_modules"
       ]
   }
}