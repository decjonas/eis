# EIS, extended inline styling

### What is EIS?

EIS is a JavaScript library that makes inline styles better and more flexible by enabling the use of things like media queries and hover pseudo-classes.

### How does it work?

It works just like regular inline styles, but it has nesting support. So in regular CSS/Sass, you may do this:

```html
<a href="..." class="fancy-link">Something</a>
```

```css
.fancy-link {
    color: dodgerblue;
    &:hover {
        text-decoration: underline;
    }
}
```

With EIS, you can do this:

```html
<a href="..." style="
    color: dodgerblue;
    &:hover {
        text-decoration: underline;
    }
">
    Something
</a>
```

Since inline styles don't *actually* support nesting, it's using some smart code to fetch the contents from the style attribute, place it inside of a dynamically generated stylesheet, and link the styles to the element by giving it a unique ID.

### Features

EIS does have some pretty nifty features to make the developer experience even better, one of them being simplified media queries.

Normally, media queries are long and complicated like this:

```css
@media only screen and (max-width: 600px){}
@media (prefers-color-scheme: dark){}
```

But with EIS, you can just do this:

```css
@(>600px){}
@dark{}
```

### Usage

The first and recommended way to use EIS is to download it from [GitHub](https://github.com), the second way to use EIS is to use the experimental CDN by adding the following code to your HTML `<head>`:

```html
<link src="https://cdn.jnas.xyz/eis.js"></link>
```

---
