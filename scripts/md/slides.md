title: about:me
id: who

<p class="avatar rounded"></p>

<p>Pieter-Jan Vandormael</p>
<p>GDG Brussels</p>

<p class="topmargin"></p>

<i class="icon icon-google-plus"></i>
<a rel="author" href="http://google.com/+PieterJanVandormael">google.com/+PieterJanVandormael</a>

<i class="icon icon-twitter"></i>
<a rel="author" href="http://twitter.com/pjv_">@pjv_</a>

<p class="topmargin"></p>

<p>Modified slides of Rob Dodson (Developer Advocate)</p>

<aside class="note">
  <section>
    <p>Introduce yourself, mention contact info</p>
    <p>
      Quick show of hands, who here has heard of Polymer or Web Components?
    </p>
  </section>
</aside>

---

id: agenda
title: Today's agenda
class: large

<div class="topmargin">
  <div>
    <h3>What is Polymer?</h3>
    <br>
  </div>
  <div>
    <h3>Working with Polymer</h3>
    <br>
  </div>
  <div>
    <h3>Paper Elements</h3>
    <br>
  </div>
  <div>
    <h3>Example time</h3>
    <br>
  </div>
</div>

<aside class="note">
  <section>
    <ul>
      <li>What is Polymer? What are Web Components?</li>
      <li>Start working with Polymer so you can use Web Components in modern browsers</li>
      <li>We'll save some time and show some cool demos</li>
    </ul>
  </section>
</aside>

---

body_class: core-fill
content_class: flexbox vleft

<h2 style="margin-top: 33%">Let's go back in time...</h2>

<aside class="note">
  <section>
    <p>To understand Web Components we have to go back in time to the early days of the web design...</p>
  </section>
</aside>

---

id: netscape
#title: Understand where we came from
class: nobackdrop nobackground
#image: images/bgs/netscape_blank.png
content_class: flexbox vcenter
body_class: netscape

<img src="images/screenshots/old-site.png" alt="ye olde timey website">

<aside class="note">
  <section>
    <br>
    <p>
      For many developers this is what their first site looked like. This is just HTML elements bolted together like Legos. It may seem dated, but it *is* a functioning web app.
    </p>
    <p>
      As we've been going through this JavaScript renaissance we've lost sight of the power of HTML elements. But when you stop to think about it...
    </p>
  </section>
</aside>

---

content_class: flexbox vcenter

<h2>Elements are the building blocks of the web</h2>
<img src="./images/screenshots/legos.png" style="position: absolute; bottom: -500px; right: -350px;">

<aside class="note">
  <section>
    <p>
      Elements have some really cool properties and I want to explore those for a second...
    </p>
  </section>
</aside>

---

body_class: elements-fill
content_class: flexbox vcenter

<h2 class="faded">Elements are <em>encapsulated</em></h2>

<aside class="note">
  <section>
    <p>Elements are encapsulated, and encapsulation is really hard to come by on the Web</p>
  </section>
</aside>

---

class: large
content_class: flexbox vcenter

<pre class="nohighlight">
&lt;select>
  &lt;option>Small&lt;/option>
  &lt;option>Medium&lt;/option>
  &lt;option>Large&lt;/option>
&lt;/select>
</pre>

<select class="corner top right">
  <option>Small</option>
  <option>Medium</option>
  <option>Large</option>
</select>

<aside class="note">
  <section>
    <p>This is the code to make a select element show up. Notice how I didn't have to include any CSS to make this element look the way it looks. That's because those styles are baked into the element and scoped to the tag. They don't leak out onto the page.</p>
    <p>And when I click on it, it has behavior but I didn't need to write any JavaScript to make that happen and my JavaScript isn't going to accidentally break that behavior. That's because select is a well encapsulated object.</p>
  </section>
</aside>

---

body_class: elements-fill
content_class: flexbox vcenter

<h2 class="faded">Elements are <em>configurable</em></h2>

<aside class="note">
  <section>
    <p>Another cool feature of elements is that they're configurable</p>
  </section>
</aside>

---

class: large
content_class: flexbox vcenter

<pre class="nohighlight">
&lt;select id="schwag">
  ...
  &lt;option <b>disabled</b>>Medium&lt;/option>
  &lt;option <b>disabled</b>>Large&lt;/option>
  &lt;option <b>selected</b>>XX-large&lt;/option>
&lt;/select>
</pre>

<select id="schwag" class="corner top right">
  <option disabled>Small</option>
  <option disabled>Medium</option>
  <option disabled>Large</option>
  <option selected>XX-large</option>
</select>

<aside class="note">
  <section>
    <p>Notice how easy it is to change the behavior of select by adding a few attributes. No JS required!</p>
  </section>
</aside>

---

class: large
content_class: flexbox vcenter

<pre class="nohighlight" style="margin-left: -100px;">
&lt;select <b>size="4"</b> <b>multiple</b>>
  &lt;option>Do&lt;/option>
  &lt;option>Re&lt;/option>
  &lt;option>Mi&lt;/option>
  ...
&lt;/select>
</pre>

<select size="4" multiple class="corner top right">
  <option>Do</option>
  <option>Re</option>
  <option>Mi</option>
  <option>Fa</option>
  <option>So</option>
  <option>La</option>
  <option>Ti</option>
  <option>Do</option>
</select>

<aside class="note">
  <section>
    <p>And if you add a multiple attribute then you get a completely different presentation and behavior! Now we can select multiple items at once just by holding down the cmd/ctrl key.</p>
  </section>
</aside>

---

hidden: true
class: large
content_class: flexbox vcenter


