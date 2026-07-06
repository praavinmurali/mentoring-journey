# Daily Progress Log — Day 02

**Date:06 July 2026
**Epic & Task:** P1.3-D1 — CSS Basics + Selectors + Box Model (S6 + S7)
**Day segment (if multi-day task):** Seg 1 of 2 · GitHub Issue #145 (OPEN by design)

---

## What I completed today
prompt:
Act as a senior software engineer, technical educator, and documentation writer.
Read the transcript and create concise study notes that answer only the lesson questions provided.

Requirements:

* Extract only the important concepts related to the lesson questions.
* Ignore introductions, repetition, filler words, and promotional content.
* Rewrite the content in clear, beginner-friendly language.
* Do not add information that is not present in the transcript.
* Organize the notes using valid GitHub Markdown (`.md`).

Use this structure:

```markdown
# Lesson Title

## Definition

## Key Concepts

## Important Terms

| Term | Meaning |
|------|---------|

## Workflow / Process (if applicable)

## Key Takeaways

- Point 1
- Point 2
- Point 3

## Quick Revision

- Short revision points
```

Return **only valid Markdown** that can be copied directly into a `.md` file.

#############################################################################
Act as a senior software engineer, technical educator, and documentation writer.
Read the transcript and create concise study notes that answer only the lesson questions provided.

Requirements:

* Extract only the important concepts related to the lesson questions for the following ,
L1: Full Meaning of CSS
L2: CSS Brief History
L3-L5: CSS Syntax — Inline, Internal, External methods
L6: Introducing MDN — Official Web DocumentationUse this structure:
L1: Universal, ID, Class selectors
L4: Group and Type-Attribute selectors
L6: Descendant selector
L9: CSS Specificity
L11: CSS Selector Practice Project
L12: CSS Box Model


```markdown
# Lesson Title

## Definition

## Key Concepts

## Important Terms

| Term | Meaning |
|------|---------|

## Workflow / Process (if applicable)

## Key Takeaways

- Point 1
- Point 2
- Point 3

## Quick Revision

- Short revision points
```

Return **only valid Markdown** that can be copied directly into a `.md` file.






course transcript:


Welcome to this section where we are going to talk about CSS.

Now that we are done with the HTML, that is a foundation.

It is time for us to make things happen to make our site look more beautiful.

This is where CSS comes in.

So let's understand what is CSS.

CSS stands for Cascading Style Sheet and it controls the look and feel of our web pages or website,

which includes layouting or positioning, styling, fonts, and others.

But let's understand this part.

The first one is the Cascading Style and sheet.

Let's use this diagram to understand more.

Let's begin with the cascading part.

What does it mean?

This one refers to the way CSS applies styles based on their specificity and order.

This means that when multiple styles target the same element, the cascade determines which styles take

precedence.

For example, style is defined directly within an element, and that is, inline styles may override

styles in a separate stylesheet.

The cascade allows us to apply more specific rules when necessary.

This means that when it comes to applying CSS to HTML, we have a couple of options, either to use

inline or external.

Let's say that we want to style an element called h1 to color blue, and the first method is that we

are using the inline and we will say that color is equal to blue.

And when using the external sheet we are saying that the color is equal to red.

As you can see, we have two CSS properties that is color blue and color red on one element and one

property should apply.

So which of these will have effect on the element that we want to style.

So at this point the cascading part here is that it is going to determine which rule should apply.

That is a cascading part.

Don't worry.

As you move on, you better understand this in case it looks confusing.

The next part is the style.

What does it mean?

These are the actual rules or the instructions that detect how HTML elements are presented.

And CSS defines various properties like color, font, margin that control the look and feel of a site.

And the part here refers to the external or internal files where the CSS rules are stored.

A sheet is essentially the document or the section of the document containing the style information

which is applied to the HTML element.

So in summary, Cascading Style Sheets are rules applied in a specific order, and that is a cascade

to define the appearance or style of web pages, usually written in an external or internal sheet.

With this one being said in the next video, I will show you how we're going to use CSS in HTML.






Before we get into CSS, let's see some brief history when it comes to CSS.

And CSS has got a huge transition from 1990 up to now.

So let's begin with the early web design.

And that is from 1990 up to 1996.

This is when the World Wide Web was first created by Tim Berners Lee in the early 90s, and web pages

were styled using plain HTML tags with very limited options for controlling the layout, fonts or colors,

and these tags include the B, the italic, and font.

But these approaches cluttered the HTML document and lacked separation between structure and design.

During this time, there were limited way for styling in HTML.

Therefore, there is a need for CSS.

So as website grew in the complexity, there were clear need for mechanism to separate content.

And that is the HTML from presentation and that is the design.

And this one lead to proposal of CSS in 1996.

That was the introduction of CSS.

So the first version of CSS is CSS one.

And that is in the year 1996.

So CSS was officially proposed by Hakon Wium Lie in 1994 while he was working with Tim Berners-Lee at

CERN.

The first specification of CSS one was published by the World Wide Web Consortium, and that is the

W3C in December 1996, so CSS one allowed programmers to control fonts, text, color, spacing, margin,

and borders, but it was limited in scope, and in the year 1998 up to 2000, we had evolution and expansion

of CSS.

CSS two was released in May 1998.

It added new features such as positioning, for example, absolute relative fixed media types, for

example screen print, and improved support for table layout and z indexing, and this marked the beginning

of more complex web design possibilities.

At this time we had what is called browser wars, and that is in the late 1990s up to early 2000.

During this period, browsers like Internet Explorer and Netscape Navigator competed to implement CSS,

but inconsistencies in how they interpreted the standard led to the frustration for developers, and

this was known as the browser Wars, and in the year 2004, we had CSS 2.1, and it was introduced as

a revision of CSS two.

In 2004, addressing the ambiguities and removing unused features, and this version became the foundation

for modern web design and remains the recommended version for a long time.

Due to the browser inconsistencies with CSS three, and in the year 2011 up to now, we had a great

search.

We had the CSS three and this one was introduced significant improvements such as modules Jews to break

the specification into smaller sections that could be updated individually.

For example, select text box model backgrounds and Css3 introduced features like animations and transitions

for creating dynamic visual effect.

We also have flexbox for flexible box layout and grid.

Media queries and others.

We also have browser standardization by 2010, and most browsers like Chrome, Firefox, Safari, Edge

became better at supporting CSS standards, consistently leading to a smoother development experience.

But lucky for us, in the recent advancement in 2020, we had CSS grid and flexbox, CSS variables,

modern features, and others.

So this is a brief history when it comes to CSS.





Let's look at the syntax when it comes to CSS and it follows the following steps.

Step number one is what we call the selector, which means which kind of elements that we want to style.

So we have to select that element or tag.

This is what we call the selector.

For example the h1.

After that we move on to the property about the element that we want to change or style.

An example of these properties are color, background color, height, weight, padding, margin, and

others.

And then we have the value.

For example, if I want to change the color, the property is the color and the value can be red, blue

or green depending on my need.

So always we need to select the element that we want to style.

