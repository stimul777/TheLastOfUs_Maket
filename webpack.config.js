// Модуль для работы с путями
const path = require('path');
// Модуль для работы с хтмл(преобразует подключения)
const HTMLWebpackPlugin = require('html-webpack-plugin');
// Модуль очистки мусора из прода
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

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
    plugins: [
        new HTMLWebpackPlugin(
            {
                template: 'index.html'
            },
            new CleanWebpackPlugin ()
        )
    ],
    module: {
        rules: [
            {
                //подключение подгрузки стилей
                test: /\.css$/,
                use: ['style-loader','css-loader']
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
        ]
    }
}