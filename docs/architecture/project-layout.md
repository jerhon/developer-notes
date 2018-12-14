# Project Layout

When building a project, the layout of it is crucial.  Many times developers will just start adding sources to a folder and ignore the consequences of not having a well laid out solution.

This doesn't mean your structure needs to be perfect immediately.  However, keep in mind as a project grows, the structure of a project should grow to aid in navigation of your codebase.

This has been a point of issue as I've seen several situations where small solutions grow out of control and harder to maintain because finding the proper code requires a lot of code digging.

This is a growing set of guidelines I like to use when building new projects, or things I've learned from past experience.  This is not meant to be something everyone will agree on, but a starting point for project organization.

These principles are not meant to standalone and can often work in conjuction or be put into practice in different parts of a folder structure.


## The Importance of a Good Layout

* Poor layout leads to confusion for other developers.  Coding is a colaborative effort, and the layout of your repository should guide others in how to navigate the solution.

* A good structure can lead to better architectual decisions.  For example, if you group your sources by domain concepts, you can get a full view of what implementation work needed to be done for that domain concept and apply it to others going forward.

* Good structure helps lead to good design decisions and fosters patterns.  

* If a new area of an application needs to be coded, and there is an existing area that is similar, if the code is properly structured, you can use the existing area as a "template".

## Common Pitfalls

* Poorly applied structuring patterns.  While structuring guidelines are great, misapplied structuring guidelines can be just as bad and prevent your code structure from being discoverable.

* Matching your files based on your class hierarchy.  I've seen many cases where because a class has derived from a base class the programmer chose to put the code in a new folder for all derrivations of the base class.  This can be catastrophic to helping others understand your domain.  The structure of the code becomes based on design instead of domain or architecture.


## The Importance of Folders

Imagine if there were no folders on a filesystem.  We'd be left with a huge collection of files in a single directory.  Imagine the windows files being mixed with program files being mixed with pictures.  

Folders have served us well being able to organize things, but think of cases where the folder structure did not make sense, or the folders were mapped.

In the same way using folders in a software project gives us immense opprotunities to give insights into the layout of a project and aid in locating files.  In the end the folder structure should help you locate things in the solution.

## Universal Guidelines

These are gudelines that can apply regardless of language, or type or technology.  While I may reference specific technologies, 

### Match the basic architecture of your application

For example, when I create a react / redux application, I suggest the following folder structure for organizing the main source of the application.  This makes it simple to easily locate the different portions of the architecture of the application, while giving the oprotunity to seperate the source into domain concepts

| folder | description |
|-|-|
| ui | This contains the UI portion of the application, typically anything to do with the views of the application. Your react code should be organized under this folder.
| state | This contains the state management portion of the application, the redux reducers and actions should be organized under this folder.
| model | This contains any logic needed to call APIs that the UI is relying on, or if there is any business specific logic you need for your application.

This makes it clear.  If there is something in the UI to be extended, go to the UI folder.  If the calls to the APIs aren't working correctly, go to the model folder.

### Match your domain model

If you have very well defined concepts in a domain, or say you are working to model some tangible object.

## UI Project Guidelines

### Match the navigation structure

If there is a navigation system in the UI, such as a single page application, or a browser application, the folder structure should match the navigation for the UI components.

This typically was just a given in the past for web applications when they had many HTML pages.  However, now that we've entered the realm of single page applications, this is easier in today's day and age to misrepresent.

### Separate base components to a common folder

If a component is something that is considered a common or base component, then move it to a shared folder.  For example, a component exposing a special flavor of a text box.  If it can be reused, it's good to put it someplace were reuse will occur.

With frameworks that offer breaking down a UI into components, I've seen many cases with a "components" folder and all the UI elements from different screens in the application are jumbled together.  This leads to confusion as it's not easy to match.

If a component at all is tied to a domain concept, then it is not a base component, and should not be put in a common folder.


## Unit Tests Guidelines

Have the structure of the tests match the structure of the code.  For unit tests, I am assumming there is a test per class.

This makes it easy to see if a class is tested or not with a side by side comparison of the folder structures.  It also makes it easy find the class under test, or the original tests.

## API Test Guidelines

If you are testing APIs, have your folder structure match the path of the API.  In some cases, it may be sufficient to not have to create folders for these.  However, if you have a lot of APIs to test for some given resource path, creating folders that match the APIs being tested, will make it easy to navigate and ensure all APIs are covered.