When it comes to selecting of elements, we have different options.

The first one is element select, which means that we select the element by the tag name, and then

the property and then the value.

At this point we know the syntax.

Now let's see the couple of ways that we can use to style our element.

And we have three options.

The first one is the inline CSS, which means that we are going to write the CSS inline with the HTML.

And for this approach it is not recommended simply because we don't have separation of concern.

Let's say we have huge CSS lines of code.

Likewise, in HTML it will make our code hard to read and maintain.

The next option is the internal CSS.

In this case, we are going to separate the CSS from the HTML itself, but it will be on the same file.

I will show you how to use this one.

And lastly the external.

Let's begin with the inline CSS.

I'm going to have a folder called CSS guide.

And you can name it whatever you want.

I'm going to open this in my editor here.

Let me increase the zoom level.

We are going to use the inline method.

So first of all let me have a subfolder called inline CSS.

You can name it whatever you want.

And before that unless we have our HTML file in this case this one.

Let me scaffold some simple HTML here, and let me change this one to inline CSS in the body.

Here I'm going to have h1 as inline CSS.

And let me have p tag and have this content.

And one more p tag with this and a link tag that says that click me.

Let me preview this.

And this is what we have.

Now it's time for us to style this HTML.

So using the inline method we are going to start it inline with the HTML.

So as a rule or the syntax of CSS, we need to select the element that we want to style.

Since we are using the inline we are going to target the particular element or the tag.

In this case this H1.

So in here for the opening tag, we provide what is called style equal to either single quotes or double

quotes.

But I prefer to use double quotes for this one.

And then here comes the property.

As you can see with VS code, I have all these properties that I can apply on my H1 or any element.

Let me change the color bring column and then the value.

I'm going to use blue and make sure to bring semicolon with this one.

If I save it I have the color being blue.

I can add multiple properties to do that.

Bring semicolon.

Then the next property I'm going to use text align.

As you can see for the properties, in case they are two words, it is being separated by dash.

So for the text align it is this.

And then the value we have either center and left and others.

I'm going to use center before saving it.

As you can see, the inline is not at the center of the page if I save it.

Indeed it has been centered, I can apply multiple properties.

Let's say that I want to add one more property called padding.

And padding is a space between the content and its border.

We have a video to talk about box model where we will discuss this one intensively.

So for padding I'm going to provide the value.

So here I'm going to use 20 and px which means pixels.

Now as you can see we have more spacing between this.

And then this content there is a padding.

And let me transform this text to uppercase.

And we have a property for it.

Bring semicolon and then text transform which is this one.

And we have capitalized lowercase uppercase and others.

I'm going to use uppercase as you can see.

So assuming that I'm done with the h1 the next one is let's say I want to apply some style to the entire

body, meaning that it will be affected by this element.

So to do that on the body here, I have some space and bring style.

And let me have more space here.

And then the first property here I'm going to use background color.

If I say red now let's see as you can see, the entire of my background is red.

If I change this one to yellow.

Indeed it is yellow.

And I can use the color picker as well.

Let me change this one to a different color.

By using hashtag f0 f0 f0 for white.

And this is what we have.

And I can change the font family.

So bring semicolon here and then use font dash family.

And I can choose any of these.

For example this one and the font has been changed.

As you can see it has applied to this element meaning that it has been cascaded.

And let me have some padding around my content.

I'm going to say 26 and I have some padding around my text and assuming that I'm done with the body

here.

Let's say I want to style this P.

I'm going to provide style and a property called line height for the line height.

The value is without a unit.

So if I say 1.6 let me see the line height.

As you can see, the height between the lines.

If I increase it to something like eight, let's see.

And we have huge line height.

Let me change it back to 1.6.

Let me have some margin.

Don't worry, we have a video to talk about box model where we will talk about margin padding and others.

Select margin bottom.

I'm going to use 15 pixels.

That is a unit.

And for this p tag I'm going to provide a style by using color equal to blue and then semicolon.

Let me make the font bold.

Let's save it.

And I want to bold this one.

To do that we use a property called font weight.

And in here we can use a value or bold boulder lighter normal or this one.

So let me select the bolder.

And indeed it has been bolded.

And for the link tag which is the A, I can also apply some styling.

Let's say the background color.

I'm going to use blue for this one.

Let me see.

And we have it as that.

Let me change the color.

As you can see it is black.

So bring Semicolon and color.

Use white.

Indeed it is white.

But let me have some space between the text and it border.

This is where padding comes in.

I'm going to use padding of say, ten pixels, for example.

All right.

This is just for demonstration.

And after that let me have text decoration.

As you can see here that we have this underline.

And I want to avoid that.

And to do that bring none for text decoration.

And indeed it has been removed.

I want to apply some border around this.

This is where a property called border comes in and that is border radius.

I'm going to use five parsecs.

Let's see.

And we have some border around it.

So this is how we use the inline CSS or styling.

As you can see for this approach, even though we got what we want, assuming that we have huge lines

of HTML, and unless we style them individually by always using style, style, style and one element

can have a lot of CSS properties.

So for this one we are not obeying the dry principle.

And that is, don't repeat yourself.

And assuming that we have many HTML files, and let's say in future we want to change some CSS properties

unless we go through each of the files and locate where we want to make the changes.

So this approach is for testing purposes, but in production this is not the ideal way.

In the next video, I will show you how we can refactor this one to use the internal CSS.






The next method of using CSS in HTML is to use the internal CSS.

This is going to be an improvement when using the inline CSS.

Because of that, we are going to refactor this one to use internal.

I'm going to make a copy of it and rename this one to internal CSS.

Let me open this one instead.

So how to use the internal.

To use the internal we are going to write it in the head tag.

So I can start from here or even here.

It must be within the head tag.

So I'm going to provide a comment as internal CSS and it goes like this.

Drink style as opening and closing.

Next step is that we are going to select the element that we want to style.

So in this code let's begin with the body.

So our target the body here for this approach for selecting we are using the tag names.

So in here I'm going to select the body here.

And then curly braces as that.

Here comes the property and then the value.

Let me cut this one from here and let me place it here.

We are going to use it as a roadmap.

Let me comment that.

And this is how you comment in HTML.

As you can see we don't have the font family and then the background color being applied.

So in here we bring in the property name in this case the background color.

If I say yellow let's see.

Indeed it has been applied instead of yellow.

We use this value as f0 f0 which is this one.

After that you're going to have the padding.

The padding.

We use 20 for this, one for the internal.

Make sure to bring the semicolon and then the next one I'm going to say font Family.

And I used this one.

Let me check.

Yeah I used this one for the internal.

And we have the CSS being applied.

So I can now remove this one from here.

Next one is going to be the h1.

For the h1 we use color blue text align and then the text transformation.

So let me remove the CSS from here for the h1.

And the CSS is gone.

Now to be able to style the h1 I'm going to select it.

So here I will type in the h1.

Then my curly braces.

Here comes my property and then the value.

So I'm going to give it a color of blue.

Now we have it as blue.

