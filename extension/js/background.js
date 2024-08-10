// Use static import
import initWasmModule from './wasm/wasm_mod.js';


(async () => {
    await initWasmModule();
})();