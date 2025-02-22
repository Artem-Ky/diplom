import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
// import path from 'path';

const fs = require('fs');

// const WRONG_CODE = 'import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";';
// export function reactVirtualized() {
//     return {
//         name: 'my:react-virtualized',
//         configResolved() {
//             const file = require
//                 .resolve('react-virtualized')
//                 .replace(
//                     path.join('dist', 'commonjs', 'index.js'),
//                     path.join(
//                         'dist',
//                         'es',
//                         'WindowScroller',
//                         'utils',
//                         'onScroll.js',
//                     ),
//                 );
//             const code = fs.readFileSync(file, 'utf-8');
//             const modified = code.replace(WRONG_CODE, '');
//             fs.writeFileSync(file, modified);
//         },
//     };
// }

export default defineConfig({
    plugins: [
        svgrPlugin({
            include: '**/*.svg',
            svgrOptions: {
                exportType: 'default',
            },
        }),
        react(),
        // reactVirtualized(),
    ],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    server: {
        port: 3000,
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