And then text align center.

It has been centered and then text transform is uppercase.

It has been applied.

I can also include font weight.

And as we saw I'm going to use bolder for this one.

And it has been applied.

So now I'm done with the H1.

I want to style the p tag.

I'm going to remove the CSS from here.

And then I'm going to select the p tag here or the element and then my curly braces.

Line height.

I chose 1.6 which is this what we have.

And I can have some margin or even a color.

Let me say for this one I'm going to use red and it has been applied.

The next one is the second P which is this.

I'm going to remove this one from here.

And then I'm going to style the link, which is this I'm going to remove the CSS also from here.

And to style the A, select the a curly braces.

And I'm going to use background color of blue and then padding of ten pieces.

Let me see.

All right.

And the color to white.

And then text decoration to none.

All right.

And lastly the border that is border radius as ten pixels.

All right.

So as you can see for the internal it is an improvement of the inline.

For this one we have separation of concern.

It looks cleaner than the internal.

So let's say in future I want to make changes I know where I'm going to look for, in this case in the

style tag.

Let me take this opportunity to re-explain when I say cascade and that is a rule.

Look at this one.

We have two pieces here this one and this one.

As you can see, they are all red.

But for the last one, if I say style and color is equal to blue.

Now let's see, we have it as blue.

In this case we have the same element being selected in this case p here for the inline and then p here

for the internal.

So which rule should apply.

Is it the color red or the color blue.

As you can see we have the color blue.

This means that it has been cascaded which means which of these ones has the highest precedence.

Always the internal CSS has the superpower to apply to the element.





The last method of using CSS in HTML is the external.

Let's get back to Visual Studio Code to put them into practice.

We are also going to make an improvement to the internal one.

I'm going to make a copy change this one to external CSS.

Let me change this one to external.

I forgot to change it.

This one also to

external.

And then for the internal change this one to internal.

It doesn't make any changes though.

All right.

So for the external it is going to be an improvement when it comes to the inline and then the internal

for the external we are going to have a different file for the CSS.

So I'm going to have a file and you can name it whatever you want.

But mostly we use styles.

And then the extension as dot CSS.

So now I have my CSS file and it goes like this.

Let's say that in my HTML I want to style the H1 as you wrote in the internal is going to be the same

thing.

We make the selection or the selector as h1 and use color is equal to something like blue.

So I have this CSS.

I want to use it in the HTML.

At this point these two files are independent.

They don't know each other.

So how can we link the CSS to the HTML?

So let's get into the HTML here.

And to link it I'm going to add a comment as external CSS to link it.

Type link and enter.

We have an attribute called rel and that is a relationship which is a stylesheet.

And then the href is going to be where can it locate the file.

In this case type CSS and now we have connected the external to our HTML.

I'm going to remove everything in the style.

I'm going to cut it from here.

And let's see.

And we have the color being blue which is this one.

So I'm going to paste what I just copied and remove the style and also remove this style.

And we have it as before for this approach.

This is the most recommended approach because we have separation of concern.

And this is going to help us to quickly make changes to our HTML.

And in case we have a lot of the HTML pages, we can create a different CSS file for a different CSS

page.

Assuming that I have about dot HTML, then for each CSS, I can say about dot CSS and all the CSS for

the about will be on the about dot CSS.

So this is the method that we are going to use often.

And this is the most recommended one.







I present to you modern documentation and that is Mozilla Developer Network.

And this is the official website for HTML, CSS and JavaScript resources.

So in this video I'm going to show you this website how to use it.

And we will take advantage to explore most of the CSS properties.

At the moment we've learned few of these CSS properties.

So let's visit Google and search for MDN which is this one.

Or better still, you can go to developer dot.

mozilla.org.

So in here we have the references for HTML, CSS, JavaScript, HTTP, APIs and others.

So if you click on the HTML they have well structured documentation where you can learn more about HTML.

Let's say you are looking for CSS.

You can also do that.

Likewise JavaScript at the moment.

Let's explore the CSS.

So click on the CSS.

So in here they have step by step guidance.

How to use CSS.

But in case you want a quick reference then click on the references and then click on the CSS.

And then on the left side here scroll up and then click on the reference.

What you are looking for is the CSS properties.

So scroll up.

And in here they have categorized the properties into alphabetical order.

So under a we have active and others.

Let's locate B.

We also have background background attachment clip and others.

And if you get to see we have what is called clip color and others.

So let's explore the color.

If I click on that on the right side here we have quick links.

For example if I click on try it.

In here we have a beautiful playground where we can explore it.

Let's say that I want to change this color from purple to red.

If I type it, as you can see, I got the effect.

And then if I want to look at the syntax click on that.

And this is a syntax with key and value.

The key here is the color.

And the value is your preferred color.

And for the accessibility we also have it.

Formal definition.

Former syntax examples specifications and browser compatibility.

Note that not all browsers support some CSS properties, so if you want to check if a browser supports

a certain CSS property, then click on the browser compatibility.

And in here we have the various browsers Chrome, edge, Firefox, opera, Safari and others.

And as you can see, they all support that.

So guys this is how you can explore more about the CSS properties.

Now the question is are you supposed to remember all the CSS properties?

The answer is no and that is with practice.

All these properties will be easy for you to remember and when to use it.






CSS selector.

What does it mean?

It simply means that it is a way of selecting an HTML element to style.

Let's assume that this is our HTML website and each of the leaves represent the element.

It can be h1, p tag or a link.

Let's assume that I want to change this color to red.

So first step is that I have to select that.

And after selecting I can use any CSS properties on it.

And for selecting the element we have couple of options or methods to choose from.

So let's see this diagram to explain what is called the CSS selectors.

Let's assume that I want to select one of these guys over here and change the t shirt color to red.

So first step is that I have to select that before applying the CSS properties.

And like I said, that when it comes to selecting of the HTML element to style, we have a couple of

options.

The first one is called universal Selector, and this one selects all the elements in a document and

apply the CSS properties to it.

And let's use this diagram to explore more.

Let's say that this is our universal selector, and the veggies or the flowers are our HTML element.

So in this case, if I want to water all of them, I'll pour the water on the flowers or the veggies.

This is what we call the universal selector, meaning that this CSS properties are applying to each

of these flowers in the garden.

And mostly we use margin equal to zero and padding equal to zero in the universal selector.

And this one helps us to reset what is called browser default stylesheet.

What do I mean?

This simply means that by default, all browsers inject some CSS to the HTML element if not specified.

That is why by default, if you have an HTML element like this without any CSS, we have this spacing

around it.

Likewise, this and this CSS is not written by us, but instead it is a browser injecting that CSS to

show where it is.

Let's right click and then click on the inspect and then click on the element.

And this is our HTML of which we are going to write it.

If I click on the h1 in here we have what is called User-agent stylesheet.

This means that these are the CSS being injected to our HTML element by the browser.

So mostly we use the universal selector to reset this one.

And in here we can override these properties.

Let's say that I want to change the color to red.

I'm going to apply color and I will say red.

