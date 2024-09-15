# [1.0.0](https://github.com/olets/unocss-preset-css/compare/v1.0.0-beta.1...v1.0.0) (2024-09-14)

Fix docs site deploy, revise docs, add external REPL links.


# [1.0.0-beta.1](https://github.com/olets/unocss-preset-css/compare/fd8a3db688e235799a1d3f007110669444fbda40...v1.0.0-beta.1) (2024-09-15)


### Bug Fixes

* **build:** get it to build as _unocss_core.PresetFactory<object, PresetCSSOptions>... ([cccc5c8](https://github.com/olets/unocss-preset-css/commit/cccc5c80a4bd3536bde0b0be67bc58d6670f9e2b))
* **layer variant:** do not replace underscores with spaces ([1b414fa](https://github.com/olets/unocss-preset-css/commit/1b414fa1eb9d3a2b57013fc9afce73d56118c452))
* **preset>variantAppendedSelector:** nested selector starts with & ([174a06d](https://github.com/olets/unocss-preset-css/commit/174a06de264585308098a01685f200e0736a4a8c))
* **style rule:** extract class names including curly brackets... ([cd86abe](https://github.com/olets/unocss-preset-css/commit/cd86abe02f6264d2e20d37eff1e905fef37b1fe0))
* **variants:** export correctly. fixes all tests ([b1d1586](https://github.com/olets/unocss-preset-css/commit/b1d15868354e4b0da09e5d8613991552cd69f551))


### Features

* **build:** configure. add unbuild dependency... ([7674558](https://github.com/olets/unocss-preset-css/commit/7674558c0786dfaf9fea329559764ed6f51678da))
* **build:** minify ([b8c2eb4](https://github.com/olets/unocss-preset-css/commit/b8c2eb4e9571e66a1abf263a3731b462d720647a))
* bump preset to 1.0.0-beta.1 ([b236ef4](https://github.com/olets/unocss-preset-css/commit/b236ef481e72cc57a8047c0aa16a9079611ce7ae))
* **bun:** init ([1d0ed9a](https://github.com/olets/unocss-preset-css/commit/1d0ed9afb4cebfca11f7b2b72f260c0edaa8c583))
* **code of conduct:** add ([4e1dd33](https://github.com/olets/unocss-preset-css/commit/4e1dd33121a6a412caba9ac667e8fef095d2e157))
* **dependencies:** add @unocss/core, @unocss/rule-utils... ([42d9e7a](https://github.com/olets/unocss-preset-css/commit/42d9e7af8e109d23034b85320be729f71a200891))
* **docs>favicon, splash card:** add ([4e4d974](https://github.com/olets/unocss-preset-css/commit/4e4d974421ae23cb7b882975e0426d3062b2cb6d))
* **docs>title:** drop scope ([0627150](https://github.com/olets/unocss-preset-css/commit/0627150eb5ca3bf7fe69cd844bb5b25ba87fec15))
* **docs:** add and configure @olets/unocss-preset-css... ([d3259d7](https://github.com/olets/unocss-preset-css/commit/d3259d7a2977ec446c5f02936902adfa8c326393))
* **docs:** first full version ([8b8c3d4](https://github.com/olets/unocss-preset-css/commit/8b8c3d4323b3ff57aee1f9014b68abf9ba1c6a2b))
* **docs:** gitignore dist directory ([1b81fa2](https://github.com/olets/unocss-preset-css/commit/1b81fa2ab04ed97a74adc51dd8a0c5a6cc6e3c61))
* **docs:** scaffold package... ([7068074](https://github.com/olets/unocss-preset-css/commit/706807462ffdc703ab195c4c1ba8e1880a8dbf1a))
* **docs:** use my standard vitepress setup (has todos) ([331b66e](https://github.com/olets/unocss-preset-css/commit/331b66ee889b7ab41f2f347302e8c113d4cadd8b))
* **git:** minimal gitignore ([2d6511f](https://github.com/olets/unocss-preset-css/commit/2d6511faf128e73b3e09485d2daf007e98db18cf))
* **layer:** use CSS layers. refactors rule into rule + variants... ([a22c7df](https://github.com/olets/unocss-preset-css/commit/a22c7dff096103039c0632efbf54f4a3b5cda4ec))
* **license:** add ([fd8a3db](https://github.com/olets/unocss-preset-css/commit/fd8a3db688e235799a1d3f007110669444fbda40))
* **preset>at-rule + selector variants:** preserve escaped underscores ([9669d1f](https://github.com/olets/unocss-preset-css/commit/9669d1fb930301e6ccda1624210b340c03c4c902))
* **preset>package.json:** remove cruft... ([7e6c4bd](https://github.com/olets/unocss-preset-css/commit/7e6c4bd88541e928f0207da9f6cb555390094350))
* **preset>style rule:** preserve escaped underscores ([e7dbd31](https://github.com/olets/unocss-preset-css/commit/e7dbd31bf016dfed6d2780abe85b614cedbc838a))
* **preset:** add typechecking script 'check' ([5d1e5a3](https://github.com/olets/unocss-preset-css/commit/5d1e5a3f6e84b7bff837c12c397a5a4359813ed9))
* **preset:** use package imports... ([e602764](https://github.com/olets/unocss-preset-css/commit/e60276497f510b8cb4ea8434e21203ff9baa13ef))
* **repl:** add package ([3daddbe](https://github.com/olets/unocss-preset-css/commit/3daddbe3c297c8be8a69abfe64aafd17a4cf2dcb))
* restructure as monorepo ([c7db7ca](https://github.com/olets/unocss-preset-css/commit/c7db7ca84a1bf06ff19c4782090e7d54672ad8aa))
* **rules:** first pass. supports parent, style, and sorta layer ([2e60df7](https://github.com/olets/unocss-preset-css/commit/2e60df7ba9b1baa857a4b07799f5d6b4c548777a))
* **selector variants:** generated css uses nesting... ([3d4eae0](https://github.com/olets/unocss-preset-css/commit/3d4eae07a7a295f026ffde95e938cebded6700e4))
* **variants:** add appended-selector, a shorthand for arbitrary [&…] ([2cc794e](https://github.com/olets/unocss-preset-css/commit/2cc794e1161cb1bbd7ed5d04984ac7785958a8d2))
* **version:** bump to 1.0.0-alpha.2 ([fc7d5e5](https://github.com/olets/unocss-preset-css/commit/fc7d5e5f8f4eea28623c3ecd5194696ea14f4428))
* **version:** bump to 1.0.0-alpha.3 ([f205582](https://github.com/olets/unocss-preset-css/commit/f205582ad53ad3972bf3d5d389efb5270c747244))
* **version:** bump to 1.0.0-alpha.5 ([823b1a5](https://github.com/olets/unocss-preset-css/commit/823b1a5590b420c078502151e9ced8e7a06b6d22))


### Performance Improvements

* **preset:** imported 3rd party packages are dependencies not dev... ([9fcfa48](https://github.com/olets/unocss-preset-css/commit/9fcfa48f882cc3fc9ffc84e8e20fc38c687842b9))



# [1.0.0-beta.1](https://github.com/olets/unocss-preset-css/compare/fd8a3db688e235799a1d3f007110669444fbda40...v1.0.0-beta.1) (2024-09-14)

Things are working. Follows several un-tagged alphas.
