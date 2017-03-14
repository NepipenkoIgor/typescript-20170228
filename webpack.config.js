module.exports = {
    entry: './lesson-3/main.ts',
    output: {
        filename: './lesson-3/bundle.js'
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
           "./lesson-3/",
           "node_modules"
       ]
   }
}