const path = require('path'),
    webpack = require('webpack'),
    UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    devtool: 'source-map',
    performance: {
        hints: false
    },
    mode: 'production',
    entry: "./index.jsx",
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.scss', '.sass', 'json' ],
        alias     : {
            styles: `${ __dirname  }./scr/styles`,
            public: `${ __dirname  }./public`
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ["env", "react", "stage-0", 'es2017'],
                        plugins: ["transform-runtime"]
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                    }
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name][hash].[ext]',
                            outputPath: 'images/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            outputPath: 'images/',
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            },
                            pngquant: {
                                quality: '70',
                                speed: 4
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join( 'index.html'),
            filename: './index.html'
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    beautify: false,
                    comments: false,
                    compress: {
                        sequences: true,
                        booleans: true,
                        loops: true,
                        unused: true,
                        warnings: false,
                        drop_console: true,
                        unsafe: true
                    }
                }
            })
        ],
    }
};

module.exports = config;