<pre class="nohighlight">
&lt;select>
  &lt;option>Small&lt;/option>
  <s>&lt;li>Medium&lt;/li></s>
  &lt;option>Large&lt;/option>
&lt;/select>
</pre>

<select class="corner top right">
  <option>Small</option>
  <li>Medium</li>
  <option>Large</option>
</select>

---

body_class: elements-fill
content_class: flexbox vcenter

<h2 class="faded">Elements are <em>composable</em></h2>

<aside class="note">
  <section>
    <p>Meaning you can treat elements like Legos and bolt them together</p>
  </section>
</aside>

---

class: large
content_class: flexbox vcenter

<pre class="nohighlight">
&lt;select>
  &lt;optgroup label="German Cars">
    &lt;option>Mercedes&lt;/option>
    &lt;option>Audi&lt;/option>
  &lt;/optgroup>
  ...
&lt;/select>
</pre>

<select class="corner top right">
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
  <optgroup label="American cars">
    <option value="ford">Ford</option>
    <option value="gm">GM</option>
  </optgroup>
</select>

<aside class="note">
  <section>
    <p>For example, if you wrap your option elements in optgroups, then the select element is smart enough to know that it should render differently. Now you get subheadings inside your dropdown.</p>
  </section>
</aside>

---

class: large
content_class: flexbox vcenter

<pre class="nohighlight">
<b>&lt;form></b>
  &lt;select name="size">
    &lt;option value="s">Small&lt;/option>
    &lt;option value="m">Medium&lt;/option>
    &lt;option value="l">Large&lt;/option>
  &lt;/select>
<b>&lt;/form></b>
</pre>

<aside class="note">
  <section>
    <p>And if you put a select element inside of a form element then you've created a much more complex component. Now whenever the form is submitted it will take the value from the select and pass that along to our server.</p>
    <p>This is one of the main goals of good composability: building complex things out of simple building blocks</p>
  </section>
</aside>

---

body_class: elements-fill
content_class: flexbox vcenter

<h2 class="faded">Elements are <em>programmable</em></h2>

<aside class="note">
  <section>
    <p>Lastly, elements are programmable. I've shown you a lot of the declarative side of things, but don't forget that elements also have a nice *imperative* API for things that don't make sense to show in markup.</p>
  </section>
</aside>

---

class: large
content_class: flexbox vcenter

<pre class="nohighlight">
var foo = mySelect.selectedIndex;
</pre>

<aside class="note">
  <section>
    <p>selectedIndex, for example, wouldn't be very useful in HTML, but it makes total sense to have it in JavaScript.</p>
    <p>So when you're working with elements you get the best of both worlds: a nice declarative syntax for bolting things together, and a programmable API for when you need to delve into script.</p>
  </section>
</aside>

---

body_class: core-fill
content_class: flexbox vleft

<h2 style="margin-top: 33%">So what happened?</h2>

<aside class="note">
  <section>
    <p>It seems like a great model, right? So why don't we primarily work with elements anymore?</p>
    <p>The main reason is because there just aren't enough elements to capture the breadth of what we want to do on the web. And because the platform has never given us the ability to extend HTML, we've been forced to invent solutions.</p>
  </section>
</aside>

---

id: tab-examples
title: Building a tab component today

<div class="build flexbox vcenter centered">
<img src="images/screenshots/tabs/jquery.png">
<img src="images/screenshots/tabs/kendo.png">
<img src="images/screenshots/tabs/yui.png">
<img src="images/screenshots/tabs/angular.png">
<img src="images/screenshots/tabs/sencha.png">
<img src=""> <!-- intentional. holder to see all images together -->
</div>

<aside class="note">
  <section>
    <p>Let's look at how we build UI today. This is an example of building a tabs widget.</p>
    <p>This first example is really typical of something like Bootstrap. Lots of boilerplate markup which you'll have to copy and paste over and over again in your app. Cover it with CSS and maybe use some jQuery to kick off the behavior.</p>
    <p>Now that we're going through a JavaScript renaissance, we're starting to move more of the responsiblity for rendering our UI out of our markup and into or JS. So here's an example from kendo UI. Less markup, but more JS</p>
    <p>And here's YUI... Angular... EXT.js... The problem here is that if we build a great component using one framework, we can't share it with people using a different framework. We're silo'd.</p>
  </section>
</aside>

---

class: large
content_class: flexbox vcenter

<pre class="nohighlight" style="margin-top: -50px;">
&lt;x-tabs&gt;
  &lt;x-tab&gt;Tab 1&lt;/x-tab&gt;
  &lt;x-tab&gt;Tab 2&lt;/x-tab&gt;
  &lt;x-tab&gt;Tab 3&lt;/x-tab&gt;
&lt;/x-tabs&gt;
</pre>

<aside class="note">
  <section>
    <p>And it's a shame because really all we want is something like this. If this existed I would just use it, the same way I use `select`.</p>
    <p>Thankfully, today it is possible to start creating elements like this, thanks to a new set of technologies called Web Components</p>
  </section>
</aside>

---

class: nobackdrop nobackground yum
content_class: flexbox vcenter centered

<img src="images/logos/lockup.svg" style="height:180px;">

---

content_class: flexbox vleft

<h2 style="font-size: 60px; line-height: 1.25;">Polymer is a library that uses the latest <strong>web technologies</strong> to let you create <strong>custom HTML elements</strong>.</h2>

<!-- font-size: 42px; width: 52%; line-height: 1.3; -->

<aside class="note">
  <section>
    <p>It gives you the power of web components today</p>
    <p>You can start working with them and give feedback to the browser makers</p>
    <p>So... how do we do that?</p>
  </section>
</aside>

---

