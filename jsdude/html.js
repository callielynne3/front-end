// HTML Questions

// Why do u need doctype?
// doctype is an instruction to the browser to inform about the version of html document and how browser should render it.
// It ensures how element should be displayed on the page by most of the browser. And it also makes browser's life easier. otherwise, browser will guess and will go to quirks mode. Moreover, doctype is required to validate markup.
// <!DOCTYPE html>
// <meta charset="UTF-8">

// What is the use of data-* attribute?
// allow you to store extra information/ data in the DOM. You can write valid html with embedded private data - You can easily access data attribute by using javascript and hence a lot of libraries like knockout uses it.
// <div id="myDiv" data-user="jsDude" data-list-size="5" data-maxage="180"></div>

// How can you generate public key in html?
// html has a keygen element that facilitate generation of key and submission via a form
// <keygen name="name" challenge="challenge string" keytype="type" keyparams="pqg-params">

// How do you change direction of html text?
// use bdo (bidirectional override) element of html
// <!-- Switch text direction -->
// <p><bdo dir="rtl">This text will go right to left.</bdo></p>

// How can you highlight text in html?
// use mark element
// <p>Some part of this paragraph is <mark>highlighted</mark> by using mark element.</p>

// Can you apply css to a part of html document only?
// yes, by using "scopped" in the style tag
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style

// Will browser make http request for the following cases?
// <img src="mypic.jpg" style="visibility: hidden" alt="My photo">
// YES
// <div style="display: none;">
//   <img src="mypic.jpg" alt="My photo">
// </div>
//   YES 

// Does style1.css have to be downloaded and parsed before style2.css can be fetched?
// <head>
//     <link href="style1.css" rel="stylesheet">
//     <link href="style2.css" rel="stylesheet">
// </head>
// NO

// Does style2.css have to be downloaded and parsed before Paragraph 1 is rendered on the page?
// <head>
//     <link href="style1.css" rel="stylesheet">
// </head>
// <body>
//     <p>Paragraph 1</p>
//     <p>Paragraph 2</p>
//     <link href="style2.css" rel="stylesheet">
// </body>
// YES

// What is optional tag?
// p, li, td, tr, th, html, body, etc. you don't have to provide end tag. Whenever browser hits a new tag it automatically ends the previous tag. However, you have to be careful to escape it.
// reason: you can save some byte and reduce bytes needs to be downloaded in a html file.
// <p>Some text
// <p>Some more text
// <ul>
//  <li>A list item
//  <li>Another list item
// </ul>
// the above html will be parsed as the following blocks.
// <p>Some text</p>
// <p>Some more text</p>
// <ul>
//  <li>A list item</li>
//  <li>Another list item</li>
// </ul>

// What are the differences between div and span?
// div is a block element and span is inline element.
// It is illegal to put block element inside inline element. div can have a p tag and a p tag can have a span. However, span can't have a div or p tag inside.

// How would you differentiate div, section and article?
// <section>, group of content inside is related to a single theme, and should appear as an entry in an outline of the page. It’s a chunk of related content, like a subsection of a long article, a major part of the page (eg the news section on the homepage), or a page in a webapp’s tabbed interface. A section normally has a heading (title) and maybe a footer too
// <article>, represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content
// <div>, on the other hand, does not convey any meaning, aside from any found in its class, lang and title attributes

// How to select svg or canvas for your site?

// How to serve html in multiple languages?
// CMS could be used to deliver content in different language with same structure and style.

// Explain standard and quirks mode.
// quirks mode in browser allows you to render page for as old browsers. This is for backward compatibility.

// What is semantic tag?
// Semantic HTML, or "semantically-correct HTML", is HTML where the tags used to structure content are selected and applied appropriately to the meaning of the content.
// for example, <b></b> (for bold), and <i></i> (for italic) should never be used, because they’re to do with formatting, not with the meaning or structure of the content. Instead, use the replacements <strong></strong> and <em></em> (meaning emphasis), which by default will turn text bold and italic (but don’t have to do so in all browsers), while adding meaning to the structure of the content.

// Why you would like to use semantic tag?
// Search Engine Optimization, accessibility, repurposing, light code.
// Many visually impaired person rely on browser speech and semantic tag helps to interpret page content clearly.
// Search engine needs to understand page content to rank and semantic tag helps.