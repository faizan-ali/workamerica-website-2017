const path = require(`path`);

const credentials = require(`./credentials.json`);
const webpack = require(`webpack`);
const {HotModuleReplacementPlugin} = webpack;
const {UglifyJsPlugin} = webpack.optimize;

const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const ExtractTextWebpackPlugin = require(`extract-text-webpack-plugin`);
const configHtmls = require(`webpack-config-htmls`)();

const extractCSS = new ExtractTextWebpackPlugin(`css/style.css`);
const S3Plugin = require(`webpack-s3-plugin`);

// change for production build on different server path
const publicPath = `/`;

const port = 3000;

// hard copy assets folder for:
// - srcset images (not loaded through html-loader )
// - json files (through fetch)
// - fonts via WebFontLoader

const copy = new CopyWebpackPlugin([{
  from: `./src/static`,
  to: `static`
}], {
  ignore: [ `.DS_Store` ]
});

const config = {

  // no HTML entry points for production build (bundled in JavaScript)
  entry: [
    require.resolve(`react-dev-utils/webpackHotDevClient`),
    `./src/css/style.css`,
    `./src/js/script.js`
  ],

  resolve: {
    // import files without extension import ... from './Test'
    extensions: [`.js`, `.jsx`, `.css`]
  },

  output: {
    path: path.join(__dirname, `dist`),
    filename: `js/[name].[hash].js`,
    publicPath
  },

  devtool: `source-map`,

  devServer: {
    contentBase: `./src`,
    historyApiFallback: true, // for use with client side router
    hot: true,
    port
  },

  module: {

    rules: [
      {
        test: /\.css$/,
        use: [
          `style-loader`,
          {
            loader: `css-loader`,
            options: {
              importLoaders: 1
            }
          },
          {
            loader: `postcss-loader`
          }
        ]
      },
      {
        test: /\.html$/,
        loader: `html-loader`,
        options: {
          attrs: [
            `audio:src`,
            `img:src`,
            `video:src`,
            `source:srcset`
          ] // read src from video, img & audio tag
        }
      },
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: `babel-loader`
          },
          {
            loader: `eslint-loader`,
            options: {
              fix: true
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpe?g|gif|webp)$/,
        loader: `url-loader`,
        options: {
          limit: 1000, // inline if < 1 kb
          context: `./src`,
          name: `[path][name].[ext]`
        }
      },
      {
        test: /\.(mp3|mp4)$/,
        loader: `file-loader`,
        options: {
          context: `./src`,
          name: `[path][name].[ext]`
        }
      }
    ]

  },

  plugins: [
    new HotModuleReplacementPlugin()
  ]

};

if (process.env.NODE_ENV === `staging`) {
  //remove hot reloading client
  config.entry.shift();

  //remove CSS rule and add new one, css in external file
  config.module.rules.shift();
  config.module.rules.push({
    test: /\.css$/,
    loader: extractCSS.extract([
      {
        loader: `css-loader`,
        options: {
          importLoaders: 1
        }
      },
      {
        loader: `postcss-loader`
      }
    ])
  });

  //image optimizing
  config.module.rules.push({
    test: /\.(svg|png|jpe?g|gif)$/,
    loader: `image-webpack-loader`,
    enforce: `pre`
  });

  config.plugins = [
    extractCSS,
    copy,
    new UglifyJsPlugin({
      sourceMap: true, // false returns errors.. -p + plugin conflict
      comments: false
    }),
    new S3Plugin({
      // s3Options are required
      s3Options: {
        accessKeyId: credentials.accessKeyId,
        secretAccessKey: credentials.secretKey,
        region: `us-west-2`
      },
      s3UploadOptions: {
        Bucket: `website-stage.workamerica.co`
      }
    })
  ];

}

if (process.env.NODE_ENV === `production`) {
  //remove hot reloading client
  config.entry.shift();

  //remove CSS rule and add new one, css in external file
  config.module.rules.shift();
  config.module.rules.push({
    test: /\.css$/,
    loader: extractCSS.extract([
      {
        loader: `css-loader`,
        options: {
          importLoaders: 1
        }
      },
      {
        loader: `postcss-loader`
      }
    ])
  });

  //image optimizing
  config.module.rules.push({
    test: /\.(svg|png|jpe?g|gif)$/,
    loader: `image-webpack-loader`,
    enforce: `pre`
  });

  config.plugins = [
    extractCSS,
    copy,
    new UglifyJsPlugin({
      sourceMap: true, // false returns errors.. -p + plugin conflict
      comments: false
    }),
    new S3Plugin({
      // s3Options are required
      s3Options: {
        accessKeyId: credentials.accessKeyId,
        secretAccessKey: credentials.secretKey,
        region: `us-west-2`
      },
      s3UploadOptions: {
        Bucket: `workamerica.co`
      }
    })
  ];

} else {

  // only include HTMLs in NODE_ENV=development
  // for Hot Reloading
  config.entry = [...config.entry, ...configHtmls.entry];

}

config.plugins = [...config.plugins, ...configHtmls.plugins];

module.exports = config;
