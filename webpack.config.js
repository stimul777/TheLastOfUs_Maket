// Модуль для работы с путями
const path = require('path');
// Модуль для работы с хтмл(преобразует подключения)
const HTMLWebpackPlugin = require('html-webpack-plugin');
// Модуль очистки мусора из прода
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// Модуль для копирования 
const CopyWebpackPlugin = require('copy-webpack-plugin');
// Подключение css (копирование в прод)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Минификация CSS
const OptimazeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
// В каком режиме сборке находимся?
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
//минимизация css
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if (isProd) {
        config.minimizer = [new OptimazeCssAssetWebpackPlugin(),
        new TerserWebpackPlugin()
        ];
    }
}

module.exports = {
    // папка входа
    context: path.resolve(__dirname, 'src'),
    // Режим сборки
    mode: 'development',
    // Указываем файлы входа
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    // Указываем куда собрать все файлы (наш бандл)
    output: {
        // name нужен, если бандлов будет несколько
        // contenthash нужен, чтобы название файла менялось( так он не кешируется у клиента)
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    }, 
    resolve: {
        // если мы не укажем расширение файла, оно подставится автоматически
        extensions: ['.js', '.json', 'png'],
        // запомнить пути
        alias: {
            // '@models': patch.resolve(__dirname, 'src/models'),
            // '@': path.resolve(__dirname, 'src'),
        }
    },
    optimization: optimization(),

        // Автообновление страницы браузера
    devServer: {
        port: 3000,
        hot: isDev
    },

    plugins: [
        new HTMLWebpackPlugin(
            {
                template: './index.html',
                minify: {
                    collapseWhitespace: isProd
                }
            },  
        ),
        new CleanWebpackPlugin (),
        new CopyWebpackPlugin ([
            {
                from: path.resolve(__dirname, 'src/img/favicon.png'),
                to: path.resolve(__dirname, 'dist')
            }
        ]),
        new MiniCssExtractPlugin(
            {
                filename: '[name].[contenthash].css',
            }
        )
    ],
    module: {
        rules: [
            {
                //копирование стилей
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                           hmr: isDev,
                           reloadAll: true 
                        }
                    },
                    'css-loader'
                ]
            },
            {
                //препроцессор LESS
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                           hmr: isDev,
                           reloadAll: true 
                        }
                    },
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                //подключение загрузки изображений
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                //обработка шрифтов (например, импорт из css другого css (без этого конфига вебпак не даст стандартно импортировать))
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                //xml
                test: /\.xml$/,
                use: ['xml-loader']
            },
        ]
    }
}