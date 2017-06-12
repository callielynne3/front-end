// CSS Questions

// What does float do?
// float pushes an element to the sides of a page with text wrapped around it. you can create entire page or a smaller area by using float. if size of a floated element changes, text around it will re-flow to accommodate the changes. You can have float left, right, none or inherit.
// if you set, 'float: left;' for an image, it will move to the left until the margin, padding or border of another block-level element is reached. The normal flow will wrap around on the right side.

// How can you clear sides of a floating element?
// If you clear a side of an element, floating elements will not be accepted on that side. With 'clear' set to 'left', an element will be moved below any floating element on the left side. clear is used to stop wrap of an element around a floating element.

// Are css properties case sensitive?
// NO

// Why css selectors mixed up with cases don't apply the styles?
// html ID and classes are case sensitive

// Does margin-top or margin-bottom have an effect on inline element?
// NO

// Does padding-top or padding-bottom have an effect on inline element?
// NO

// Does padding-left or padding-right or margin-left or margin-right have an effect on inline element?
// YES

// If you have a <p> element with font-size: 10rem, will the text be responsive when the user resizes / drags the browser window?
// NO

// The pseudo class :checked will select inputs with type radio or checkbox, but not elements.
// FALSE

// In an HTML document, the pseudo class :root always refers to the element.
// TRUE

// The translate() function can move the position of an element on the z-axis.
// FALSE

// Which one would you prefer among px, em % or pt and why?
// px gives fine grained control and maintains alignment because 1 px or multiple of 1 px is guaranteed to look sharp. px is not cascade, this means if parent font-size is 20px and child 16px. child would be 16px.
// em maintains relative size - you can have responsive fonts. em is the width of the letter 'm' in the selected typeface. However, this concept is tricky. 1em is equal to the current font-size of the element or the browser default. if u sent font-size to 16px then 1em = 16px. The common practice is to set default body font-size to 62.5% (equal to 10px). em is cascade
// % sets font-size relative to the font size of the body. Hence, you have to set font-size of the body to a reasonable size. this is easy to use and does cascade. for example, if parent font-size is 20px and child font-size is 50%. child would be 10px.
// pt(points) are traditionally used in print. 1pt = 1/72 inch and it is fixed-size unit.

// How absolute, relative, fixed and static position differ?
// absolute, place an element exactly where you want to place it. absolute position is actually set relative to the element's parent. if no parent available then relatively place to the page itself.
// relative, is position an element relative to itself (from where the element would be placed, if u don't apply relative positioning). for example, if u set position relative to an element and set top: 10px, it will move 10px down from where it would be normally.
// fixed, element is positioned relative to viewport or the browser window itself. viewport doesn't changed if u scroll and hence fixed element will stay right in the same position.
// static, element will be positioned based on the normal flow of the document. usually, u will use position static to remove other position might be applied to an element.

// What are the differences between visibility hidden and display none?
// display: none removes the element from the normal layout flow and allow other elements to fill in. visibility: hidden tag is rendered, it takes space in the normal flow but doesn't show it.
// if u want to say it smartly, display: none causes DOM reflow where is visibility: hidden doesn't. btw, what is re-flow? 

// What are the differences between inline, block and inline-block?
// inline, elements do not break the flow. think of span it fits in the line. Important points about inline elements, margin/ padding will push other elements horizontally not vertically. Moreover, inline elements ignores height and width.
// block, breaks the flow and dont sits inline. they are usually container like div, section, ul and also text p, h1, etc.
// inline-block, will be similar to inline and will go with the flow of the page. Only differences is this this will take height and width.

// What are the properties related to box model?
// Technically, height, width, padding and border are part of box model and margin is related to it.
// Everything in a web page is a box where you can control size, position, background, etc. Each box/ content area is optionally surrounded by padding, border and margin. When you set height and width of an element, you set content height and width.

// Does overflow: hidden create a new block formatting context?
// YES overflow property deals with the content if content size exceeds the allocated size for the content. You can make extra content visible, hidden, scroll or auto (viewport default behavior).

