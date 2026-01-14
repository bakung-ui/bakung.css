# bakung.css

> HTML UI library pure CSS, lightweight, no javascript

Bakung.css versioning is based on the year and month. Version 26.1.0 was launched in January 2026; all future releases, including minor updates, will follow this `year/month` format, for ex. `27.3.0` is release in March 2027.


**INSTALL**

```sh
npm i @bakung-ui/bakung.css
```

or

```sh
yarn add @bakung-ui/bakung.css
```

**Download**

https://github.com/bakung-ui/bakung.css/releases/latest/


**CDN**

https://app.unpkg.com/@bakung-ui/bakung.css@latest/

https://cdn.jsdelivr.net/npm/@bakung-ui/bakung.css@latest/


**REQUIREMENTS**

```html
<!DOCTYPE html>
<html lang="">
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&family=Montserrat:wght@100..900&family=Sometype+Mono:wght@400..700&display=swap" rel="stylesheet">
        
        <!--
            Put your css files link here
        -->
    </head>
    <body>
    </body>
</html>
```


**CUSTOMIZE**

```
[MAIN FOLDER]
 ├  css                     // Files in here are editable
 |    ├  _variables.css     // Especially this one
 |    └  _bakung.css        // You can also edit this, though only to a limited extent
 └  dist                    
      ├  _bakung.min.css    // without variables
      ├  bakung.css
      └  bakung.min.css     // you shall use this for production
```

Feel free to customize files in the css folder especially _variables.css file.

To customize the styles to your preference, make sure `@bakung-ui/minimax.css` is installed , then you can either modify the minimax.css files directly or apply overrides within _variables.css and _bakung.css file.

After making changes, run command `npm run build` to build your changes, check your new build files in dist folder.

When changing the `font-family` in your CSS, ensure you also update the corresponding font link in the HTML `<head>`.


## Browser support

* Chromium*
* Firefox
* Safari


## Contributing

Please read the [contribution guidelines](CONTRIBUTING.md) in order to make the
contribution process easy and effective for everyone involved.


## 

[<img width="150" alt="image" src="https://github.com/user-attachments/assets/3f30b3fa-049a-47e0-a288-241f623c7325" />][npm-url] [<img width="150" alt="image" src="https://github.com/user-attachments/assets/66d52d95-465e-4d3e-a0f5-56922755507b" />][classic-yarn-url] 
[![changelog]][changelog-url]

[npm-url]: https://www.npmjs.com/package/@bakung-ui/bakung.css
[classic-yarn-url]: https://classic.yarnpkg.com/en/package/@bakung-ui/bakung.css
[yarn-url]: https://yarnpkg.com/package?name=@bakung-ui/bakung.css
[changelog-url]: CHANGELOG.md
