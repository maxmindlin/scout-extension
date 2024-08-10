Scout-extension is a Google Chrome devtools extension that allows the recorder to transpile directly to ScoutLang.

## Caveats

While the Google recorder API supports ARIA, CSS, XPath, Text, and Pierce, Scoutlang currently only supports CSS. So when new recordings are created, it is critical that *only CSS* is a selected type to record.

## Developement

### Project structure

- `extension` is the extension folder that is uploaded to Chrome. Contains the JS and pre-compiled WASM files.
- `wasm-lib` is the Rust library that is compiled to WASM. The `build.bat` file is responsible for compiling the WASM files and putting them where the JS frontend expects them.