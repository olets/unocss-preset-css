# CSS rulesets

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
