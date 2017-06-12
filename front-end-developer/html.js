// HTML Questions:

// What does a doctype do?
// The doctype declares the version of html.
// The doctype declaration should be the very first thing in an HTML document, before the tag. The doctype declaration is not an HTML tag; it is an instruction to the web browser about what version of the markup language the page is written in. The doctype declaration refers to a Document Type Definition (DTD).

// What's the difference between standards mode and quirks mode?
// Quirks modes:
// ...layout emulates nonstandard behavior in Navigator 4 and Internet Explorer 5 for Windows that is required not to break existing content on the Web.
// Standards mode:
// ...behavior is (hopefully) the behavior described by the HTML and CSS specifications. 
// In the old days of the web, pages were typically written in two versions: One for Netscape Navigator, and one for Microsoft Internet Explorer. When the web standards were made at W3C, browsers could not just start using them, as doing so would break most existing sites on the web. Browsers therefore introduced two modes to treat new standards compliant sites differently from old legacy sites.
// There are now three modes used by the layout engines in web browsers: quirks mode, almost standards mode, and full standards mode. In quirks mode, layout emulates nonstandard behavior in Navigator 4 and Internet Explorer 5. This is essential in order to support websites that were built before the widespread adoption of web standards. In full standards mode, the behavior is (hopefully) the behavior described by the HTML and CSS specifications. In almost standards mode, there are only a very small number of quirks implemented.
//For HTML documents, browsers use a DOCTYPE in the beginning of the document to decide whether to handle it in quirks mode or standards mode. To ensure that your page uses full standards mode, make sure that your page has a DOCTYPE like in this example:
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset=UTF-8>
//     <title>Hello World!</title>
//   </head>
//   <body>
//   </body>
// </html>
// The DOCTYPE shown in the example, <!DOCTYPE html>, is the simplest possible, and the one recommended by HTML5. 

// What's the difference between HTML and XHTML?
// HTML came along first, XHTML was designed to fix problems with HTML, and HTML5 solved problems XHTML was designed to fix. They’re all markup languages that provide structure and organization to the content of webpages and applications, but their relevance has shifted as newer versions of HTML have evolved, rising to the challenges of mobile demands, responsive design, and developers who want to accomplish more with less.
// XHTML (eXtensible Hypertext Markup Language) is essentially identical to HTML4 (the fourth iteration of HTML), but with elements of XML that extend HTML's capabilities. (In markup, XML describes elements of data, while HTML displays that data.)
// HTML:
// Start tags are not required for every element.
// End tags are not required for every element.
// Only void elements such as br, img, and link may be “self-closed” with />.
// Tags and attributes are case-insensitive.
// Attributes do not need to be quoted.
// Some attributes may be empty (such as checked and disabled).
// Special characters, or entities, do not have to be escaped.
// The document must include an HTML5 DOCTYPE
// XHTML:
// All elements must have a start tag.
// Non-void elements with a start tag must have an end tag (p and li, for example).
// Any element may be “self-closed” using />.
// Tags and attributes are case sensitive, typically lowercase.
// Attribute values must be enclosed in quotes.
// Empty attributes are forbidden (checked must instead be checked="checked" or checked="true").
// Special characters must be escaped using character entities.

// Are there any problems with serving pages as application/xhtml+xml?
// It will more than likely mess up the page for anyone still using older versions of IE.
// When a browser reads XML it uses an XML parser, not an HTML parser.
// Unfortunately, up to and including version 8, Internet Explorer doesn't support files served as XML, although a number of other browsers do. To get around the fact that not all browsers support content served as XML, many XHTML files are actually served using the text/html MIME type. In this case, the user agent will read the file as if it were HTML, and use the HTML parser.
// Since the browser considers the XML to actually be HTML, you need to take into account some of the differences between the two formats when writing your XHTML code, to ensure that the differences between XML and HTML syntax do not trip up the browser. This includes different ways of declaring the character encoding or language declarations inside the document.

