// Модуль для работы с путями
const path = require('path');
// Модуль для работы с хтмл(преобразует подключения)
const HTMLWebpackPlugin = require('html-webpack-plugin');
// Модуль очистки мусора 
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
// добавляем хеши в конец
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

// Лоадер стили
const cssLoaders = extra => {
    const loaders = [
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

    if (extra) {
        loaders.push(extra);
    }
    return loaders;
}


module.exports = {
    // папка входа
    context: path.resolve(__dirname, 'src'),
    // Режим сборки
    mode: 'development',
    // Указываем файлы входа js
    entry: {
        main: ['@babel/polyfill','./index.js'],
        analytics: './analytics.js'
    },
    // Указываем куда собрать все файлы (наш бандл)
    output: {
        // name нужен, если бандлов будет несколько
        // hash нужен, чтобы название файла менялось( так он не кешируется у клиента)
        filename: filename('js'),
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
                filename: filename('css'),
            }
        )
    ],
    module: {
        rules: [
                //копирование стилей
            {
                test: /\.css$/,
                use: cssLoaders()
            },
                //препроцессор LESS
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
               //подключение загрузки изображений
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
                //обработка шрифтов (например, импорт из css другого css (без этого конфига вебпак не даст стандартно импортировать))
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
               //xml
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
                // Babel
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                } 
            }   
        ]
    }
}