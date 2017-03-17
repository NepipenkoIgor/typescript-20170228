module.exports = {
    entry: './lesson-3/ChebiryakVictor/main.ts',
    output: {
        filename: './lesson-3/ChebiryakVictor/main.js'
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