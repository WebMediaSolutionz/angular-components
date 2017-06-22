# Angular Components

This project contains a component library of UI components built using Angular (4).


## Using the Library

Using the component library in your Angular project is straightforward, but requires the following steps.


### Determine which version to install

If in doubt, use `master` or a specific tagged release. Avoid using non-release
branches in your project.


### Install the Package

In your project, run `npm install --save git+ssh://git@git.pehr.in/pulse/angular-components.git#${VERSION}`
replacing `${VERSION}` with the tag, branch, or refid to install.


### Import a theme
 
Our underlying library requires a theme to correctly render objects. Edit your project's
`angular-cli.json` and under `apps.styles` add an entry that reads:
`"../node_modules/@angular/material/prebuilt-themes/indigo-pink.css"`.

If your project isn't using Angular-CLI, edit the `index.html` directly and add the 
path above in a `<link href="..." rel="stylesheet">` tag inside the `<head>` element.


### Import the Component Module

In your app's `app.module.ts` file, `import { PulseComponentModule } from '@pulse/angular-components/src/lib/module';`
then include the `PulseComponentModule` in your `@NgModule({ imports: [ ... ]})` declaration.

You may instead import specific modules if you don't require the whole library by doing
something like `import { PcButtonModule } from '@pulse/angular-components/src/lib/button/index';`.


### Invoke a Component
 
Once imported into your module, the components should be available. Invoke them via tags in
your template, such as `app.component.html`: `<pc-button intent="primary">Save Patient</pc-button>`.



## Developing Components


### Check Out and Install

Check out and install the project locally using `git clone` then `npm install`.


### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files. If you
wish to run on a different port, pass the `--port ${PORTNUM}` argument to the 
`ng serve` command (i.e. if you're already running an applicaiton on port 4200).


### Linking via NPM

An ideal way to test the library is in a project that depends on it. Rather than 
having to continuously commit and redownload your branch to test it, use NPM's 
library linking instead.

To do this, first enter the component library project, then type `npm link`.

Now, in the project you wish to depend on the component library, type
`npm link @pulse/angular-components`. This will create a symlink in `node_modules`
linking to the checked out development copy of the component library, where any
changes you make will be reflected in your project.


### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can 
also use `ng generate directive/pipe/service/class/module`.


### Build

Run `ng build` to build the project. The build artifacts will be stored in t
he `dist/` directory. Use the `-prod` flag for a production build.


### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


### Further help

To get more help on the Angular CLI use `ng help` or go check out the 
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
