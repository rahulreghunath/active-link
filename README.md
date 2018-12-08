<p align="center">

# active-link


#### Tiny js library to highlight active page links in web page


### Install

Include the script in the bottom of the body

```html
<script src="https://cdn.jsdelivr.net/gh/rahulreghunath/active-link@latest/dist/active-link.min.js"></script>
```
---
### How to use
Call the function
```javascript
highlight({options})
```


---

### Available Options

| Name      | Required | Type          | Default     | Description |
| ---       | ---      | ---           | ---         | ---         |
| activeClass | false  | String | active | Class to added to active link element |
| container | true  | String | none| Element's name, #id or .class in which contain the links to be highlighted. Element must be unique |

---

### Example
```javascript
highlight({container: 'nav', activeClass: 'active'});
```