id: layers-of-polymer
class: polymer-diagram
title: Layers of Polymer

<div id="blocks-3d">
  <img id="native-3d" class="block-3d" src="./images/polymer/diagram/native.svg">
  <img id="platform-3d" class="block-3d" src="./images/polymer/diagram/platform.svg">
  <img id="polymer-3d" class="block-3d" src="./images/polymer/diagram/polymer.svg">
  <img id="elements-3d" class="block-3d" src="./images/polymer/diagram/elements.svg">
</div>

<div class="build diagram-explanations">
  <div id="diagram-animate-in" data-build-index="1"></div>
  <div id="diagram-explode" data-build-index="2"></div>

  <div id="diagram-elements" class="diagram-explanation" data-build-index="6">
    <h3 class="elements bold">Elements</h3>
    <p>Reusable custom elements</p>
  </div>

  <div id="diagram-polymer" class="diagram-explanation" data-build-index="5">
    <h3 class="core bold">Polymer</h3>
    <p>An opinionated way to work with Web Components</p>
  </div>

  <div id="diagram-platform" class="diagram-explanation" data-build-index="4">
    <h3 class="platform bold">Platform</h3>
    <p>Web Components polyfills for all <br>modern browsers</p>
  </div>

  <div id="diagram-native" class="diagram-explanation" data-build-index="3">
    <h3 class="bold">Native</h3>
    <p>The current browser landscape</p>
  </div>
</div>

<aside class="note">
  <section>
    <p>Here's a breakdown of how we add support for Web Components into all browsers</p>

    <ul>
      <li>Native: We start off with whatever level of support your current browser has. If that's something like mobile safari it might mean there's no support for web components at all!</li>
      <li>Platform: Polyfills web component support and jumps everyone into the future so they can start creating their own elements</li>
      <li>Polymer: Features and sugars. Things not on the standards track but we think are awesome so we include them. Two-way data binding, automatic node finding and a great declarative syntax</li>
      <li>Elements: Lastly, we include a set of pre-built elements which are ready to be dropped into any project</li>
    </ul>
  </section>
</aside>

---

hidden: true
id: philosophy
title: Three ways to work with Polymer
build_lists: true
class: large
#content_class: flexbox vcenter

<div class="build topmargin">
  <div>
    <h3><b class="elements">Using</b> elements</h3>
    <br>
  </div>
  <div>
    <h3><b class="core">Creating</b> elements</h3>
    <br>
  </div>
  <div>
    <h3>Utilizing the modern web <b class="platform">platform</b></h3>
    <br>
  </div>
</div>

---

content_class: flexbox vcenter

<h2>Three ways to work with Polymer</h2>

<aside class="note">
  <section>
    <p>So there's really 3 ways to work with Polymer</p>
  </section>
</aside>

---

body_class: elements-fill
content_class: flexbox vcenter

<h2 class="faded"><em>Using</em> elements</h2>

<aside class="note">
  <section>
    <p>You can use the elements that Polymer and the open source community provide</p>
  </section>
</aside>

---

body_class: core-fill
content_class: flexbox vcenter

<h2 class="faded"><em>Creating</em> elements</h2>

<aside class="note">
  <section>
    <p>You can create your own elements</p>
  </section>
</aside>

---

body_class: platform-fill
content_class: flexbox vcenter

<h2 class="faded">Utilizing the modern web <em>platform</em></h2>

<aside class="note">
  <section>
    <p>Or you can work directly with that shimmed web platform level. If you're not ready to use Web Components but maybe you want to play around with imports or one of the other technologies then you can actually break off the indivudal polyfills and use them stand alone</p>
  </section>
</aside>

---

id: using-elements
title: Using <label class="elements">elements</label>
subtitle: <a href="http://www.polymer-project.org/docs/elements/" class="nounderline">polymer-project.org/docs/elements/</a>
class: nobackdrop nobackground segue elements polymer-diagram
keep_content: true

<div id="blocks-3d" class="in" style="top: 10%;">
  <img id="native-3d" class="block-3d" src="./images/polymer/diagram/native.svg">
  <img id="platform-3d" class="block-3d" src="./images/polymer/diagram/platform.svg">
  <img id="polymer-3d" class="block-3d" src="./images/polymer/diagram/polymer.svg">
  <img id="elements-3d" class="block-3d" src="./images/polymer/diagram/elements.svg">
</div>

<aside class="note">
  <section>
    <p>(wait for animation)</p>
    <p>Let's start by talking about how you can use elements</p>
  </section>
</aside>

---

class: nobackground fill
body_class: polymer-phone
content_class: flexbox vcenter hcenter

![Phone](images/slides/polymer-phone.png)

<aside class="note">
  <section>
    <p>Could we work with elements that look and feel…
	like the kinds of elements in iOS or Android</p>
  </section>
</aside>

---

body_class: elements-fill
content_class: flexbox vcenter

<h2 style="font-size: 55px; letter-spacing: 0;">Everything is an element</h2>

<aside class="note">
  <section>
    <p><b>We want you to reach for the element</b></p>
  </section>
</aside>

<aside class="note">
  <section>
    <p>When you get started using elements we really want to get you into the mindset of thinking about "everything as an element." When you feel yourself reaching for the JavaScript, stop yourself, and ask "Could I solve this problem with an element instead."</p>
  </section>
</aside>

---

class: fill
body_class: core-elements
content_class: flexbox vcenter hcenter

<h2 class="centered" style="font-size: 55px; letter-spacing: 0;">Core elements</h2>

<aside class="note">
  <section>
    <p>General purpose, utility elements
    http://bit.ly/1mZjnTu</p>
  </section>
</aside>

