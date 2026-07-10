# Daily Progress Log — Day 02

**Date:9 July 2026
**Epic & Task:** P1.4-D2 — Bootstrap 5 + Deploy Bootstrap Landing Page (S11)

**Day segment (if multi-day task):** Seg 2 of 2 · GitHub Issue #153 (OPEN by design)

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
###############################################################################
**course transcript:**
Act as a senior software engineer, technical educator, and documentation
writer. Read the transcript and create concise study notes that answer
only the lesson questions provided.

Requirements:

-   Extract only the important concepts related to the lesson questions
    for the following , L1-L2: Bootstrap overview, install in HTML L3:
    Install Bootstrap in ReactJS L4-L5: Text formatting, Bootstrap
    colors L6-L8: Utilities, width/height utilities, responsive images
    L9-L10: Bootstrap tables, forms and buttons L11-L13: Breakpoints,
    containers, grid with rows/columns, grid with breakpoints L14:
    PROJECT --- Build and Deploy Bootstrap Modern Landing Website

``` markdown
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

Return **only valid Markdown** that can be copied directly into a `.md`
file.

course transcript:

I welcome you to this course where we are going to learn about
bootstrap.

But before beginning this course, unless you are familiar with HTML and
CSS, the first question is

what is bootstrap?

Bootstrap is a popular front end framework designed for developing
responsive and mobile first websites.

This means that we are not going to worry about writing custom CSS when
building web applications,

and bootstrap was initially released by Twitter developers in 2011, and
has since become one of the

most widely used frameworks for web design and development.

Here is a rundown of what makes bootstrap particularly very useful.

One is responsive design.

Bootstrap contains a responsive grid system and flexible, pre-designed
components that adjust automatically

to different screen sizes, ensuring websites look good on all devices
from mobile phones to desktops.

Next one is mobile first approach.

Bootstrap is built with a mobile first philosophy, emphasizing best
practices for mobile device responsiveness

from the ground up and also rich component library.

Bootstrap is packed with numerous reusable components such as buttons,
navigation bars, modals, drop

downs, alerts, and many others which can be easily integrated into any
web project.

It is also customizable, but before the current version of bootstrap
five.

Previously customizing bootstrap was tedious, but with the current
version by the time of recording

this video, customizing bootstrap is much easier than before.

It also has utility classes.

It offers a wide range of utility classes that enable quick design
adjustment for spacing, text alignment,

display visibility, and so much more, significantly speeding up the
development process and pre-processor

support.

Bootstrap supports CSS preprocessors like Sass and less, making it easy
to build themes with variables,

mixins, and functions for more dynamic and powerful styles.

It also has JavaScript plugins, and this one includes jQuery and Popper
JS that add interactive features

to bootstrap components without the need to write JavaScript from
scratch.

But with the current version of bootstrap, jQuery is no more supported.

And let's talk about accessibility.

The framework follows accessibility best practices, ensuring that
websites are usable for everyone,

including people who rely on assistive technologies, and lastly,
extensive documentation and community.

This means that bootstrap has comprehensive documentation that makes it
accessible for beginners and

professionals alike.

Moreover, a large community of users ensures a steady flow of plugins,
tutorials, and third party

resources that enhance the utility of the framework.

Let's talk about use cases.

One is rapid prototyping and that is quickly put together a responsive
website within some short possible

time.

And one is for building web applications CMS and that is content
management system and also for educational

projects and tutorials.

Now let's look at the roadmap for this course.

And that is what we are going to cover in this course.

We will begin with the installations and also we will talk about
Layouting.

And that is understanding how bootstrap works using breakpoints or grid
system, and also understanding

how to use content in bootstrap by using what is called typographies
images and others.

And we will talk about forms, and that is how to use classes in
bootstrap to design forms within short

possible time.

And we will talk about components by reusing the component that has been
shipped into bootstrap.

With this one being said, in the next video we will talk about the
installation processes or how to

install bootstrap.

I'm going to show you how to install bootstrap in HTML, and from there I
will show you how to use it

with react.

Let's begin with the HTML.

We have three ways to do it, either by using the CDN and that is content
delivery network.

Or we can download it or we can download using Package Manager.

I'm going to show you with the CDN and then the downloading of the
files.

And for react also we have three ways to install it either to use the
CDN or we can download the files

or we can use the package manager.

And I will show you how to use these steps.

Let's begin with the HTML.

Back to Visual Studio Code.

I have already created a folder called bootstrap.

But before we get into that, let me show you the extensions that I'm
using for the theme.

I'm using what is called tenacious, which is this one.

And for my icons I'm using helium icons, which is this one.

And then make sure to install auto close for auto closing.

Our tags.

Auto renaming, better comment for styling our comment code spell checker
to avoid spelling mistakes

and let me see and live server for starting our servers and path
autocomplete, path intellisense and

prettier for code formatting.

All right, with this one being said, let's get into code.

I'm going to create a folder for each concept.

Let's begin with the installation.

And that is concept number one as installation.

And under that we're going to have the following.

And that is using the CDN.

And by using the download method.

All right.

So let's begin by using the CDN I'm going to add one file called index
dot HTML.

All right so let's look at the steps in the official documentation.

If you go to Getbootstrap.com this is the interface.

By the time of watching this video it can happen that the interface
might change.

But the concept is going to be the same.

So make sure to select version five and that is the latest version by
the time of recording this video.

So let's look at the steps to install bootstrap.

Let's scroll down here.

It says that get started any way you want it.

The first step is we can use the CDN as I have spoken about, or we can
use Package Manager.

Let's click on the installation documentation which is this one over
here.

Like I said that we can download the entire files.

But let's begin with the CDN.

Let's scroll down under the CDN.

Remember that by default bootstrap has written all the CSS for us, plus
the JavaScript or what we need

is to include the links.

So here we have two files.

One is the CSS and the other is the JavaScript.

So we are going to include the CSS in our HTML.

So copy this one or even the entire of this one.

And then back to our application.

I'm going to scaffold using Emmet and hit enter.

And let me place the link.

Over here we have the CSS which is this one.

I'm going to include it in the head tag which is this one.

And then for the JavaScript it must be below all your content and that
is inside the body tag and place

that one also.

All right.

We have installed bootstrap into our application.

Let me change this one to bootstrap.

Now with this one let's preview it in the browser.

But before that let me provide H1 and I will say Welcome to bootstrap.

Now let's preview it by right clicking and open with Live Server because
we have the extension called

Live Server being installed.

And to make sure that bootstrap is being installed successfully, right
click and then click on inspect

and click on network.

And then click on all over here.

Now I'm going to refresh the page.

We have bootstrap JavaScript.

And the status here is 200 which means that okay.

And then the CSS is also has a status of 200 which means that everything
is successful.

Now let's apply one class to this one.

Let me collapse this and then for the meantime just type with me.

I'm going to provide class and I will say text dash danger.

We are going to learn more about bootstrap classes.

Save it and let's see.

And we have red color being applied.

Now this.

Is the first step to install bootstrap.

Next step is the downloading of the source file in the download.

Here I'm going to add index or even let me copy this one.

From the CD n and then in the downloads, let me close this one and open
the one in the download folder.

And I'm going to remove this one from here.

Likewise this one.

Now let me preview this one in the browser and we have it as that.

Let me close this one.

Now how can we download bootstrap.

Let's begin from here.

And that is the download here we're going to use what is called the
compiled CSS and JavaScript.

So click on the download button here.

And it has finished downloading which is this one.

Double click.

And then this is the folder.

And inside we have the CSS and then the JavaScript.

Let me show you what we need inside the CSS for this one.

Locate what is called min dot css, which is this one and that is
bootstrap dot min dot css.

This means minified version, so copy this one.

Or let me drag it and back to the project, which is the folder here.

Place that or let me create one folder called styles and then place the
bootstrap inside and let's have

one for JavaScript.

So I will say script over here we are also going to include JavaScript
also.

So in the folder and that is for the JavaScript we are going to use the
minified version which is this

one.

So let me drag this one and place it in the script over here.

This is the JavaScript.

Now how can we use this one in the project?

Let's get back to the HTML.

And then for the CSS bring in link.

And the path here is inside styles.

And then the bootstrap dot minified version.

Let's see it in action.

As you can see I have the CSS being applied.

What about the JavaScript?

It follows the same format.

Bring in script SLC and then script and bootstrap dot main dot
JavaScript.

Now let me right click to confirm that it has been installed.

Click on network and then refresh.

And we have the status code at 304, which means not modified.

This means that we have installed bootstrap successfully.

At this point, you may be asking which option that we need to use.

Ideally, using the CDN is the preferred way.

In this way, you can utilize any future update that will be shipped in
into bootstrap.

But for the download one, unless you install it manually before using
the new features.

But let me show you one more thing and that is under the installations.

We have two types of JavaScript files.

One is proper JS and then the main dot js.

If you want to have something like dropdown and select tooltips
notifications.

This is where proper JS comes in.

So we are going to use this one in our JavaScript.

So copy that.

And before using this one it says that at Papa JS before our JavaScript
through the CDN.

So we have to bring the Papa JS before the JavaScript form bootstrap.

So here I'm going to copy this one.

And then back here paste that.

I have the minified version already, so remove that.

And this is the proper JS.

So guys this is how we can install bootstrap.

What has left is to install it in react application.

Let's continue in the next video.

I'm going to show you how to install bootstrap in react application.

We will begin with the CDN and that is content delivery network.

And we move on to download the files.

And by using Package Manager.

And lucky for us we have a library called React Bootstrap.

This one has built in react component that we can easily tap in and use
it.

Let me show you with the first step and that is by using the CDN.

This means that unless we have react application being installed, you
can create your first react application

using Create React app.

But for me, I'm going to use vit.

To do that.

Click on the Get Started and then scroll down.

You're going to use this snippet.

Copy that and back to the project.

I'm going to have one folder for react installation.

This means that I'm going to show you how to install bootstrap in react
application.

So right click and then open in the terminal.

And then paste that and that is npm create v8.

At latest I'm going to install react project in the folder called react
installation.

So I'm going to use period and hit enter.

And for package name it is asking for the lowercase n.

So I will accept that and then select react JavaScript and then install
by using npm I and hit enter.

All right it has finished.

So let's run the project by using npm run dev.

Copy the link and back to the browser.

Paste that and this is our react application.

Let's remove the default styling.

So let's get into the SLC and then the app dot js.

Remove everything inside here.

And I'm going to provide each one.

And I will say welcome to bootstrap and remove this.

Likewise these imports save it and we have it as welcome to bootstrap.

I don't want the styling from Vhit so I'm going to remove that.

So in the index dot CSS remove the CSS and we have it as that.

Now how can we apply bootstrap to our application.

We're going to use the CDN.

And lucky for us we have the links in the CDN folder.

So I'm going to copy the link here.

But let me provide a comment as bootstrap CSS.

And then down here is bootstrap JavaScript.

So let me copy the CSS and let me get back to the react side of it,
which is inside the installation.

Here SLC we are going to locate the index dot HTML which is this one.

We are going to include it in the head tag.

Paste that and let me provide a comment as bootstrap CSS.

Now let's get back to the app dot TSX.

How can we add a class using bootstrap in react instead of using class?

It is called class name.

So I will say text dash danger.

Save it and let's see.

And there we go.

We have it as that.

If I open the.

Console network refresh.

And let's see our bootstrap which is this one.

And that is status code equal to 200.

Now I want to include the JavaScript is going to be the same thing.

Let's locate the CDN folder.

And this is the JavaScript.

Copy that back to the index in the react side of it.

And below this script paste that and let me refresh.

Let's see the JavaScript.

Which is bundle dot main dot JavaScript, which is this one?

Perfect right now in case you want to use the downloaded files, is going
to be the same processes as

we did before, or what we need is to place it in the folder.

So here in the SLC let me get into the download, copy the JavaScript in
the SLC, paste that, and

then for the CSS also copy that and paste it in the SLC folder.

We have our JavaScript from bootstrap and CSS from bootstrap.

How are we going to include it.

It's going to be the same process.

So in the index from react.

Now I'm going to comment out this one.

The CSS is gone and I'm going to use the link.

And the src here now is the href the path is going to be.

Also see.

Styles and bootstrap dot main dot CSS and we have it as that.

What about the JavaScript?

Comment out this one and then also here script SLC.

SLC and then script Bootstrap.

And let's see the network request.

And we have bootstrap dot main dot JavaScript which means that it is
being installed successfully.

For react we have a library called React Bootstrap.

So for this one when I click on the component we have this component
that we can use it right inside

react application.

So how to use this one.

First of all we are going to install it.

So click on Get Started.

And then we're going to install by using this.

Copy that and then let me open the terminal.

Let me shut down the previous one, click it and then paste that.

All right.

It has finished.

So let's look at the next step.

Let's scroll down.

And in case you want to use a button we can just import it as that.

And let's see how to include the CSS.

So copy this one.

And then it says that we can place it in the app.js or in the index.js.

So let's get back to the folder structure here.

When using vhit instead of index it is called main.

Or you can use it in the app.js.

So I'm going to use it here.

Paste that.

And now let me start the server and let's see.

Refresh.

It is working.

Now let's see how to use a component.

Let me click on the component here.

And in case I want something like this and that is accordion or what I
need is to copy the entire code

here and back here I'm going to replace everything with the app, or I
can create a component and then

use it in the app.

But let's make it simple by pasting it here.

And change this one to app.js.

That is the component as app.

Now let me remove this one.

Over here we are requiring the accordion from React Bootstrap.

And now let's see it in action.

And as you can see, I have the accordion being implemented.

Awesome.

Right after covering the bootstrap itself, then using React Bootstrap
will be much easier for you to

use.

We are going to focus on this and that is bootstrap itself.

Now that we have the installations being completed, it is time for us to
get into the main logics when

using bootstrap.

Now that you are done with the installations, let's move on to the
content.

And that is how we can use some of the bootstrap classes to make our
life easier.

And let me show you the official documentation so that at your free
time, you can read more on the

sidebar.

Here we have the getting started of which we have done it, and that is
the installation.

And we have the customize section for this one we are going to ignore.

And we will talk about Layouting and that is grid system.

So let's focus on the content.

Let's begin with the typography.

And that is some of the bootstrap classes that we can use on text.

All right.

So let's get back to Visual Studio Code to put them into practice.

So let's continue I have created a folder called text because this is a
new concept.

And then inside I have provided what is called starter code because this
course is all about HTML or

CSS, or what you're going to do is to use some of the bootstrap classes.

That is why I have provided the starter code for you.

So I'm going to copy and paste so that in future you can reference it
and rename this one to index dot

HTML.

So now I'm going to open the index one.

I have already integrated the bootstrap into it.

Right click and then open with Live Server.

And this is what we have.

We are going to style this one using bootstrap classes.

All right.

So let's begin with the first one.

And that is the text alignment.

Let's talk about some of the classes that we can use to align the text
either to left right or center.

But let me provide a background color to this container by using class.

And to use a background color, we're going to use BG for background dash
light.

That's the name of the color and that is it.

Don't worry, we have a section or a video to talk about how to use
classes like background colors and

how to add colors to text.

Also, at the moment just bear with me and to make it more visible, let
me use BG danger and this is

what we have.

This is what we are going to style.

Let me use the light one and to align the text to the start, you're
going to use a class.

And then we begin with text and then dash either to left center or to
right.

So for this one we're going to use text start save it.

And we have it as the starting point which is this one to make what we
are working on more visible.

I'm going to change this one to BG secondary.

And we have it as that.

Or let me use primary here for blue color.

All right.

This is what we have applied the class to it.

And then if I want to align to the center is going to be class.

Then text dash and then the center here.

Now as you can see the text is at the center.

And then to the end I'm going to use class text dash.

And.

And this is what we have.

Have you seen how powerful bootstrap is?

And in case you want to have some margin or padding, we're going to use
what is called P for padding

and M for margin.

Let me provide margin top of five.

And we have some margin at the top here.

What about the bottom margin.

Bottom here is going to be let me use four here.

And this is what we have.

Let's begin with the text wrapping and overflow.

So I'm going to provide a background color as class.

And let me provide margin top to be three and padding around all sizes
to be three.

Let's see.

This is what we have.

Now if I want to provide text wrapping for this one provide class and
text dash wrap.

This one will have wrapping without being overflowing.

All right, so with this one let me reduce the browser window and
decrease it.

As you can see the text is being wrapping as that.

And then if we want to avoid the no wrapping is going to be as class and
text dash no wrap.

And we can also apply truncating by using class text dash truncate.

And this is what we have.

Let's also work on the text transformation.

And that is if we want to convert a text to lowercase or to uppercase.

Let me add a background color as bg dash.

Let me use warning.

And let's see.

This is what we have.

Let me provide margin.

Top of five.

Good.

And then padding of three.

Let me use four here.

Perfect.

Now if I want to convert this one to lowercase it is going to be class
text dash two lowercase.

Save it.

And we have it being lowercased.

And if I want to have the uppercase in is going to be the same thing.

Class text dash uppercase.

And we have it as that.

If I want to capitalize, it's going to be class text, dash, capitalize.

And as you can see the first letters are being capitalized.

Have you seen the trend now any time you want to use any classes on
text, it begins with text and what

you want to apply, for example, to lowercase or start, end and wrap and
others.

You can read more in the official documentation.

And now let me show you how to use some of the colors.

Don't worry, we have a video to talk about it, but let me show you here.

I'm going to provide class name and that is class.

And by using margin top to be five if we want to use a primary color is
going to be as text dash primary.

This one will give you blue color which is this one.

And you also have secondary color.

Copy this one.

Place it here.

Change this one to secondary and this is the secondary color.

Next one is success.

Just change this one to success and we have it as green and we have
danger as text dash danger and we

have it as red.

And then for yellow one is going to be warning and we have it as that.

We also have info and this is the info color.

What about light color change?

This one to light is going to be white.

As you can see here, there is no other visible but we can change the
background color.

So here use BG dash doc.

Don't worry.

Also we have a video to talk about background colors.

It follows the same principles.

Just bring in the BG and then the name of the color either primary or
secondary success, danger and

others.

As you can see we have the background color being black.

And then the color here is white and provide.

Dark color changed this one to dark, and we have it as dark color by
default.

What about mutate?

So change this one to mutate.

And it has been mutated.

And what about white color on dark background?

Can you apply the classes to.

It is going to be text light and BG dark.

And there we go.

Let's also focus on font weight.

Let me provide class by providing BG background color.

And I'm going to use let me see the colors here.

What about success.

Just for demonstration.

Okay cool.

And let me provide margin top to be five.

Perfect.

For this one I'm going to use f w and that is font weight dash.

And then either bold bold or normal light or lighter.

And lastly italic.

Save it.

And we have it being bolded.

So it follows font weight and then the property.

Copy this one.

Place it here on all of the P tags here.

And then I start.

We have one for Boulder as Boulder here and then normal.

We also have light and then lighter and then italic.

Let's see them in action.

And this is what we have.

Perfect right.

What about the font sizes.

So let me add the comment here.

As font sizes provide color supposed to be background color.

Let me use danger and I want to add text dash light.

As you can see, we have it as start.

Now let's apply the font sizes.

And this one begins with class and then face for font size.

And then it ranges from one up to six.

Let's see.

This is the biggest in the font sizes category.

I'm going to change or apply to each of these and then change this 1 to
2.

Three, four, five and six.

Let's see.

And this is what we have.

And we also have what is called display property.

This one is for displaying some headings.

Let me add the comment here.

All right.

So for display one is going to be display.

Let me bring in the class.

Display dash one.

Let's see.

As you can see this is the biggest.

It also ranges from one up to six.

So copy this one and then apply on all the.

Text change this 1 to 2, three, four, five and six.

And this is what we have.

All right.

So let's talk about lists here.

But let's reserve this one.

When we get to the actual component let's focus on the daily motivation
where we are going to use a

class called Blockquote.

So over here provide a class called Blockquote.

Now let's see them in action.

And this is the Blockquote.

And for the footer we're going to provide some citation.

We have it here as that.

And for the footer here I'm going to provide class.

And that is Blockquote dash footer.

Now let's see it in action.

And this is what we have.

We are going to talk about colors in bootstrap.

We have already used some before, but let's try to revisit.

If you go to the official documentation and then under the helpers click
on color and background.

And these are the colors that bootstrap supports.

And you can customize this one to add more colors.

But by default these are the colors.

Let's see how to use these colors.

I'm going to show you two methods.

One method is to use the color pertaining to background or text.

And from there we are going to combine these two utilities.

And that is text and background to be able to write less code when
implementing colors.

I have already provided you with the starter code without any classes
from bootstrap.

We are going to begin with the theme colors, and from there we will
combine the text and background

utilities.

Let's begin with the primary colors, which are these ones.

And I'm going to show you how to add custom CSS into bootstrap.

So in the health section here I will say custom CSS.

And I'm going to provide a class called color section.

Let me place it in style tag.

I'm going to have padding of 20 pixels and then margin bottom.

Also ten pixels and border radius provide five pixels.

And then border is going to be one pixel solid transparent.

I'm going to apply this one on each of these divs here.

So here I will say class.

And I'm going to provide the color section which is this one.

With this let's see.

And we have the margin around this one.

I'm going to apply to each of these divs.

All right let's see.

And we have this spacing.

We are going to add some background colors to these ones.

Let's begin with the primary color.

So here I'm going to add bootstrap class.

And to add a color when dealing with background bring in BG for
background and dash.

And the name of the color.

Here we have what is called primary color.

If I save it and this is the primary color for this one.

And let me provide margin also around all sizes.

So let me change this one to margin.

And we have something like this.

And in case I want to change the color of this one as we did, I'm going
to provide text dash and the

color name.

It ranges from primary secondary, info warning and others.

If I say secondary this is a secondary color on this one.

And if I say text dark, this is what we have.

I can say text light is going to be white.

But let's say that you want to have where contrasted color of the text
and in the background.

This is where text primary also comes in.

If I do that, I'm going to have it as blue.

But if I add dash emphasis.

Let's see we have where contrasted color is that.

So the next one is going to be the secondary is going to be the same
thing that begins with space BG

dash secondary.

And let's see this is what we have.

Let me add the text dash secondary and then add the emphasis on it.

And this is what we have.

Let me add the rest to this one.

So here I'm going to copy this.

And then for the success, just change this one to success.

Let's see.

All right.

And then the danger change secondary to danger.

And we have it as danger.

And then the warning.

Likewise the info and then the light and then dark.

All right.

So let's see the differences now.

And this is what we have.

So we have 12345678 colors in bootstrap.

And you can extend this one to add more colors of your choice.

If you go to the customization which is here, and then the color, we can
override this one by adding

more colors into it.

All right.

So let's continue.

And even for this one we can improve it by writing less code.

At the moment we have different colors for the background and then the
text.

This is where text and background utilities comes in.

I'm going to achieve the same thing by using different approach for this
one.

Also, we can add the class called color section to it to have some
spacing.

Let me add to the individual divs.

All right.

And this is what we have.

Now let's use the power of the text and background utilities.

And it goes like this.

We begin with text dash bg that is text and background.

We're going to use primary color.

And let's see.

And there we go.

We have beautiful background with the text being blended together.

Likewise the secondary is going to be the same thing.

Just copy this one and then place it here.

Change the primary to secondary.

And this is what we have.

Likewise the contrasting colors going to use what is called success.

And here are success.

And then the danger.

The difference here is to change the color name warning is warning and
then the info as info and light

and lastly dark.

And let's see and this is what we have.

Let's talk about utilities in bootstrap for example.

Display utilities.

Margin and padding.

Toggling and others.

We are going to focus on the display.

Margin and padding and toggle visibility.

If you go to the official documentation under the layout click on the
utilities, which is this one.

We have some classes for changing the display, also for flexbox and then
margin and padding.

And lastly toggle visibility.

Let's go back to Visual Studio Code to put them into practice.

I have already created a folder called utilities.

And this is the starter code which is this one.

I have made a copy of this one and renamed to index.

Or let me change this one to final.

So that in future you can easily reference that.

Let me preview this one instead.

And this is what we have.

Let's begin with the display utilities.

We have a class for inline element.

And we can also hide some element based on the viewport of the user's
device or the browser.

Before that, let me add some background color to this container for the
inline and then the heading

element.

And I will say bg dash primary.

And let's see this is what we have.

And let me change the color on the text as text white.

And this is what we have.

Now I want to apply some margin and padding around this text.

This is where padding and margin utilities comes in.

To be able to use padding bring in P and the value ranges from 1 to 5.

So if I want one parsecs is going to be P-1 meaning padding of one
parsecs around all sizes.

And that is top, bottom, left or right.

If I change this 1 to 5 I want padding of five around all sizes.

And this is what we have.

And if I say padding top, as you can see we have it as that and padding
bottom.

And this is what we have.

For this I'm going to provide padding on all sizes to be two pixels.

All right.

And if I want to apply some margin as you can see the container for this
one and this, we don't have

much spacing.

So we are going to add some margin.

And it follows the same format.

If I want margin to be all sizes I will just bring in margin.

And then five over here and this is what we have.

But if I want margin top only let's see.

And this is a margin top.

Now let's begin with the inline element.

If you want to convert or change any element to be inline we're going to
use a class called D dash inline.

All right with this one let's see.

This element is now inline.

To appreciate it.

Let me add a background color dash warning.

And then let me have padding of one.

And let's see.

And this is what we have.

And how can we hide some elements.

We have a section to talk about breakpoint.

And that is a great system at the moment.

Just bear with me and let me show you how to hide some element based on
the user viewport or the device.

Here we're going to provide D dash none.

This one will hide the element by default.

Let's see.

And the element is nowhere to be found.

But I want to hide it on a smaller devices, but on medium devices I want
to bring it back.

So here is going to be D dash the breakpoint.

In bootstrap we have this breakpoint small medium large extra large.

Don't worry we have a video to talk about responsive design in
bootstrap.

For this if I want to show the element on medium devices is going to be
the breakpoint as medium and

then dash block with this one.

Let's see.

And we have the element as that.

Let me change the background color to success and then padding of one.

And this is what we have with this one.

If I reduce the browser window, as you can see the element is nowhere to
be found because I'm on the

smaller screens.

But if I enlarge I will see the text being visible.

Let's talk about padding and margin for this one we have already
explained.

So let me provide margin top to be three and then provide class of
background color.

I'm going to use light and I can add border and then padding of three.

And then margin bottom of two.

And this is what we have.

What about the larger.

Padding is going to be class BG dash light.

And then border.

And then padding of five and margin bottom of two.

All right.

This is what we have.

What about the custom horizontal is going to be BG dash light and then
border.

And then margin top is going to be three.

And for the padding if I want it to be right or left is going to be p y.

Sorry.

On my side I made mention PL and then PR for right and left.

I thought I'm using tailwind CSS in bootstrap.

If you want it to be top, it's going to be padding, top padding, bottom
padding y and then x.

So if I say padding x for this and I can also specify padding y to be
one.

Let's see.

As you can see, we have the horizontal as that.

All right.

And for the visibility one we can use the same technique for the d block
or d none or d inline.

And we can hide either this one or we can toggle it based on the user's
device.

Don't worry when we get to responsiveness.

And that is breakpoint or grid system, we can achieve it using those
concepts.

Let's talk about one of the utilities in bootstrap and that is height
and width.

These are used to make an element wide or tall.

Let's find out in the official documentation under the utilities click
on the sizing.

And bootstrap uses what is called relative positioning.

And relative positioning in CSS is a type of positioning model used to
adjust the location of an element

in relation to where it would normally appear in the document flow.

So here we have these utilities and that is in percentages 25% 5075 100.

And auto and bootstrap make it pretty easy to implement this by using a
few lines of code.

Apart from width, we also have height and they are all in percentages.

And from there we can use what is called viewport.

Let's get into Visual Studio Code to put them into practice.

And as always, I have created a folder called Width and Height.

And I have provided a starter template for you without any bootstrap
utility classes.

I have made a copy and renamed to final.

This what we are going to work on and this is the preview.

Let's begin with the width utilities.

When building websites using bootstrap, definitely you may need your
custom CSS with bootstrap, because

sometimes there might be classes in bootstrap that may not suit your
need.

This is where your custom CSS comes in, especially for width and height.

These are defaults, but let's say that you want a width of 80%.

Bootstrap doesn't support that unless we write our custom CSS, but
bootstrap takes away most of the

complexity from us, allowing us to write few lines of CSS code.

Let's begin with the width utilities.

Let me add a class to the H2 by saying that m y is equal to three.

Let's begin with the width of 25, or.

What you need to provide is w dash 25.

This means 25% width.

Save it and let's see where it is not visible.

So let me add a background color and let's see where it will appear.

And this is what we have.

Let me provide padding of three on all sizes.

And it looks something like this.

And for the second one, let me copy this and then place it here and
change this 1 to 50% and change

the color to.

And this is what we have.

Let me also provide to the 75%.

Paste that and change this 1 to 75.

And then the background let me change to one.

All right.

And we also have 100% paste that and change this 1 to 100%.

Change the background to primary.

And this is what we have.

It has taken 100% meaning that it should take the available space.

And like I said that in bootstrap the width and height are relative.

Therefore, we can control the width of this one based on the container
of its parent.

At the moment these width are referencing the viewport.

That is why we have the width of 25 being like this.

Because the total width for this one ends here.

That's the viewport, and this one has taken 25%.

Let me bring in the line again.

This is the viewport width and that is 100%.

And this one has taken 25%, 50% 75 and then 100.

But we can control the width of these ones based on the container.

Let me show you here.

I'm going to provide my custom with a style.

And then I'm going to provide background color.

I'm going to use let's say black for this one.

And let me add a color of white.

If I say that the width of the entire container is equal to 400 pixels,
let's see.

I'm going to provide width of 400 or 500 pixels.

As you can see, it has taken the width based on the parent container.

And let me provide some padding around the container.

For this, I'm going to use bootstrap by using P-2 and we have some
padding around the container.

This is how width works in bootstrap.

We can increase the width of the container to 900 and the width will
adjust based on the parent container.

The same thing applies to the height utilities.

So we are done with this.

Let me provide some margin bottom of let's say five.

Now let's get into the height which is this one.

I'm going to provide class of m y to be three.

So to use the height class bring in class.

And it follows as h.

And then it ranges from 25 as we did for the width.

Now let me add some background color by using primary.

And let's see this is what we have.

We can also control the height based on the parent container.

Because of that I'm going to provide some inline styling a style and
provide height of say 500 pixels.

And this is what we have, meaning that this one has taken 25% of the
parent container.

And let me add a class of background to the parent container.

As class and I'm going to use BG Dash primary.

Let me use secondary instead.

And this is what we have.

Now, have you seen the movement of the height?

It is on top of each other and I don't want that.

I want them to be on the side by side like that.

In that way, we can visualize the height of the individual elements.

Because of that, we can change the behavior of the div to inline block
by using what is called d dash

inline block.

Now let's see.

And this is what we have.

This is a parent container that is the height of this one which is 500.

Let me reduce to let's say 300.

And this is what we have.

So this is 100% and this one has taken 25%.

What about the 50%?

Well let me add text white on all the I'm going to add the same thing to
the.

The 50%.

Change this 1 to 50 and the background color.

For this let me use Sussex and it has taken 50% of the height.

Let me also add to the 75.

Change this 1 to 75.

And then.

The color of the background to danger, and it has taken 75%.

The next one is the 100 as that.

And let me change the background color to warning.

And indeed it has taken 100%.

And lastly, about the auto change this one to auto, and then change this
one to let me use danger

for this one also.

All right.

This is how the auto works.

Now I believe you got the clue.

Let's move on to the viewport.

The viewport simply means that the visible parts of your browser is your
viewport.

So at the moment this is my viewport.

So let's see how to use the classes.

And we often use viewport to create hero sections.

So I'm going to add a class to this one as class and margin y of three.

All right.

We have some spacing.

Now let's talk about min width.

And min height is simply means that the minimum space and elements you
take.

And then maximum simply means the maximum width or height an element
should take.

We have vw and that is viewport width vh viewport height.

And then vw is also viewport width and viewport height.

But for this one I'm going to append the minimum to it, meaning that the
minimum width or height the

element should take, but the ones without min and max, it simply means
that it should take the available

space.

All right, so let's begin with a min width for this one.

It goes like this.

Provide a class.

And for this one we're going to use min dash.

VW is equal to 100, meaning that the minimum viewport width should be
100.

Irrespective of the user's browser or window.

The width must be 100 minimum.

With this one, I'm going to provide BG of danger.

And let's see.

And this is what we have.

It has taken the minimum width as this.

All right.

What about the minimum viewport height.

It follows the same principles.

Let me add text dash white and also margin bottom of two.

All right.

We have some spacing I'm going to copy this one.

And then on the min height here change this one to height.

And let's see.

Let me give different background color of say info.

Let me change this one to dark.

It has taken the minimum height of my viewport.

Now let me add one to the width over here.

Paste that and remove the main and change this one to W and then the
background.

I'm going to use danger.

And let's see.

And this is what we have.

And lastly is the viewport height.

And this is what we're going to use often for creating hero sections.

And let me change this 1 to 6.

And this is what we have.

All right guys I believe at this point we've seen how the sizing
properties works.

You can explore more in the official documentation.

Let's continue in the next video.

We are going to talk about how to use images in bootstrap.

If you go to the official documentation under the content and then
images, bootstrap provides responsive

image by using a class called image dash fluid, and this one applies
maximum width of 100% and height

being set to auto.

Apart from responsiveness, they also have thumbnail images by using a
class called image dash thumbnail.

Apart from this, we can align images by using these classes float start
and float end.

We can also center it using Max Dash auto.

Let's get into Visual Studio Code to put them into practice.

I have created a folder with two files, the final and then the starter.

I have made a copy of the Stata code to make it final, so we are going
to work on this one.

For this one.

We don't have any classes from bootstrap to be used on the images.

Let's look at the preview first before we get into it, which is this
one.

And this is by default how it will look like with this one.

If I reduce the browser window, let's see if the images are going to be
responsive.

As you can see, the images are being cut off, meaning that they are not
responsive.

So let's see how to use bootstrap classes to make the images more
responsive.

Let's get back to Visual Studio Code.

And let's begin with responsive image.

I have provided image tag and then the source of the image and then the
alt attribute.

Now to make an image responsive we're going to pass in or provide a
class called IMG dash flute with

this one.

Let's see the differences.

Now if I reduce the browser window, as you can see the image is
responsive.

As you can see, it is not being cut off.

How awesome it is with one class we have implemented responsive image.

Now let me provide some margin.

Bottom of three.

All right.

We have some spacing here.

Now let's talk about the image thumbnail.

If you want to turn or change this one into thumbnail.

Let's see the class.

It goes like class and then provide img dot thumbnail.

And let's see.

And this is what we have.

It has added some border around it with some shadows.

And then if I reduce the browser window as you can see it is more
responsive and it looks like a thumbnail.

Now how can we align images.

Let's scroll down here and we have these images for alignment.

Let's begin with the start.

I'm going to provide a class called float start dash start.

And to appreciate this one I'm going to provide a width of this one to
be 25%.

And then margin bottom to be three.

Let's see the differences.

Now.

As you can see I have aligned this image to left if I increase the
browser window.

As you can see where it is, it is at the left side here.

Now let me add one to the end which is this one is going to be class.

And then provide float and then dash and provide a width of 25%.

And this is where it is we have pushed to the end or to the right.

And if I want to center this one now let me reduce the browser window.

As you can see the down one it is not responsive.

But as soon as we add a class to this, one is going to be class.

And I'm going to provide center dash block and provide a width of 25%.

And as you can see it is at the center here.

All right guys.

So this is how we can use image classes in bootstrap.

Let's continue in the next video.

Let's talk about table classes in bootstrap.

If you go to the official documentation under the content, click on the
tables and let's see some of

the classes that we can use.

Or what we need is to provide a class called table on the table
container.

And this is an example.

Or what you need is to provide a class called table.

And from there we can extend this one by adding our custom CSS or
bootstrap classes.

And let's scroll down and let's see some of the variations.

And this is how we can use colors in tables.

Or what we need is to provide a class as table dash primary dash,
secondary success, danger warning

info, light and dark.

It applies to all the colors system or what you need is to provide table
dash the color.

And then we can also apply the same colors on the row by using table
dash, the color that you want

at the same time.

We can use it on the table data as that, and that is the colors.

And we also have different variations and that is striped rows.

As you can see here, these ones are being stripped and the class is
called table dash stripped.

And we can also stripped columns.

As you can see here these columns are being stripped.

And the class is table dash stripped dash columns.

And then we also have one class called table Doc.

If we want to have dark table we're going to provide it as table dark.

If we want primary is going to be table primary.

And we also have this effect called Hoover.

As you can see if I move my mouse on the table, as you can see the
Hoover effect, it is because of

this class.

Now with this one being in mind, let's get back to Visual Studio Code to
put them into practice.

As always, I have provided the starter code and then the final code.

We are going to work on the final code and this is the preview.

This is by default how table looks like without any CSS or bootstrap
classes.

Now we are going to turn this one into a beautiful design using
bootstrap classes.

Let's begin with the div itself, which is this one.

In case you want to make your table more responsive, you're going to
provide a class and then it is

called table dash responsive.

Now let's use the actual table classes on the table with this one being
added.

Let's see there is no differences because now you're going to add the
real bootstrap classes.

Bring in the class.

And the class here is called table with this one.

As you can see we have beautiful design and that is with only one class
from bootstrap how awesome it

is.

And we can add other classes as table stripped.

And let's see.

And we have it as being stripped as that.

This will be called the stripping perfect.

Right.

And then in case I want to have some hover effect I'm going to provide
it on the table dash hover.

And we have the cool effect as that.

And if I want to stripped the columns also I'm going to use table dash
stripped and then dash columns.

And let's see.

And the columns are being stripped as that.

And in case I want Dark Table I'm going to provide table Dash dark.

And we have Dark table.

If I want to use primary let's see we have primary table.

What about danger.

We have it as that.

And then info or warning we have it as that.

But I prefer to use the dark.

All right this is cool.

Right now let's say that you want to apply the dark to the head here I'm
going to remove from here and

then add to the head itself.

As class and then table dock.

And this is what we have.

And if I say that the table for this let me use table primary.

We have it as primary.

But the header here is dark.

And we can apply the colors to the individual table row.

I can say that for this I'm going to use table dash warning.

And we have it as that.

I can also apply to the individual table data here.

Let's see.

And this is what we have I can also add a different color to this one
let's say primary.

And we have it as that.

Let me change this one to let me say and we have it as that.

The choice is up to you how you want to structure your table.

I'm going to use dark table here.

So let me remove the primary and make it as dark.

All right.

This is optional.

So guys this is how we can use table in bootstrap.

We are going to use forms in bootstrap.

Let's visit the official documentation.

Under the forms click on the form control.

Let's see some of the classes that we can use in bootstrap to design
forms.

Let's begin with the form label or what we need is to provide a class
called form label.

And this one will add some design to the labels.

And for the input fields we have what is called form control.

With this one we're going to have some nice padding margin and width of
the input fields, and we can

also size the input fields by using either large or small.

And that is if you want the input fields to be larger like this one or
small, something like this.

Or by default we're going to use these classes and we also have form
text and that is dot form text.

Let's talk about what is called disabled.

And we can also disable the placeholder or the value by providing
placeholder disabled input.

And then the value is called disabled read only input.

Let's get into Visual Studio Code to put them into practice.

And this is what we are going to design using bootstrap.

As always, I have provided the starter code for you and this is the
final one.

This is a preview for this one.

So let's see how to add bootstrap classes.

I have added class called Margin bottom to each of these ones to have
some enough spacing.

Let's begin with the label.

This is the label.

Let's look at the first name, how it looks like we have it as this.

But as soon as I add.

A class call form label.

Let's see.

As you can see, we have some padding around this one, but this is not
all that visible.

But behind the scene.

Bootstrap is going to apply this one to have some consistency when
dealing with forms.

Now let's focus on the individual input fields.

This is where the magic begins.

If I say class and provide form dash control.

Now let's see with that one being added.

As you can see, we have nice design as compared to these ones.

So I'm going to provide the form control to the individual input fields
for the last name.

And this is what we have.

Now I believe at this point you've seen the label class for the first
one.

For the first name we have class called form label on the first name,
with this one being added.

As you can see, we have some spacing between the label and in the input
field, but for this one,

as you can see how close this one is because it doesn't have the form
label on the last name.

I'm going to provide class and I will say form dash label.

And now we have some nice spacing.

Let's talk about the email.

It follows the same format.

Provide a class form dash label and then form control on the input
field.

And this is what we have for the email and for the password.

Also it follows the same format.

And the label here is class equal to form dash label.

Perfect.

Now let's style the checkbox.

I'm going to provide a class called form Dash check.

And this is what we have.

And now for the actual input field which is this we're going to provide
a class called form dash check

dash input.

And let's see.

And we have it.

I start with a nice design.

All right.

I can check and then uncheck.

If I remove the class let's see.

As you can see the design by if I add the class.

Now we have the beautiful design as that, and we have a class for the
label for the checkbox.

So here as class and it's going to be as form check label.

And we have it as that.

Let's talk about the radio buttons.

We are going to provide a class on the div as class.

And it's going to be as form dash check.

The same thing for the checkbox is going to be form check input.

Copy that.

And then on the radio button.

Provide us that.

And this is what we have for the membership.

And then for the label is going to be form check label.

Which is this?

And let me add the label to the premium one, which is this one.

And then the class also adds that to the input field, this one instead.

All right.

Now let's talk about the picture one.

We're going to provide the form label and then the input as form
control.

And let's see.

And we have it as that.

Now let's take the opportunity to explore some of the classes that we
can use on buttons.

If you go to the documentation, click on the buttons.

Let's scroll down here which is under the component.

Click on buttons and we have the base class called dot btn.

And then we can add any classes for example primary color, secondary
success, danger warning info

light and dark.

And this is how it follows.

Bring in the base class as btn and then to add a color is going to be
btn.

Dash the color that you want either primary, secondary or Sussex and
others.

Now we're going to do the same thing on the submit button.

We are going to provide a class called BTN space btn dash primary.

And let's see we have it as that.

Let me add some margin.

Margin.

Bottom of five.

Good.

And I can change this one to danger.

We have it either info or warning.

We also have it and stats.

All right guys this is how we can use form classes in bootstrap.

We are going to learn how to implement layout in bootstrap by utilizing
the concept of responsive design,

and bootstrap makes it easier to implement responsive design.

If you go to the official website under the layout, we have this concept
breakpoint, containers,

grid columns, gutters and others.

We are going to focus on the breakpoint containers, grid columns and
gutters to implement responsive

design, which means that we can determine at which point or the user's
device that we want to align

our content to make it more responsive.

Let's begin with the breakpoint in bootstrap, and here it says that
breakpoints are customizable weights

that determine how your responsive layout behaves across device or
viewport sizes in bootstrap.

And these are the concept.

One is breakpoints are the building blocks of responsive design, and use
media queries to architect

your CSS by breakpoint.

And by default, bootstrap is mobile first responsive design and this is
their goal.

Let's see the available breakpoints that bootstrap supports.

It ranges from the extra small small medium large, extra large and extra
extra large.

We have this one in bootstrap five.

And above these are the dimensions.

And these are the classes that we are going to use.

This means that we are not going to write custom CSS to implement
responsive design.

By using media queries and others.

Bootstrap has taken away all this complexity from us, or what we need to
do is to use the class names

and I will show you how to do it.

And you can also customize the dimensions if you scroll down here.

These are the dimensions, and these dimensions are the one that are
commonly used.

All right.

So here we have the media queries and it uses the min width.

And then down here it also has maximum width.

But we are going to use the default configuration.

Now that we know the breakpoints let's talk about containers.

Containers are the fundamental building block of bootstrap that contain
padding and align your content

within a given device or viewport.

This means that containers are the basic layout in bootstrap, and they
are required when you are using

the default grid system.

This means that when using the container class, it is going to
automatically add some spacing around

our content.

Let's see some of the classes.

When using the container, we have the container and then container
fluid, and we can also append or

add the breakpoint.

Also let's see this table to learn more about breakpoints and
containers.

In case you are confused.

Don't worry, we will get into code to demonstrate how it's going to
work.

We have the class names and these are the devices.

And then with their dimensions.

When we use dot container on the extra small screens, it is going to
occupy 100% width.

But on the small these are the dimensions that the container will
occupy.

But for small screens the container will be 100% on the extra small and
then on the small, medium,

large and extra large.

These are the width that it can contain.

And for medium screens on the extra small, 100% small like that medium,
and also as that and then

on the large screen is going to occupy full width on extra small, small,
medium and large is going

to take 960.

And as that likewise the extra small.

I believe you have seen the pattern.

But let's look at this one.

And that is container fluid.

If you use this class, irrespective of the device is going to take 100%.

And this is the default container by using the container on the element.

And we can also have responsive containers as we have spoke about.

So in case you provide container small this one will be 100% wide until
small breakpoint.

Likewise this one.

Now that we got the overview when it comes to breakpoint and then the
containers, let's get into Visual

Studio Code to put them into practice.

I have already created a folder called Containers and Breakpoint and
this is the starter code which

is this.

And then I have made a copy to make it as final, which is this one.

And this is a preview of what we are going to demonstrate.

Now let's look at the structure.

At this point, I assume that we are going to use some colors that we
cannot find in bootstrap.

That is why I have provided these custom CSS for you.

But still you can use the built in classes of colors.

So let's look at the structures.

We have these containers or divs.

The first one is the standard container the full width container.

And then the responsive containers down here.

Let's begin with the standard container.

I'm going to add a class by using the background color of custom light
blue.

I want to use this one.

To make it more visible.

So here is going to be a start.

And let's see the result.

This is what we have at this point.

We don't have any container or responsive container.

And I want to add some border for the text here by using class.

And I will say p three and let me provide border on all sizes and start.

All right.

This is what we have now.

As soon as I add what is called container to this one, let's see the
differences.

After saving it.

This is what we have.

It has reduced the weight of my container.

Thus beauty of the container class.

And this one will remain the same until it reaches smaller screens.

Let me reduce the browser window and let me show you on the larger
screen.

As you can see the behavior, it is not occupying the entire space unless
it gets to the smaller screens

before it can occupy the entire space or the available space.

Now what about the container fleet?

I'm going to add a class and I will say, let me provide the background
first and I will say BG Dash

custom.

Let me use pink for this one.

And let's see, this is what we have.

Now let me add some padding also to the text as be three and border on
all sizes.

And this what we have now as soon as I add container dash flute let's
see the behavior.

And this is what we have now for this one.

It has taken the full width irrespective of the user's browser or the
viewport size.

Let's look at the documentation.

Here.

We have the container dash flute and this one will take 100%
irrespective of the device.

So for this, if I reduce the browser window it has the full width.

All right.

Now let's talk about the breakpoint with containers.

Now I'm going to add a color or let me provide margin bottom to have
some spacing.

And let me also add.

Margin bottom to be three.

All right.

We have some spacing.

Now let's talk about the responsiveness.

I'm going to provide a class by saying BG.

That's custom.

I'm going to use yellow one and then provide class of padding three and
border on all sizes.

And this is what we have.

Now I'm going to add the container.

If I say container and then dash I can use any breakpoint either small
medium extra large or extra extra

large.

So if I say that dash sm is simply means that it is going to be 100%
wide until small breakpoint.

Now with this one, save it and let's see.

Now as you can see that it is not occupying the available space.

But as soon as I get to the smaller screen, let's see.

This is what we have.

It has taken the full width on the smaller screen.

Now let me add some margin and then let's talk about the medium screens.

I'm going to provide a class by using BG Dash Custom Green and then
provide class of padding dash three

and border.

Let's see this what we have now I'm going to add container and then Dash
MD.

And that is medium screen.

If I save this one what will happen.

It is going to take the full width on the medium screens.

Now save it.

And let's see we have it as that.

But as soon as it gets to the medium screen as you can see it has taken
the full width.

Now let's talk about the large screen or large breakpoint.

It follows the same principles provide margin bottom for this one.

And here I'm going to provide class BG dash custom purple.

And then the same class P3 here and then border.

Now if I say that container dash I'm going to use what is called large
that is LG.

With this one.

Let's see.

On the larger screen it has taken the full width.

Let's talk about the extra large breakpoint.

Let me provide margin bottom of three.

And it follows the same format.

So let me copy this one space.

And then let me change the color to light blue.

And here for the breakpoint we are going to use extra large and then
also provide class of P3 and then

border.

And let me also apply to the extra large screen.

That is extra extra.

Change this one to orange and then change this one to XXL.

That is extra, extra large.

Provide class of B three and then border on all sizes.

Save it.

And let's see.

And this is what we have.

I believe you got the clue how to use the breakpoint.

Let's talk about grid system in bootstrap.

To my experience, this is the most difficult part when using bootstrap.

But don't worry, I will take my time to explain by using some diagrams
to show you how grid system

works.

Great system is a powerful framework for creating responsive and
structured layouts.

It uses a series of containers, rows, and columns to align and
distribute content evenly across a

page.

And this one uses flexbox to create layouts that automatically adapt to
the size of the user screen

by adjusting column width and alignment based on breakpoint.

So to appreciate grid system unless you are familiar with flexbox.

So let's see what makes up grid system.

The first one is containers, and for this one we have already
demonstrated and containers as you spoke

about they are used to encapsulate and then align content within a
designated space and also rows.

This one is new to us.

We will get there very soon.

For rows we haven't talked about it and I will show you with some code.

In short, rows serve as horizontal groups for columns and they ensure
proper alignment and distribution

of space among columns.

For breakpoint, we have already demonstrated in summary, breakpoints are
predefined width at which

the layout of the page will adjust to provide optimal viewing
experiences across different devices.

And lastly, columns.

Columns are used within rows to create vertical divisions of the
content.

Let's revisit the breakpoint as we spoke about.

These are the breakpoints that bootstrap support extracts more with this
dimension small.

Medium.

Large.

Extra large and extra extra large extra extra large was introduced in
bootstrap four and above.

Now let's begin with the grid system.

I will advise you to take some notes, because understanding this will
help you to master bootstrap

and use it wisely.

Let's talk about container.

As we have already demonstrated, to be able to use breakpoint and
utilize the grid system.

The first class is the container and as we spoke about the container
serves as a wrapper or it encapsulates

the content in it by having some spacing around it.

In case you didn't watch the video on containers, I advise you to do
that.

So let's say that this is our entire page with the container class being
applied to it, which means

that inside here we're going to have individual element.

Now we're going to have what is called a row and a row moved from left
to right.

So we can say that this is one row.

And we can also have one more row on our page as that.

At this point we know what are rows.

Now inside each row we're going to have what is called columns.

And the columns are also moving from left to right.

And take note about this.

The number of columns that a row can take is 12 columns, which means
that per each row, we can place

in 12 columns and these are the columns one, two, three, up to 12.

And this is what bootstrap support.

But in case we add one more column then it will overlap by placing it
below here.

Because on each row it can take up to 12 columns.

Likewise this one.

And for this columns we can decide how many space that we want each
column should take.

And note that the total columns must be add up to 12.

So here we can say that on the smaller screen we want seven columns,
which means that we have five

columns remaining.

And for this five columns we can distribute or add to any of these ones.

We can say that we will add the five remaining columns to these ones.

So you can see that this one will take.

Two, two, two, two and two and then this one will take one one.

So if we add up we're going to have in total 12 columns.

And we can decide that on the small screens we're going to have three
columns.

And for these three columns we have remaining of nine.

So we can spread up the nine.

Among these ones we can see that the first one can take six.

This one can take let's say five.

And this one will be one.

I believe at this point you are confused.

Don't worry.

When we get to code, you better understand this one.

And we can also decide that on the extra small screens you're going to
have only one column.

But this column should take the available space.

So this means that the total for this column you're going to be 12 over
here.

This means that the total column here is 12 meaning that it has taken
the remaining spacing.

All right.

Let's get back to Visual Studio Code to put them into practice.

And before that, let me show you the official documentation where you
can read more if you click on

the grid here.

As we spoke about, this is a powerful mobile first flexbox grid to build
layout of all shapes and sizes.

And down here these are the columns.

And we have the options.

That is a breakpoint.

Let me show you with code for you to understand.

Now I have created a folder called Grid System.

And for this one all what we have is H1.

So let's begin with the grid system.

We are going to utilize rows and columns.

So I'm going to have a wrapper.

And that is a container I'm going to use dot.

And then the class name is going to be container.

This is Emmet.

All right I have a container with a class called container.

And I'm going to have one row I will say row one.

And I'm going to provide a class called row as that.

And inside this row you're going to have 12 columns.

All right.

Now how are we going to create the columns.

It's going to be as this I'm going to provide a div with a class called
column.

All right.

And inside I'm going to provide let's say one over here.

If I save it let me add background color.

And let's see on the page this is what we have.

We have one row.

Let me add a background color to the row as BG dash.

Let me use warning and provide padding of two.

We have the row with the yellow background and this is the column.

Remember for each row we can have 12 columns.

Before that, let me add this classes as text dash white and let me
provide text dash center and also

padding y to be two.

Save it.

And let's see.

And this is what we have now we can decide that for this column we want
it to take let's say four out

of 12.

So here to be able to use that break dash.

And then if I say 12 this means that for this div we want to cover the
available space.

So if I save it we have it as before.

So this one is the same as this.

Remember this means that evenly distributed.

Now if I say dash one let's see it has taken one out of 12.

If I say two is going to take two out of 12, and if I say six is going
to be half of it, I believe

you got the point.

Now I'm going to provide column of one.

So it means that we have 11 remaining so we can add more columns.

I'm going to copy and paste and then change the background for this to
secondary.

And then let's see.

Let me change the text to two here.

And this is what we have.

Now I can say that I want the second one to take ten and let.

See, this is what we have now.

If you add up, it's going to be ten plus one.

It is equal to 11.

And we have one more remaining.

So I can add this one to this making it two.

And now this is what we have.

Let me change this one back to one and this one also to one.

And let me have one more change the background to something like one in.

Or let me use Sussex and change this 1 to 3.

Great.

So for this one, if I want it to be evenly distributed, I can remove the
one one here.

And let's see.

And this is what we have.

They have distributed evenly.

So I can say that I want the first one to be three.

We have nine remaining.

I can say this one is five and we have four remaining.

And if I say this one is four, let's see the sizes.

As you can see how it is working.

Let me change this one back to one one and start.

And then I'm going to have one more for four.

And then change this one to let me use one for this.

And then next one.

Change this one to info, this 1 to 5 and start change this one to dark
and then six.

And change this one to danger.

This one is seven.

And then this one to success as eight.

Change this one to primary and that is nine and this 1 to 6.

Ten and then change this one to danger.

That is 11.

And lastly, we're gonna have 12.

Change this one to primary.

And as 12.

Now let's see we have it as that.

If I add one more let's see.

Change this 1 to 13.

As you can see we don't have available space for the 13th element.

Now let me remove this one.

And let's say that we want this one to take the available space or wait
we're going to change this one

to flute.

And this is what we have.

So we can decide that we have 12 items here.

If I say this one should take four.

Now what will happen.

Let's see.

We have the overlapping because this one alone has taken four meaning
that we have eight left.

Now let's count.

We have 123, four, five, six, seven, eight, nine, ten, 11.

That is why we see the overlapping.

So guys, this is how we use the grid system with rows and columns.

What has left is to introduce responsiveness by incorporating
breakpoints.

We can say that on smaller screens we want this one to take the 12th.

And on medium screen we want this one to take half of it.

In the next video, I will show you how we are going to incorporate
breakpoints into our grid system.

Let's continue in the next video.

We are going to incorporate breakpoints into the grid system, and this
is where we left in the previous

video without any breakpoint.

What we want to achieve here is that on the smaller screen, we can say
that we want this particular

column to take all the available space, and on medium screen we want to
show only two columns.

Let's get back to Visual Studio Code for me to show you how we are going
to do that, I have created

a folder called Grid System Dash breakpoint, and we have empty content
and this is a preview.

I'm going to have a container and inside I'm going to have one row.

And inside here we're going to have four columns.

So here I will say column one or C1.

And it goes like this I'm going to have first div and then the second
div and provide one here as column

one.

Let me use C1 for short and let me provide a class by using P-3 and then
border all sizes and bg dash

primary and text dash white.

Now let's see.

And this is what we have.

And this is by default it takes the available space, which means that it
has taken all the 12 columns

so we can control this behavior.

So on the parent which is this one, I'm going to provide a class.

And if I say column I'm going to provide how many spaces that we want
this one to take as we did before.

If I say three, let's see.

We have it as that.

Let me also provide some background color to the row.

Let me use something like.

Sex and padding of two.

And also let me use container dash fluid.

All right.

As you can see, the first Dave has taken three columns, which means that
we have nine left for this.

We can decide that on smaller screen.

We want this particular Dave to take up to six.

And it goes like this column.

And then Dash going to provide the breakpoint.

And that is either small medium extra large or extra extra large on
small screen I want this one to

take up to six.

And then I can say that on the medium screen I will say that it should
take up to four and then on large

screen and that is LG.

This one should take up to three.

And before saving it, let's change this 1 to 12.

Remember bootstrap relies on mobile first approach, which means that on
smaller screen this one will

take the full width.

With this one, save it.

And let's see.

And this is what we have.

If I reduce the browser window let's see on the medium screen.

As you can see it has taken half of it.

Now if I go to medium, as you can see it has taken four out of 12.

So it means that the remaining one is eight.

And if I increase is going to reduce the width of 8 to 3.

All right.

But if I go to the smaller screen, as you can see this is what we have I
have some padding here is

because of the container and also the padding on the element and then on
the actual container.

The takeaway here is that understand how the element adjusts based on
the breakpoint.

Now I'm going to have column two copy and paste.

Change this 1 to 2.

And this one.

Let me change this one to danger.

Now before saving it let's see what will happen.

Remember we are inside this row, which means that this row should take
up to 12 columns.

And let's begin with the first one over here.

We are saying that on the extra small screen it should take the full
width, as you can see here.

So this means that it will be on top of each other.

And then on the smaller screen we are saying that it should take half of
it.

So here six plus six will be equal to 12.

And then on medium screen we are saying 44.

So here we have remaining of six.

And then on larger screen we're going to have three three which is up to
six.

Now with this one save it and let's see.

Now remember we are on the larger screen.

It has taken 33 as you can see over here.

Let me change this one to column two.

And this is what we have.

Now if I reduce the browser window, let's see on the.

As you can see we have it as six six.

That is why we have it as equally distributed.

And if I reduce the browser window, as you can see it has four back to
the 12th width.

And that is the smaller screens.

So let me bring it back to this.

Now we have some available space here.

Therefore we can add more of these columns.

Let me change this one to column three and then this 1 to 3.

All right.

So let's see what will happen on smaller screen.

That is the extra small.

We're going to have this element being stuck on top of each other
because we have 12 here and then 12

and 12 here.

But on the smaller screen we have it as six and six.

This means that column one and column two will be on one line, and
column three will be below it.

But on the medium screen we're going to have four, four and then four
here, which means 12.

So this one will be on one line.

And also on the larger screen we have it as three three, three.

We have three more.

Therefore for this one it will be on one line with this one.

Let me change this one to all right.

We have it as one, two and three on larger screen because on larger
screen this one has taken three,

three, three.

But if I reduce the browser window now let's see on the medium screen we
have it as four four.

That is eight and then 12.

That is why they are on the same line.

But if I reduce, as you can see on the smaller screen, it has taken six
six here.

So these two will be on one line and this one will be below eight as you
see over here.

As soon as I get to the smaller screen, we have it being stacked on top
of each other.

So I can add more of these columns, because on larger screens we have
three remaining.

So I can say that here as four and then here as four.

Now let me change this one to let me use info.

And let's see this is what we have.

But on the larger screen let's see the differences now.

We have it as that, meaning that on larger screen we're going to add
three plus three plus three.

I think we have one here.

Yeah we have three, three, three, three here which is add up to 12.

That is why we have it as that.

And on medium we have four four that is eight and then four four.

So this one will be on top of each other.

Now if I save this let's see what we have.

Cool.

All right guys.

So this is how we use breakpoints with a grid system.

We are going to build and deploy a modern landing page using bootstrap.

Before we get into code, let's look at the layout first.

For the deployment, we are going to use Netlify.

This is a navbar with the logo and then the navigation links with the
call to action.

And this is a hero section with a title and then description and some
call to actions here.

And we have the image.

As you can see for this layout it is using what is called flexbox.

And I'm going to show you how we are going to use it.

And below here we have the features for this project.

And as you can see the coup effect if I move my cursor on it.

And then below here is the pricing section with the basic popular
enterprise.

And these are the features for each of the pricing.

And we have the testimonial with the image the name, the company and
then the message.

And we also have the contact form and the footer here.

And one cool thing about this project is that it is responsive.

So even if I decrease the browser window as you can see how responsive
it is.

And we have the drop down for my navigations.

Apart from this we have also implemented what is called internal
navigations.

For example, if I click on the features, as you can see it has jump into
the features section.

Likewise the pricing testimonials and get started.

And that is the contact form.

And this is what we are going to build or design and deploy.

In case you are not familiar with bootstrap.

Let's search for bootstrap.

Or better still, you can go to getbootstrap.com.

And bootstrap is a popular open source front end framework used for
designing responsive and mobile

first web applications developed by Twitter.

It includes a collection of CSS and JavaScript components, templates,
and utilities that simplify

and speed up the development of visually consistent and functional
websites.

We are going to include some few lines of custom CSS.

So back to Visual Studio Code.

I have a folder called Landing page.

And before that let's explore the bootstrap.

If you go to getbootstrap.com click on the documentation.

And below here they have the starter template.

And that is a quick start.

And this is what we are going to use.

Not this one, but instead this one.

For this it includes the CSS and then the JavaScript.

So copy that and then back to Visual Studio Code.

I'm going to have one file called Index dot HTML.

And I'm going to paste that right click and then preview it in the
browser.

And this is a preview.

So for this we are going to include what is called icons from bootstrap.

You can use Fontawesome icons.

But for this we're going to use bootstrap icons.

Let's get into Google and search for bootstrap icons CD in.

Or better still you can go to kings.com.

And this is what we want.

I'm going to click on this.

That ends with main dot CSS.

Copy that and back to the project.

Let me have a comment as bootstrap CSS.

And I'm going to have bootstrap icons.

And I'm going to paste that.

And this is a JavaScript as bootstrap JavaScript.

And I'm going to rename this one to Modern Landing Page.

And let's have a look.

Which is this one.

We are going to use this one as a roadmap.

So let's begin with the nav bar.

So back here in the HTML I'm going to remove this one.

I'm going to have a comment as nav bar begins and nav bar ends.

All right.

So it goes with nav.

Or what you're going to use here is to use bootstrap classes because
they have already written the CSS

for us.

That is why we are using the link from bootstrap.

This means that we are pulling all the CSS written by bootstrap and all.

What you need to do is to use their class names and that is it.

So here I'm going to provide what is called class.

I'm going to use nav, supposed to be nav bar, and for the nav bar they
have different variations.

So if you check the official documentation and let's search for nav bar.

And these are the variations.

As you can see we have one as that.

Likewise this and that.

So back here we have the first class as nav bar.

And this is the base class for bootstrap navigation component.

Then we're going to have nav bar dash expand and then dash LG for large.

And this one makes the nav bar responsive.

Our screen sizes larger than the large breakpoint and that is 992
pixels.

The nav bar will show all items horizontally and below.

This breakpoint is collapse into a hamburger menu.

Apart from that, you also have what is called nav bar light.

Dash light.

This one set the color scheme for light backgrounds and makes text dark
for better contrast on light

backgrounds, and then going to provide BG white for the background and
use fixed dash top, and this

one makes the nav bar stick to the top of the viewport, and the nav bar
will stay visible when even

scrolling and then shadow dash small.

This one adds a subtle shadow effect below the nav bar, and this one
creates visual separation between

the nav bar and then the content.

So with this one, if I save it and then get back to the page.

As you can see, this is what we have at the moment.

We don't have any content.

So in the nav bar expand it and you're going to provide a div.

And for this div we're going to have a class called container.

With this class it is going to provide some margin and padding around
the navbar.

Let's begin with the logo which is this one.

Therefore we're going to use a tag for that because we want the logo to
be clickable.

So in here we're going to provide the icon by using a class.

And the name for this I'm going to use as startup for the A tag.

We're going to provide a class by using what is called navbar brand.

And the purpose for this class is that it is going to styles the element
as a brand logo in Bootstrap's

navbar, and after that we're going to use f w dash board, and this one
makes the text bold and that

is font weight bold and then space text dash Primary, and this one gives
us the primary color.

And for the icon we're going to provide a class equal to by space by
dash boxes.

And this is how we use icons from bootstrap icons.

And by is bootstrap icons.

Class prefix by box is the icon name.

If you search for bootstrap icons, which is this one, then let's get
into the official website, which

is this.

And these are the icon names.

Let's say that when I use this one, then we need to provide the by and
then the icon name.

That's what we are using it here as.

So let's preview what we are building which is this one.

And indeed we have it as that as starter.

So back here the value for this will be outside the icon.

and this is what we have.

As you can see for the final one we have something like this.

The next part is going to be a button.

Provide button.

And then in the button.

Provide a span.

And let's give it a class as navbar toggle icon.

And for the button.

Provide a class I will explain each of these classes.

Provide navbar dash toggle and then type equal to button and data dash
BS dash toggle is equal to collapse

and then data dash BS dash target is equal to hashtag navbar nav.

So let me explain the navbar toggler which is this one?

This is a class.

That style is the button used for toggling in the navigation menu on
mobile devices, and this one is

specifically designed for collapsible navbar functionality.

And we have the navbar toggle icon.

This one creates a familiar hamburger menu that appears on the button.

It is a visual indicator that a button controls the navigation menu for
the final one.

If I reduce the browser window.

As you can see, this is a button with the hamburger menu.

And this is what we are building.

And this one is from the button with these classes.

And then with this data attribute.

This attribute works with these classes to control which elements
collapse or expand.

In this case the element with the id equal to navbar nav.

And this is a standard pattern in bootstrap for creating mobile
friendly, responsive navigation menus

that collapse into a hamburger menu on smaller screens.

It's time for us to implement the individual links, so let me increase
it as that.

All right, so after the button, let me collapse and then provide a div
with a class equal to collapse

space and navbar collapse.

And then provide id equal to navbar nav for this ID, as you saw in the
button, we provided the target

which is equal to navbar nav, and this way we are targeting it.

In between this we're going to provide UL and for the UL provide a class
equal to nav bar, dash nav

and provide M is equal to auto.

Let's finish with the lease.

Then I'll explain the purpose of each of these classes provide Lee, and
for each of the lease, provide

a class which is called nav dash item and then a tag, and the name is
equal to features for the ref

provide hash tag equal to features.

This one is used to create internal navigation, and I'll show you how
you're going to use it.

So for the A tag, provide a class equal to nav dash link.

Let me explain each of these classes for this class called Collapse it.

Hide the content by default and enables toggling visibility.

And that is used for mobile responsive navigation and nav.

Bar collapse is specifically for collapsible nav.

Bar content works in conjunction with a toggle button for mobile views,
and also navbar navigation

or navbar nav.

This one styles the navigation items within a navbar, providing a proper
spacing and alignment.

Ms. auto stands for Margin Start Auto, and this one pushes the
navigation items to the right side of

the nav bar and navbar item is for individual navigation items in the
navbar, providing proper spacing

and styling and navbar link.

Provide anchor tags within navigation.

Provide proper padding.

Hover state and active state.

So let's see the preview of this.

And this is what we have for the features.

And apart from that you also have the following as pricing testimonials
and button.

To make our life easier we are going to copy and paste the individual
lines.

Paste it here and change this one to pricing.

And then for the h ref.

Change to pricing.

And let's see.

This is what we have.

Apart from that the testimonials and change this one to testimonials.

All right.

And lastly is the button.

Paste that.

And for the A tag remove the nav link and use btn space btn dash
primary.

This is for button classes.

And then MS-2.

And change this one to contact in bootstrap.

M stands for margin and that is for spacing.

And m S stands for margin start.

So with this one let me change this one to get started.

And this is what we have as get started.

Testimonials, pricing and features.

We are done with the nav bar.

Let's look at the responsiveness of this.

If I reduce the browser window this is what we have.

So let's focus on the hero section which is this part.

So back to Visual Studio Code I'm going to collapse the nav bar.

And after the comment I'm going to call this one as hero section and
provide a tag equal to section

and a class as hero Dash section.

This is going to be our custom CSS that we are going to use to apply on
this section.

And then I'm going to use some bootstrap classes as text as white and D
Dash flex.

This means display is equal to flex.

We are going to use flexbox properties because by default bootstrap uses
flexbox.

So for this one it is going to turn the container into a flex container.

And then we're going to align everything as align dash items dash
center.

And then in between we're going to provide a div with a class equal to
container.

And container class is going to create a responsive fixed width
container that centers your content.

And it has different maximum width at different breakpoints.

And this one includes horizontal padding.

With this class we have all these features.

And then inside the container we're going to have a div.

And the class goes like row and then align items.

These are flexbox properties as a line item equal to center and g is
equal to five.

Let me explain these classes one more time.

The row is going to create a bootstrap grid.

Row and align items equal to center is going to vertically center items
in the row.

This is going to add vertical spacing and that is gutters of size five
between row items.

About 48 pixels in between.

Bring in div with a class equal to col dash, lg dash six and text dash
center and text dash large dash

start.

Let me explain this class and that is column large equal to six.

And this one means takes up six columns and that is half weight on large
screens.

And text center is going to center all the text and then text dash large
equal to start.

And this is going to align the text on larger screens.

Therefore let's provide each one with a text as transform your business
with our solution.

I'm going to copy this text and then paste it here.

Provide a class equal to display dash for and then font weight bold and
margin bottom.

As for the display equal to four, this is going to make the text larger
and more prominent with this

one.

Let's save it and reload.

The text is not visible because the text is white and then the
background is equal to white.

We are going to use some background colors to make the text more
prominent.

Then after the h1, bring in p with a class equal to lead and then space
margin bottom is equal to four

and lead is going to make the paragraph text slightly larger and more
prominent.

So you're going to provide this text as empower your business with
cutting edge tools and insights.

I'm going to paste the description as that.

And after that we're going to have these two buttons get started and
then read more.

Therefore we are going to wrap it in a div with a class equal to display
as flex and then flex dash

column.

And this one specifies the direction of the flex as column.

This means that it's going to stack items vertically by default and
space flex dash small dash row.

This means that it is going to change the horizontal layout on small
screens and upwards.

After that, it's going to bring in gap equal to three, and gap is going
to add some spacing between

the flex items and then justify dash content dash center.

And this is going to center the items horizontally by default and space
justify content.

And then LG for large and then start.

This is going to align the items to start on larger screens.

Then in between the div you're going to have the two links is supposed
to be like this as a for the

first link we're going to provide as get started, then the value is
equal to hashtag and provide hashtag

and use contact.

I'll explain when we get into the main action for this one.

This is going to create internal navigation.

So let's provide class to the A tag by using class btn and then btn dash
light and then btn dash large

and then space w is equal to 100 and then w dash small is equal to auto.

The btn is a basic button styling, and btn light is going to give color
white on the button and btn

large is going to large.

The button size and W-1 hundred is going to give you the full weight on
smaller screens and weight small

is equal to auto is going to auto the weight on small screens and
upwards.

I'm going to copy this one for the learn more.

Change this one to learn more and everything remains the same.

Let me preview that.

And this is what we have once again.

As soon as we have a color on the background, all this text will be
visible.

So to make it visible we are going to add our custom CSS which is hero
section.

Here we are going to write it in line with this because we're going to
have some few lines of CSS.

So bring style and then dot hero section background is equal to.

We're going to use linear gradient.

We are going to provide two colors.

And then the angle the first color the angle is equal to 135 degrees
comma, and the color is equal

to hashtag 6366 f1 and provide 0% for the second one going to provide a
color equal to 855 F7, and

then spaced 100% for that provide padding equal to 120 space zero, and
then minimum height is equal

to 100 VH.

That is viewport height.

And this is what we have as compared to the final one.

We are on track.

Nice.

The next one is going to be the image which is this one.

I think for this the background is not light.

So let's remove the classes the class instead of light I'm going to use
an outline light.

Let's see.

All right.

So let's include the image.

So after this bring in the image.

Or let me wrap it in a div and provide a class column dash large equal
to six.

This means that on larger screens it should take half of it.

And then the image.

Note that bootstrap provides some responsive image classes and the class
is equal to image dash float.

And let's get into Google.

I'm going to search an image from Pixabay.

I'm going to search for tech.

And I use this one copy image address.

Or you can download it and host it locally.

So in the exercise C paste that.

and reload.

And this is what we have.

Well, the position is wrong.

It's supposed to be outside.

So copy the div for the image and we are going to paste it.

Let's locate the container which is this.

And we're going to paste it inside this row.

So expand it.

And this is a row.

Let me see where it ends.

It ends here.

Therefore after that I'm going to paste it save it.

And this is what we have.

And let's have some rounded corners.

So back to the image class which is this space rounded dash four and
then shadow.

And we have this cool effect.

We are going to work on the features section which is this part.

Back to Visual Studio Code.

I'm going to collapse the hero section and have a comment as features
for the features.

We're going to use a section and then provide ID equal to features.

Now let me explain the purpose of this ID here.

For this ID it is not for styling but instead it is for navigation.

Do you remember that inside the navigation links, we provided what is
called a href equal to hashtag

and then some value?

Let me show you here for example this one.

This means that when a user clicks on the features here, it is going to
look inside our code and look

for any tag that has an ID equal to features.

Then it will jump into that section.

Likewise the pricing and then the testimonials Below here.

This is where we are specifying the destination, and then provide a
class equal to padding y equal

to five.

Provide a div with a class equal to container.

For this one we have already explained and then padding equal to five.

And this one is going to center this text.

And then the description in between here provide H2.

I'm going to say amazing features.

Provide a class font weight bold and then p tag with a description as
discover what makes a difference

and provide a class equal to text dash mutate.

We're going to have something like gray color.

Let me show you what I mean here.

As you can see, something like this.

Let's center everything here.

Therefore I'm going to cut this one from here and use a diff.

Paste that and for this container provide a class equal to text dash
center.

And it has centered everything and provide margin bottom equal to five.

All right.

So it's time for us to provide the individual features.

We're going to provide a row for each feature.

So div with a class equal to row space G equal to four g equal to four
is a great gap or gutter of size

between columns.

So inside we're going to have the individual features.

Therefore I'm going to provide a div with a class equal to column dash
MD equal to four.

This means that on medium screens it should take four out of 12.

Note that the total column is equal to 12, so on medium it should take
four.

Then we're going to have the individual card.

And bootstrap makes our life easier by using a class equal to card.

With this one we're going to have a card like structure.

So after that provide h equal to 100.

And padding on all sizes is equal to four.

Then we're going to provide three things.

If you look at the final one we have the icon title and then the
description.

So let's begin with the icon.

I'm going to use a div and then provide a tag for the I tag.

The class is equal to b I space and then b I g.

Once again if you check the official documentation of bootstrap icons
you're going to see this class.

As you can see for the final one for the icon we have a background
color, and for this I use some custom

CSS.

Therefore provide a class equal to feature dash icon.

Then after the icon provide H4 and I'm going to say easy integration,
then the description are seamless.

Integrate.

Copy the description.

Paste that and then provide a class equal to text dash muted.

So let's see what we have.

Let me save it.

And this is what we have.

As you can see for the final one we have something like this.

So let's go ahead and style this icon.

So let's get into the CSS.

We're going to provide dot feature dash icon a width of 64 pixels height
64 pixels.

Background.

Hashtag 6366 F1.

And then the color as white.

Border radius of 12 p6.

Align item center.

Therefore, we need to have display equal to flex and then justify
content as center font size equal

to 12 pixels.

And then margin bottom is equal to one rem.

All right.

This is what we have.

I think the font size is too small.

What about 20.

All right.

And for the card I don't want the border.

Therefore we can overwrite by using dot card for this.

When we are overriding the bootstrap classes I'm going to use border is
equal to none.

And then Transition.

Let's have some cool animation as transform space 0.3 seconds.

Space as is.

Therefore, we will need the hover effect as column hover on hover.

I want to translate.

Remove this translate on y axis and it should go negative five parsecs.

Now let's see.

It's supposed to be transform.

All right so let's see.

Now we don't have the border.

And if I hover it is moving negative five on the y axis.

So let's continue with the other feature.

We are going to copy and paste.

This one is feature one and that is this one I'm going to label it as
feature one.

Collapse it.

Copy feature two paste and then feature three also paste.

Now going to change the text and then the icon.

So for the final one this one is secure and reliable.

Paste that the description.

As this and the icon is equal to Pi shield dash.

Check.

Let's see what we have.

Something like this.

The last one is analytics which is this one.

Replace with that then the description.

Also that and the icon is by graph Dash app.

Let's see.

All right.

So let's see the responsiveness of this.

And indeed it is responsive.

The next section is going to be the pricing back to Visual Studio Code
I'm going to collapse the features

container.

This one is a hero.

And then features I'm going to have the pricing.

And it goes like this section.

Then provide the ID for the internal navigation as pricing.

This means when a user click on the pricing, it should jump into the
pricing.

And note that we have binded the navigation link as id equal to pricing
in the href.

So when a user click on, this is going to locate a div with id equal to
pricing and then space provide

pricing card.

This is going to be our custom CSS and then provide a class called BG
Lite.

You want to have white background and padding of five.

Then in between we're going to have the container as div with a class
equal to container and then padding

y of five.

Then in between the container we're going to have the title of the
pricing are simple pricing.

Therefore I'm going to use a div with a class equal to text dash center
and then margin bottom of five.

In between provide H2 called simple pricing and then p tag as.

Choose the plan that works for you.

Copy that and then paste.

The class is equal to text, dash, mutate and let's see what we have.

All right.

There we go.

Then let's provide a row after the text container provide a class called
row.

I'm going to use dot row.

This is a syntax for adding class to an element.

Then after the row space G of four and that is gutter or the spacing.

And let's begin with the basic plan.

You're going to have a div with a class equal to column dash LG dash
four and then provide a div.

This is going to wrap the entire of the plan as class is equal to court.

And then our custom CSS has pricing code space H is equal to 100 and
that is height and then padding

on all sizes.

As for then we're going to have a div with a class equal to cart dash
body.

This class is from bootstrap to create a cart like structure.

So after that we will need the h5 for the actual text as basics or basic
with a class equal to mutate

as text, dash mutate.

And let's see.

All right, let's provide the price.

If you look at the final one we have the price as that.

So after that and that is after the H5 we're going to have H2.

I'm going to provide \$9 for this as nine and then use small.

I want to have this styling as dollar and then forward slash the month.

So it goes inside the small I'm going to use forward slash month or let
me write it in full as that.

And then the class is equal to FS dash six.

FS simply means font size.

And for the H2 we're going to provide display equal to four.

And then font weight as bold and margin bottom of four.

Let's see the effect.

All right.

This is what I want.

Then after that we're going to have the list back here.

After the Two.

We will need the UL with a class equal to list dash on style and then
space margin bottom equal to.

Four.

This class called List on Style is going to remove the default styling
and that is the bullet.

Then in between we're going to have the individual Li's with a class
equal to margin bottom of three.

And the first one is going to be the icon and that is the check icon.

Therefore I will need the I tag with a class equal to VI.

And then by dash check space text dash primary space.

And then margin end is equal to two.

So save it and let's see.

All right I have the check icon.

Then after the icon I'm going to provide the basic features.

And I'm going to copy this paste it for the next feature.

If you look at this we have one user.

Therefore I'm going to change this 1 to 1 user and everything remains
the same.

All right.

And after that is the size as five GB storage.

Paste five gig storage.

All right.

And let's provide the button as get started.

So after the Li you're going to use a tag.

And for this it's no point to any place.

Therefore I'm going to use hashtag.

And I'm going to say that Get started and the class is equal to btn
space btn dash outline.

And instead of light I'm going to use primary.

And then weight is equal to 100%.

And let's see.

All right.

The next one is going to be this one.

And that is a popular plan.

So I'm going to copy and paste the basic one.

And then I'm going to say pro plan and then paste.

And after the card body I'm going to provide a span.

I'm going to call this one as popular and provide a class as badge.

This one is from bootstrap and then BG Primary and then margin bottom is
equal to two.

And this is what we have.

I'm going to change this one to pro.

And then the price is equal to \$29 per month.

And our basic features instead of one user is equal to five users.

And instead of five it is equal to 50 gig.

And then get started.

For this remove the outline and let's see.

All right.

And lastly is the enterprise plan.

Let's copy the basic plan.

Let me collapse this as enterprise plan paste and change this one to
enterprise.

And the price is \$99.

And then here as all pro features and then unlimited users.

And instead of five gig is equal to 1T1 TB storage.

And then contact us and let's see.

All right.

So if I reduce the browser window it is also responsive.

Not this one is supposed to be this.

Yeah.

As you can see it is responsive.

The next part is going to be the testimonials.

Back to Visual Studio Code I'm going to collapse the pricing which is
this one.

And I'm going to have a comment as testimonials section.

And it goes like this section with ID equal to testimonials.

And then with a class equal to padding y equal to five.

So you're going to have a div with a class equal to container as we have
already explained.

And then padding y equal to five.

Then we're going to have the heading as what our clients say is going to
be a div with a class equal

to text, dash center and margin bottom of five.

And let's provide a class equal to font, weight, dash board and the text
as what our clients say.

And then p tag with class equal to text Muted and text as trusted by
thousands of companies.

Then after the heading, let's see what we have.

All right.

Let's increase the font size I think.

Font weight equal to bold.

Well, it's supposed to be H2.

We're gonna have a container that wraps individual testimonials.

So after the heading we're gonna have a class called row and then space.

Gutter is equal to four and that is a spacing.

Let's begin with testimonial one.

And we're gonna have a div with a class equal to column dash MD equal to
For.

And in between that, we're going to have a div with a class equal to cut
and space height is equal

to 100% and padding on all sizes.

As for we are going to have the image, the name company and then the
testimonial.

So I'm going to wrap the image, the name and the company in one
container.

I'm going to provide a class equal to direction equal to flex and then
align items center and margin

bottom of four.

So let's begin with the first image.

As I see in the South Sea, I'm going to search for any image of my
choice.

I'm going to search for profile head.

Hate.

I want this cat.

I'm going to copy the image address and then paste it here for the art.

I'm going to say testimonial one or testimonial dash image.

Or let me use client one and provide a class equal to testimonial image.

For this we're going to use our custom CSS.

And after the image we're going to have a div that's going to wrap both
the name and then the company.

So for this there will be no class on that.

H5 is going to be as John Doe with a class equal to margin bottom of
zero.

Then the company I'm going to use small and the name is called Co comma.

And then the company and the class is equal to text dash mutate.

Let's see.

All right.

The image is too big.

Don't worry.

We'll go ahead and style it.

So let's continue after this div we're going to have p tag with the
actual description or the message.

I'm going to copy this and then paste it here.

And then the class is equal to text dash mutate.

You can use any text of your choice.

So let's go ahead and style the image as testimonial image.

So back to the CSS dot that a width is equal to 86 Height at p6 border
radius of 50%.

I want to have a circle and object fit.

Use cover to have perfect align image.

And this is what we have.

The name and then the company like the actual message.

They are not perfectly aligned inside the D flex.

The actual message must be outside that.

So I have cut everything and if I collapse the D flex after that, I'm
going to paste that.

And let's see.

All right.

Everything is okay as compared to the final one.

Everything is perfect.

I'm going to copy and paste for the next Testimonial.

I'm going to select everything from here.

Paste.

Change this one to testimonial two.

And there we go.

Collapse.

Paste.

Testimonial three.

And let's use different images.

I'm going to copy this image address.

For the second one.

Not this for the second one.

Replace with that and the name.

Let me see.

This one is Jane Smith.

And you can change the company.

And then the message.

Let me use this.

And this one is CTO startup.

Tap.

And let me use different image.

This is a guy.

So let me use a dog for that instead of.

This.

And let's look at the next one as Mike Johnson.

Then the message is this.

Place with that and let's see.

All right I think the image let me use this copy image address.

All right.

And let's see.

All right.

The next part is going to be the contact form.

Back to Visual Studio Code here I'm going to collapse The testimonial
and then comment as contact for

the contact section with ID equal to contact and then class equal to BG
dash light and then space padding

y of five.

And let's have a div container with a class equal to container.

And then padding y of five.

Provide a div with a class equal to row space.

Justify content as center.

And then in between we're going to have a div with a class equal to
column MD equal to eight.

This means that on medium screens it should take eight out of 12 and
then on larger screens as column

dash LG.

For large it should take half of it and then in between provide a div
with a class equal to card space

small shadow as shadow small.

And let's see what we have.

Something like this.

It is not visible because we don't have any content.

So let's provide a div with a class equal to card, dash, body and
padding on all sizes as four and

padding on medium screens.

It should take five and then H3 as Get in touch for the H3.

Provide font weight equal to bold and then margin bottom of four.

Let me reload.

All right.

And we have get in touch.

Then after that bring form for the actual form and remove any attribute
because this form will not perform

any functionality.

So in the form provide a div with a class equal to margin.

Bottom of three.

This one is for the first input field.

For the name, provide label and remove the four and provide a class
equal to form dash label and provide

the name as name, then impute the type is text.

Remove these guys and provide placeholder as your name.

And then let's have a class equal to form dash control space form dash
control dash LG.

And let's see.

Awesome.

I'm going to have I'm going to copy this div for the next input field.

It is equal to the email and the text is equal to email and your email.

All right.

The next one is going to be copy.

And paste is going to be the message.

And for the message we're going to use text area instead of input.

So change this one to text area.

And for the text area you're going to have the closing tag.

And the class remains the same and placeholder as your message.

And remove the type rows is equal to four.

All right.

And lastly the button as button send message provide a class as btn
space btn dash primary and the type

is equal to submit.

Let's see the preview.

Awesome.

Let me provide bt large.

BTN dash large space width is equal to 100.

And let's see.

Let me provide some margin top of say four.

All right I have that spacing.

The last part will be the footer.

If you look at the final one this is what we have.

So back here I'm going to collapse the contact.

And here as footer for the footer I'm going to use footer tag and
provide a class BG doc.

And that is a background color.

And the text must be white and padding y of four.

Then provide a div with a class equal to container.

And then let's provide a row.

And for this row we're going to have the following content with a class
equal to C column.

EMD Dash six and then H five as startup, and then P tag as.

I'm going to use this text and change this 1 to 2025 and provide.

Let me see the preview.

All right.

We have it as that.

So the next one is going to be the links.

I'm going to use a div with a class equal to column dash EMD equal to
six.

And then margin bottom of zero and text dash EMD as.

And this means that on medium screens you should move to the end and
then provide a div with a class

equal to social links.

I'm going to write our custom CSS for the links, and in between we're
going to have the attacks.

And for this you can use the right link for your social media.

We're going to use the first one as Twitter.

The class is equal to b I and then b I dash Twitter.

And then for the A tag provide a class equal to text dash white.

So let's see the preview.

All right.

And the next one is going to be I'm going to copy this paste and then
Facebook.

Let's see.

All right.

And after that you're going to have linked in and then Instagram.

All right let's see.

Perfect.

So let's go ahead and style this one.

So back to the CSS.

Copy this social links and dot social links.

Then the A tag.

Use text decoration as none.

All right.

So guys here ends this project.

The last part is the deployment.

And that is hoisting.

So to host it let's go to Netlify.

Com and make sure to sign up I have an account already.

After that locate your folder for that project.

Mine is called Landing page which is this one.

So back to Netlify.

After sign up we are going to deploy.

Click on Add new site and then deploy manually.

Or what you have to do is to drag and drop, but make sure that it has a
file name equal to index at

the root.

I'm going to copy this and then just drag.

And Netlify is doing its magic behind the scenes.

And it says that preview.

And this is our website which is now live.

And we can customize the name.

So let's go back here and click on Site overview and then Site
configuration which is this.

And then we have what is called change site name.

I'm going to call this one as missing dash landing page and save.

All right.

Now we have meaningful URL which is this.

And you can purchase a custom domain to have your main domain than to
use Netlify Dot app.

All right guys, so here ends this project.



##################################################################################


############################################################################
**Date:08 July 2026
**Epic & Task:**P2.2-D6 — Two-Way-Binding + Lifting State Up (Section 4, part 2)
**Day segment (if multi-day task):** Seg 1 of 5 · GitHub Issue #252 (OPEN by design)
***************************course trans***********************************
Act as a senior software engineer, technical educator, and documentation
writer. Read the transcript and create concise study notes that answer
only the lesson questions provided.

Requirements:

-   Extract only the important concepts related to the lesson questions
    for the following ,

```{=html}
<!-- -->
```
    Adding a Header Component
    Getting Started with a User Input Component
    Handling Events & Using Two-Way-Binding
    Lifting State Up
    Computing Values & Properly Handling Number Values
    Outputting Results in a List & Deriving More Values
    Outputting Content Conditionally


    markdown
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

    ##Quick Revision

    - Short revision points

Return **only valid Markdown** that can be copied directly into a `.md`
file.

course transcript:

This course section here

is all about practicing those important React essentials

we covered throughout the previous course sections.

And to practice those essentials, in this section here,

we'll explore yet another brand new demo project.

Our React-powered Investment Calculator

which the website visitors can use

to calculate the future value

or actually multiple future values

for given investment parameters.

And whilst we, of course,

already did build various demo projects up to this point,

this demo project here

is all about you practicing what you learned

because in this section,

we're not going to dive into new concepts

or new React features.

Instead, we're going to build

this Investment Calculator web app

so that you can practice working with components

or with state,

and that you can practice outputting list

and conditional content.

Because my task for you

is that you try building this project.

And to help you with that,

I created a starting project to which you,

of course, find attached both a local version

and a CodeSandbox version.

For the local version, as always, if you want to use that,

you have to download and extract it

and then run npm install.

And once you did that, you have to run npm run dev

to spin up that development server.

This is not needed on CodeSandbox.

But with that up and running,

with that starting project here,

your goal is to add components

and state and all the things that might be needed

to build this Investment Calculator web app.

Now, to make this process

of building this web app a bit easier

and to allow you to focus on the React features

you learned about,

in this starting project, in the src folder,

you'll find an index.css file,

which already includes a bunch of CSS code

so that you don't have to write any custom CSS code

to build this web app.

And if you take a look at this CSS code,

in there, you also might find some hints

on how you could structure your web application

regarding some components you could build.

Maybe for example, a user input component

that groups these user input fields together.

Though, of course, in the end,

it's totally up to you how you build this app

because there also won't be a single correct solution.

Instead, there will be multiple possible solutions.

This section is really just about you

trying out what you learned and practicing what you learned.

But besides this CSS code,

you'll also find a util folder in that src folder

besides the assets folder with an image you can use.

And in that util folder here, you find an investment.js file

which includes a calculateInvestmentResults function

which you can use to derive these results

that are shown in this table, in this finished app.

And I'm providing this function to you

so that you don't have to come up with the logic

for calculating those investment values,

but that you instead can focus on the React concepts.

And you'll also find a formatter object in there

which is being exported

and which therefore can be imported in other files.

Just as this calculate investment results function.

And this formatter object is simply a utility object

that you can use to format numbers

to look pretty and to look like currency,

just as you see it in that final result I showed you.

And with that, you got a goal, you got a starting project,

you got some helper files.

And now my challenge for you

is that you try building this Investment Calculator web app

that you use the React concepts you learn about.

And that you of course, don't get discouraged

if this takes you some time.

Because after all, this is the first practice

where you should work totally on your own.

And therefore, it's totally fine

if this takes you a bit longer

or also if you are not able to build this.

Because that's of course the idea behind practice,

failing, learning, and becoming better.

And therefore, starting in the next lecture,

I'll build this web app together with you.

I'll walk you through my solution.

Though I, of course, also want to emphasize

that my solution is just one possible solution

and definitely not the only solution.

So definitely give this a try on your own first

before you then take a look at my solution.

So let me walk you through my solution.

And for that here, I'll start in the SRC folder

and I'll start by adding a new Components folder

because of course we're going to add some components here.

And I will start my solution here

by adding a header component, a header.jsx file

which exports a header component function.

And the idea behind this header component function

is of course to simply be used here in the app component

so that in there I can output my logo and my title.

And we could definitely alternatively

also add the header code right here in the index.html file.

That would be possible as well

because the header component I'm about to build

will not really be dynamic.

But here, I'll go for the component approach instead.

And therefore here in this header component,

I'll of course return some JSX code

because that is what you'll do in components.

And I'll return a header element in here,

the built in header HTML element

or JSX element here to be very precise.

And in this header, I want to have an image

and I want to have an H1 tag.

And between those H1 tags, I'll say Investment Calculator.

So that'll be the main title

that should show up on the screen.

And here for the image, I'll add a source,

which I'll set to a dynamic value

because I want to import this investment calculator

PNG file, which you'll find in the Assets folder.

So for that here in header.jsx, we can import this logo.

The name is up to you.

From, and then here the path is going up one level

because we are in the Components folder right now

and the Assets folder is in the Source folder

which is the parent folder of the Components folder.

So therefore we need to go up one level

then dive into the Assets folder

and then target this investment-calculator.png file.

And with that, we can use this logo here

as a dynamic value for this SRC attribute.

And for the alt text, I say, logo showing a money bag,

because in the end that is what you can see on this logo.

With that, I have this basic header component

and we can now of course use this component

in the app component

which is the root component of this app,

since it's this app component that is being rendered

by the ReactDOM part of the React library

into this HTML element with the ID root.

So into this div here, which has this ID root on it.

Therefore, in the app component,

I'll replace this H1 element with my custom header component

which starts with an uppercase character.

And we of course also must add this import

to the header component to make this header component

which is defined in a different file

available in this app.jsx file.

And we should add .jsx here in this import path

at the end of this import.

And with that, if you save that and you got that

development server up and running, if I reload this,

I'm getting an error that it's not finding

that image as it seems.

Might be a typo.

Yeah, the image had a dash logo at the end.

But with that fixture,

we see the image here and we see the title.

And of course now it would be nice

if the styles would look a bit nicer here.

And to achieve that, we can take a look

at the index.css file.

And in there we'll find some rules

that look for an element that has the ID header on it.

And that will be used for styling

and for styling the image tag inside of an element

with that ID on it.

And therefore, back in header.jsx,

we can achieve a nicer styling by adding the ID prop

to the header element and setting this to header.

And with the ID added here,

this header looks much nicer and we can therefore

move on to the next part of this practice app.

So now that we added this header component here

I'd say the next step that makes sense

to build this investment calculator app here

is to add a component that handles the user input

because we'll need this input to calculate

the investment result data.

So the data we need for this table,

which you wanna show on the screen.

And therefore, I'll add another new component

because of course, as you already learned

in the previous sections, the goal with React

is to split your app into such components

where every component has its own responsibility.

And I'd say getting that user input

is a separate feature of the app

that should go into a separate component

and that's why I will add a separate component here.

The user input component, we could say.

And this is a component that will be responsible

for fetching the different pieces of user input we need.

The initial investment amount and so on.

And therefore in here we'll export a never

component function and in this component function here,

I want to return a section, let's say,

or we could also return a form but we'll explore

working with form elements and dive a bit deeper

into handling user input with React later in the course,

in a separate section.

Therefore, for now, I'll just go for a section here

and I'll give this section an idea of user input

because that's another ID

you can find in the index CSS file.

In there you'll find CSS rules

that are looking for an element with an ID user input on it

and that's why I'm adding this here to this section

and then in here, in this section,

I wanna output various input fields.

And to structure those input fields

and to make them look good, I'll add a div here

with a CSS class added with the class name prop

as you learned, input group on it,

which is also something you'll find in the index CSS file.

There you'll find this rule

looking for such a input group CSS class.

And I'm adding it here on this div

so that inside of that div we can add a paragraph,

which will then hold a label

and an input element inside of it.

And my idea is simply to have multiple such

label input combinations inside of a input group

and this input group CSS class will simply make sure

that these different paragraphs are showing up

next to each other in the same row.

But now here, the idea for those input elements

is to ask the user for the initial investment.

So the amount that's initially invested

and to ask the user for the annual investment.

So how much money the user wants to invest every year

after the initial investment.

And then I want to have a second input group

below the first group, where we also ask

for the expected return.

So that expected rate of return

which the user expects to earn every year.

And then last but not least, the duration of the investment.

So how long the user plans to hold that investment

until the money is needed.

These are the four input fields I want to have here.

The four label input combinations

and for every label we have a input

where we expect to get a number as an input.

So I'll set the input type here to number,

which simply influences how the input field is displayed

to the user and how it works.

And I'll therefore do that for all these input fields

because all these values are numbers in the end.

And in addition, I'll also add the required

prop to all these input fields,

which will simply make sure that a value must be entered

and we could also write required equals true

but just adding the prop like this is a bit shorter

and will achieve the same result.

And now we of course need to add some logic

to get hold of that value that's entered by the user

and to reflect that value back into that input field.

So we need that two-way binding

I showed you earlier in this course.

And therefore, here to get

and store these values entered by the user.

We need to manage some state here

in this userInput component.

Therefore, we should import useState from React.

So this special React hook which we can use to register

and manage some state in a component.

And then we can call this useState hook here

in this component function.

And it is now up to you

if you want to manage four different states

for these four different input fields.

Or if you want to have one state object that kind

of merges all these different input values into one object.

And I'll go for the latter approach here.

But as mentioned, it is up to you which approach you prefer.

And in that object, I'll have an initialInvestment

which initially might be set to \$10,000 as a default value

though that of course is up to you.

I'll have my annualInvestment,

which could be \$1,200.

I'll have my expectedReturn,

which could be let's say 6%.

And I'll add a duration property

with a default duration of 10.

So that's now the initial state assigned to this state here.

And now of course we need to get back these two elements

and store them in constants so that we can work with them.

And here I'll name these constants

userInput and set userInput.

Since that's in the end, what this state is all about, it is

about managing and storing the input provided by the user.

Now, we of course, also need a function

that should be triggered whenever we change the value

in these input fields so that we can update this state.

And for this here, we could add four functions

one for every input

or one generic function that can actually be connected

to all inputs.

And I'll go for data approach.

I'll add a function which I'll name,

"HandleChange."

And in this function, I expect to get the new value

that was entered for a given input.

But I also expect to get the inputIdentifier.

So I expect to get these two parameters here

in this function so that inside

of this handleChange function,

we can call setUserInput.

And then I wanna update this state based

on the previous state value

because when this handle change function executes,

only one of these four properties will be updated.

And of course the other properties

and their values shouldn't be lost.

Therefore, the updated state must depend on the old state

so that we still have the old data

for the inputs that were not changed.

Therefore here, as you learned,

we should use this function form

for updating the state where we get the previous userInput

and where we then return our updated state object.

And I'll start by spreading the old userInput state object

into this new object so that we copy all the old values

into this new object.

And I then just override one single property of that object.

And that property should be identified

with help of that inputIdentifier parameter here.

So the expectation here is that inputIdentifier

will get a string as a value

that either is initialInvestment,

or annualInvestment, or expectedReturn,

or duration so that we can use this JavaScript syntax

to dynamically set a property

depending on which value is stored in inputIdentifier.

And I want to set that property of that name that's stored

in this parameter to this new value

which we're also getting as a parameter.

And with that,

we got a pretty generic handle change function

which we now have to connect to our inputs.

Now, as you learned before in the course,

you can add the onChange prop

to add a listener to the change event

to this input field.

And you can then define which function

should get executed when that change event occurs.

Now just pointing at handle change like this,

so at this handle change function here won't work though

because by default when the change event occurs,

React will call this function

and pass the event object to it.

A default event object that is automatically

generated by React.

But whilst this event object will contain useful data,

it will not hold the inputIdentifier

and it will also just be one parameter instead of two,

which we're expecting here.

Therefore, we have to use a trick about which you

learn earlier in the course where we create a new

anonymous function here,

which is then the actual function

that's passed as a value to onChange.

And that will be executed by React eventually

once the change event occurs and inside of this function

we therefore then have full control

over how handle change will eventually be executed.

And therefore, now we can make sure

that we pass those two arguments to handle change.

And the first argument should be the identifier

Which as mentioned before,

should be one of these four properties.

And for this first input,

which is about the initialInvestment,

it will be this property here.

So that will be my identifier

passed to handle change as a string.

And the second value, of course,

should be the value entered by the user.

Now we can get that with help of that event object,

and we do get that event object

in this anonymous function now.

Because it is this anonymous function that is passed

as a value to onChange,

and that will be called by React, therefore.

Hence this anonymous arrow function in my case here,

will get this event object.

And this event object,

as you learned before in the course,

has a target property which will refer to this input.

And this input has a value property,

which will be the value entered by the user.

And with that, we're now calling handle change

with our identifier and the value entered by the user

so that we should be able to update the state correctly.

Now, we also must make sure that the updated value

and also initially the initial value is fed

back into this input element.

And we can do that with help of the value prop.

This prop can be used to set the value

that will be displayed on the screen for this input field.

And here we wanna use our userInput state object here

and then here, use this initialInvestment property

because that holds the value that should

be shown in this input.

And with that for the moment,

we're done here with this input,

we can now repeat these steps for the other inputs

and copy both the value and the unchanged prop

to the next input here.

For example, the annualInvestment.

And therefore here of course,

we wanna output the annualInvestment properties value

And use annualInvestment as an identifier here,

and then repeat this for the expectedReturn.

Where we output the expectedReturn

and use this as an identifier.

And then of course also do for the last input

for the duration where we output the duration

and use duration as an identifier.

And with that, all these inputs are updated

and we should therefore now be able to

use this userInput component in the app component.

Here I want to output the userInput component

below the header.

And for that, of course, you must import it.

And you also must wrap this with one single JSX element

for example, with such a fragment now.

Because as you learn before in this course,

sibling JSX elements like header

and userInput are not allowed

as the main value being returned or stored

in a variable or used as a value in general.

Instead, you always must have just one root JSX element

which then may contain

as many children and sibling elements as needed.

Therefore, we should change the code to look like this.

And with this now,

we should have this userInput area below our header

and we should be able to update these values

and enter different values for the initialInvestment,

annualInvestment, and so on.

And therefore, now we can move on

to calculating the result data.

And then of course also,

to outputting that result data in a table.

So now that we're gathering

and storing user input, it's time to use that input

with that utility function

you find in the investment.js file,

this calculateInvestmentResults function,

to calculate the results we want to show

in that table in the end.

Now therefore, of course,

we have to answer the question, where this function

should be used, where should those results be calculated?

Where do we need them?

And of course, we could calculate those results

in the userInput component.

There we got this userInput object, which conveniently

and not by accident has exactly the shape we need

as an input for this calculateInvestmentResults function

because there we also expect to get an object

as an input which has these four properties,

which are the four properties I have here.

Though if you went for individual state slices,

you can of course also simply combine them

into such an object by deriving this object

based on your state slices.

But either way, we could therefore use this function here

in the userInput component and calculate our results here.

But do we need those results in this component?

The answer to this question, probably, is no

because even though we don't have it yet,

I do of course plan to add a separate component

for outputting that results table.

And that table should then be shown

below the userInput component.

So therefore, since I plan to output the results here

in a dedicated component we'll need to get our user input

from the userInput component to the App component,

so that in here we can calculate those results

and pass those results to the Results component.

Or pass the user input to the Results component

and calculate the results in there.

And that's therefore indeed what I will do here.

I'll add a new component, Results.jsx is my file,

and in there I'll have this function component

which I'll name Results.

And my goal is to get the user input

as an input in this component here,

so as props in this Results component.

So that in this Results component I can calculate

that results data and output that results table.

For the moment I'll just return a placeholder here, Results,

which will be replaced later.

And I'll start by getting the user input

from the userInput component to the App component,

so that then we can pass it back down

to the Results component which we will soon use here.

And therefore what we can do here

is we can simply lift this state up

from the userInput component to the App component.

We can cut this state here

and add it in the App component function like this

and then import useState in this file,

since we're now using this function here

in this App component file,

and we'll, of course, also need to lift

this handleChange function up.

So cut it from userInput component

and move it into the App component.

And now with that, we should add a new prop

to the userInput component

so that we can call this handleChange function

from inside the userInput component.

So we need to pass a pointer to this handleChange function

as a value to the userInput component.

And hence I'll add a prop here

which I'll name onChange or onChangeInput,

the name is up to you because it's your component.

Here I'll go for a onChange

and I'll point at handleChange here.

So that this function is passed as a value to userInput.

And as you learned you don't call the function here,

you don't add parentheses,

instead you just use it as a value.

And with that, in the userInput component

we can accept this prop and destructure it here,

the onChange prop which I just added,

and get rid of this import

since we're not managing state in here anymore.

And now this onChange prop here will hold a function

because we're passing a function as a value to onChange.

And hence we can call onChange as a function in here.

And therefore in this anonymous function here,

where we previously called handleChange,

I'll now call onChange,

which is the same function in the end,

now just received through a prop.

And I'll do this for all those inputs,

calling onChange to, in the end, pass this data

to the App component and there to the handleChange function.

But, of course, in the userInput component,

we also need that user input.

We need that userInput object to update the values

of these input fields.

And therefore, of course, we should also accept

a second prop here, maybe named userInput

so that we don't have to make any changes down there

in the JSX code.

And this should now be a prop that should get

this userInput object as a value.

Therefore, back in the App component

we now also must set this userInput prop

on the userInput component

and set this equal to this userInput state here

so that it's this object that's passed as a value

for that userInput prop to the userInput component.

And I know that's a lot of userInputs,

we could of course all choose a different name here

for the prop and also for the state if you wanted to,

you can rename all these things.

But with that, we now lifted this userInput state here,

up from the userInput component to the App component.

And we're doing this so that we can

now also pass this user input to the Results component

so that in there we also get a prop,

and here I'm again using prop destructuring to store it

at prop in a separate variable,

and here we can also name it userInput,

or just input to mix things up.

And then in here for the moment

I'll just console.log input.

And with that, back in the App component,

below the userInput component,

I now do want to output that Results component.

And for that, of course, you must import Results

from this Results.jsx file.

And then on this Results component

we should set this input prop, which I just added kind of

to this Results component function

and set this equal to this userInput state,

the same userInput state where we're also passing

to the userInput component, so that we're sharing this state

with two different components in the end,

two different components that both need that state.

Well and with that, if you save all your files in the app

you'll see this results text down there,

which at the moment is just a placeholder of course.

But more importantly, if you open the developer tools

you'll see an object being logged here

which is, in the end, that userInput state object.

And therefore, of course, also if I clear this

and I changed the input here, you see that this gets updated

and we get the updated object being logged here

with that updated annual investment amount

of 1500 in this case.

So passing that user input to the Results component works.

And with that, we can now derive the results data

in that Results component.

So let's now derive the results data.

And for that, of course

I'll use this calculate investment results function,

which I'm providing to you in that investment.js file.

Therefore, in here in Results.jsx,

we can in the end derive our results

from that input prop here,

which in the end of course is that user input state.

So we can derive our results from that state.

And as you learned before,

deriving values, computing values

based on state is something you'll do a lot in React.

Therefore, here in the results component,

I'll use this calculate investment results function,

which must be imported from the UTIL folder

and DRD investment.js file like this.

And to calculate investment results

we should pass our input here

because that input will be an object

at least here in my app that has this shape

I'm expecting here.

If you are managing your state differently,

or if you use different property names

in your user input state,

you of course first must transform your input object,

or create a new user input object

that then has this shape here.

But here in my case, this user input state

which I'm managing in the app component

already has the right shape,

and therefore I can just pass this prop value like this

to calculate investment results.

And with that, I'll get my results data here,

and for the moment I'll just console.log this results data

in this component so that we can take a look

at those results.

And if I save that and I open the console and I reload,

in the developer tools

I get an array with 10 elements starting at the index zero.

And as you can see, these 10 elements

are for the 10 different years.

And then in there you can see that for every year

I have the amount invested in that year,

which of course is the same for every year

since it's simply this amount here.

But I then also got the interest earned in a given year,

which is different for those different years.

And then also the value of my investment

at the end of the year,

which is simply my initial investment,

plus any annual investments, plus that interest earned.

And of course also the interest earned in earlier years.

So that's my investment data.

And if I clear this and I, for example

change the initial investment,

you see that this gets recalculated,

but you now also see that I seem to have a strange error

in there.

The interest amount looks pretty wrong

and the value at the end of the year does as well.

And then from a certain point on

I'm getting not a number as an interest value.

What's the problem here?

Well, the problem here is that in JavaScript

when you're getting the value of an input field,

like here for this initial investment input field,

but really for any input field,

that value when extracted as we're doing it here

will always be a string.

Even if you set the type here to number

this does not influence the type of value

you're getting in JavaScript.

Instead, you will always get a value of type string.

And that is the problem here

in our calculate investment results function,

because in there I'm then in the end

performing mathematical calculations with strings.

And when using the plus operator in a calculation

and one of those values is a string,

JavaScript will not use the plus operator

to add two numbers,

but instead it will concatenate

to two values as a new string.

Which leads to these super long numbers here,

which in the end are not numbers

but simply concatenated strings.

And you can see this here in year one, in the first year.

Here, in the end that's simply the number 15,000,

which is my initial investment

combined with the number 2,100,

which is my annual investment and this interest earned here.

So these in the end are two numbers, not treated as numbers,

but instead concatenated as a string.

And that's the problem here.

That's the bug in this application.

And to fix this error,

we should go back to the app component

where we are storing the values entered by the user

and we should simply add a plus in front of new value.

Because simply adding this plus here

will force a conversion of this string value

to a number value.

And with this simple fix added here

if you now reload and you change that investment here,

you'll see that this bug is gone

and we now instead do get proper numbers here.

And with that, we now therefore get our results

in this results component

and we can as a next step

output these results in a table.

So now that we got correct results,

instead of outputting them in a console,

I wanna output them in a table.

And therefore, here in this results component,

we should output the table element,

which of course also is built into HTML

and therefore, also into JSX.

Now, this table should receive an idea of result

because that is what we'll be looking for in the CSS file.

And in that table, I'll start by adding a table head,

which has one table row

where I'll set up the different titles

for the different columns of that table.

And in that table, I want to have a year column,

which simply tells us for which year

a respective result is.

We'll have the investment value column,

we'll have never column which outputs the interest

for a given year.

So the interest earned in a given year.

Another column where I wanna output the total interest

earned across all years.

And last but not least, another column

where I wanna output the invested capital across all years.

So these are my five columns,

which I want to have in that table.

And therefore, now below that table head,

we want to have a table body,

which includes the actual rows with the actual data

that should be output.

And of course, here in this table, we'll have multiple rows

and therefore, we'll output these rows dynamically

as a list based on this results data array

as you learned it earlier in the course.

So here in the table body,

we should output our dynamic value

and we wanna output our results data.

So this array here,

which we're deriving with calculate investment results.

And therefore, here, as you learned it,

we can use this map method

to turn this data array into an array full of JSX elements

that can then be rendered on the screen by React.

And here we'll get the data for every year

in this function which we pass to map,

which will be executed for every entry

in this results data array.

And then here, I wanna return a table row element

because in that table row element,

we can then define the values for the different columns

with help of the table data element, the td tag.

Now since we're in the list,

this table row should receive a key,

and here I'll simply use the year property as an identifier.

Because as you can see in the developer tools,

the year here has a different value for every year.

So it's a perfect identifier.

And then we need five table data elements in there

because we got five columns set up here in the table head.

Now in the first column,

so in the first table data element here,

we wanna output the year identifier.

So we simply wanna output yearData.year.

In the second element here,

we wanna output the investment value.

So the current value of our investment

at the end of this year.

And as you can see in the data,

we got this here in this value end of year property.

Therefore, hear, we can output year data

value end of year.

Though if we would do this,

you would see it here.

So outputting works as you can see

but it doesn't look super pretty,

especially in the later years.

This is really not that pretty.

But that's why I also created a formatter object here

in the investment.js file,

which can be used to format these numbers

and make them prettier.

Therefore, in results JSX,

we should also import this formatter

from this investment.js file here.

And you can then use this formatter down here

to wrap the data that should be formatted

with the format method like this.

So, calling formatter format

and passing the value that should be formatted to it

will make sure that the output looks nicer like this.

So that's looking good, but we're of course not done yet.

Instead, as a next field here,

I wanna output the interest earned in a given year.

And we can also see that in the raw data.

It's this interest property here.

So, back here in our code,

we wanna output yearData.interest here,

but we also wanna format this,

hence I'll also wrap this with the format method

so that we output the formatted interest.

Now in the next column, I now wanna output

the total interest earned across all years up to this point.

And of course, that's not something

we're storing in a separate property here,

but it is a value we can calculate

from these other properties

because the total interest earned in year three, let's say

is simply the value at the end of the year

minus the annual investment in this year,

and the annual investment in earlier years.

So in the end, simply the annual investment times the year

and minus the initial investment.

So if we deduct the initial investment

and all annual investments,

we are left with the total interest gained across all years.

And therefore, here,

inside of this function I'm passing to map,

I am calculating that total interest value

by using year data value end of year

and deducting year data annual investment

times year data year

because we need to deduct the annual investment

for every year.

But we also need to deduct the initial investment

and we're not storing this year in our objects.

But of course, we can easily calculate

the initial investment

based on the results from the first year.

Because in the first year,

if we deducted the interest and the annual investment

from the value at the end of the year,

we are left with the initial investment.

And therefore, of course, back in the results component,

here at the beginning maybe

we can derive our initial investment

by digging into the results data array

and by then accessing the first value.

So the result for the first year.

And here I want to get my value at the end of the year

and then deduct from that same year

my interest earned

and also, of course, for that same year,

my annual investment.

So that with that, I'm deriving my initial investment.

And therefore, now we get the initial investment as well

and we can also deduct that year

to calculate the total interest earned in a given year.

So I'm deducting the initial investment here.

And with that, we can now output the formatted

total interest here in the fourth column.

And if we save that,

we therefore see the total interest output here.

Now, last but not least,

we also need to output the total capital invested

in a given year.

And that's kind of the opposite of the total interest.

So we can calculate the total amount invested

by simply using our value at the end of the year

and deducting the total interest

because that difference now of course,

will give us the total amount invested.

So therefore,

we can then also output this in a formatted way

by wrapping it with format our total amount invested.

If we save that,

we can see our invested capital at the end of a given year

here in this last column.

And with that, this results table is finished

and this entire app is finished,

at least the first version of this app is finished.

Because there still are some potential problems in that app

that should be fixed.

So, in this almost finished app here,

we got this input area,

and then we got this results table down here.

But this app still has some flaws.

Most importantly, if I enter a negative duration,

in that case my app crashes with an error message.

Or if I change the duration to zero,

then the same thing happens.

We also can enter a negative investment amount,

though here you could argue

that this allows you to calculate how liabilities change

over the years.

So, that maybe is acceptable.

But the app definitely should

not crash if we enter zero here.

Instead, it would be nicer if we would output

some error message here below the input area,

hence allowing the user to easily change their input again.

And therefore, back here in the code,

we want to make sure that this results component

is output conditionally.

To be precise, it should only be output

if we have valid user input.

And of course, in this app component,

we can therefore simply add a new constant

or variable where we derive the information

whether the input is valid,

or not based on this user input state.

And I'll do this here, right below this state,

to keep those related values together,

even though technically you could of course add it

anywhere in this app component.

But here I'll add a new constant,

which I'll name inputIsValid,

which sounds like a descriptive name to me.

And this should be true or false depending

on whether the user input is valid or not.

Now as I just explained, this input here should be valid

if the duration is at least 1.

It should not be 0 and it should not be negative.

For all the other values here,

I can live with negative values since

you could simply calculate different things with that,

but for the duration, I need to enforce a positive value.

And of course, you could also edit this app

and its code to also enforce positive values

for those other inputs if you wanted to.

But here I'll simply check the duration

and therefore inputIsValid should be true

if userInput.duration is greater or equal than 1.

That's my condition here.

And if this condition should not be met,

inputIsValid will be false.

And therefore, now we can use inputIsValid

to conditionally render results.

By simply adding inputIsValid here

and then using either a ternary expression,

or simply this double ampersand shortcut here

to conditionally render this results component.

And I also want to show a fallback message

if the input should not be valid.

So, here we can check if not input is valid,

and in that case I want to output a paragraph

where I simply say, please enter valid input data.

Or maybe, to be more specific,

please enter a duration greater than 0.

And I'll give this paragraph a class name of center,

since this is a class, I defined in the index CSS file

that will make sure that this looks nice.

And with that if I reload,

I still see my table and I will see my table

as I change those inputs,

and you see that the table dynamically recalculates

as I change those inputs but if I change the duration to 1,

it also still works, but if I change it to 0,

you see it breaks,

and if I change it to a negative value,

it also breaks and I see this error message.

But if I go back to a positive number again,

this all works again.

And that's now the finished app.



################################################################################

############################################################################
**Date:08 July 2026
**Epic & Task:**P3.1-D5 — Merge Arrays + Intersection + Union (GFG #26,#27,#28 + Codedamn)
**Day segment (if multi-day task):** Seg 5 of 5 · GitHub Issue #187 (OPEN by design)
***************************course trans***********************************

Let's imagine you're checking whether a word looks the same from the front and from the back.

For example:

✅ MADAM → Same from both sides → Palindrome
✅ LEVEL → Same from both sides → Palindrome
❌ GFG → Front = GFG, Back = GFG? No, back is GFG? Actually reversing GFG gives GFG, so it is a palindrome because the first and last letters are both G, and the middle is F.
❌ HELLO → Back = OLLEH → Not a palindrome
The Code
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("GFG"));
Step 1: Create a Function
function isPalindrome(str) {
What it means
function → We are making a small machine.
isPalindrome → Name of the machine.
str → The word that goes inside the machine.

Example:

Word enters

"GFG"

↓

isPalindrome()
Step 2: Store the Reversed Word
const reversed = str.split("").reverse().join("");

This line does 3 small jobs.

Let's see each one.

Part A
str.split("")

Suppose

str = "GFG"

split("") breaks the word into letters.

Before:

"GFG"

After:

["G", "F", "G"]

Think of it like cutting a word into small pieces.

Part B
.reverse()

Now we reverse the letters.

Before:

["G", "F", "G"]

After:

["G", "F", "G"]

Since GFG is the same from both sides, nothing changes.

Another example:

"CAT"

↓

["C","A","T"]

↓

Reverse

↓

["T","A","C"]
Part C
.join("")

Now we join the letters back into one word.

Before:

["G","F","G"]

After:

"GFG"

Another example:

["T","A","C"]

↓

"TAC"

Now

reversed = "GFG"
Step 3: Compare the Words
return str === reversed;

This asks:

"Is the original word exactly the same as the reversed word?"

For this example:

Original

"GFG"

Reversed

"GFG"

Comparison:

"GFG" === "GFG"

Result:

true

If we use

HELLO

Original

HELLO

Reversed

OLLEH

Comparison

"HELLO" === "OLLEH"

Result

false
Step 4: Print the Answer
console.log(isPalindrome("GFG"));

This calls the function.

isPalindrome("GFG")

Inside the function:

Original = GFG

↓

Split

["G","F","G"]

↓

Reverse

["G","F","G"]

↓

Join

"GFG"

↓

Compare

"GFG" === "GFG"

↓

true

Finally,

console.log(true);

Output:

true
Complete Flow
"GFG"

      │
      ▼

split("")

      │

["G","F","G"]

      │

reverse()

      │

["G","F","G"]

      │

join("")

      │

"GFG"

      │

Compare

"GFG" === "GFG"

      │

true

      │

Printed on screen
Another Example

Input:

console.log(isPalindrome("LEVEL"));

Steps:

LEVEL

↓

Split

["L","E","V","E","L"]

↓

Reverse

["L","E","V","E","L"]

↓

Join

"LEVEL"

↓

Compare

LEVEL === LEVEL

↓

true

Output:

true
One More Example

Input:

console.log(isPalindrome("APPLE"));

Steps:

APPLE

↓

Split

["A","P","P","L","E"]

↓

Reverse

["E","L","P","P","A"]

↓

Join

"ELPPA"

↓

Compare

APPLE === ELPPA

↓

false

Output:

false
Easy Way to Remember

Think of it like looking at a word in a mirror:

Split → Cut the word into letters.
Reverse → Turn the letters around.
Join → Stick the letters back together.
Compare → Is the new word the same as the original?
If Yes → true (Palindrome ✅)
If No → false (Not a palindrome ❌)


------------------------------------------------------------------
Code
function truncateSentence(s, k) {
    let words = s.split(" ");
    let result = words.slice(0, k);
    return result.join(" ");
}

console.log(truncateSentence("Hello how are you Contestant", 4));
Step 1: Create a Function
function truncateSentence(s, k) {
What does this mean?

We are making a small machine called truncateSentence.

This machine needs 2 things:

s → A sentence
k → How many words we want to keep

Example:

truncateSentence("Hello how are you Contestant", 4);

Here,

s = "Hello how are you Contestant"

k = 4

Think of it like this:

Machine: truncateSentence

Input 1 → Hello how are you Contestant

Input 2 → 4
Step 2: Split the Sentence
let words = s.split(" ");

The sentence is

Hello how are you Contestant

split(" ") cuts the sentence wherever it finds a space.

Before:

"Hello how are you Contestant"

After:

[
 "Hello",
 "how",
 "are",
 "you",
 "Contestant"
]

Imagine cutting a chocolate bar into small pieces.

Before

🍫🍫🍫🍫🍫

After cutting

🍫 🍫 🍫 🍫 🍫

Now each word is a separate piece.

So,

words =
[
 "Hello",
 "how",
 "are",
 "you",
 "Contestant"
]
Step 3: Take the First k Words
let result = words.slice(0, k);

Remember,

k = 4

JavaScript counts from 0.

Number	Word
0	Hello
1	how
2	are
3	you
4	Contestant

Now,

words.slice(0,4)

means

Start at 0 and stop before 4.

So JavaScript takes

[
 "Hello",
 "how",
 "are",
 "you"
]

It leaves

Contestant

behind.

Now

result =
[
 "Hello",
 "how",
 "are",
 "you"
]
Step 4: Join the Words
return result.join(" ");

Right now we have

[
 "Hello",
 "how",
 "are",
 "you"
]

join(" ")

puts spaces between the words again.

Result:

Hello how are you

The function returns

Hello how are you
Step 5: Print the Answer
console.log(truncateSentence("Hello how are you Contestant", 4));

This tells JavaScript:

"Run the function and show the answer."

Inside the function

Sentence

↓

Hello how are you Contestant

↓

Split

[
 "Hello",
 "how",
 "are",
 "you",
 "Contestant"
]

↓

Take first 4 words

[
 "Hello",
 "how",
 "are",
 "you"
]

↓

Join

Hello how are you

↓

Print

Hello how are you
Complete Flow
Input Sentence

Hello how are you Contestant

        │
        ▼

split(" ")

        │
        ▼

["Hello","how","are","you","Contestant"]

        │
        ▼

slice(0,4)

        │
        ▼

["Hello","how","are","you"]

        │
        ▼

join(" ")

        │
        ▼

"Hello how are you"

        │
        ▼

Print Output
Easy Way to Remember

Think of it like a pizza 🍕

Whole pizza:

Hello how are you Contestant
1. split()

Cut the pizza into slices.

🍕 Hello
🍕 how
🍕 are
🍕 you
🍕 Contestant
2. slice(0,4)

Pick only the first 4 slices.

🍕 Hello
🍕 how
🍕 are
🍕 you
3. join()

Put the slices back together into one sentence.

Hello how are you
Final Output
Input:
Hello how are you Contestant
k = 4

Output:
Hello how are you
Memory Trick
split() = Break the sentence into words.
slice() = Pick only the words you want.
join() = Stick the words back together.