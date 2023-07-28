import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodePolyfillsOptions } from '@esbuild-plugins/node-modules-polyfill';
import { NodePolyfillsOptions as NodePolyfillsOptions$1 } from 'rollup-plugin-node-polyfills/dist/types/modules';
import { Plugin } from 'vite';

declare const PLUGIN_NAME = "vite-plugin-ngmi-polyfill";
interface NgmiPolyfillConfig {
    defineGlobal?: boolean;
    nodeGlobalsOptions?: Parameters<typeof NodeGlobalsPolyfillPlugin>[0];
    nodeModulesOptions?: NodePolyfillsOptions;
    rollupPolyfillOptions?: NodePolyfillsOptions$1;
}
declare function NgmiPolyfill({ defineGlobal, nodeGlobalsOptions, nodeModulesOptions, rollupPolyfillOptions, }?: NgmiPolyfillConfig): Plugin[];

export { NgmiPolyfill, NgmiPolyfillConfig, PLUGIN_NAME };