---

id: polymer-ui-elements
title: Polymer Core UI elements
subtitle: visual elements

<div class="pull-right flexbox vcenter" style="width: 40%;margin-top:-100px;">
  <img src="images/polymer/uielements/polymer-ui-tabs.png" style="width:100%">
  <div class="flexbox vcenter" style="height:auto;">
  <img src="images/polymer/uielements/sidebarmenu.png">
  <img src="images/polymer/uielements/polymer-ui-toggle-button.png" style="margin-left:20px;">
  </div>
  <img src="images/polymer/uielements/toolbar.png" style="width:100%">
</div>

`<polymer-ui-accordion>`

`<polymer-ui-animated-pages>`

`<polymer-ui-overlay>`

`<polymer-ui-card>` [demo](http://www.polymer-project.org/components/polymer-ui-card/smoke.html)

`<polymer-ui-sidebar-menu>` [demo](http://www.polymer-project.org/components/polymer-ui-sidebar-menu/smoke.html)

`<polymer-ui-tabs>` [demo](http://www.polymer-project.org/components/polymer-ui-tabs/smoke.html)

`<polymer-ui-toggle-button>` [demo](http://www.polymer-project.org/components/polymer-ui-toggle-button/smoke.html)

`<polymer-ui-theme-aware>`

<aside class="note">
  <section>
    <p>Stress that elements are experimental (and visually disjointed) but let them know we're building something real.</p>
  </section>
</aside>

<aside class="note">
  <section>
    <p>To help you out we've created some reusable UI elements. So we have things like polymer-ui-card (click on link and show demo), which is a nice swipeable Google Now style card</p>
    <p>We've also got polymer-ui-sidebar, (click on link and show demo) which is your classic expanding/collapsing sidebar</p>
    <p>And yes, we even include our own version of tabs!</p>
  </section>
</aside>

---

id: polymer-ui-tabs-demo
title: Everything is an element
subtitle: Tabs revisited

<pre class="corner prettyprint">
&lt;script src="<span alt="bower install polymer" data-tooltip="bower install polymer">platform.js</span>">&lt;/script>
&lt;link rel="import" href="<span alt="bower install polymer-ui-elements" data-tooltip="bower install polymer-ui-elements">polymer-ui-tabs.html</span>">
</pre>

<pre class="prettyprint" style="font-size:30px; line-height: 1.2;" data-lang="HTML">
&lt;polymer-ui-tabs selected="0"&gt;
  &lt;span&gt;Home&lt;/span&gt;
  &lt;span&gt;About&lt;/span&gt;
  &lt;span&gt;Contact&lt;/span&gt;
&lt;/polymer-ui-tabs&gt;
</pre>

<div class="component-demo">
<link rel="import" href="bower_components/polymer-ui-tabs/polymer-ui-tabs.html">
<output>
  <polymer-ui-tabs selected="0">
    <span>Home</span>
    <span>About</span>
    <span>Contact</span>
  </polymer-ui-tabs>
</output>

</div>

<aside class="note">
  <section>
    <p>So this is the polymer-tabs element. To load it into your application you just import the polymer-ui-tabs.html file using an html import (point out we're doing that in the top right corner) and then the element is ready to use. No setup necessary!</p>
  </section>
</aside>

---

id: polymer-ui-collapsible-demo
title: Everything is an element
subtitle: Collapsible elements

<pre class="corner prettyprint">
&lt;script src="<span alt="bower install polymer" data-tooltip="bower install polymer">platform.js</span>">&lt;/script>
&lt;link rel="import" href="<span alt="bower install polymer-ui-elements" data-tooltip="bower install polymer-ui-elements">polymer-ui-collapsible.html</span>">
</pre>

<pre class="prettyprint" style="font-size:25px;" data-lang="HTML">
&lt;polymer-ui-collapsible&gt;
  &lt;h3 class="polymer-ui-collapsible-header"&gt;Click Me!&lt;/h3&gt;
  &lt;div&gt;
    some content...
  &lt;/div&gt;
&lt;/polymer-ui-collapsible&gt;
</pre>

<div class="component-demo" style="height:100%">
<link rel="import" href="bower_components/polymer-ui-collapsible/polymer-ui-collapsible.html">
<output>
  <polymer-ui-collapsible>
    <h3 class="polymer-ui-collapsible-header" style="font-weight: bold;">Click Me!</h3>
    <p style="font-size: 18px; line-height: 1.4;">
      Realm of the galaxies at the edge of forever, made in the interiors of collapsing stars dispassionate extraterrestrial observer, rings of Uranus extraplanetary rich in heavy atoms shores of the cosmic ocean, white dwarf finite but unbounded!
    </p>
    <p style="font-size: 18px; line-height: 1.4;">
      Realm of the galaxies at the edge of forever, made in the interiors of collapsing stars dispassionate extraterrestrial observer, rings of Uranus extraplanetary rich in heavy atoms shores of the cosmic ocean, white dwarf finite but unbounded!
    </p>
  </polymer-ui-collapsible>
</output>

</div>

<aside class="note">
  <section>
    <p>Here's another example. This is polymer-ui-collapsible, which we can use to show and hide a bit of content. This is something I see people using jQuery for all the time. But with polymer-ui-collapsible there's no need to delve into JavaScript just to toggle a bit of content. Doing it in markup saves serious time!</p>
  </section>
</aside>

---

hidden: true
id: polymer-ui-toggle-button-demo
title: Everything is an element
subtitle: Toggle Button Element

<pre class="corner prettyprint">
&lt;script src="<span alt="bower install polymer" data-tooltip="bower install polymer">platform.js</span>">&lt;/script>
&lt;link rel="import" href="<span alt="bower install polymer-ui-elements" data-tooltip="bower install polymer-ui-elements">polymer-ui-toggle-button.html</span>">
</pre>

<pre class="prettyprint" style="font-size:30px; line-height: 1.2;" data-lang="HTML">
&lt;polymer-ui-toggle-button offcaption="Nope"&gt;
&lt;/polymer-ui-toggle-button&gt;
</pre>

<div class="component-demo">
<link rel="import"
  href="bower_components/polymer-ui-toggle-button/polymer-ui-toggle-button.html">

<output style="zoom: 2.5;">
  <polymer-ui-toggle-button offcaption="Nope"></polymer-ui-toggle-button>
</output>

</div>

---

hidden: true
body_class: elements-fill
content_class: flexbox vcenter

<h2>You don't have to know about their internals</h2>

---

title: Polymer Core elements
subtitle: non-visual utility elements
content_class: columns-2

<span class="bold blue">Layout</span>

`<polymer-layout>`

`<polymer-flex-layout>`

`<polymer-grid-layout>`

<span class="bold blue">View</span>

`<polymer-media-query>`

`<polymer-page>`

<span class="bold blue">Services / libs</span>

`<polymer-shared-lib>`

`<polymer-google-jsapi>`

<span class="bold blue">Data</span>

`<polymer-localstorage>`

`<polymer-xhr>`

`<polymer-jsonp>`

`<polymer-file>`

`<polymer-meta>` 

<span class="bold blue">Behavior / interaction</span>

`<polymer-signals>`

`<polymer-selector>`

<aside class="note">
  <section>
    <p>When you start working with Web Components the mind naturally goes toward UI...</p>
    <p>But there are a lot of things we already do in markup that are non-visual</p>
    <p>So we've created elements for doing things like layout, ajax, localstorage and even working with the file system. It might sound weird to think of using an HTML tag to do AJAX, but when you actually start using it you'll realize it's an *awesome* way to work.</p>
  </section>
</aside>

---

id: polymer-flex-demo
title: Everything is an element
subtitle: flexbox...using DOM

<pre class="corner prettyprint">
&lt;script src="<span alt="bower install polymer" data-tooltip="bower install polymer">platform.js</span>">&lt;/script>
&lt;link rel="import" href="<span alt="bower install polymer-elements" data-tooltip="bower install polymer-elements">polymer-flex-layout.html</span>">
</pre>

<pre class="prettyprint" style="font-size: 30px; line-height: 1.2;" data-lang="HTML">
&lt;polymer-flex-layout <b data-action="vertical">vertical</b> <b>iscontainer</b>>
  &lt;div>Header&lt;/div>
  &lt;div <b data-action="flex">flex</b>>Body&lt;/div>
  &lt;div>Footer&lt;/div>
&lt;/polymer-flex-layout>
</pre>


<div class="component-demo" style="height:100%">
<link rel="import" href="bower_components/polymer-flex-layout/polymer-flex-layout.html">
<output>
  <polymer-flex-layout vertical iscontainer title="Click me to add children">
    <div>Header</div>
    <div flex>Body</div>
    <div>Footer</div>
  </polymer-flex-layout>
</output>

</div>

<aside class="note">
  <section>
    <p>Here's an example: This is polymer-flex-layout, which contains all the functionality of CSS flexbox in an easy to use tag. Toggle the vertical attribute to lay children out horizontally. Toggle the flex attribute to make your child fill as much space as it can.</p>
    <p>This demonstrates an important point about Web Components and what you can do when you're able to extend the platform. It gives you the power to create your own things if you're not satisfied with the current implementation in the browser. Flexbox is too complicated so why not make it easier.</p>
  </section>
</aside>

---

hidden: true
id: polymer-ajax-demo
title: Everything is an element
subtitle: AJAX...using DOM

<pre class="corner prettyprint">
&lt;script src="<span alt="bower install polymer" data-tooltip="bower install polymer">platform.js</span>">&lt;/script>
&lt;link rel="import" href="<span alt="bower install polymer-elements" data-tooltip="bower install polymer-elements">polymer-ajax.html</span>">
</pre>

<pre class="prettyprint" style="font-size:25px;">
<b>&lt;polymer-ajax url="http://gdata.youtube.com/feeds/api/videos/"
              params='{"q":"chrome", "alt":"json"}'>
&lt;/polymer-ajax></b>
</pre>

<pre class="prettyprint" data-lang="JS" data-run-demo>
var ajax = document.querySelector('polymer-ajax');
ajax.addEventListener(<b>'polymer-response'</b>, function(e) {
  console.log(JSON.parse(<b>this.response</b>).feed.entry);
});
<b>ajax.go();</b>
</pre>

<div class="component-demo">
<link rel="import" href="bower_components/polymer-ajax/polymer-ajax.html">
<output><div>Hit run...</div></output>
</div>

<aside class="note">
  <section>
    <p>We have link tags and script tags which pull in external resources...</p>
    <p>Elements are composable</p>
  </section>
</aside>

---

hidden: true
content_class: flexbox vcenter

<h2>They're easy to add to your project</h2>

---

class: fill
body_class: paper-elements
content_class: flexbox vcenter hcenter

<h2 class="centered" style="font-size: 55px; letter-spacing: 0;">Paper elements</h2>

<aside class="note">
  <section>
    <p>More stylized.
Push the envelope and expand what we expect on the web
Animation and spatial relationships</p>
  </section>
</aside>

---

id: paper-checkbox
body_class: paper-checkbox
content_class: flexbox hcenter

<div class="pull-left flexbox vcenter" style="height: auto;">
<pre class="prettyprint" font-size:25px;>&lt;paper-checkbox>&lt;/paper-checkbox></pre>
</div>

<div class="pull-right flexbox vcenter" style="width: 60%;">
  <img src="images/polymer/paper/checkbox.gif" style="width:100%">
</div>

<aside class="note">
  <section>
    <p>That means we’ve taken things like the typical input checkbox…
And reimagined it for 2014
We call this a paper-checkbox
Fluid animations and the ink effects to denote pointer activity.</p>
</section>
</aside>

---

id: paper-ripple
body_class: paper-ripple
content_class: columns-2
title: &lt;paper-ripple>
subtitle: A reactive ink effect for indicating touch and mouse actions

<div style="height: 100%;">
<pre class="prettyprint" font-size:25px;>&lt;div class="card">
    &lt;img src="science.svg">
    &lt;paper-ripple fit>&lt;/paper-ripple>
&lt;/div></pre>
</br>
</br>
</br>
</br>
</br>
</br>
</div>

<div style="width: 61%;">
  <img src="images/polymer/paper/ripple.gif" style="width:100%">
  <img src="images/polymer/paper/ripple.png" style="width:100%">
</div>

<aside class="note">
  <section>
    <p>Cool reactive ink effect to indicate a touch or mouse action
I’ve just nested it inside of a regular div
This can be a simple drop-in to give your elements more visual punch
</p>
</section>
</aside>

---

id: paper-shadow
body_class: paper-shadow
title: &lt;paper-shadow>
subtitle: A dynamic shadow for conveying z-depth and spatial relationships
content_class: flexbox hcenter

<div class="pull-left" style="height: auto;">
<pre class="prettyprint" font-size:25px;>&lt;div class="card">
    &lt;paper-shadow z="5" animated>
    &lt;/paper-shadow>
&lt;/div></pre>
</div>

<div class="pull-right flexbox vcenter" style="width: 60%;">
  <img src="images/polymer/paper/shadow.gif" style="width:100%">
</div>

<aside class="note">
  <section>
    <p>Give developers the ability to create realistic shadows
Set a visual z-depth
Make your elements spring to life. Actually two shadows.
</p>
</section>
</aside>

---

class: nobackground fill
body_class: topeka-slide
content_class: flexbox vcenter hcenter

<a href="http://polymer-project.org/apps/topeka/"><img src="images/slides/topekaslide.png"></a>

<aside class="note">
  <section>
    <p>Topeka is our flagship. Demonstrates core and paper.
Animations created with core-animated pages.
Can do really powerful stuff with it.</p>
  </section>
</aside>

---

id: creating-elements
title: Creating <label class="core">elements</label>
subtitle: <a href="http://www.polymer-project.org/polymer.html" class="nounderline">polymer-project.org/polymer.html</a>
class: nobackdrop nobackground segue core polymer-diagram
#content_class: flexbox vcenter
keep_content: true

<div id="blocks-3d" class="in" style="top: 10%;">
  <img id="native-3d" class="block-3d" src="./images/polymer/diagram/native.svg">
  <img id="platform-3d" class="block-3d" src="./images/polymer/diagram/platform.svg">
  <img id="polymer-3d" class="block-3d" src="./images/polymer/diagram/polymer.svg">
  <img id="elements-3d" class="block-3d" src="./images/polymer/diagram/elements.svg">
</div>

<aside class="note">
  <section>
    <p>We've talked a bit about using elements, now let's look at how you can create your own elements. Polymer is going to make this really easy for you!</p>
  </section>
</aside>

---

body_class: core-fill
content_class: flexbox vcenter

<h2 class="faded"><em>Declarative</em> element registration</h2>

<aside class="note">
  <section>
    <p>The declarative syntax that Polymer enables makes it super simple to start defining your own tags.</p>
  </section>
</aside>

---

id: declarative-registration
title: Declarative registration
#subtitle: Declarative registration

<pre class="corner prettyprint">
&lt;link rel="import" href="<span alt="bower install polymer" data-tooltip="bower install polymer">polymer.html</span>">
</pre>

<pre class="prettyprint" style="font-size:30px; line-height: 1.2;" data-lang="HTML">
&lt;polymer-element name="my-element" <b>noscript</b>&gt;
  &lt;template&gt;
    &lt;style&gt;h2 { color: orange; }&lt;/style&gt;
    &lt;h2&gt;Hello from my-element!&lt;/h2&gt;
  &lt;/template&gt;
&lt;/polymer-element&gt;
</pre>

<pre class="prettyprint" style="font-size:30px; line-height: 1.2;" data-lang="HTML">
&lt;my-element&gt;&lt;/my-element&gt;
</pre>

<div class="component-demo">
  <output style="display: block; padding: 10px;">
    <my-element></my-element>
  </output>
</div>

<aside class="note">
  <section>
    <p>This is a Polymer element definition. It's important to indicate that the name attribute must have a dash in it. That's to prevent future versions of HTML from stepping on your tag.</p>
    <p>Anything inside of the template will be stamped out when the parser sees your new tag</p>
    <p>Note that the style tag is *not* affecting the h2 at the top of the slide that says "Declarative Registration". That's because the styles are scoped by the Shadow DOM</p>
    <p>Mention noscript. That attribute tells Polymer that you're not including any JavaScript with your element.</p>
  </section>
</aside>

---

id: declarative-registration-proto
title: Declarative registration
#subtitle: Declarative registration with prototypes

<pre class="corner prettyprint">
&lt;link rel="import" href="<span alt="bower install polymer" data-tooltip="bower install polymer">polymer.html</span>">
</pre>

<pre class="prettyprint" style="font-size:30px; line-height: 1.2;" data-lang="HTML">
&lt;polymer-element name="hello-element"&gt;
  &lt;template&gt;
    &lt;h2&gt;I can say hello&lt;/h2&gt;
  &lt;/template&gt;
  &lt;script&gt;
  Polymer('hello-element', {
    sayHello: function() { alert('Howdy folks!'); }
  });
  &lt;/script&gt;
&lt;/polymer-element&gt;
</pre>

<div class="component-demo">
  <output style="display: block; padding: 10px;">
    <hello-element></hello-element>
  </output>
</div>

<aside class="note">
  <section>
    <p>If you do want to include JavaScript with your element you can omit the noscript attribute and include a script tag that calls the Polymer constructor.</p>
    <p>The Polymer constructor requires that you pass in your element's name, and a protoyper object. Properties and methods that you add to this prototype object are available on every instance of your new tag.</p>
    <p>In this example I've added some code to the page that listens for click events and calls target.sayHello().  (click on the elements)</p>
    <p>So easy to create an API for your element... but I want to add some data to this thing!</p>
  </section>
</aside>

---

id: polymerurl
class: nobackdrop nobackground yum do-transition
content_class: flexbox vcenter centered

<div class="build">
<h2><a href="http://polymer-project.org"><span class="elements">polymer</span><span class="hide">-</span><span class="core">project</span><span class="hide">.</span><span class="platform">org</span></a></h2>
</div>

---

---

class: fill nobackdrop nobackground yum do-transition
body_class: md
content_class: flexbox vcenter

<h2 class="centered" style="font-size: 55px; letter-spacing: 0; color: #515151;">Material Design</h2>

<h3 class="centered" style="line-height: 1.25; width:70%">Design is the art of considered creation. Our goal is to satisfy the diverse spectrum of human needs. As those needs evolve, so too must our designs, practices, and philosophies.</h3>

<aside class="note">
  <section>
    <p>Google design guidelines</p>
  </section>
</aside>

---

title: Introduction
content_class: flexbox vcenter

<h3 style="line-height: 1.25;">We challenged ourselves to create a visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science.</h3>

<img class="topmargin" src="images/polymer/md/intro1.png" style="width:100%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

title: Introduction
content_class: flexbox vcenter

<h3 style="line-height: 1.25;">To develop a single underlying system that allows for a unified experience across platforms and device sizes. Mobile precepts are fundamental, but touch, voice, mouse, and keyboard are all ﬁrst-class input methods.</h3>

<img class="topmargin" src="images/polymer/md/intro2.png" style="width:100%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

class: fill nobackdrop nobackground
body_class: principles
content_class: flexbox vcenter

<h2 class="centered" style="font-size: 55px; letter-spacing: 0;">Principles</h2>

<aside class="note">
  <section>
    <p></p>
  </section>
</aside>

---

title: <b>1. </b>Material is the metaphor
content_class: flexbox vcenter

<h3 style="line-height: 1.25;">A material metaphor is the unifying theory of a rationalized space and a system of motion. The material is grounded in tactile reality, inspired by the study of paper and ink, yet technologically advanced and open to imagination and magic.</h3>

<img class="topmargin" src="images/polymer/md/pr1.png" style="width:100%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

title: <b>2. </b>Tangible surfaces
content_class: columns-2

<h3 style="line-height: 1.25;">Surfaces and edges of the material provide visual cues that are grounded in reality. 
<br/><br/>
The use of familiar tactile attributes helps users quickly understand affordances. 
<br/><br/>
Yet the flexibility of the material creates new affordances that supercede those in the physical world, without breaking the rules of physics.</h3>

<img src="images/polymer/md/pr2.png" style="width:100%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

title: <b>3. </b>Dimensionality affords interaction
content_class: flexbox vcenter

<h3 style="line-height: 1.25;">The fundamentals of light, surface, and movement are key to conveying how objects move, interact, and exist in space in relation to each other. Realistic lighting shows seams, divides space, and indicates moving parts.</h3>

<img class="topmargin" src="images/polymer/md/pr3.png" style="width:100%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

title: <b>4. </b>One adaptive design
content_class: flexbox vcenter

<h3 style="line-height: 1.25;"><br/>A single underlying design system organizes interactions and space. Each device reflects a different view of the same underlying system. Each view is tailored to the size and interaction appropriate for that device. Colors, iconography, hierarchy, and spatial relationships remain constant.</h3>

<img src="images/polymer/md/pr4.png" style="width:100%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

title: <b>5. </b>Bold, graphic, intentional
content_class: columns-2

<h3 style="line-height: 1.25;">Bold design creates hierarchy, meaning, and focus. 
<br/><br/>
Deliberate color choices, edge-to-edge imagery, large-scale typography, and intentional white space create immersion and clarity.
</h3>

<img src="images/polymer/md/pr5.png" style="width:100%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

title: <b>6. </b>Emphasize actions
content_class: flexbox vcenter

<h3 style="line-height: 1.25;">User action is the essence of experience design. The primary actions are inflection points that transform the whole design. Their emphasis makes core functionality immediately apparent and provides waypoints for the user.</h3>

<img class="topmargin" src="images/polymer/md/pr6.png" style="width:100%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

title: <b>7. </b>User-initiated change
content_class: flexbox vcenter

<h3 style="line-height: 1.25;">Changes in the interface derive their energy from user actions. Motion that cascades from touch respects and reinforces the user as the prime mover.</h3>

<img class="topmargin" src="images/polymer/md/pr7.png" style="width:100%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

title: <b>8. </b>Animation choreography
content_class: columns-2

<h3 style="line-height: 1.25;">All action takes place in a single environment. 
<br/><br/>
Objects are presented to the user without breaking the continuity of experience even as they transform and reorganize.
</h3>

<img src="images/polymer/md/pr8.png" style="width:100%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

title: <b>9. </b>Motion provides meaning
content_class: flexbox vcenter

<h3 style="line-height: 1.25;">Motion is meaningful and appropriate, serving to focus attention and maintain continuity. Feedback is subtle yet clear. Transitions are efﬁcient yet coherent.</h3>

<img class="topmargin" src="images/polymer/md/pr9.png" style="width:100%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

class: fill nobackdrop nobackground
body_class: dos
content_class: flexbox vcenter

<h2 class="centered" style="font-size: 55px; letter-spacing: 0;">Noteworthy do's and don'ts</h2>

<aside class="note">
  <section>
    <p></p>
  </section>
</aside>

---

title: Authentic motion
content_class: columns-2

<h3 style="line-height: 1.25;">
UI elements are locked behind a layer of glass. Visual and motion cues help bridge that gap by immediately acknowledging input and implying direct manipulation.
<br/><br/>
<b>Mass and weight</b>
<br/><br/>
Not all objects move the same way. 
<br/><br/>
Entering the frame at peak velocity.
</h3>

<video id="vid1" loop width="738" height="269" autoplay>
<source src="video/videos-authenticMotion_massAndWeight_ex3_do_large_xhdpi.webm" type="video/webm">
<source src="video/videos-authenticMotion_massAndWeight_ex3_do_large_xhdpi.mp4" type="video/mp4">
</video>

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

title: Responsive interaction
content_class: columns-2

<h3 style="line-height: 1.25;">It is thoughtful and purposeful, not random, and can be gently whimsical but never distracting. It encourages deeper exploration of an app: what will happen if I touch this?
<br/><br/>
From the contact point, make the visual reaction <b>radial</b>.
<br/><br/>
The material itself can also respond to interaction: <b>lift on touch</b>; <b>point of origin</b>.
</h3>

<video id="vid2" loop autoplay width="360" height="405">
<source src="video/animation-responsive-surfaceresponse-pointorigin-do_example_large_xhdpi.webm" type="video/webm">
<source src="video/animation-responsive-surfaceresponse-pointorigin-do_example_large_xhdpi.mp4" type="video/mp4">
</video>

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>


---

title: Meaningful transitions
content_class: columns-2

<h3 style="line-height: 1.25;">Visual Continuity: Think about how the users attention should be directed. What elements and motions support that goal? <b>Emphasize, persist or re-introduce</b>.
<br/><br/>
Hierarchical Timing: Ensure that motion supports the information <b>hierarchy</b>; that is, it conveys to the user what content is most important by creating a path for the eye to follow.
<br/><br/>
Consistent Choreography: <b>Avoid linear spatial paths</b>.
</h3>

<video id="vid3" loop autoplay  width="360" height="422">
<source src="video/meaningfultransitions-consistentchoreography_do1_large_xhdpi.webm" type="video/webm">
<source src="video/meaningfultransitions-consistentchoreography_do1_large_xhdpi.mp4" type="video/mp4">
</video>

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>


---

title: Color
content_class: flexbox vcenter

<h3 style="line-height: 1.25;">
Color is inspired by <b>bold color</b> statements juxtaposed with <b>muted environments</b>, taking cues from contemporary architecture, road signs, pavement marking tape, and sports courts. Emphasize bold shadows and highlights. Introduce unexpected and vibrant colors. Use imagery that expresses personal <b>relevance</b>, information and delight.
</h3>

<img class="topmargin" src="images/polymer/md/colorstory.png" style="width:100%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

title: Layouts and paper craft
content_class: columns-2

<h3 style="line-height: 1.25;">
<b>Seams and steps</b>.
<br/><br/>
Toolbars can be statically on top, 'waterfall'; be pushed, or covered.
<br/><br/>
A floating action can <b>straddle</b> a step if it relates to the content of the paper creating that step.
</h3>

<img src="images/polymer/md/toolbar1.png" style="width:80%">
<img src="images/polymer/md/floatingpoint.png" style="width:80%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>


---

title: Font
content_class: flexbox vcenter

<h3 style="line-height: 1.25;">
<b>Roboto</b>
</h3>

<img class="topmargin" src="images/polymer/md/font.png" style="width:100%">

<aside class="note">
  <section>
    <p>
</p>
</section>
</aside>

---

class: fill nobackdrop nobackground yum do-transition
body_class: step
content_class: flexbox vcenter

<h2 class="centered" style="font-size: 55px; letter-spacing: 0; color: #515151;">This is Material Design.</h2>
<br/><br/>
<h2 class="centered" style="font-size: 55px; letter-spacing: 0; color: #515151;">This is our first step.</h2>


<aside class="note">
  <section>
    <p></p>
  </section>
</aside>

---

class: nobackground fill
body_class: vid

<google-youtube
  videoid="Q8TXgCzxEnw"
  fluid="true"
  rel="0"
  start="5"
  autoplay="0">
</google-youtube>

<aside class="note">
  <section>
    <p>Topeka is our flagship. Demonstrates core and paper.
Animations created with core-animated pages.
Can do really powerful stuff with it.</p>
  </section>
</aside>

---

class: fill nobackdrop nobackground yum do-transition
body_class: step
content_class: flexbox vcenter

<h2 class="centered" style="font-size: 55px; letter-spacing: 0; color: #515151;">Imagine, Create, Iterate.</h2>

<aside class="note">
  <section>
    <p></p>
  </section>
</aside>

---