// How do you serve a page with content in multiple languages?
// To support multi language, use to indicate what language used in a page, use lang attr on tag.
// By changing the lang attribute on the html element.
// <!-- HTML -->  
// <html lang="en">
// <!-- XHTML -->  
// <html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">  
// Elements can also be wrapped in a lang tag if you have more than one language on the same page.
// <div lang="es">Yo no hablo español</div>  
// <div lang="fr">Je ne parle pas français</div>  
// The browser writes a value for the Accept-Language request header field that it sends to the web server. You can set this value in Preferences (Mozilla) or Internet Options (Internet Explorer). If you choose multiple languages, they are sent to the server as a comma-delimited list in your preferred order.

// What kind of things must you be wary of when design or developing for multilingual sites?
// Properly localizing content for different audiences based on their location, as well as allowing for a user to easily change their country/language.
// How will users to be directed to their native language?
// Text In Images Won’t Scale.  
// Restrictive Word / Sentence length
// Be Mindful of How Colors Are Perceived Across Different Cultures
// Completely remove text content from templates.
// Common static text strings like section titles and a site-wide footer must be taken out of the templates. If something 
// Formatting Dates

// What are data-attributes good for?
// Storing data in HTML for DOM parsing, or other ways of keeping track of information.
// Data can be stored on markups that not visible to end users, also not violating the standard HTML5. JavaScript can easily access by dataset.
// The data-* attributes gives us the ability to embed custom data attributes on all HTML elements. The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries). ... The attribute value can be any string.

// Consider HTML5 as an open web platform. What are the building blocks of HTML5?
// This question is a bit confusing, as when you say building blocks, my head goes to block elements. The HTML5 specific ones are:

// <article>
// <aside>
// <audio>
// <canvas>
// <figcaption>
// <figure>
// <footer>
// <header>
// <hgroup>
// <output>
// <section>
// <video>
// The numerous APIs and the more semantic tags, could also be said to be the building blocks.

// Describe the difference between a cookie, sessionStorage and localStorage.
// Cookie:
// Max size of 4093 bytes
// Can set expiration date
// Sent on every request
// sessionStorage:
// Max size of 2.5MBs+ depending on browser
// Stored in browser and not sent with every request
// If you close a tab using sessionStorage, open a new tab, or exit the browser - you'll lose that specific sessionStorage data.
// localStorage:
// Max size of 2.5MBs+ depending on browser
// Stored in browser and not sent with every request
// Will persist if browser/tabs are closed.
// They are all storage on the client side. cookies is small piece of key-value pair with a expire time. sessionStorage is on persistent and scope only to current windows. localStorage is persisitent and socop only to domain, by key-value pair or SQL database (Web SQL)

// Describe the difference between <script>, <script async> and <script defer>.
// <script> tag will block rendering of the page, and the page will not continue to load until the script finishes.
// <script async> will run the script asynchronously, meaning that it will not block rendering, but will run as soon as the script is available. This is usually intended for CDN files, or other such files, which do not change the page structure.
// <script defer> will defer the script to run after the page is done parsing and before an onload event.

// Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?
// You usually put the <link> tags in between the <head> to prevent Flash of Unstyled Content which gives the user something to look at while the rest of the page is being parsed.
// Since Javascript blocks rendering by default, and the DOM and CSSOM construction can be also be delayed, it is usually best to keep scripts at the bottom of the page.
// Exceptions are if you grab the scripts asynchronously, or at least defer them to the end of the page.

// What is progressive rendering?
// With HTML progressive rendering is chunking the HTML into separate bits and loading each block as it's finished. Usually, the backend code loads the HTML at once, but if you flush after finishing one part of the structure, it can be rendered immediately to the page.
// This can be done asynchronously with different components being loaded as they finish. There's new features which can be used with Web Components making it more standard. Another interesting article on this is from eBay with Async Fragments.

// Have you used different HTML templating languages before?
// jQuery