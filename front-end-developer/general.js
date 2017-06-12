// General Questions:

// What did you learn yesterday/this week?
// graphs and DFS BTS

// What excites or interests you about coding?
// In coding, you can never be a master, there is always something new to learn - I love to learn!

// What is a recent technical challenge you experienced and how did you solve it?
// I had a hard time adjusting an embedded video on a friend's site to be reposnsive when the browser size was changed. I spent my day googling, researching and watching videos and finally got it to look right!

// What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?
// UI: I like minimal UI which contains only what it should. I believe it results in the better user experience, as a user knows what to do intuitively.
// Security: I always try to make both frontend and backend secure, concerning CSRF, XSS, etc.
// Performance: I consider space and time complexity for the algorithms and logics I use and write.
// SEO: Set meta tags for search engines and consider and consider server-side rendering for SPA.
// Maintainability: Try to keep the source code consistent and make objects immutable. Use statically typed languages such as TypeScript. Use CI with tests and lints.
// Technology: I like to learn new technologies, but if the project is in production, I would consider using technologies which is well-documented and widely used.

// Talk about your preferred development environment.
// I like to work in terminal shell environments. For the time being, my favourite dev environment are like below:
// OS X
// iTerm2


// Which version control systems are you familiar with?
// git + github

// Can you describe your workflow when you create a web page?
// Decide a CSS preprocessor. I may consider using SCSS, but Less and Stylus are also viable options.
// Decide a HTML template engine. I may go with Pug(formerly Jade).
// Decide a JavaScript preprocessor or other languages being compiled to it. I may go with TypeScript or ES6 with Babel.
// Decide a task manager. I recently like to just use NPM scripts instead of using huge task managers like Gulp or Grunt.
// Write tests and make them fail.
// Write app code and check the tests succeed.
// Set CI.
// Publish the code and check a task in CI succeed.

// If you have 5 different stylesheets, how would you best integrate them into the site?
// Use a CSS preprocessor to nest them with @import statements in class names for each stylesheet, and merge them into a built file. In production, minify the built file with a CSS minifier.

// Can you describe the difference between progressive enhancement and graceful degradation?
// Progressive enhancement is a way to implement a web page where basic features, which are supported by most environments, are implemented first and then progressively enhance them for advanced environments.
// On the other hand, graceful degradation is an opposite. The advanced features are freely implemented at any time, and additional works are done to support the environment where the features don't work well.

// How would you optimize a website's assets/resources?
// Minimise CSS and JavaScript using minifier(or uglifier), archive them using gzip, use separated file servers, use CDN, etc.
// There are some general optimizations that can be done for most sites. As mentioned before, we can concatenate files, as well as minify them to reduce the amount of HTTP requests and file size.
// Use a CDN to serve static resources
// Leverage the browsers caching with Cache Headers/Etags, etc.
// Combine images into CSS sprites to save on HTTP requests.
// Load Javascript asynchronously, and defer to the bottom of the page to prevent render-blocking.
// Prefetch/preload DNS, pages, and assets to reduce load time on subsequent pages.
// Split code bundles into separate, smaller bundles and then load them in with XHR requests.

// How many resources will a browser download from a given domain at a time?
// Max Number of default simultaneous persistent connections per server/proxy: 2
// Firefox 2:  2  
// Firefox 3+: 6  
// Opera 9.26: 4  
// Opera 12:   6  
// Safari 3:   4  
// Safari 5:   6  
// IE 7:       2  
// IE 8:       6  
// IE 10:      8  
// Chrome:     6  

// What are the exceptions?
// When we use several subdomains pointing the same domain, we can increase the concurrency level of the download.

// Name 3 ways to decrease page load (perceived or actual load time).
// Use progress bars or loading screens to help transition users.
// Prefetch or preload data
// CSS at the top of the page - Javascript at the bottom. Use parallelization when possible.
// See previous answers for more solutions
// Use minifier and gzip to decrease the page size - actual
// Show spinner or progress bar - perceived
// Preload the page before actually loading it using libraries like InstantClick - both actual and perceived

// If you jumped on a project and they used tabs and you used spaces, what would you do?
// I would use tabs because it is the convention used for the project.
// Introduce a linter or other scripts to ensure indentations are consistent
// Use a tool like EditorConfig to configure editors team members are using automatically

// Describe how you would create a simple slideshow page.
// <div class='slide-page'>...</div>
// <div class='slide-page'>...</div>
// <div class='slide-page'>...</div>
// html, body, .slide-page {
//   width: 100%;
//   height: 100%;
// }

// .slide-page {
//   position: fixed;
//   top: 0;
//   left: 0;
//   display: none;
// }

// .slide-page:first-child {
//   display: block;
// }
// window.addEventListener('click', () => {
//   document.querySelector('.slide-page').remove();
// });

// If you could master one technology this year, what would it be?
// React

// Explain the importance of standards and standards bodies.
// So we're not in the wild west of the web world. The web used to be quite a different place, before standards came in to the picture. You'd be lucky to have a site functioning the same way across multiple browsers. Which is why standards came into place - so we're all not running around with our heads cut off. Everything is not completely standardized, but at least the web heading even more so in that direction.

// What is Flash of Unstyled Content? How do you avoid FOUC?
// It is caused when content is loaded before styles are applied to the content. It happens when style tags are placed after other content, or applied asynchronously, for example, by scripts.
// To avoid FOUC, the styles should be placed in order that they can be loaded and applied in the same rendering process as HTML elements do. The easiest way is to place them in the head, and avoid applying styles by scripts at the first load.

// Explain what ARIA and screenreaders are, and how to make a website accessible.
// They are for accessibility. To make a website accessible, we should try to follow the usage of HTML elements, for example, h1 for headers and section for sections. Also it's good to take care of using visual contents, such as not forgetting to add an alt attribute to img tags.

// Explain some of the pros and cons for CSS animations versus JavaScript animations.
// CSS animations
// pros: They use GPU, so they are CPU-efficient. Don't consume JavaScript event loops.
// cons: Hard to handle, as CSS doesn't contain logics. Not supported in old browsers.
// JavaScript animations
// Opposite to CSS animations