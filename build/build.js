const webpack = require('webpack');
const config = require('./webpack.prod.conf.js');
webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        // 在这里处理错误
        console.error(err);
        return;
    }
    // 处理完成
    console.log(stats.toString({
        chunks: false,
        colors: true
    }));
});
