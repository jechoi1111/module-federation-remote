const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('@module-federation/enhanced/webpack').ModuleFederationPlugin

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            excludeChunks: ['webpack_remote']
        }),
        new ModuleFederationPlugin({
        name: 'webpack_remote',
        filename: 'remoteEntry.js',
        exposes: {
            './commonUtil': './src/utils/common.ts',
            './Button': './src/components/Button.tsx',
            './Checkbox': './src/components/Checkbox.tsx',
            './Radio': './src/components/Radio.tsx',
            './Store': './src/zustand/example/store.ts',
            './ExamplePage': './src/pages/ExamplePage.tsx'

        },
        shared: {
            react: {singleton: true},
            "react-dom": {singleton: true},
            // zustand: {singleton: true}
        },
    })],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                        experimentalWatchApi: true,
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': '*',
        },
        port: 3000,
        hot: true
    }
}