// How could you apply css rules specific to a media?
// Media Queries:
// @media (max-width: 700px){...} means you want to apply rules to those media whose max-width is 700 px. this means every smaller device will have this rule.
// @media (max-width: 700px) and (orientation: landscape){...} will apply rules for media smaller than 700px and in landscape orientation.

// What is the use of only?
// to hide style sheets from older user agents

// Does the screen keyword apply to the device's physical screen or the browser's viewport?
// Browser's Viewport

// What are the some pseudo classed you have used?
// pseudo class tells you specific state of an element. allow to style element dynamically. The most popular one is :hover. Besides i have used :visited, :focus, :nth-child, nth-of-type, :link, etc.
// pseudo classes is better if you don't want to mess up with javaScript however, pseudo-classes is slow to process and apply rules.

// How do you align a p center-center inside a div?
// text-align: center will do the horizontal alignment but vertical-align: middle will not work here. there are couple of different ways to solve this problem and one of them are positioning. You make the parent as relative position and child as absolute positioning. And then define all position parameter as zero and width 50% and height 30% (sounds messy look at the example and read ref)

// How do you optimize css selectors?
// This is very open and depend on what you are trying to achieve. If I order selectors in terms of render speed it would be like id, class, tag, siblings, child, descendant, universal, attribute, pseudo. Speed of ID and class is very close. However your code should be readable, maintainable and DRY along with highly performant.
// The best practices in general are: avoid universal selectors, don't repeat yourself, remove redundant selectors, be as specific as possible, and keep learning.

// How can you load css resources conditionally?
// @import allows you to load/ import stylesheet by using a path (uri) representing the location of the file. You can define one or more media by comma separation for which you want to load the stylesheet. If browser dont support the media stylesheet will not be loaded.

// Why would you use sprites?
// When you have multiple images/ icons, browser makes separate call to the server for each one of them. sprite is a technique to combine all/ some of them (usually similar one in terms of type of image. For example, you will put jpg in one sprite) in one image. To display the icon you set height, width and background position.
// popular libraries like bootstrap use this technique. If you repeat the image. want to scale you have to be careful with sprite.

// What is specificity? How do u calculate specificity?
//is a process of determining which css rule will be applied to an element. it actually determines which rules will take precedence.
// inline style usually wins then ID then class value (or pseudo-class or attribute selector), universal selector (*) has no specificity.

// What is shadow DOM?
// encapsulate part of a DOM. hide subtree. you can have same ID in different shadow DOM. Polymers uses it. This way your DOM becomes reusable. if interviewer is not happy with your answer give him the links and tell him to spend a weekend on reading

// What do you know about transition?
//  transition allows to add an effect while changing from one style to another. You can set which property you want to transition, duration, how you want to transit (linear, ease, ease-in, ease-out, cubic-bezier) and delay when transition will start. you can transition more than one property by comma separation

// What are the different css filter you can use?
// css filter allows you to render DOM element, image, or video. you can choose from: grayscale, blur, opacity, brightness, contrast

// What are the reasons to use preprocessor?
// you write css in high level with some special syntax (declaring variable, nested syntax, mathematical operations, etc.) and that is compiled to css. Preprocessor helps you to speed up develop, maintain, ensure best practices and also confirms concatenation, compression, etc

// Show you couple of style example and you have to tell what does it do.
// <ul class="shopping-list" id="awesome">
//     <li><span>Milk</span></li>
//     <li class="favorite" id="must-buy"><span class="highlight">I am awesome</span></li>
// </ul>

// A:
// <style>
//   ul#awesome {
//     color: red;
//   }
//   ul.shopping-list li.favorite span {
//     color: blue;
//   }
// </style>
// blue

// B:
// <style>
//   #myDude {
//     margin-bottom: -5px;
//   }
// </style>
// <p id="myDude">Dude</p>
// All elements succeeding #myDude will move 5px updward.