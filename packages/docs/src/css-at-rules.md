# CSS at-rules

In vanilla CSS, it's not possible to write at-rules in an element's attributes. Bring in some additional tooling —for example Tailwind CSS, Windi CSS, or in this case UnoCSS— and you can.

:::tip
As always with `unocss-preset-css`, the ruleset can have more than one rule (docs: [CSS rulesets > Multiple CSS declarations](./css-rulesets.md#multiple-css-declarations)) and/or block at-rules (docs: [CSS block at-rules](./css-at-rules.md)) and/or customized selectors. For the sake of legibility, the examples on this page use single-rule rulesets with no custom selectors.

👀 You can experiment with all of these examples in [this UnoCSS Play](https://unocss.dev/play/?version=0.62.4&html=DwZwpgxgLglg9gOwHwCgAEbgAsBMSDCAyoWgE4CuANmOFCMAPS6rqYCGaWpYAZgLwAiLFCgAHEAC4GDcgjgQQIALSjutJQpAA6ONTpaAJmABuDTUorVa24QFtKApABF59BmxYZgBmMdQYvH2M0CEo2RUEAbwhdOFIJbgMAX0cAFSwYEDRMsjADLUYgzwDvXxCwiIFo2PjEpLRInkQoJQB3MBgAc2EJACNdZLSMrJzEtDYEAzR%2BynzC32LAstDwkCiYyjiEvK0AGiaEFvaunpnBpHSc0bzxyemBgoYilFYl4JXKyP7SI3iARlEAA8APogXQwAzAupDHJYcLjXJTb6-eZ%2BF4BTBBcqrKK9NgQADWnVIcFkBiUMFsbE6YAk5FIlAAFJTqWAADrAv5aNjGGA8ACUKX8GLQAEkECBRJAoGhbGA0FA4CFEDwYKRbAq4TKoMNMGBbEgDHAaIx9Ug0K04gStK9ME8FuiSliPmsqjFDmBDhI2L0IELbRhxZLpbL5YrlQhVerNWxtbrgGajSaGGaLVabRjUYtMcsKq7qh6vf6RWKJVLoKGFUr3VGNTrY5qcgmDUm3KnLaRrbas6we4xwNB4MgXqBpUPhdg8EQSOBqNA4m5mI7gBwuLxBMIxJJpLJXMpVDQwC1NDo9NojKZzLPpQutHYHM5XIwPMvnpneuQRIhsZUJE0IOQIDVJstR5MWIqXFkH5fgg2RZHIMqhDAhI%2BtQWhoAA6lgnpoP%2BgF5Ls2R0AqYCAjK1z5N2DDQYqw7ds6eaCBIfS8HEYAFlAnpQBIbI4AA7GwbDgRikFwWgB6qoCNytDAOoItQPAtCAcJGFMrQZJxZAnFArRsD8WR6SSrRUc83ZUD%2BroANoAGRIJQMASIcWAaBksyMiYnr8gAusBWzQsKmb2Rcuo5L0YSEo8QUBpgQWiRRkUwAFJSxSFUHhdajBRSWwApVcWSJAlSWMFQ2beEebAwJQIBJV4IDkLYVKkAAnhZgiWZZcBSggXlINZPkbH5YGOAAStJ2GwZ1nr9vVjVNdmGBOOVlUgCZS1VaVWIQoIExKHpvSyaQelNUoYDUHKhyONFcVpfi1qYJKEzBXliKPA9w6ZvaaL0bmOICJZADEO17QdR0nWdXGgqIEz9TU2znD2Xifag-ZjogLCjoOaO9sw07jC0ljJkuvartw-BCCI4hSDIcjmAe6gnroR7niYZiKLt%2BNUDQd5QPYjguAoz7FKUaKZgxv0AAJhE1YCkKCUDkDwPC%2BaB5zXYiPbfe8jECJLbDS7LcA6jLytw-Uuv63LCtKwN8RheQYDCQEauJCZDqa61Otyj4bCMjJBg6sAfEAGwABxAvyJv%2BdFo1TN%2BMmTHArTwYZicyzGsHB2HgIZiUSOOm8Hvi17MA%2B37OpIHwmfh5HQ01WgMdoHHMAJ0naBV4CFoQvKcSd78OeI6Zou%2BNFLpROE5b47G8ASH8wIMJy9RfHEvwz0CoLgpCdQNGXWASAALNwthm1LMugmwPB6TASh-Hv4t1aIohxHQwIIcCjLj9KFhT3AM9z5y-I2WYr0Vi3AYaFm4nsHgmxYwSAUlAPYUMDA%2BAQJ0JQipRASAgGwSgEBGR-AAAz4IAKSCjQObU%2BIBz6X2vrfe%2Bj9SDP1fu-YM0Av6wB-rPeefwAHWWYufTipB%2BrUD0rA3g8Ddjuk4ocPYPhJRSz6JsQkKRbRIA1kPLWv1IiyNEPIuQCAHZkLoU-EAjI2hgF6ASWSSgsBNVEONSQeiwAR20fIsK8gCSOwLqPT2eQS6%2BwhAHduEcbam0uiWDADcm4t2TqQIyad6wZ1DkCdChAqGkBgP3XOg8RTC0LsXUuASsAVyCTXc40UIk3CiUaVu7de7d1IHU0gKS0kZOigjLJbt1Ej21lozIOi9aOUQAYu%2B5AH7GJfobN%2BZiLFWJsXYz0DihnOL6a4xRHiBAqLaWLSoRdfEFP9lgQOSTATBNhlHcJ9dKmwXjtUmJcSGkJLbsc9CAA5Q2aBUkX3SZkgenScnbNdLs72-iDnFOOackCoS64VNjtc5utynlZzqY3BpfsZavPeZ8y%2BPy7Rvg6SLAIWy1ojAMIII05Awp5CUCfUgIAwnhNADNI6Fw4CdE6NQUM00GrMraU8Yl80czGHKR7XpciBmOPqJZfoBgmoSDhCY-65LKXkhpSADqXUvL8mBH1UV-TZVuKURsks0LBWFxpZbRWpShSpFZey%2BUORJoIHaR9bJXSLneN1booZkrpWyvlYyRVpJlXUr1jLRZUBGTqs9JqrVOqXEDINes6KJrcnePIbLEA8tLUhP8jatlHKcihDgOAAwzr8UTjzijTGw4gA&config=JYWwDg9gTgLgBGKBTAzkmBhAyluAzKCEOAcgAEIAbdFAegFcA7CAYxRQFpFV0O2USAKEGhIsOAG84AEyR5gjJBgiN5AczgBffIWIkmrdkMFIAHmPiy8AQ3qVLchUpXqAFBMFwEyNDBQAuOABtbl9sLFcASgBdABpPOBQAC2gYFno-QIlNWLhaWjgALyRCFDgIDLgDfgA6WQA3WjBKawBPEjKrW3tElNh0vwSYKGtGFDxoEBKA4Li8guLS8srq9jqkRua2jpk5bvhh0fHJ6cFNSMEgA&css=FwJw9mAuAEDeBQ1oFpkGMwBswmZglgHYDWw0ARpgK4CmA3PAL7zwCGci0kNAHpMgBMaGEK0j4whMlUJCQBQvU7c%2Bg4TjETC6LDjIA3ViAAUqDNlwLiASgZJIowgGd84yYKqi3U6ACYADP4Atk52XI4u3sgADuDRNCCQAJ5k5jhcvPxCIpruaSAMnABkwABmYGhUTgA0xcAAFmD6CRxISPkGRqY6FnhENmH2mWo5UR3hrM7RRjSEkGHMzPD1vq3Q5XPILgBeNGQB0TwMS07C3mvTAgJEAOb7-odhAHzQ1-prSEFGN0R4NKWQe6PThIF4AKg%2BbS%2BIB%2B2kgYGiQKOIOgzCQixYVEwawITn4eKSmD2r3wTjQ0CILiEx3gQA&options=N4IgLgTghgdgzgMwPYQLYGECucxIwZXxAC4EoAbOAUwBpxp5k0AJMVcksyqgXyA).
:::

## Layers

To put CSS rules in a layer block at-rule, write your CSS ruleset in the class attribute prefixed with the `@layer_<layer name>`.

`class="@layer_<layer name>{<property>:<value>}"`

:::tip
Unlike everywhere else with `unocss-preset-css`, underscores in `<layer name>` are _not_ replaced with spaces.
:::

:::warning
You have to tell UnoCSS to use CSS layers, by adding `outputToCssLayers: true` to your `uno.config.(j|t)s` configuration.
:::

**Input**

```html
<div class="@layer_stuff{color:red}">
  This is red
</div>
```

```ts [uno.config.(j|t)s]
// …
export default defineConfig({
  outputToCssLayers: true,
  // …
})
```

**Output**

- Front end

    <div class="@layer_stuff{color:red}">
      This is red
    </div>

- CSS

    ```css
    @layer stuff {
      .\@layer_stuff\{color\:red\} {
        color: red;
      }
    }
    ```

You can use multiple layers, and control their order in the cascade.

⚠️ `unocss-preset-css` does not support statement at-rules. Notably this means you can't write a class name to generate `@layer stuff, other;`. Instead, use UnoCSS's `layer` config field ([docs](https://unocss.dev/config/layers)).

**Input**

```html
<div class="@layer_other{color:red} @layer_stuff{color:blue}">
  This is red
</div>
```

```ts [uno.config.(j|t)s]
// …
export default defineConfig({
  layers: {
    other: 2,
    stuff: 1,
  },
  outputToCssLayers: true,
  // …
})
```

**Output**

- Front end

    <div class="@layer_other{color:red} @layer_stuff{color:blue}">
      This is red
    </div>

- CSS

    :::tip
    Notice that UnoCSS does not generate a `@layer` statement at-rule. Instead, it puts each layers' styles in a single `@layer` block at-rule, and orders those blocks according to the `layers` config.
    
    If you have additional CSS not generated by UnoCSS (for example CSS in a separate stylesheet), make sure it comes _after_ the UnoCSS-generated CSS to guarantee the UnoCSS-configured layer order is respected.

    Alternatively, add an `@layer` statement at-rule before the UnoCSS-generated styles.
    :::

    ```css
    @layer stuff {
      .\@layer_stuff\{color\:blue\} {
        color:blue;
      }
    }

    @layer other {
      .\@layer_other\{color\:red\}{
        color:red;
      }
    }
    ```

## Everything else

To put CSS rules in another block at-rule, write your CSS ruleset in the class attribute prefixed with the at-rule.

`class="<at-rule>{<property>:<value>}"`

:::tip
Like everywhere else with `unocss-preset-css` _except for layer block at-rules_, underscores in `<at-rule>` are replaced with spaces. To use a literal underscore, escape it with a backslash (`\`).
Like everywhere else with `unocss-preset-css` _except for layer block at-rules_, underscores in `<at-rule>` are replaced with spaces. To use a literal underscore, escape it with a backslash (`\`).
:::

**Input**

```html
<div class="@media(width<768px){color:red}">
  Red on windows narrower than 768px.
</div>

<div class="@media(width>=768px){color:red}">
  Red on windows 768px wide or wider.
</div>
```

**Output**

- Front end

    <div class="@media(width<768px){color:red}">
      Red on windows narrower than 768px.
    </div>

    <div class="@media(width>=768px){color:red}">
      Red on windows 768px wide or wider.
    </div>

- CSS

    ```css
    @media (width < 768px) {
      .\@media\(width\<768px\)\{color\:red\} {
        color: red;
      }
    }

    @media (width >= 768px) {
      .\@media\(width\>\=768px\)\{color\:red\} {
        color: red;
      }
    }
    ```

## Multiple at-rules

### Layer + arbitrary

To combine a layer block at-rule and an arbitrary block at-rule, string the class name prefixes together:

`@layer_<layer name><at-rule>{<property>:<value>}` or `<at-rule>@layer_<layer name>{<property>:<value>}`.

Here's an example of supporting aspect-ratio in Safari 13 and 14 (read [
Adding Safari 14 Support To Tailwind's Aspect Ratio](https://www.olets.dev/posts/adding-safari-14-support-to-tailwinds-aspect-ratio/) for more info) with inline `class` CSS.

**Input**

```html
<div
  class="
    {aspect-ratio:1_/_1}
    {border:1px_solid_red}
    {width:4rem}
    @layer_safari-14@supports_not_(aspect-ratio:1_/_1)[&::before]{content:.,float:left.,padding-top:calc(100%)}
    @layer_safari-14@supports_not_(aspect-ratio:1_/_1)[&::after]{clear:left.,content.,display:block}
  "></div>
```

**Output**

- Front end

    <div class="{aspect-ratio:1_/_1} {border:1px_solid_red} {width:4rem} @layer_safari-14@supports_not_(aspect-ratio:1_/_1)[&::before]{content:.,float:left.,padding-top:calc(100%)} @layer_safari-14@supports_not_(aspect-ratio:1_/_1)[&::after]{clear:left.,content.,display:block}"></div>

- CSS

    ```css
    @media (width < 768px) {
      .\@media\(width\<768px\)\{color\:red\} {
        color: red;
      }
    }

    @media (width >= 768px) {
      .\@media\(width\>\=768px\)\{color\:red\} {
        color: red;
      }
    }
    ```

### Arbitrary + arbitrary

:::danger
`unocss-preset-css` does not support combining multiple arbitrary at-rule blocks in a single class.
:::

You might be able to use a wrapping element.


**Input**

```html
<div class="{display:none} @supports(-webkit-hyphens:none){display:block}">
  <div class="@media(width<768px){color:red}">
    Red on windows narrower than 768px. Safari.
  </div>

  <div class="@media(width>=768px){color:red}">
    Red on windows 768px wide or wider. Safari.
  </div>
</div>

<div class="{display:none} @supports_not_(-webkit-hyphens:none){display:block}">
  <div class="@media(width<768px){color:red}">
    Red on windows narrower than 768px. Not Safari.
  </div>

  <div class="@media(width>=768px){color:red}">
    Red on windows 768px wide or wider. Not Safari.
  </div>
</div>
```

**Output**

- Front end

    <div class="{display:none} @supports(-webkit-hyphens:none){display:block}">
    <div class="@media(width<768px){color:red}">
      Red on windows narrower than 768px. Safari.
    </div>

    <div class="@media(width>=768px){color:red}">
      Red on windows 768px wide or wider. Safari.
    </div>
    </div>

    <div class="{display:none} @supports_not_(-webkit-hyphens:none){display:block}">
    <div class="@media(width<768px){color:red}">
      Red on windows narrower than 768px. Not Safari.
    </div>

    <div class="@media(width>=768px){color:red}">
      Red on windows 768px wide or wider. Not Safari.
    </div>
    </div>

- CSS

    ```css
    .\{display\:none\} {
      display: none;
    }

    @media (width < 768px) {
      .\@media\(width\<768px\)\{color\:red\}{
        color: red;
      }
    }

    @media (width >= 768px) {
      .\@media\(width\>\=768px\)\{color\:red\}{
        color: red;
      }
    }

    @supports not (-webkit-hyphens:none) {
      .\@supports_not_\(-webkit-hyphens\:none\)\{display\:block\}{
        display: block;
      }
    }

    @supports(-webkit-hyphens:none) {
      .\@supports\(-webkit-hyphens\:none\)\{display\:block\}{
        display: block;
      }
    }
    ```

### Layer + layer

:::danger
`unocss-preset-css` does not support combining multiple layer at-rule blocks in a single class.
:::

You might be able to use a wrapper element. I'm not sure what it would mean, but maybe there's some interesting use case.

**Input**

```html
<details id="doubled-layers">
  <summary>Toggle me</summary>
</details>

<div class="{display:none} [body:has(#doubled-layers[open])_&]{display:block}">
  <div class="@layer_stuff{color:red}">
    Toggle is open
  </div>
</div>

<div class="{display:none} [body:has(#doubled-layers:not([open]))_&]{display:block}">
  <div class="@layer_stuff{color:red}">
    Toggle is closed
  </div>
</div>
```

```ts [uno.config.(j|t)s]
// …
export default defineConfig({
  layers: {
    other: 2,
    stuff: 1,
  },
  outputToCssLayers: true,
  // …
})
```

**Output**

- Front end

    <details id="doubled-layers">
      <summary>Toggle me</summary>
    </details>

    <div class="{display:none} @layer_other[body:has(#doubled-layers[open])_&]{display:block}">
      <div class="@layer_stuff{color:red}">
        Toggle is open
      </div>
    </div>

    <div class="{display:none} @layer_other[body:has(#doubled-layers:not([open]))_&]{display:block}">
      <div class="@layer_stuff{color:red}">
        Toggle is closed
      </div>
    </div>

- CSS

    ```css
    @layer default {
      .\{display\:none\} {
        display: none;
      }
    }

    @layer stuff {
      .\@layer_stuff\{color\:red\} {
        color: red;
      }
    }

    @layer other{
      .\@layer_other\[body\:has\(\#doubled-layers\:not\(\[open\]\)\)_\&\]\{display\:block\} {
        body:has(#doubled-layers:not([open])) & {
          display: block;
        }
      }

      .\@layer_other\[body\:has\(\#doubled-layers\[open\]\)_\&\]\{display\:block\} {
        body:has(#doubled-layers[open]) & {
          display: block;
        }
      }
    }
    ```
