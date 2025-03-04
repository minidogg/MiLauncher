# MiLauncher Explanation
MiLauncher is a basic tool for launching tabs that are blocked by extensions with some methods that makes it harder for some extensions to block.

## Bypass Methods Currently Used
- Launching a tab to a random URL like https://google.com and then immediately writing to its DOM. This results in extension JavaScript never being injected into the direct window. I discovered this method when messing around one day. However, it only works in Chromium based browsers.
- Embedding Sites. Pretty simple, just embedding the URL.

## Planned Bypass Methods
- Browser sided proxy for sites that fully allow CORS.
- Packing more built-in content than just the JavaScript eval tool.

## Technologies Used
This here launcher is built with yee' ol' HTML5, JavaScript and Webpack. Webpack made it possible to pack all the HTML and JavaScript I needed into a single JavaScript file. Technically though, the JavaScript is loading the HTML and not the other way around like how it's down in a traditional HTML5. 
