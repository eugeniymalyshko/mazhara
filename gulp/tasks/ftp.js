import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';

export const ftp = () => {
	configFTP.log = util.log;
	const ftpConect = vinylFTP.create(configFTP);
	return app.gulp.src(`./dist/**/*.*`, {})
		.pipe (app.plugins.plumber(
			app.plugins.notify.onError({
				title: "FTP",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(ftpConect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
};