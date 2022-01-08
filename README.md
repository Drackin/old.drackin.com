# 🌐 drackin.tk

- This is my personal website with Next.js + WindiCSS

## ☁ Weather API
You can use my Weather API to see weather of locations.

### Simple Request
```js
fetch("https://drackin.tk/api/weather?city=california&degree=celcius")
.then(response => response.json()
    .then(res => {
        console.log(res)
    })
)

[
    {
        location: "California",
        ...
    }
    ...
]
```
## Tweet Generator API
You can use my Tweet Generator API to generate Tweet Image.

### Simple Request
```js
fetch("https://drackin.tk/api/twitter?avatar=https://avatars.githubusercontent.com/u/78258229?v=4&content=Test%20Tweet&fullname=Drackin&username=drackin_best")
.then(response => response.blob()
    .then(res => {
        const img = document.getElementById("img");
        img.src = res;
    })
)
```

# 📚 I Used This Libraries
- [react-load-spinner](https://github.com/mhnpd/react-loader-spinner)

- [react-use-scroll-indicator](https://github.com/codeAdrian/react-use-scroll-indicator)

- [WindiCSS](https://github.com/windicss/windicss)

- [canvas](https://github.com/Automattic/node-canvas)