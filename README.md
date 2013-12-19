Sass Boilerplate for generic CSS/HTML
=============
goshazvir boilerplate. 
(taken as a basis [github.com/coderiver/sass/tree/master](//github.com/coderiver/sass/tree/master/))

I'm using this as a starting template for almost any project now.
It includes sprites, assorted mixins (aka code snippets), file structure, jquery+cycle+scrollto (most usable these days).
And, that's it.

You need to have Compass installed for it to work properly.

Structure
=============
`/sass/lib/base` - all the mixins and libs needed for us.

`/sass/lib/elements` - UI elements

`/sass/screen.sass` - agregates all .sass files.

`/sass/common.sass` - var, mixins for current project; fonts; 
base style for page (style for body, link, title, and misk)

`/sass/main.sass` - styles for the mainpage.

Icons
=============
naming icons and class identical `i-name`;

Naming blocks
=============
I use BEM naming, meaning `.block` for independent block. `.block__element` for elements inside that block. And `.block_modification` for modification of the block.

`layouts.sass` consists of all the columns-header-footer stuff, all with `.l-*` prefixes. So you know its layout.

States of the blocks use prefix `.is-*`. For example `.is-running`, `.is-hidden`, `.is-open`.

Hooks for js should use prefix `.js-*`.


Get the newest version here:

[github.com/goshazvir/sass/tree/master/](//github.com/goshazvir/sass/tree/master/)