import chalk from 'chalk';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { API, FileInfo, JSCodeshift } from 'jscodeshift';
import { argv as pargv, exit } from 'process';
import recursive from 'recursive-readdir';
import sharp from 'sharp';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv: any = yargs(hideBin(pargv)).argv;

if (!existsSync(argv.imageSrc)) {
	chalk.red(`Image source directory ${argv.imageSrc} does not exist`);
	exit(1);
}

if (!existsSync(argv.imageSrc)) {
	chalk.red(`Image source directory ${argv.imageSrc} does not exist`);
	exit(1);
}

recursive(argv.imageSrc, (err, files) => {
	files.filter(file => file.endsWith('.png') || file.endsWith('.jpg'))
		.forEach(async (file) => {
			await sharp(file).webp().toFile(file.slice(0, file.lastIndexOf('.')) + '.webp');
		});
});

const targetTypes = ['.html', '.scss', '.css', '.js', '.ts', '.json'];

recursive(argv.appSrc, (err, files) => {
	files.filter(file => targetTypes.includes(file.slice(file.lastIndexOf('.'))))
		.forEach((file) => {
			try {
				const content = readFileSync(file, { encoding: 'utf-8' }).toString();
				const replaced = content.replace(/\.(jpg|png)/g, '.webp');
				writeFileSync(file, replaced, { encoding: 'utf-8' });
			} catch (error) {
				chalk.red(`Error while processing ${file}: ${error}`);
			}
		});
});
