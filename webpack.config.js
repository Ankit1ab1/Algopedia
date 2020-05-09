var path=require("path");

module.exports={
    entry:path.resolve(__dirname,"app"),

    output:{
    path:path.resolve(__dirname,"public"),
    filename:"bundle.js",
    publicPath:"public"
    },

    module:{
        rules:[
            {
                test:/\.jsx?$/,
                include:path.resolve(__dirname,"app"),
                use:[{loader:'babel-loader',
                
                     options: {
                                 presets: ['@babel/preset-react',{
                          'plugins': ['@babel/plugin-proposal-class-properties']}]
                             }
                     }]
            },
            {
                test:/\.css$/,
                include:path.resolve(__dirname,"app"),
                use:["style-loader","css-loader"]
            }

        ]

    }

};