const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");

// Объявление ф-цией для возможности использования env переменных (Которые прокидываем в скриптах)
module.exports = (env) => {
  // Режим (development или production)
  const mode = env.mode || "development";

  // Порт
  const port = env.port || 3000;

  // Флаг, указывающий на то, активен ли сейчас development режим (true/false)
  const isDev = mode === "development";

  // Конфигурация webpack
  const config = {
    // Режим сборки
    mode: mode,

    //Точка входа для сборки приложения.
    entry: path.resolve(__dirname, "src", "index.js"),

    // Задает параметры для генерации выходных файлов
    output: {
      // Название выходного файла с бандлом.
      // name - имя файла.
      // contenthash - это хэш, который основан на содержимом файла.
      // Когда файлы изменяются, contenthash также изменяется.
      filename: "js/[name][contenthash:8].bundle.js",

      // Абсолютный путь к каталогу, в который будут сохранены выходные файлы.
      path: path.resolve(__dirname, "dist"),

      // Очистка предыдущего вывода перед генерацией нового.
      clean: true,
    },

    // Предоставление настройки для встроенного сервера разработки.
    devServer: {
      // Порт, на котором будет запущен сервер.
      port: port,

      // Автоматически открывать приложение в браузере при запуске сервера.
      open: true,

      // Отслеживаемые файлы для автоматической пересборки при изменениях.
      watchFiles: path.resolve(__dirname, "dist"),
    },

    // Массив плагинов, которые расширяют функциональность Webpack.
    plugins: [
      // Создает HTML-файл, который подключает в него все сгенерированные бандлы.
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),

      // Извлекает CSS из бандлов в отдельные файлы.
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
      }),
    ],

    module: {
      rules: [
        // JavaScript
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },

        //css and sass
        {
          test: /\.(scss|css)$/,
          use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [postcssPresetEnv],
                },
              },
            },
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },

        // png, jpg, jpeg, webp, gif
        {
          test: /\.(jpe?g|png|webp|gif)$/i,
          use: isDev
            ? []
            : [
                {
                  loader: "image-webpack-loader",
                  options: {
                    mozjpeg: {
                      progressive: true,
                    },
                    optipng: {
                      enabled: false,
                    },
                    pngquant: {
                      quality: [0.65, 0.9],
                      speed: 4,
                    },
                    gifsicle: {
                      interlaced: false,
                    },
                    webp: {
                      quality: 75,
                    },
                  },
                },
              ],
          type: "asset/resource",
          generator: {
            filename: "img/[name][ext]",
          },
        },

        // svg
        {
          test: /\.svg$/,
          loader: "svg-inline-loader",
          options: {
            removeSVGTagAttrs: true,
          },
        },

        // шрифты
        {
          test: /\.woff2?$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name][ext]",
          },
        },
      ],
    },
  };

  return config;
};
