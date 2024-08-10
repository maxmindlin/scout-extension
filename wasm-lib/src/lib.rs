mod utils;

use scout_json::{ScoutJSON, Step};
use wasm_bindgen::prelude::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);

    #[wasm_bindgen(js_namespace=console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn transpile_json(s: &str) -> String {
    match serde_json::from_str::<ScoutJSON>(s) {
        Err(e) => format!("Error {e}"),
        Ok(json) => {
            let ast = json.to_ast();
            ast.to_string()
        }
    }
}

#[wasm_bindgen]
pub fn transpile_json_step(s: &str) -> String {
    match serde_json::from_str::<Step>(s) {
        Err(e) => format!("Error {e}"),
        Ok(json) => {
            let ast = json.to_stmt();
            ast.to_string()
        }
    }
}
