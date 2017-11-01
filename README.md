# Poly
This is a [React]() package, it can't be used on a normal webpage.
![Example](https://i.imgur.com/deiBSJx.jpg)

## Limitations
Since backdrop-filter is only supported in Safari [dom-to-image](https://www.npmjs.com/package/dom-to-image) is used to capture an image of the webpage so that it can blur the background. This is quite resource intensive so it needs to be manually updated when needed. Another problem is that [dom-to-image](https://www.npmjs.com/package/dom-to-image) does not support capturing webpages featuring CORS protected resources. This can be circumvented if you're using Electron by turning off [websecurity](https://github.com/electron/electron/issues/384).

## How do i use it?
To install Poly run `npm i react-poly`, import it and then use it like this:
```html
<Poly blur={12} tint={[255,255,255,0.66]}>
    <div className="preview" style={{ height: '450px', width: '750px' }}>
      <h1>Poly</h1>
      <p>A beautiful pane of Polymetylmetakrylat.</p>
    </div>
</Poly>
```

## License
Copyright 2017 Hampus Lundqvist

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.