As you can see I have overwritten the default stylesheet.

And we can remove it completely using the universal selector.

And we will get there very soon.

Apart from the universal selector we also have what is called ID selector, and we use this one to select

a specific element to style.

And we use what is called hashtag to select that.

Let's say that I want to style one of these cars to color red.

Therefore, I have to provide what is called an ID.

Then in my CSS, I will select that and apply the color to red to it.

And we also have what is called class selector.

And we also use this one to select an element to style.

One of the differences between the id and the class is that for the class selector we use period, with

this one being set.

Let's get into code.

I have created a folder called selectors, which is this.

And inside I have two folders and that is class ID universal and selector final and then the starter

code.

So in case you want to start with your own code then you can do it.

So in here I have my index.html and then empty CSS.

Let's look at the HTML structure.

And it contains the h1 p tag with some span and p tag here with the various paths.

So in here I have linked the CSS.

So now how can we select these ones to style.

And this is a preview which is this one.

Now we have explained what is the default stylesheet and like I said that we use the universal selector

to reset the default stylesheet.

So in here how to do it to be able to use the universal selector we bring in the asterisk and then the

curly braces.

So in here if I say margin is equal to zero as you can see the margin is gone.

And also if I say that padding is equal to zero.

Now we don't have padding between the elements.

And if I say that color is equal to red, it simply means that I want to change every element on a page

color to red.

Indeed, we have it.

But ideally we use margin and padding in the universal selector.

So let's move on to the ID.

So in the HTML here how to use the ID selector.

First step is that we need to provide what is called an ID in the opening tag.

So I will say ID and I'm going to call this one as main dash title.

And for the naming you can make it as camel casing.

Or you can use underscore.

But I prefer to use the dash which is this one.

So now I have my value of this as an ID equal to main title.

So how can I style it.

So in my CSS I'm going to select the value of my id.

In this case it is called main title.

And for IDs we use the hashtag and the name of the value for my id.

If I say color is equal to red.

Now the color of my h1 is red, and I can say that text align as center and I have it as that and margin

top.

Let me give it as 20.

Pixels.

And it worked.

As you can see the spacing between this and that.

Is 20 pixels.

And how can we use the class selector for this p.

And that is this one.

I'm going to provide what is called class.

And the value is called text content.

So I'm going to style this one.

So in here for class we use period.

And the value is called text content.

And I'm going to provide font family.

Let me use any of these ones.

And I have realized that I'm going to change the color to blue.

And indeed it is blue.

Let me have some line spacing or line height as 1.6.

All right.

It went.

And let me show you the scenario where we can apply multiple style to a particular element with the

same class names.

So for this span I'm going to provide a class called highlight.

And I'm going to apply to every of these spans here I start likewise this one.

And lastly this one.

As you can see we have these classes being applied to multiple elements.

So back to the CSS I'm going to select the highlight.

And let me give it a background color of yellow.

Supposed to be this one.

And as you can see it has been applied to all instances of the element that has a class called highlight.





Type selector is also one of the ways that we can use to select a HTML element, and this one styles

every occurrence of a particular tag.

For example, let's say that we want to color this cab to color blue, and to do that unless we apply

classes or IDs to each of these ones.

But for type selector we don't do that.

Or what we do is to target the HTML tag itself and then apply the CSS properties to it.

Apart from that, we also have what is called attribute selector and this one styles element based on

the matching attribute or the values.

And we also have what is called group selector.

And this one applies the same styles to multiple elements simultaneously.

Let's get into Visual Studio Code.

I have already created two folders.

One is the final and one is the starter code for the final one.

This is what we have.

You can use any HTML of your choice with h1, h2 and some UL here and in here, instead of providing

class or IDs, we are using what is called an attribute.

So in this case this data is equal to priority is high and data this is equal to low.

So how can we style this one using the grouping.

And then the attribute.

Like I said that for the grouping you're going to use the type selector.

So let's say that I want to style the H1 to have color red.

Likewise H2 to have color red.

And to achieve this this is where the type selector comes in.

So whatever I want to style I'm going to target the tag itself.

So here I'm looking for H1 and I'm going to give it a color as purple.

Now let's see the preview.

And this is what we have.

And let's say that I want to apply the same color to the H2, unless I copy and paste or do it manually

by saying that color is equal to purple.

Now I have it.

So instead of doing this one we can group this one.

So for grouping, instead of having separate properties we're going to bring comma here.

And the next tag is H2.

So if I save it let's see.

As you can see it has been applied to these two tags.

This is what we call the grouping.

And then the type selector.

And for the IDs and classes we can also use the grouping selector.

Just bring comma before the next tag or the class or the id.

Now let's talk about the attribute selector.

As you can see in the HTML code we have this attribute data priority.

That's it.

Attribute value is equal to high.

So let's see how to do it.

To do that we're going to bring the square bracket.

And then the attribute name.

In this case it is called data priority.

Then is equal to the value of that we can use double quotes or single quotes.

So I'm going to say high for this.

Now bring the curly braces.

If I say color is equal to red.

As you can see it has been applied to the value which is equal to high and high as that.

So at this point, I believe you've seen the trend now.

And we can apply multiple properties as well.

I'm going to say the color is equal to yellow.

And indeed we have it.

So guys this is how we can use the type selector group and attribute selector.



This is where universal selector comes in.

So in my CSS as we did I'm going to select the universal one.

And I'm going to say margin zero.

Padding is also zero.

And this is what we have.

So let's begin with the element selector or the type selector.

So in here I'm going to select the body.

So here is going to be our type selector.

And then this is universal selector.

For the type selector I'm going to select the body using the tag name I'm going to provide font family

As this.

And here we go.

If I provide color is equal to red or blue, or the text will be red.

And I'm going to remove this and use this hash tag and then provide the background color as hash tag

f4f4f4 and line height of 1.6.

Cool.

When I say the line height, if I increase this 1 to 3.

As you can see the spacing between the text.

This is what we call the line height.

So we are done with the type selector.

The next one is the ID selector which is this one.

So back to my CSS.

It is called ID selector and use hash tag for ID and give it a background color of hashtag to see 350

and the color on it is white.

Pardon is equal to, let me say ten six.

We will talk about box model, where we will explore padding and margin as well and use text align center.

I have centered the text which is this one.

And let's move on to the class selector which is the container here.

So I'm going to select using period because it is a class.

I'm going to give it maximum width of my container as 800 pages.

If I give it a background color you'll be able to see the maximum width which is this one.

The purpose for this is that I want to center the container here, and to do that, and that is to be

able to center this.

I'm going to use margin which is equal to 20 pixels and auto.

All right.

So let me explain this syntax for margin.

It has four properties top left right and bottom.

So this 20 simply means top and bottom is 20 pixels.

And left and right is auto.

Therefore it will center it in the container.

So let me remove the background color here, or let me use white for this one.

And let me have border radius of eight pixels.

As you can see we have this curve effect.

And let me add some box shadow as box shadow zero zero 20 pixels.

And the color I'm going to use RGBa for red I'm going to use zero green zero.

