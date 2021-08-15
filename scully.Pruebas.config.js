"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    projectRoot: './src',
    projectName: 'Pruebas',
    outDir: './dist/static',
    routes: {},
    puppeteerLaunchOptions: {
        args: [
            '--disable-gpu',
            '--renderer',
            '--no-sandbox',
            '--no-service-autorun',
            '--no-experiments',
            '--no-default-browser-check',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-extensions',
        ],
    },
};
