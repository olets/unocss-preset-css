# unocss-preset-css ![GitHub release (latest by date)](https://img.shields.io/github/v/release/olets/unocss-preset-css) ![GitHub commits since latest release](https://img.shields.io/github/commits-since/olets/unocss-preset-css/latest)


**unocss-preset-css** is a front-end tool which unlocks writing something very close to vanilla CSS directly in the `class` attribute. Style any element from any other element, styling `::before` and `::after` directly on their originating element, and using CSS at-rules without breaking to a `<style>` tag, all without learning new syntax.

It's like Tailwind CSS, or Windi CSS, or any other CSS DOM API, but with the minimum of tool-specific idioms.

Want `{ color: currentColor }`? That's `class="{color:currentColor}"`, not `class="text-current"`".

Want `{ line-height: 2 }`? That's `class="{line-height:2}"`, not `class="leading-loose"`.

## Who is unocss-preset-css for?

- Adventurous fans of writing CSS via a `class` DOM API interested in trying out patterns other than Tailwind's, in the search for the next evolutionary step.
- People wondering what UnoCSS is all about. [^1]
- People who like or are at least intrigued by the idea of writing CSS via a `class` attribute DOM API but are turned off by Tailwind's (and then Windi's) inconsistent and overloaded renaming of CSS properties.
- People who don't have to try Tailwind to know that they hate it but wouldn't mind something new to casually bad mouth, probably.

&nbsp;

## Documentation

📖 <https://unocss-preset-css.olets.dev>

## Demo

👀 <https://stackblitz.com/edit/unocss-preset-css-repl>

Or run the REPL locally: clone or download this repo, and run the `repl` package's `dev` script.

&nbsp;

## Changelog

See the [CHANGELOG](https://github.com/olets/unocss-preset-css/blob/main/CHANGELOG.md) file.

## Contributing

Thanks for your interest. Contributions are welcome!

> Please note that this project is released with a [Contributor Code of Conduct](https://github.com/olets/unocss-preset-css/blob/main/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Check the [Issues](https://github.com/olets/unocss-preset-css/issues) to see if your topic has been discussed before or if it is being worked on.

Please read [CONTRIBUTING.md](https://github.com/olets/unocss-preset-css/blob/main/CONTRIBUTING.md) before opening a pull request.

## License

<a href="https://www.github.com/olets/unocss-preset-css">unocss-preset-css</a> by <a href="https://www.github.com/olets">Henry Bley-Vroman</a> is licensed under a license which is the unmodified text of <a href="https://creativecommons.org/licenses/by-nc-sa/4.0">CC BY-NC-SA 4.0</a> and the unmodified text of a <a href="https://firstdonoharm.dev/build?modules=eco,extr,media,mil,sv,usta">Hippocratic License 3</a>. It is not affiliated with Creative Commons or the Organization for Ethical Source.

Human-readable summary of (and not a substitute for) the [LICENSE](LICENSE) file:

You are free to

- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

Under the following terms

- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- Non-commercial — You may not use the material for commercial purposes.
- Ethics - You must abide by the ethical standards specified in the Hippocratic License 3 with Ecocide, Extractive Industries, US Tariff Act, Mass Surveillance, Military Activities, and Media modules.
- Preserve terms — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
- No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.