Blue zero and alpha channel is equal to 0.1.

The alpha channel determines the opacity of the color and it ranges from 0 to 1.

If I do that, I'm going to see some shadow, which is this one.

That is the opacity.

It is light dark here.

If I make it as one opacity, as you can see it is deep black.

So this one will give me some transparent and let me have some padding.

Padding is equal to 26 and there we go.

So this is how we can use the class selector.

Let's focus on the attribute selector.

Remember that we have what is called data category which is this one.

So I want to style this one.

So back to my CSS.

This is how you select the attribute and the value for this is equal to technology.

So pass in a start.

And then I'm going to give it font style as italic and then color of blue.

And then font weight I'm going to use 600 without the unit.

And this is what we have.

And the next one is the descendant selector.

So if you look inside the post content let me see where we have which is this one.

I'm going to style this P here.

To do that I'm going to use the descendant selector for specificity.

So here it goes like dot and post content space.

And the P for this one I'm going to give it a color of red to see the effect before changing it.

As you can see it has been applied to all the pages that are descendant to this parent.

So instead of this color, I'm going to use hashtag 34453449 instead.

And cool this where we have and margin bottom.

If I type and B for shortcuts I have margin bottom.

I'm going to give it as let's say 26 for this one, and probably the font style or font size, I'm going

to give it as something like um, ten six.

Let me see the post content.

It's too small for my likeness.

Let me increase it to something like 30 here or it's too big.

What about 20?

Cool.

This is okay.

And let's also use let me comment this one.

This is called the class selector.

And this is attribute selector.

And this is the descendant selector and we can make it more specific.

So in here I'm going to select the post metadata here which is not this one.

Metadata.

Yeah this one.

And then I'm going to select the span meaning that I want the direct child of this one.

This is where the child selector also comes in.

Or by combining the descendant to make it more specific.

So in here I'm going to select the p and then the greater than.

And then the value here for the tag is called span.

So now I'm going to apply a color of say yellow to this one to see the effect.

And I have selected this one.

And instead of this color I'm going to remove that and margin right.

I'm going to give it as 15 In physics.

And then font size 26.

And there we go.

And let's also use the grouping selector.

So I'm going to select h1 h2 h3 and then style it.

Remember that we have all these elements on the page as h2 is here H1 is here and probably h3 will be

below here.

So let's go ahead and style it.

If I say color is equal to red and I have the colors changed to red.

So instead of this one I'm just going to give it a margin at the bottom as something like 20 pixels.

You can apply multiple CSS properties to it.

Now let's talk about pseudo class selector.

Select.

So let me locate the A here which is this privacy here.

When we say pseudo class it is used to apply styles based on the state of the element.

For this one, we didn't explore when we are teaching the selectors.

So let's say for the A inside the footer here I'm going to use the type selector as a.

And if I bring colon here we have all the state one is active meaning that if it is active we can apply

some color to it or any CSS property.

But what I want is called hover.

And that is if the user moves the cursor on the element I want to change the color.

So for this one I'm going to use color equal to something like um red.

Let me try it out.

So let me locate that if I move my cursor on that.

As you can see the color has been changed.




\

What is CSS box model?

This one describes the structure of an element, and remember that every element on a web page is being

regarded as a rectangular box with four layers, and that is content, padding, border and margin.

Let's explore more using this picture.

This is a box.

It can be H1 or a tag or a div.

So for this one it has four components or layers.

The first one is called the border.

The border is the outer layer of the element and the content is what it is inside the box.

So this is what we call the content.

And then the space between the content and the border is called the padding.

And then the space around the box Works is the margin.

One more time.

Let's take each of these ones to explore more.

When we say the content, the content is a space where your text or images will appear.

In this case, this one, this is a content and then it has height and weight properties.

And lucky for us, all HTML elements are rectangular in nature.

This means that we can control the weight and height of it, that is, the content which is the core

of the CSS box model.

What about the border?

The border is the outline of an element.

As I showed you, the border.

Here is the outer layer, and for the border it has four layers top, right, left and bottom.

We will get into code to explore more.

And what about the padding?

The padding is a space between the content and the border.

As we see in this diagram.

And this one also has four parts top, left, right and bottom.

So we can control the spacing with this one being set.

Let's get into Visual Studio Code to put them into practice.

As always I have two folders.

The final one and then the starter code.

You can begin with your own HTML, or you can start with the starter code.

And this is the structure for the HTML content to explore the box model.

And this is a preview.

So for this one we're going to use internal CSS to demonstrate that.

So in here I'm going to have the style.

So first step is let's understand the structure of this HTML element.

This is the parent and that is the box.

And then in the box we have the content.

So we can control the spacing in a weight of this box.

Because of that I'm going to select the box here.

So I'm going to use dot and then box.

Let me give it a background color of say yellow.

After saving it this is a background as you can see for the weight, the weight is being controlled

by the content in my box.

So in case I have more content the weight will be also increasing.

Likewise the height.

So if I increase the content here, for example, let me duplicate.

As you can see the height is increasing, but we can specify the height and weight of this element because

it is a box.

So let me undo and have this one.

So I'm going to provide a weight of say 300 pixels after saving it.

As you can see this is the weight of my box.

And I can also increase the height.

So here I'm going to say that height is also equal to 300.

Now I'm going to have a square.

Now let's talk about the first property.

And that is the border.

So for the border I'm going to give it some different style.

So bring in border which is equal to.

Let me use one parsecs.

And that is the width and the style of my border.

I'm going to use solid, I can use dash or solid.

And then the color of my border.

I'm going to use red for this one.

Now let's see.

This is a border of my box.

I can increase the weight of the border to something like 20 parsecs.

And this is what we have.

And this syntax specifies all the angles for this one we have the top here right, left and bottom.

So we can control each individually.

So instead of having this syntax which is this one, I'm going to comment that.

And in here I'm going to specify the border top as BT for shortcut and border top I'm going to specify

the width of 20 pixels and solid red at the top of it.

And now we have it as that.

And let me also specify border bottom and that is B for border bottom.

For this one I'm going to specify the physics as 20 and solid.

Let me use green for this one.

And this is what we have.

And right and left I can also specify that.

So border right I'm going to specify 20 pixels solid purple.

All right.

And lastly is the border left blue which is this.

And let me change the width of this 1 to 20.

And then the color for this.

Okay.

Let me use black for this one.

All right.

Cool.

So as you can see the border that is the outer layer of my box.

And instead of solid we can use dash or dashed.

And this is the behavior.

Let me bring it back to solid.

So now you understand what is a border.

So this is the shorthand syntax.

So let me comment out this one or let me maintain this.

And let's proceed on.

Now let's talk about the padding.

As you can see as I stand right now, we don't have a space between the content and then the border.

This is where the padding also comes in.

So in here I'm going to bring in padding.

And if I say that it is 15 pixels let's see.

As you can see we have some spacing around the content.

The top here is 15.

Left 15 and right 15.

All right.

And this syntax is a shorthand syntax.

This is similar to padding.

