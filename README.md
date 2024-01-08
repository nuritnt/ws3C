# ws3C

This is our semester project using HTML & CSS for our studies in computer science at FHNW for the module ws3C.
Visit https://aerostep.netlify.app/ for more information (Thanks netlify).

## Team Members
- Daniel Barber
- Saskia Bosshard
- Tamira Leber
- Tugce Nur Tas

## What is this project about
Our idea is to have a drone that follows you while running for analysing your running technique and physique.

## Development Intructions
This project uses SCSS for its styles. Please make sure to write all your styles in the 'style.scss' file only.

### Basic Compilation
To compile your SCSS file into a CSS file, run:
`sass scss/style.scss css/style.css`
This will output the compiled CSS into your existing css/ directory.

### Automated Watching
For ongoing development, use the --watch flag to automatically compile SCSS files when they change:
`sass --watch scss/style.scss:css/style.css`

### BEM Syntax
We will use BEM syntax for our styles. A BEM class name includes up to three parts.

- Block: The outermost parent element of the component is defined as the block.
- Element: Inside of the component may be one or more children called elements.
- Modifier: Either a block or element may have a variation signified by a modifier.

If all three are used in a name it would look something like this:
`[block]__[element]--[modifier]``