# gdi-build-tools

This class covers the basics of what build tools are, and touches briefly on scaffolding. Although it covers some cross-language tools, it primarily focuses on web development and the Gulp build system.

## Slides

Slides can be found at [gdiroc.github.io/gdi-build-tools](https://gdiroc.github.io/gdi-build-tools).

## Gulp Demo

In the class we built some basic Gulp build tasks for a simple web application. Below are the steps to reproduce that. Note that there are some steps here that we didn't get to in class - I had to skip over some for time. However the difficulty should be in-line with what we did in class.

1. Create a new project folder and go there in the terminal. Also open up that folder in your editor of choice.

2. Initialize NPM

  ```bash
  > npm init
  ```
  Follow the prompts - most of the options don't matter for us, so don't worry if you don't understand what they're asing for.

3. Install gulp locally AND globally (both are required)

  ```bash
  > npm install gulp --global
  > npm install gulp --save-dev
  ```
  
4. Create `gulpfile.js` in the root of your project folder and add a "default" task [(code)](https://github.com/gdiroc/gdi-build-tools/blob/404e0ee8eccd06925fa775d455f0f03ede171ef7/gulpfile.js)
  Create an `app` folder, and inside that create a file called `main.js`. Put something simple inside `main.js` - something like `console.log('Hello world!);`
  Run your gulp task by running 
  
  ```bash
  > gulp
  ```
  
  or 
  
  ```bash
  > gulp default
  ```
  
5. Set up ESLint by installing `gulp-eslint` and `eslint` (which `gulp-eslint` depends on) 

  ```bash
  > npm install eslint gulp-eslint --save-dev
  ```
  
  (tip: you can install more than one NPM module at a time by combining install commands)
  
  Create a file called `.eslintrc` in the root of your project folder (remember that it starts with a period!). Paste [this file](https://github.com/gdiroc/gdi-build-tools/blob/179aa7d9d47a974b5988647db097c8acb8a8788a/.eslintrc) there - how ESLint uses this file is outside the scope of this class.
  
  Create a new `lint` task in your gulpfile to run ESLint on your javascript. Follow the example in [this file](https://github.com/gdiroc/gdi-build-tools/blob/179aa7d9d47a974b5988647db097c8acb8a8788a/gulpfile.js)
  
  Introduce an error in `main.js` (for example, remove the semi-colon at the end of the line) and run
  
  ```bash
  > gulp lint
  ```
  
  and see the error in the console!
  
6. We want to run the linter whenever our javascript gets processed! Set the `lint` task as a dependency of the `default` task as shown [here](https://github.com/gdiroc/gdi-build-tools/commit/7a69adefc8e3f5b644123ed9b8872fe532dcdd6e).

7. Compile SASS

  Let's create a new folder in the root of the project called `styles` and put a SASS file there. Let's call it `main.scss`, and you can use what I have [here](https://github.com/gdiroc/gdi-build-tools/blob/9b381bd8468f2497600c6fcfa84a06e83937dcfd/app/styles/main.scss) as an example.
  
  Now let's install SASS via NPM:
  
  ```bash
  npm install gulp-sass --save-dev
  ```
  
  And let's make a new gulp task for it! [Here](https://github.com/gdiroc/gdi-build-tools/commit/9b381bd8468f2497600c6fcfa84a06e83937dcfd#diff-b9e12334e9eafd8341a6107dd98510c9) is what that looks like.
  
  Run
  
  ```bash
  > gulp styles
  ```
  
  and check the `build` folder for the compiled CSS file!
  
8. Compress the CSS

  To make the download size smaller for your users you can make [this tweak](https://github.com/gdiroc/gdi-build-tools/commit/0a941af78c696f5a20db42ea8cc721287d4c906a) to remove the unnecessary spaces/line breaks from the output file.
  
9. More complex javascript example

  Let's create a more complex javascript file, something like [this](https://github.com/gdiroc/gdi-build-tools/blob/7027f1dcf9b561a16aca39b9f3f39af7980209d6/app/main.js). This is taking advantage of `class`, a newer feature of javascript that isn't supported in older browsers. What if we want to run it in older browsers? We can use `babel` to *transpile* it to an older version of javascript. Install `babel` via NPM:
  
  ```bash
  > npm install gulp-babel babel-preset-es2015 --save-dev
  ```
  
  And create a `scripts` gulp task in the gulpfile - [this](https://github.com/gdiroc/gdi-build-tools/blob/7027f1dcf9b561a16aca39b9f3f39af7980209d6/gulpfile.js) is how your gulpfile should look now.
  
  You can also create a [barebones `index.html` file](https://github.com/gdiroc/gdi-build-tools/blob/7027f1dcf9b561a16aca39b9f3f39af7980209d6/index.html) if you'd like to so you can see the code in the browser that we're creating with gulp's help.
  
  Now when you run
  
  ```bash
  > gulp scripts
  ```
  
  you should see lots of code in the output file in the `build` folder. It's probably really confusing and hard to follow - don't worry about knowing what it's doing! It's not meant to be readable, it's just meant to do the exact same thing that your original code did, just compatible with older browsers.
  
10. Putting it all together

  Let's make it so we can run 
  
  ```bash
  > gulp
  ```
  
  (which, remember, runs the `default` task) and have EVERYTHING run. Update your gulpfile like [this](https://github.com/gdiroc/gdi-build-tools/commit/0263566f90b589fb6897a1860d302b05e6c53fa1).
  
  Now, try running
  
  ```bash
  > gulp
  ```
  
  and see what tasks get run!
  
11. Automatically re-run

  We don't want to need to re-run our tasks manually every time a file changes. Let's add a "watcher" so whenever we make a change to a file the tasks re-run. See [here](https://github.com/gdiroc/gdi-build-tools/commit/6e0560af2cd9db1ec4757232289a068837aa16d8) for what that code looks like.
  
  Note that we have `default` depend not only on `watch`, but also on `scripts` and `styles`? If we didn't do that gulp would start watching those files but wouldn't run initially when we start it up. Setting those as a dependency ensures that gulp first compiles our SASS and javascript and THEN starts watching for changes.
  
12. Sourcemaps

  That output javascript was ugly! What if we could tell the browser "I know you see this code, but over HERE is my original code - can you please show me that in devtools when I'm debugging it?" Well, we can, with sourcemaps! And you can generate sourcemaps with gulp!
  
  Install `gulp-sourcemaps` with
  
  ```bash
  > npm install gulp-sourcemaps --save-dev
  ```
  
  For everything we want sourcemaps for we need to "initialize" `gulp-sourcemaps`, then we run our compiling task (like SASS or babel), then we tell `gulp-sourcemaps` that we're done and that it should output the sourcemaps in a certain folder. See [here](https://github.com/gdiroc/gdi-build-tools/commit/14eacb494b8330e413090ce6ae009d6875c0a4a6#diff-b9e12334e9eafd8341a6107dd98510c9) for an example of what that looks like.
  
  Re-run our task and open dev tools - you should be able to see the original SASS and `class Vehicle` code alongside the compiled output.
  
13. Running a local server

  Let's install `gulp-webserver`
  
  ```bash
  > npm install gulp-webserver --save-dev
  ```
  
  and set up a task to start the webserver. When we start the webserver we want to automatically start watching our files for changes and compile them when a change is detected, so have the `webserver` task depend on the `watch` task. See [here](https://github.com/gdiroc/gdi-build-tools/commit/7ea17713572f7776a46029f22b19c1d490b0c5ff#diff-b9e12334e9eafd8341a6107dd98510c9) for an example.
  
  In that example note that I removed the `eslint.failAfterError()` call. If we left that in there, any time an ESLint error was encountered the webserver would stop. Since we all make mistakes pretty frequently, we don't really want that to happen. So I'm disabling it for now.
  
And there you have it! You should have a `gulpfile.js` that has a bunch of useful tasks in it, and that's just scratching the surface of what gulp can do for you! If you were following along your folder should look something like what I have [here](https://github.com/gdiroc/gdi-build-tools/tree/gulp). Feel free to contact me via Meetup, email (josh@joshkra.me), or on the GDIRoc Slack @jkjustjoshing if you run into any issues! Happy gulping!