Top is 15 left right and bottom.

They are all 15 pixels.

So we can specify them individually as padding top.

And that is dt which is equal to 15 pixels.

Let me comment out this one.

And padding bottom also 15 pixels and then padding right.

Also 15 pixels and padding left is also 15 pixels.

Now let's see.

And this is what we have for this one.

Let's say that I want to increase the top to something like 30 here, and then the left and right.

Also, let me change this 1 to 20 and 20 here.

Now let me see the effect now.

And this is what we have.

The top here is 30.

And then left and right there are 20 pages.

So for this one we also have a shorthand syntax.

So this one corresponds to equal sizes as this one.

But let's say that I want to have different spacing.

So for this as we have just implemented we can have a shorthand syntax as padding which is equal to

36 here and space as 15 pages.

So this one simply means that the first one represents top and bottom.

They are 36 left and right is 15 parsecs.

All right.

So at this point I believe you've got the idea when we say the padding and then the border, what has

left is the margin.

So the margin is going to be the space around the element.

So if I provide margin of say 50 parsecs well let me comment out this one and let's use the padding

of 15.

So after saving it let's see the margin.

And we have the spacing around the box as 50 pixels.

And for this one also we can specify margin top which is equal to 50 pixels.

Margin left or right.

Here is also 50 pixels and margin left is also 50 pixels.

And then margin bottom is also 50 parsecs.

So this is also the shorthand syntax of this one.

All right.

So let me comment out.

This one.

Is that so for this one any element I will place after my container or box.

For example, let me have one more div and say h1 as my syntax.

So the margin will be between this h1 and then the box.

Now save it and let's see.

And this is the space between the elements of this.

And then the box itself.

And I can have margin between this one and then the viewport area here.

So I can also select H1.

And I'm going to say margin top is equal to 50 pixels.

So now I have some spacing at the top here.

So this is a brief overview.

When it comes to box model.


##################################################################################


############################################################################
**Date:03 July 2026
**Epic & Task:** P2.1-D4 — Conditional Rendering + Dynamic Styling + Lists (Section 3, part 4)
**Day segment (if multi-day task):** Seg 4 of 5 · GitHub Issue #250 (OPEN by design)

---

## What I completed today

# Deriving & Outputting Data Based on State

## Definition

Deriving data based on state means displaying different content depending on the current state value. Instead of hardcoding content, React uses the state value to choose which data to display.

## Key Concepts

- Store the selected topic in state (e.g., `selectedTopic`).
- Import the `examples` object that contains the lesson data.
- Use bracket notation (`[]`) to access object properties dynamically.
- The state value is used as the property name.
- The object keys must exactly match the state values.

Example:

```jsx
<h3>{examples[selectedTopic].title}</h3>
<p>{examples[selectedTopic].description}</p>
<pre>
  <code>{examples[selectedTopic].code}</code>
</pre>
```

---

## Important Terms

| Term | Meaning |
|------|---------|
| State | Stores data that can change while the app is running. |
| Object | A collection of key-value pairs. |
| Bracket Notation | Accesses object properties dynamically using `[]`. |
| Dynamic Data | Content that changes based on state. |
| Property | A key inside an object. |

---

## Workflow / Process

1. User clicks a button.
2. The click updates `selectedTopic`.
3. React re-renders the component.
4. `examples[selectedTopic]` finds the matching object.
5. Display the title, description, and code.

```
Button Click
      ↓
Update State
      ↓
React Re-renders
      ↓
Access Object
      ↓
Display Content
```

---

## Key Takeaways

- State controls what data is displayed.
- Dynamic property access uses bracket notation.
- Object keys must match the state value.
- React automatically updates the UI when state changes.

---

## Quick Revision

- Store the selected topic in state.
- Use `examples[selectedTopic]`.
- Access `.title`, `.description`, and `.code`.
- React updates the UI automatically.

---

# Rendering Content Conditionally

## Definition

Conditional rendering means showing different content depending on whether a condition is true or false.

## Key Concepts

- Display fallback content when no topic is selected.
- Display lesson content only after a topic is selected.
- React supports multiple ways to render conditionally:
  - Ternary Operator
  - Logical AND (`&&`)
  - Variables with `if` statements

### Ternary Operator

```jsx
{
  selectedTopic
    ? <div>Content</div>
    : <p>Please select a topic.</p>
}
```

### Logical AND

```jsx
{
  !selectedTopic &&
  <p>Please select a topic.</p>
}

{
  selectedTopic &&
  <div>Content</div>
}
```

### Variable Approach

```jsx
let tabContent = <p>Please select a topic.</p>;

if (selectedTopic) {
    tabContent = <div>Content</div>;
}

return (
    <>
        {tabContent}
    </>
);
```

---

## Important Terms

| Term | Meaning |
|------|---------|
| Conditional Rendering | Showing different UI based on a condition. |
| Ternary Operator | `condition ? value1 : value2` |
| Logical AND | Renders content only if the condition is true. |
| Fallback Content | Default content shown when no data exists. |
| JSX Variable | A variable that stores JSX elements. |

---

## Workflow / Process

```
Check State
      ↓
Is Topic Selected?
      ↓
Yes ------------ No
 ↓                 ↓
Show Content   Show Message
```

---

## Key Takeaways

- React often renders content conditionally.
- Ternary operators switch between two pieces of UI.
- `&&` renders content only when a condition is true.
- Variables make JSX cleaner in complex cases.

---

## Quick Revision

- Use `? :` for two choices.
- Use `&&` to render only when true.
- Variables improve readability.
- Render fallback content when needed.

---

# CSS Styling & Dynamic Styling

## Definition

Dynamic styling means changing CSS classes based on the current state.

## Key Concepts

- JSX uses `className` instead of `class`.
- Apply CSS classes only when needed.
- Use state to decide which class should be added.
- Boolean values (`true` / `false`) are commonly used.

Example:

```jsx
<button
  className={isSelected ? "active" : ""}
>
```

Passing state:

```jsx
<TabButton
    isSelected={selectedTopic === "components"}
>
```

Receiving props:

```jsx
function TabButton({ isSelected, children }) {
    return (
        <button
            className={isSelected ? "active" : ""}
        >
            {children}
        </button>
    );
}
```

---

## Important Terms

| Term | Meaning |
|------|---------|
| className | JSX attribute used instead of HTML `class`. |
| Dynamic Styling | Styling that changes based on state. |
| Boolean | `true` or `false`. |
| Active Class | CSS class that highlights the selected item. |
| Prop | Data passed from one component to another. |

---

## Workflow / Process

```
Button Click
      ↓
Update State
      ↓
Compare State
      ↓
true?
      ↓
Apply "active" class
```

---

## Key Takeaways

- JSX uses `className`.
- CSS classes can be added conditionally.
- State determines which button is active.
- Dynamic styling improves user feedback.

---

## Quick Revision

- Use `className`.
- Use a ternary operator for classes.
- Pass boolean values as props.
- Highlight selected items.

---

# Outputting List Data Dynamically

