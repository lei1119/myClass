// 只需要编译 html 文件，以及其用到的资源。
fis.set('project.files', ['*.html', 'map.json']);

fis.match('*.js', {
	isMod: true
});

fis.match('/javascript/sea.js', {
	isMod: false
});

fis.hook('cmd', {
	baseUrl: './javascript/',

	paths: {
		"jquery": "seajq.js",
		"$": "seajq.js",
		"swiper": "swiper-3.3.1.jquery.min.js"
	}
});

fis.match('*.css', {
	optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
	optimizer: fis.plugin('png-compressor')
});

// 注意： fis 中的 sea.js 方案，不支持部分打包。
// 所以不要去配置 packTo 了，运行时会报错的。
fis
	.media('production')
	.match('/javascript/**.js', {
		// 通过 uglify 压缩 js
		// 记得先安装：
		// npm install [-g] fis-optimizer-uglify-js
		optimizer: fis.plugin('uglify-js')
	})
	.match('::packager', {
		postpackager: fis.plugin('loader', {
			allInOne: {
				includeAsyncs: true,
				ignore: ['/javascript/sea.js']
			}
		})
	});

// extends GLOBAL config
fis.media('production');