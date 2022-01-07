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
# 📚 I Used This Libraries
- [react-load-spinner](https://github.com/mhnpd/react-loader-spinner)

- [react-use-scroll-indicator](https://github.com/codeAdrian/react-use-scroll-indicator)

- [WindiCSS](https://github.com/windicss/windicss)