# CSS selectors

In vanilla CSS, it's not possible to select a _different_ element via the `class` or `style` attribute. You can't `class=":hover…"` or `style="::before…"`, let alone `class=">li:first-child…"` or `style="body:has(&[open]) & + & li:first-child…"`.

Bring in some additional tooling —for example Tailwind CSS, Windi CSS, or in this case UnoCSS— and you can do any of that.

:::tip
As always with `unocss-preset-css`, the ruleset can have more than one rule (docs: [CSS rulesets > Multiple CSS declarations](./css-rulesets.md#multiple-css-declarations)) and/or block at-rules (docs: [CSS block at-rules](./css-at-rules.md)) and/or customized selectors. For the sake of legibility, the examples on this page use single-rule rulesets with no block at-rules.
:::

## Pseudoselectors

To select an element's pseudoselectors, write your CSS ruleset in the class attribute prefixed with the pseudoselector:

`class="<pseudoselector>{<property>:<value>}"`

**Input**

```html
<button class=":focus{color:red}">
  This button is not clickable. When focused, its text is red.
</button>
```

**Output**

- Front end

    <button class=":focus{color:red}">
      This button is not clickable. When focused, its text is red.
    </button>

- CSS

    ```css
    .\:focus\{color\:red\} {
      &:focus {
        color: red;
      }
    }
    ```

## Pseudoelements

To select an element's pseudoelements, write your CSS ruleset in the class attribute prefixed with the pseudoelement selector:

`class="<pseudoelement selector>{<property>:<value>}"`

**Input**

```html
<div class="::before{content:\27aa}">
  This is prefixed with a left-shaded white rightwards arrow
</div>
```

**Output**

- Front end

    <div class="::before{content:\27aa}">
      This is prefixed with a left-shaded white rightwards arrow
    </div>

- CSS

    ```css
    .\:\:before\{content\:\\27aa\} {
      &::before {
        content: "\27aa";
      }
    }
    ```

## Arbitrary selectors

To select other elements, write your CSS ruleset in the class attribute prefixed with the selector in square brackets:

`class="[<selector>]{<property>:<value>}"`

:::warning
- Use underscores instead of spaces.
- If you want a literal underscore, escape it with a backslash (`\`).
:::

This opens countless doors (or at least a very large countable number. If you're a mathematician, let me know which is right).

- You can select an element's children:

    **Input**

    ```html
    <ul class="[&>li:nth-child(even)]{color:red}">
      <li>This is black.</li>
      <li>This is red.</li>
      <li>This is black.</li>
      <li>This is red.</li>
    </ul>
    ```

    **Output**

    - Front end

        <ul class="[&>li:nth-child(even)]{color:red}">
          <li>This is black.</li>
          <li>This is red.</li>
          <li>This is black.</li>
          <li>This is red.</li>
        </ul>

    - CSS

        ```css
        .\[\&\>li\:nth-child\(even\)\]\{color\:red\} {
          &>li:nth-child(even) {
            color: red;
          }
        }
        ```

- You can select attribute states:

    **Input**

    ```html
    <details>
      <summary class="[[open]>&]{color:red}">
        Red when open
      </summary>

      Details
    </details>
    ```

    **Output**

    - Front end

        <details>
          <summary class="[[open]>&]{color:red}">
            Red when open
          </summary>

          Details
        </details>

    - CSS

        ```css
        .\[\[open\]\>\&\]\{color\:red\} {
          [open]>& {
            color: red;
          }
        }
        ```

- You can select fully independent elements


    **Input**

    ```html
    <div id="an-arbitrary-element">
      This is black. <span>This is red.</span>
    </div>

    <div class="[#an-arbitrary-element_span]{color:red}"></div>
    ```

    **Output**

    - Front end

      <div id="an-arbitrary-element">
        This is black. <span>This is red.</span>
      </div>

      <div class="[#an-arbitrary-element_span]{color:red}"></div>

    - CSS

        ```css
        #an-arbitrary-element span {
          color: red;
        }
        ```
