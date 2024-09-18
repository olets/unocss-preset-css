# CSS rulesets

:::tip
As always with `unocss-preset-css`, the ruleset can have more than one rule (docs: [CSS rulesets > Multiple CSS declarations](./css-rulesets.md#multiple-css-declarations)) and/or block at-rules (docs: [CSS block at-rules](./css-at-rules.md)) and/or customized selectors. For the sake of legibility, the examples on this page have no custom selectors or at-rules.

👀 You can experiment with all of these examples in [this UnoCSS Play](https://unocss.dev/play/?version=0.62.4&html=DwZwpgxgLglg9gOwHwCgAEbgAsBMSDCAyoWgE4CuANmOFCMAPS6rqYCGaWpYAZgLwAiLFCgAHEAC4GDcgjgQQIALSjutJQpAA6ONTpaAJmABuDTUorVa24QFtKApABF59BmxYZgBmMdQYvH2M0CEo2RUEAbwhdOFIJbgMAX0cAFSwYEDRMsjADLUYgzwDvXxCwiIFo2PjEpLRInkQoJQB3MBgAc2EJACNdZLSMrJzEtDYEAzR%2BynzC32LAstDwkCiYyjiEvK0AGiaEFvaunpnBpHSc0bzxyemBgoYilFYl4JXKyP7SI3iARlEAA8APogXQwAzAupDHJYcLjXJTb6-eZ%2BF4BTBBcqrKK9NgQADWnVIcFkBiUMFsbE6YAk5FIlAAFJTqWAADrAv5aNjGGA8ACUKX8GLQAEkECBRJAoGhbGA0FA4CFEDwYKRbAq4TKoMNMGBbEgDHAaIx9Ug0K04gStK9ME8FuiSliPmsqjFDmBDhI2L0IELbRhxZLpbL5YrlQhVerNWxtbrgGajSaGGaLVabRjUYtMcsKq7qh6vf6RWKJVLoKGFUr3VGNTrY5qcgmDUm3KnLaRrbas6we4xwNB4MgXqBpUPhdg8EQSOBqNA4m5mI7gBwuLxBMIxJJpLJXMpVDQwC1NDo9NojKZzLPpQutHYHM5XIwPMvnpneuQRIhsZUJE0IOQIDVJstR5MWIqXFkH5fgg2RZHIMqhDAhI%2BtQWhoAA6lgnpoP%2BgF5Ls2R0AqYCAjK1z5N2DDQYqw7ds6eaCBIfS8HEYAFlAnpQBIbI4AA7GwbDgRikFwWgB6qoCNytDAOoItQPAtCAcJGFMrQZJxZAnFArRsD8WR6SSrRUc83ZUD%2BroANoAGRIJQMASIcWAaBksyMiYnr8gAusBWzQsKmb2Rcuo5L0YSEo8QUBpgQWiRRkUwAFJSxSFUHhdajBRSWwApVcWSJAlSWMFQ2beEebAwJQIBJV4IDkLYVKkAAnhZgiWZZcBSggXlINZPkbH5YGOAAStJ2GwZ1nr9vVjVNdmGBOOVlUgCZS1VaVWIQoIExKHpvSyaQelNUoYDUHKhyONFcVpfi1qYJKEzBXliKPA9w6ZvaaL0bmOICJZADEO17QdR0nWdXGgqIEz9TU2znD2Xifag-ZjogLCjoOaO9sw07jC0ljJkuvartw-BCCI4hSDIcjmAe6gnroR7niYZiKLt%2BNUDQd5QPYjguAoz7FKUaKZgxv0AAJhE1YCkKCUDkDwPC%2BaB5zXYiPbfe8jECJLbDS7LcA6jLytw-Uuv63LCtKwN8RheQYDCQEauJCZDqa61Otyj4bCMjJBg6sAfEAGwABxAvyJv%2BdFo1TN%2BMmTHArTwYZicyzGsHB2HgIZiUSOOm8Hvi17MA%2B37OpIHwmfh5HQ01WgMdoHHMAJ0naBV4CFoQvKcSd78OeI6Zou%2BNFLpROE5b47G8ASH8wIMJy9RfHEvwz0CoLgpCdQNGXWASAALNwthm1LMugmwPB6TASh-Hv4t1aIohxHQwIIcCjLj9KFhT3AM9z5y-I2WYr0Vi3AYaFm4nsHgmxYwSAUlAPYUMDA%2BAQJ0JQipRASAgGwSgEBGR-AAAz4IAKSCjQObU%2BIBz6X2vrfe%2Bj9SDP1fu-YM0Av6wB-rPeefwAHWWYufTipB%2BrUD0rA3g8Ddjuk4ocPYPhJRSz6JsQkKRbRIA1kPLWv1IiyNEPIuQCAHZkLoU-EAjI2hgF6ASWSSgsBNVEONSQeiwAR20fIsK8gCSOwLqPT2eQS6%2BwhAHduEcbam0uiWDADcm4t2TqQIyad6wZ1DkCdChAqGkBgP3XOg8RTC0LsXUuASsAVyCTXc40UIk3CiUaVu7de7d1IHU0gKS0kZOigjLJbt1Ej21lozIOi9aOUQAYu%2B5AH7GJfobN%2BZiLFWJsXYz0DihnOL6a4xRHiBAqLaWLSoRdfEFP9lgQOSTATBNhlHcJ9dKmwXjtUmJcSGkJLbsc9CAA5Q2aBUkX3SZkgenScnbNdLs72-iDnFOOackCoS64VNjtc5utynlZzqY3BpfsZavPeZ8y%2BPy7Rvg6SLAIWy1ojAMIII05Awp5CUCfUgIAwnhNADNI6Fw4CdE6NQUM00GrMraU8Yl80czGHKR7XpciBmOPqJZfoBgmoSDhCY-65LKXkhpSADqXUvL8mBH1UV-TZVuKURsks0LBWFxpZbRWpShSpFZey%2BUORJoIHaR9bJXSLneN1booZkrpWyvlYyRVpJlXUr1jLRZUBGTqs9JqrVOqXEDINes6KJrcnePIbLEA8tLUhP8jatlHKcihDgOAAwzr8UTjzijTGw4gA&config=JYWwDg9gTgLgBGKBTAzkmBhAyluAzKCEOAcgAEIAbdFAegFcA7CAYxRQFpFV0O2USAKEGhIsOAG84AEyR5gjJBgiN5AczgBffIWIkmrdkMFIAHmPiy8AQ3qVLchUpXqAFBMFwEyNDBQAuOABtbl9sLFcASgBdABpPOBQAC2gYFno-QIlNWLhaWjgALyRCFDgIDLgDfgA6WQA3WjBKawBPEjKrW3tElNh0vwSYKGtGFDxoEBKA4Li8guLS8srq9jqkRua2jpk5bvhh0fHJ6cFNSMEgA&css=FwJw9mAuAEDeBQ1oFpkGMwBswmZglgHYDWw0ARpgK4CmA3PAL7zwCGci0kNAHpMgBMaGEK0j4whMlUJCQBQvU7c%2Bg4TjETC6LDjIA3ViAAUqDNlwLiASgZJIowgGd84yYKqi3U6ACYADP4Atk52XI4u3sgADuDRNCCQAJ5k5jhcvPxCIpruaSAMnABkwABmYGhUTgA0xcAAFmD6CRxISPkGRqY6FnhENmH2mWo5UR3hrM7RRjSEkGHMzPD1vq3Q5XPILgBeNGQB0TwMS07C3mvTAgJEAOb7-odhAHzQ1-prSEFGN0R4NKWQe6PThIF4AKg%2BbS%2BIB%2B2kgYGiQKOIOgzCQixYVEwawITn4eKSmD2r3wTjQ0CILiEx3gQA&options=N4IgLgTghgdgzgMwPYQLYGECucxIwZXxAC4EoAbOAUwBpxp5k0AJMVcksyqgXyA).
:::

## Single CSS declarations

You want the CSS declaration `color: red` on an element? Write the ruleset as the class name: `class="{<property>:<value>}"`.

**Input**

```html
<div class="{color:red}">
  This is red.
</div>
```

**Output**

- Front end

    <div class="{color:red}">
      This is red.
    </div>

- CSS

    ```css
    .\{color\:red\} {
      color: red
    }
    ```

## Multiple CSS declarations

You want several CSS declarations on an element? You have two options:

1. 🥇 Preferred: use multiple classes.

    :::tip Why "preferred"?
    This is preferable for the CSS bloat-preventing reasons that apply to any "atomic"/"primitive"/"utility" class-focused framework. Provided you stay within a consistent design system, the built CSS will stabilize on a project-specific set of single purpose classes.
    :::

    **Input**

    ```html
    <div class="{color:red} {font-weight:bold}">
      This is red and bold.
    </div>
    ```

    **Output**

    - Front end

        <div class="{color:red} {font-weight:bold}">
          This is red and bold.
        </div>

    - CSS

        ```css
        .\{color\:red\} {
          color: red;
        }

        .\{font-weight\:bold\} {
          font-weight: bold;
        }
        ```

1. 🥈 Write the full ruleset as the class name… ish.

    :::warning Deviation from CSS
    Within each ruleset, you must use a `.,` to separate each declaration from the next one. (Think sideways emoticons, like `:)`. This is necessary to work around a limitation in UnoCSS's parsing.)
    :::

    **Input**

    ```html
    <div class="{color:red.,font-weight:bold}">
      This is red and bold.
    </div>
    ```

    **Output**

    - Front end

        <div class="{color:red.,font-weight:bold}">
          This is red and bold.
        </div>

    - CSS

        ```css
        .\{color\:red\.\,font-weight\:bold\} {
          color: red;
          font-weight: bold;
        }
        ```

## Special cases

### Spaces

Use underscores instead of spaces.

**Input**

```html
<!-- Don't -->
<div class="{border:1px solid red}">
  This does not have a red border
</div>

<!-- Do -->
<div class="{border:1px_solid_red}">
  This has a red border
</div>
```

**Output**

- Front end

    <div class="{border:1px solid red}">
      This does not have a red border
    </div>

    <div class="{border:1px_solid_red}">
      This has a red border
    </div>

- CSS

    ```css
    .\{border\:1px_solid_red\} {
      border: 1px solid red;
    }
    ```

### Underscores

Escape underscores to prevent them from being replaced with spaces (refer to above).

**Input**

```html
<!-- Don't -->
<div class="{background-image:url(image_1.avif)}">
  Inspect me to confirm that this does <em>not</em> work.
</div>

<!-- Do -->
<div class="{background-image:url(image\_1.avif)}">
  Inspect me to confirm that this <em>does</em> work.
</div>
```

**Output**

- Front end

    <div class="{background-image:url(image_1.avif)}">
      Inspect me to confirm that this does <em>not</em> work.
    </div>

    <div class="{background-image:url(image\_1.avif)}">
      Inspect me to confirm that this <em>does</em> work.
    </div>

- CSS

    ```css
    .\{background-image\:url\(image\\_1\.avif\)\} {
      background-image: url(image_1.avif);
    }
    ```

### `content` property

- Do not quote the value.

    **Input**

    ```html
    <!-- Don't -->
    <div class="{content:'abc'}">
      Inspect me to confirm that this does <em>not</em> work.
    </div>

    <!-- Do -->
    <div class="{content:abc}">
      Inspect me to confirm that this <em>does</em> work.
    </div>
    ```

    **Output**

    - Front end

        <div class="{content:'abc'}">
          Inspect me to confirm that this does <em>not</em> work.
        </div>

        <div class="{content:abc}">
          Inspect me to confirm that this <em>does</em> work.
        </div>

    - CSS

        ```css
        .\{content\:abc\} {
          content: "abc";
        }
        ```

- For the empty string, don't provide a value

    **Input**

    ```html
    <!-- Don't -->
    <div class="{content:''}">
      Inspect me to confirm that this does <em>not</em> work.
    </div>

    <!-- Do -->
    <div class="{content:}">
      Inspect me to confirm that this <em>does</em> work.
    </div>
    ```

    **Output**

    - Front end

        <div class="{content:''}">
          Inspect me to confirm that this does <em>not</em> work.
        </div>

        <div class="{content:}">
          Inspect me to confirm that this <em>does</em> work.
        </div>

    - CSS

        ```css
        .\{content\:\} {
          content: "";
        }
        ```
