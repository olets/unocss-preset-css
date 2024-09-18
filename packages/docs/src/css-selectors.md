# CSS selectors

In vanilla CSS, it's not possible to select a _different_ element via the `class` or `style` attribute. You can't `class=":hover…"` or `style="::before…"`, let alone `class=">li:first-child…"` or `style="body:has(&[open]) & + & li:first-child…"`.

Bring in some additional tooling —for example Tailwind CSS, Windi CSS, or in this case UnoCSS— and you can do any of that.

:::tip
As always with `unocss-preset-css`, the ruleset can have more than one rule (docs: [CSS rulesets > Multiple CSS declarations](./css-rulesets.md#multiple-css-declarations)) and/or block at-rules (docs: [CSS block at-rules](./css-at-rules.md)) and/or customized selectors. For the sake of legibility, the examples on this page use single-rule rulesets with no at-rules.

👀 You can experiment with all of these examples in [this UnoCSS Play](https://unocss.dev/play/?version=0.62.4&html=DwZwpgxgLglg9gOwHwCgAEbgAsBMSDCAyoWgE4CuANmOFCMAPS6rqYCGaWpYAZgLwAiLFCgAHEAC4GDcgjgQQIALSjutJQpAA6ONTpaAJmABuDTUorVa24QFtKApABF59BmxYZgBmMdQYvH2M0CEo2RUEAbwhdOFIJbgMAX0cAFSwYEDRMsjADLUYgzwDvXxCwiIFo2PjEpLRInkQoJQB3MBgAc2EJACNdZLSMrJzEtDYEAzR%2BynzC32LAstDwkCiYyjiEvK0AGiaEFvaunpnBpHSc0bzxyemBgoYilFYl4JXKyP7SI3iARlEAA8APogXQwAzAupDHJYcLjXJTb6-eZ%2BF4BTBBcqrKK9NgQADWnVIcFkBiUMFsbE6YAk5FIlAAFJTqWAADrAv5aNjGGA8ACUKX8GLQAEkECBRJAoGhbGA0FA4CFEDwYKRbAq4TKoMNMGBbEgDHAaIx9Ug0K04gStK9ME8FuiSliPmsqjFDmBDhI2L0IELbRhxZLpbL5YrlQhVerNWxtbrgGajSaGGaLVabRjUYtMcsKq7qh6vf6RWKJVLoKGFUr3VGNTrY5qcgmDUm3KnLaRrbas6we4xwNB4MgXqBpUPhdg8EQSOBqNA4m5mI7gBwuLxBMIxJJpLJXMpVDQwC1NDo9NojKZzLPpQutHYHM5XIwPMvnpneuQRIhsZUJE0IOQIDVJstR5MWIqXFkH5fgg2RZHIMqhDAhI%2BtQWhoAA6lgnpoP%2BgF5Ls2R0AqYCAjK1z5N2DDQYqw7ds6eaCBIfS8HEYAFlAnpQBIbI4AA7GwbDgRikFwWgB6qoCNytDAOoItQPAtCAcJGFMrQZJxZAnFArRsD8WR6SSrRUc83ZUD%2BroANoAGRIJQMASIcWAaBksyMiYnr8gAusBWzQsKmb2Rcuo5L0YSEo8QUBpgQWiRRkUwAFJSxSFUHhdajBRSWwApVcWSJAlSWMFQ2beEebAwJQIBJV4IDkLYVKkAAnhZgiWZZcBSggXlINZPkbH5YGOAAStJ2GwZ1nr9vVjVNdmGBOOVlUgCZS1VaVWIQoIExKHpvSyaQelNUoYDUHKhyONFcVpfi1qYJKEzBXliKPA9w6ZvaaL0bmOICJZADEO17QdR0nWdXGgqIEz9TU2znD2Xifag-ZjogLCjoOaO9sw07jC0ljJkuvartw-BCCI4hSDIcjmAe6gnroR7niYZiKLt%2BNUDQd5QPYjguAoz7FKUaKZgxv0AAJhE1YCkKCUDkDwPC%2BaB5zXYiPbfe8jECJLbDS7LcA6jLytw-Uuv63LCtKwN8RheQYDCQEauJCZDqa61Otyj4bCMjJBg6sAfEAGwABxAvyJv%2BdFo1TN%2BMmTHArTwYZicyzGsHB2HgIZiUSOOm8Hvi17MA%2B37OpIHwmfh5HQ01WgMdoHHMAJ0naBV4CFoQvKcSd78OeI6Zou%2BNFLpROE5b47G8ASH8wIMJy9RfHEvwz0CoLgpCdQNGXWASAALNwthm1LMugmwPB6TASh-Hv4t1aIohxHQwIIcCjLj9KFhT3AM9z5y-I2WYr0Vi3AYaFm4nsHgmxYwSAUlAPYUMDA%2BAQJ0JQipRASAgGwSgEBGR-AAAz4IAKSCjQObU%2BIBz6X2vrfe%2Bj9SDP1fu-YM0Av6wB-rPeefwAHWWYufTipB%2BrUD0rA3g8Ddjuk4ocPYPhJRSz6JsQkKRbRIA1kPLWv1IiyNEPIuQCAHZkLoU-EAjI2hgF6ASWSSgsBNVEONSQeiwAR20fIsK8gCSOwLqPT2eQS6%2BwhAHduEcbam0uiWDADcm4t2TqQIyad6wZ1DkCdChAqGkBgP3XOg8RTC0LsXUuASsAVyCTXc40UIk3CiUaVu7de7d1IHU0gKS0kZOigjLJbt1Ej21lozIOi9aOUQAYu%2B5AH7GJfobN%2BZiLFWJsXYz0DihnOL6a4xRHiBAqLaWLSoRdfEFP9lgQOSTATBNhlHcJ9dKmwXjtUmJcSGkJLbsc9CAA5Q2aBUkX3SZkgenScnbNdLs72-iDnFOOackCoS64VNjtc5utynlZzqY3BpfsZavPeZ8y%2BPy7Rvg6SLAIWy1ojAMIII05Awp5CUCfUgIAwnhNADNI6Fw4CdE6NQUM00GrMraU8Yl80czGHKR7XpciBmOPqJZfoBgmoSDhCY-65LKXkhpSADqXUvL8mBH1UV-TZVuKURsks0LBWFxpZbRWpShSpFZey%2BUORJoIHaR9bJXSLneN1booZkrpWyvlYyRVpJlXUr1jLRZUBGTqs9JqrVOqXEDINes6KJrcnePIbLEA8tLUhP8jatlHKcihDgOAAwzr8UTjzijTGw4gA&config=JYWwDg9gTgLgBGKBTAzkmBhAyluAzKCEOAcgAEIAbdFAegFcA7CAYxRQFpFV0O2USAKEGhIsOAG84AEyR5gjJBgiN5AczgBffIWIkmrdkMFIAHmPiy8AQ3qVLchUpXqAFBMFwEyNDBQAuOABtbl9sLFcASgBdABpPOBQAC2gYFno-QIlNWLhaWjgALyRCFDgIDLgDfgA6WQA3WjBKawBPEjKrW3tElNh0vwSYKGtGFDxoEBKA4Li8guLS8srq9jqkRua2jpk5bvhh0fHJ6cFNSMEgA&css=FwJw9mAuAEDeBQ1oFpkGMwBswmZglgHYDWw0ARpgK4CmA3PAL7zwCGci0kNAHpMgBMaGEK0j4whMlUJCQBQvU7c%2Bg4TjETC6LDjIA3ViAAUqDNlwLiASgZJIowgGd84yYKqi3U6ACYADP4Atk52XI4u3sgADuDRNCCQAJ5k5jhcvPxCIpruaSAMnABkwABmYGhUTgA0xcAAFmD6CRxISPkGRqY6FnhENmH2mWo5UR3hrM7RRjSEkGHMzPD1vq3Q5XPILgBeNGQB0TwMS07C3mvTAgJEAOb7-odhAHzQ1-prSEFGN0R4NKWQe6PThIF4AKg%2BbS%2BIB%2B2kgYGiQKOIOgzCQixYVEwawITn4eKSmD2r3wTjQ0CILiEx3gQA&options=N4IgLgTghgdgzgMwPYQLYGECucxIwZXxAC4EoAbOAUwBpxp5k0AJMVcksyqgXyA).
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
