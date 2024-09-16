---
titleTemplate: :title # see also VitePress config
---

# unocss-preset-css ![GitHub release (latest by date)](https://img.shields.io/github/v/release/olets/unocss-preset-css) ![GitHub commits since latest release](https://img.shields.io/github/commits-since/olets/unocss-preset-css/latest)

<div class="{border:1px_solid_currentColor}">

![unocss-preset-css splash card](/unocss-preset-css-card.jpg)

</div>

&nbsp;

**unocss-preset-css** is a front-end tool which unlocks writing something very close to vanilla CSS directly in the `class` attribute. Style any element from any other element, style `::before` and `::after` from their originating element's markup, and use CSS at-rules without breaking to a `<style>` tag, all without learning new syntax.

It's like Tailwind CSS, or Windi CSS, or any other CSS DOM API, but with the minimum of tool-specific idioms.

Want `{ color: currentColor }`? That's `class="{color:currentColor}"`, not `class="text-current"`".

Want `{ line-height: 2 }`? That's `class="{line-height:2}"`, not `class="leading-loose"`.

## Who is unocss-preset-css for?

- Adventurous fans of writing CSS via a `class` DOM API interested in trying out patterns other than Tailwind's, in the search for the next evolutionary step.
- People wondering what UnoCSS is all about. [^1]
- People who like or are at least intrigued by the idea of writing CSS via a `class` attribute DOM API but are turned off by Tailwind's (and then Windi's) inconsistent and overloaded renaming of CSS properties.
- People who don't have to try Tailwind to know that they hate it but wouldn't mind something new to casually bad mouth, probably.

## How do the class names look?

- Single declaration:

    ```
    {<property>:<value>}
    ```
    
    e.g. `class="{color:red} …"`

- Pseudoelement on the originating element:

    ```
    <pseudoelement>{<property>:<value>}
    ```
    
    e.g. `class="::before{color:red} …"`

- Pseudoselector on the originating element:

    ```
    <pseudoselector>{<property>:<value>}
    ```
    
    e.g. `class=":focus{color:red} …"`

- Arbitrary selector:

    ```
    [<selector>]{<property>:<value>}
    ```
    
    e.g. `class="[&+&]{color:red} …"`

- `@layer` block at-rule:

    ```
    @layer_<name>{<property>:<value>}
    ```
    
    e.g. `class="@layer_stuff{color:red} …"`

- Other block at-rules:

    ```
    <at-rule>{<property>:<value>}
    ```
    
    e.g. `class="@media(width<768px){color:red} …"`

- Multiple declarations: delimit with `.,` (sideways `;`. UnoCSS doesn't play nice with semicolons in class names)

    ```
    {<property>:<value>.,<property>:<value>}
    ```
    
    e.g. `class="{color:red.,font-weight:bold} …"`

- You can use the "multiple declarations" pattern anywhere you can use the "single declaration" pattern in a single class name.

- You can combine a `@layer` block at-rule and another block at-rule in a single class name.

- You can combine a `@layer` block at-rule and/or another block at-rule with an arbitrary selector in a single class name.

## Why write "atomic" / "primitive" / "utility" classes at all?

Over the past several I've sketched out several articles talking about this. If I publish one, I'll link to it here. In the meantime, I'll quote Adam Wathan, creator of Tailwind CSS

> [You're] never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.[^2]

&nbsp;

&nbsp;

[^1]: It's an "engine" for creating your own CSS DOM API. Atomic CSS championed small classes in markup. LESS encouraged composing classes. Tailwind combined those, introduced the "utility and variants" model, and popularized the `.<identifier>-<value> { <property>: <value> }` pattern. Tailwind's inconsistent and sometimes idiomatic `<identifier>` choices aren't for everyone (I _think_ this is what most casual Tailwind detractors are picking up on when they call it a "framework"), and each custom class is limited to a single dynamic value. UnoCSS relieves those constraints: with it, you build your own system of class names in which are embedded arguments used in the generated CSS, with class name patterns that work for you and which are limited only by your regex chops.

[^2]: [tailwindlabs/tailwindcss.com@6c53a91:src/pages/index.js#L173-L202](https://github.com/tailwindlabs/tailwindcss.com/blob/6c53a913be2d1f387d627c9d075e1cfe4f263d83/src/pages/index.js#L173-L202)
