// const WASM_MOD_URL = chrome.runtime.getURL('js/wasm/wasm_mod.js');
import initWasmModule, { transpile_json, transpile_json_step } from './js/wasm/wasm_mod.js';


// // Import Wasm module binding using dynamic import
// // "init" may fail if the current site CSP restricts the use of Wasm (e.g. any github.com page)
// // In this case instantiate module in the background worker (see background.js) and use message passing
// const loadWasmModule = async () => {
//     const { default: init } = await import(WASM_MOD_URL);
// 
//     return init().catch(() => null);
// };

export class ScoutPlugin {
    async stringify(recording) {
      await initWasmModule();
      return transpile_json(JSON.stringify(recording));
    }

    async stringifyStep(step) {
      await initWasmModule();
      return transpile_json_step(JSON.stringify(step));
    }
  }
  
  /* eslint-disable no-undef */
  chrome.devtools.recorder.registerRecorderExtensionPlugin(
    new ScoutPlugin(),
    /* name=*/ 'ScoutLang',
    /* mediaType=*/ 'text'
  );