## Definition

React can generate lists automatically by converting array data into JSX using the `map()` method.

## Key Concepts

- Store list data inside an array.
- Use `map()` to create JSX elements.
- React renders one component for each array item.
- Every list item needs a unique `key` prop.

Example:

```jsx
{
  coreConcepts.map((conceptItem) => (
    <CoreConcept
      key={conceptItem.title}
      {...conceptItem}
    />
  ))
}
```

Without `map()`, components must be written manually.

With `map()`, React creates them automatically.

---

## Important Terms

| Term | Meaning |
|------|---------|
| Array | A list of values. |
| map() | Creates a new array by transforming each item. |
| JSX | HTML-like syntax used in React. |
| key | A unique identifier for each list item. |
| Dynamic List | A list generated automatically from data. |

---

## Workflow / Process

```
Array
      ↓
map()
      ↓
Convert Each Item
      ↓
JSX Components
      ↓
Render List
```

---

## Key Takeaways

- `map()` is the standard way to render lists in React.
- One array item becomes one JSX element.
- Always provide a unique `key`.
- Lists update automatically when array data changes.

---

## Quick Revision

- Store data in an array.
- Use `map()` to generate JSX.
- Return one component per item.
- Add a unique `key` prop.
################################################################################

############################################################################
**Date:04 July 2026
**Epic & Task:**P3.1-D4 — Sort Array Ascending + Descending (GFG #24,#25 + Codedamn)
**Day segment (if multi-day task):** Seg 4 of 5 · GitHub Issue #186 (OPEN by design)

---

## What I completed today

day03 p3.1 task

# Sorting an Array (Simple Explanation for a 5th Grade Student)

## Problem

We have a group of numbers that are mixed up.

We want to arrange them from the **smallest number to the biggest number**.

Example:

```javascript
[5, 3, 8, 1]
```

After sorting:

```javascript
[1, 3, 5, 8]
```

---

# Step 1: Understand the Function

```javascript
function sortArray(arr) {
```

- We create a function called **sortArray**.
- `arr` means **an array of numbers**.

Example:

```javascript
sortArray([5, 3, 8, 1]);
```

Here,

```javascript
arr = [5, 3, 8, 1]
```

---

# Step 2: First Loop

```javascript
for (let i = 0; i < arr.length; i++) {
```

This loop checks **one number at a time**.

### First round

```
i = 0
```

Current number:

```
5
```

---

# Step 3: Second Loop

```javascript
for (let j = i + 1; j < arr.length; j++) {
```

Now we compare the current number with every number after it.

When

```
i = 0
```

then

```
j = 1
```

We compare:

```
5 and 3
```

---

# Step 4: Compare the Numbers

```javascript
if (arr[i] > arr[j]) {
```

Ask the question:

```
Is 5 bigger than 3?
```

Answer:

```
Yes
```

Since it is bigger, we swap them.

---

# Step 5: Swap the Numbers

```javascript
let temp = arr[i];
```

Save the first number in a temporary box.

```
temp = 5
```

---

```javascript
arr[i] = arr[j];
```

Move the smaller number into the first place.

```
3 goes where 5 was
```

Array becomes:

```
[3, 3, 8, 1]
```

(Only for a moment.)

---

```javascript
arr[j] = temp;
```

Now put the saved number back.

```
5 goes where 3 was
```

Array becomes:

```
[3, 5, 8, 1]
```

Now the numbers have switched places.

---

# Step 6: Keep Comparing

Now compare

```
3 and 8
```

Is

```
3 > 8 ?
```

No.

Do nothing.

---

Now compare

```
3 and 1
```

Is

```
3 > 1 ?
```

Yes.

Swap them.

Array becomes

```
[1, 5, 8, 3]
```

---

# Step 7: Move to the Next Number

Now

```
i = 1
```

Current number is

```
5
```

Compare it with

```
8
```

No swap.

Compare it with

```
3
```

Swap them.

Array becomes

```
[1, 3, 8, 5]
```

---

# Step 8: Continue Again

Now

```
i = 2
```

Compare

```
8 and 5
```

Swap them.

Array becomes

```
[1, 3, 5, 8]
```

Now every number is in the correct place.

---

# Step 9: Return the Sorted Array

```javascript
return arr;
```

The function gives back

```javascript
[1, 3, 5, 8]
```

---

# Step 10: Print the Answer

```javascript
console.log(sortArray([5, 3, 8, 1]));
```

Output:

```javascript
[1, 3, 5, 8]
```

---

# Dry Run

Starting array

```
[5, 3, 8, 1]
```

Compare 5 and 3

```
[3, 5, 8, 1]
```

Compare 3 and 8

```
No swap
```

Compare 3 and 1

```
[1, 5, 8, 3]
```

Compare 5 and 8

```
No swap
```

Compare 5 and 3

```
[1, 3, 8, 5]
```

Compare 8 and 5

```
[1, 3, 5, 8]
```

Final answer

```
[1, 3, 5, 8]
```

---

# Easy Way to Remember

Imagine you have four number cards:

```
5   3   8   1
```

You look at one card and compare it with every card after it.

- If the first card is **bigger**, you switch the two cards.
- Keep doing this until every smaller number moves to the left.
- At the end, all the numbers are arranged from **smallest to biggest**.

---

# Key Points

- `arr` is the list of numbers.
- `i` chooses the current number.
- `j` checks the remaining numbers.
- `if` checks which number is bigger.
- `temp` is a temporary box used while swapping.
- `return arr` gives back the sorted array.




# Sorting an Array (Explained for a 5th Grade Student)

## What is this program trying to do?

This program takes a list of numbers and puts them in **order from the smallest number to the biggest number**.

### Example

Before sorting:

```javascript
[5, 3, 8, 1]
```

After sorting:

```javascript
[1, 3, 5, 8]
```

---

# The Code

```javascript
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // swap the elements
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray([5, 3, 8, 1]));
```

---

# Step 1: Create the Function

```javascript
function sortArray(arr) {
```

This creates a function named **sortArray**.

The word **arr** means a list of numbers.

Example:

```javascript
arr = [5, 3, 8, 1]
```

---

# Step 2: First Loop

```javascript
for (let i = 0; i < arr.length; i++) {
```

This loop picks **one number at a time**.

### First time

```
i = 0
```

Current number is

```
5
```

---

# Step 3: Second Loop

```javascript
for (let j = i + 1; j < arr.length; j++) {
```

This loop compares the current number with every number after it.

When

```
i = 0
```

Then

```
j = 1
```

We compare

```
5 and 3
```

---

# Step 4: Compare the Numbers

```javascript
if (arr[i] > arr[j]) {
```

Ask this question:

```
Is 5 bigger than 3?
```

Answer:

```
Yes
```

Since 5 is bigger, we switch their places.

---

# Step 5: Save the First Number

```javascript
let temp = arr[i];
```

We save the number **5** in a temporary box.

```
temp = 5
```

Think of `temp` as a small table where you keep one number safe while moving the others.

---

# Step 6: Move the Smaller Number

```javascript
arr[i] = arr[j];
```

Move **3** into the first position.

Array becomes

```javascript
[3, 3, 8, 1]
```

This is only for a moment.

---

# Step 7: Put Back the Saved Number

```javascript
arr[j] = temp;
```

Now put **5** into the second position.

Array becomes

```javascript
[3, 5, 8, 1]
```

Now the two numbers have swapped places.

---

# Step 8: Keep Comparing

Now compare

```
3 and 8
```

Is

```
3 > 8 ?
```

No.

Do nothing.

---

Now compare

```
3 and 1
```

Is

```
3 > 1 ?
```

Yes.

Swap them.

Array becomes

```javascript
[1, 5, 8, 3]
```

---

# Step 9: Move to the Next Number

Now

```
i = 1
```

Current number is

```
5
```

Compare

```
5 and 8
```

No swap.

Compare

```
5 and 3
```

Swap them.

Array becomes

```javascript
[1, 3, 8, 5]
```

---

# Step 10: Last Comparison

Now

```
i = 2
```

Compare

```
8 and 5
```

Swap them.

Array becomes

```javascript
[1, 3, 5, 8]
```

The numbers are now in the correct order.

---

# Step 11: Return the Answer

```javascript
return arr;
```

This sends back the sorted array.

It returns

```javascript
[1, 3, 5, 8]
```

---

# Step 12: Print the Answer

```javascript
console.log(sortArray([5, 3, 8, 1]));
```

This prints the sorted array on the screen.

Output:

```javascript
[1, 3, 5, 8]
```

---

# Dry Run

Starting array

```javascript
[5, 3, 8, 1]
```

Compare **5** and **3**

```javascript
[3, 5, 8, 1]
```

Compare **3** and **8**

No swap

```javascript
[3, 5, 8, 1]
```

Compare **3** and **1**

```javascript
[1, 5, 8, 3]
```

Compare **5** and **8**

No swap

```javascript
[1, 5, 8, 3]
```

Compare **5** and **3**

```javascript
[1, 3, 8, 5]
```

Compare **8** and **5**

```javascript
[1, 3, 5, 8]
```

Final Answer

```javascript
[1, 3, 5, 8]
```

---

# Real-Life Example

Imagine you have number cards:

```
5   3   8   1
```

You compare the first card with every card after it.

- If the first card is bigger, switch the cards.
- Keep comparing and switching.
- Repeat until every number is in the correct place.

At the end, the cards look like this:

```
1   3   5   8
```

---

# Important Things to Remember

| Code | Meaning |
|------|---------|
| `arr` | The list of numbers |
| `i` | Picks one number |
| `j` | Compares it with the remaining numbers |
| `if` | Checks which number is bigger |
| `temp` | A temporary box used while swapping |
| `return arr` | Gives back the sorted array |
| `console.log()` | Prints the result on the screen |




# Apply Transform Over Each Element in an Array (Explained for a 5th Grade Student)

## What is this problem asking us to do?

Imagine you have a list of numbers.

```javascript
[1, 2, 3]
```

Now imagine your teacher gives you a rule.

For example:

> "Add 1 to every number."

So:

```
1 becomes 2
2 becomes 3
3 becomes 4
```

The new list becomes:

```javascript
[2, 3, 4]
```

This is exactly what this problem is asking you to do.

---

# What is a Transform?

A **transform** means:

> Change something into something new.

Example:

```
Old Number → New Number

1 → 2
2 → 3
3 → 4
```

We changed every number.

That is called a **transform**.

---

# What is the map Function?

The `map()` function goes through every number in an array and changes it using a rule.

Think of it like a machine.

```
Input

[1,2,3]

      ↓

Transformation Rule

Add 1

      ↓

Output

[2,3,4]
```

---

# What Does the Problem Want?

You have to create your own function called

```javascript
map()
```

It takes **two things**.

```javascript
map(arr, fn)
```

### First thing

```javascript
arr
```

This is the list of numbers.

Example

```javascript
[1,2,3]
```

---

### Second thing

```javascript
fn
```

This is the rule.

Example

```javascript
Add 1
```

or

```javascript
Multiply by 2
```

or

```javascript
Return 42
```

---

# What Should Our Function Do?

It should

- Look at every number
- Apply the rule
- Save the new number
- Return the new array

---

# Example 1

Input

```javascript
arr = [1,2,3]
```

Rule

```javascript
Add 1
```

### Step by Step

First number

```
1 + 1 = 2
```

Second number

```
2 + 1 = 3
```

Third number

```
3 + 1 = 4
```

New array

```javascript
[2,3,4]
```

---

# Example 2

Input

```javascript
[1,2,3]
```

Rule

```
Add the index
```

Remember:

```
Index

0
1
2
```

So

First number

```
1 + 0 = 1
```

Second number

```
2 + 1 = 3
```

Third number

```
3 + 2 = 5
```

Answer

```javascript
[1,3,5]
```

---

# Example 3

Input

```javascript
[10,20,30]
```

Rule

```
Always return 42
```

So

```
10 → 42

20 → 42

30 → 42
```

New array

```javascript
[42,42,42]
```

---

# What Does fn Mean?

`fn` stands for

```
Function
```

A function is simply a rule.

Example

```javascript
function plusOne(number){
    return number + 1;
}
```

This rule says

```
Take a number

↓

Add 1

↓

Give it back
```

---

# What Does map() Do?

Think of a teacher checking homework.

Students

```
A
B
C
```

Teacher's rule

```
Add 5 marks
```

Teacher checks

```
A → +5

B → +5

C → +5
```

Everyone gets updated.

That is exactly what `map()` does.

---

# The Steps We Need

### Step 1

Take the array.

```
[1,2,3]
```

---

### Step 2

Create an empty array.

```
[]
```

This will store the answers.

---

### Step 3

Go through every number.

```
1

2

3
```

---

### Step 4

Apply the rule.

Example

```
Add 1
```

---

### Step 5

Store the new number.

```
[]

↓

[2]

↓

[2,3]

↓

[2,3,4]
```

---

### Step 6

Return the new array.

```javascript
[2,3,4]
```

---

# Real-Life Example

Imagine you have three apples.

```
🍎

🍎🍎

🍎🍎🍎
```

Your mom says,

> "Give one extra apple to everyone."

Now everyone gets

```
2

3

4
```

Old

```
1

2

3
```

New

```
2

3

4
```

The numbers changed because we followed the rule.

---

# Important Words

| Word | Meaning |
|------|---------|
| Array | A list of numbers |
| map | Changes every item in the list |
| Transform | Change something into something new |
| Function (`fn`) | A rule that tells us how to change each number |
| Index | The position of a number (0, 1, 2, ...) |
| Return | Give back the final answer |

---

# Easy Way to Remember

Think of `map()` like a magic machine.

```
Input

[1,2,3]

        │
        ▼

Follow the Rule

(Add 1)

        │
        ▼

Output

[2,3,4]
```

The machine looks at **every number**, changes it using the rule, and gives you a **new array**.