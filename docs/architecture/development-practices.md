# Practices Overview

These are a list of development practices to consider when building a software project.  Not all of these need to be in place immediately.  However, having them in place can promote quality.

These are just general concepts and not meant to go in detail, I may write additional articles later on some of them. Consider this as a personal brainstorm of different pieces to consider in a software project and implement.

# Automated Testing

There are many different forms of testing that can occur in a project.  Some of these will overlap with each other.

## Unit Tests

Unit testing is going down to the source level of code and writing a test for a class.  In order to do this, a lot of care must be taken to perform good programming patterns and practices.

Dependency injection along with mocking is a very common pattern that enables this level of testing.

## Integration Tests

Integration testing is taking several components of software putting them together and ensure they still work.  In some cases it may be possible to eliminate or mock out dependencies.  However, the last leg of tests are really best written against something real.  

If an application references a database, an integration test may include testing the data access layer against an actual instance of a database.  For example, if using an ORM to query a database,  it is best to have some tests with the ORM against the actual database.  There are in memory stores in some languages that can be used, but if behavior deviates from an actual underlying database provider, it may not catch those problems.

A few things to consider:

* SQL Server Database Snapshots - It's possible to take a database snapshot and restore it back to that point in time from the snapshot.  This is very useful for testing.  A database can be initialized and a snapshot can be taken at it's initial point.  After a test, the database can be reset to it's initial point.
* SSD Backed Database - One of the main problems with doing integration tests is that it drastically increases the amount of time it takes for a test to run.  Try set up the database used for testing on an SSD backed drive.  It will speed up operations considerably for the sake of testing.  NOTE: 

## End to End Testing

End to end testing is taking the full product with all pieces integrated together and running tests against it.  These could be automated or manual.

## Manual Tests

While automated tests are great, sometimes making complex tests on complex systems where different pieces need to interact with each other is not possible.  In these cases having a staging environment where you can manually test the software without impacting real customer data can be very valuable.

This can also be using automated tools to attempt ot catch bugs such as Randoop, Microsoft PEX Framework (aka IntelliTest), EvoSuite.  These can help find holes in unit testing.

## Real World Feedback / Monitoring

If you are fortunate enough to have a system which you develop and also operate inside your company, make sure to collect usage data about it.  

Obvious things are reoccurring errors, fatal, and critical errors.  Let obvious things are performance monitoring such as performance counters.  Set real world thresholds and if it exceeds a threshold, consider it a performance bug.

While this is not testing your application, it is recording feedback about your application.  You can use this type of data to augment your testing with new tests if you find areas that are lacking.

# Code Formatting

Pick a consistent set of rules that your team agrees on.  Once you have agreed on this pick a tool that enforces them and will also automatically format your code for you.  Options include the .editorconfig file, others include linters such as eslint, tslint, etc...

Things to take into consideration:

* Don't be religious about tabs and spaces and the placing of braces, in the end just vote if there is no consensus.  This is not the end of the world and formatting in a project is generally just something you need to adapt to.  Everyone has what they like, and when it comes to formatting typically no one likes the exact same thing.
* Use an automated tool to enforce this. Manually enforcing formatting through code reviews is a waste of time.
* If there is an existing set of rules from an open source project, or established set of rules for a language just use it.
* Try to pick keep rules consistent across languages when possible.  Especially if it's a polyglot team.


# Code Coverage

Code coverage is a specific metric used in correlation with testing.  Typically some instrumentation of a binary will be done inserting tracing points within a binary or build.  When the code is run (typically through tests) it will report back which branches of the code were hit.  The total number of branches hit is that divided by the total number of branches to give a ratio of how much of the code was tested.

Beware, a high code coverage does not mean the code will have 0 bugs.  It just means there are some tests executing through the code.  It is an indicator to give you a general indication of how much of the code is tested.  It does not imply what the quality of those tests are.

Code coverage can be very useful for identifying areas of the product that are missing tests.  Some tools will allow you to go into a set of code coverage results and see very specifically what lines of code were hit.  


# Code Reviews

Code reviews are an essential part of a software development process meant to ensure code is up to the standards of the software team.  Code reviews aren't meant to take the place of other tools such as linters or static analyzers.

The main crux of a code review process is tracking and ensuring issues get resolved.  Based on the level of confidence in a team or individual coder, it may be sufficient to just log issues for a review or talk about a piece of code and trust them to complete them.  In other cases, code reviews need to become more formal with tracked issues that can be referenced.

Depending on the source control system being used there may be different levels of support for code reviews.  One example of a source control system and using it for code reviews are Topic branches in GIT.  Each time a feature or work item is to be completed, a topic branch is created.

Things to be on the lookout for in code reviews:

* Try to be mindful of whose code it is being reviewed.  If this is a new coder, it can be used as an educational opportunity as much as looking for issues
* Always look for logic issues.
  * null checks
  * are ranges validated in parameters
  * logic matches what's expected for the implementation
* Are there additional areas that need to be modified that were missed?
* Does the code make sense, can you read through it from top to bottom and understand it?
* Is it documented sufficiently?
* Does the code follow practices?
  * No hard coding, use constants / configuration values
  * Use enums for similar values
  * Use comments
    * should not state what the code is doing, but why it is doing it
  * avoid needless conditional blocks
  * use base class libraries whenever possible
  * small source files ( don't include everything in one file )
    * some languages group many things into a single file, use what's typical for the language
    * still don't let the files get too large
  * SOLID 
    * Single responsibility principle
    * Open/closed - open for extension, closed to modification
    * Liskov Substitution Principle - child classes should conform to the intended behavior of their parents
    * Interface segregation - Use small interfaces
    * Dependency injection - Dependencies should be conveyed as parameters in the CTOR or a method
  * DRY (Do not repeat yourself)
* Check for...
  * Maintainability
  * Readable
  * Testable
  * Debugable
  * Configurable
* Does the code match the architecture?
* Try run the code / tests and make sure it is actually working
* Check that the CI builds have run against the code
  * does it meet code coverage
  * are the tests passing

TODO: Make a code review checklist form

... More and more... I should make this into it's own article


# Continuous Deployment

Continuous deployment is the act of automated release of software builds.  This means, no manual steps in the release of the build.  Once the build is ready it should be as easy as a click of a button to release into an appropriate environment.  This doesn't always mean a release to production, but could be to a testing environment, staging environment, lab environment, etc.

Deployments may have gates on them to ensure software is ready to be released before the actual release as well.  For example, even though a build is ready, you really may not want it to go live until a down time for customers.  Perhaps late in the evening, on the weekend, or the end of a sprint.

Another possibility is you may not want your build to go live until certian people in the organization have approved it.  Perhaps a project manager, or test lead gives the final thumbs up on quality before releasing.


# Continuous Integration

Continuous integration is the act of building software frequently.  It requires an automated(non-manual) build process, and can often be triggered by a check-in or be run at scheduled times.  Continuous integration builds frequently have other factors linked to them to maintain quality such as unit tests, code coverage analysis, static analyzers etc.

Tools that can be used to accomplish this are many, and may cloud providers have ways to build software 
* Jenkins
* Team Foundation Services
* CircleCI (cloud)
* TravisCI (cloud)

# DevOps

DevOps is a somewhat ambiguous term, and means different things to different peoples.  It's really meant to say developers build the operational side of applications and strong monitoring into their applications.

Rather than having some IT person dedicated to deploying and checking software, a set of automated processes are built into the teams practices that automates everything from code commit to application deployment.  While there may be an IT team that actively monitors and does the actual deployment, the development team is in charge of coming up with a process that suites the product and providing the tools to do the testing.

Typically DevOps is synonymous with a continuous delivery approach in some agile methodology.

Overall, choose the principles and patterns to use for the team, and stick to them.

# Work Item  / Issue Tracking

Tracking what work needs to be done in a project or how a project needs to be modified is crucial if there are outside stakeholders in the project.

Before anyone enters an issue or before an issue is considered for a project, make sure to define what the issue should be.  You'll often deal with many different folks on this.


## Product Requirements / Business Analysts

This is the most difficult because feature requests are the most diverse.

* Come to a basic agreement on what the issue should accomplish.
* What is the end goal, and what what are the criteria that the issue would be considered complete?
* Why is this being requested?
  * Is it a deficiency in the current software? Or- does the software already have this feature, but it's just not working how you need it to?
  * Is it brand new functionality?
* What do you want the functionality to do / look like?
  * If they have a wire frame, make sure to get it.
  * If they do not and this is a UI, consider drawing a basic wire frame out with them.  It may spur on further discussion regarding the functionality.
  * They may not have all the details, that's fine.  The goal of this exercise is to get as much information as possible to make sure there's an accurate representation of what the feature should do.
* Is there any specific behavior you're expecting?
* Do you have any supporting documentation about the request?
* Do you already have a solution in mind of how you want the issue to be resolved?
  * Are there any alternative solutions you would accept instead of this?
  * Is it ok if I were to propose an alternate solution?

Do not expect the product requirements / business analyst folks to understand all the technical details of the software stack or how the work should be broken apart.  If there are functional issues that may arise, let them know and try to find a way to implement the spirit of their request.  Keep them in the loop if deviation is necessary.

Many issue tracking systems will allow sub issues, or link additional tasks if a particular piece of functionality is too large.  This is particularly helpful when business requirements are entered in the same tracking system where development work is tracked.  The business requirements can be mapped specifically to what work items they were implemented by.

Breaking down issues can be a very difficult task, consider vertical breakdowns of issues instead of horizontal ones. 

Also consider making a template for an issue to log.  If the project is using user stories, give a few examples of good user stories.  Make sure to take into consideration 

Good Articles:
* https://medium.com/the-liberators/10-powerful-strategies-for-breaking-down-user-stories-in-scrum-with-cheatsheet-2cd9aae7d0eb

## Customer Support

Typically these issues end up being bugs or clarifications about software.

* Always be nice to the customer support folks!  While there may be a bug in software, they are not personally attacking you, they are trying to resolve a customer complaint.  It's important that customers are happy and they are the voice of the customers.
* Get them to state the issue and what they consider the end game of the issue to be.  IE:  Customer cannot checkout and they are getting a 500 server internal error.  The resolution would be to resolve the issue so the customer can complete their order.
* Collect as much information as possible
  * If you have an automated collection system this is best!  Run a tool and the customer support folks get an archive to send to development with the details.
  * If you have queries to run, this is good as well.
  * If you can go on the servers with read only access and look at what's wrong, this is great too.


## Project Managers

Project managers are usually interested in how much work there is to be done, how long the work will take, and how they can order it.  

This means for any issues entered 
* Try to give them an accurate estimate.  Sometimes it is enough to estimate enough work for them for the next 2-3 months and let them choose the priorities.
* Give them options to break up the work, especially if it is a very large piece of work.
* Make sure any ordering for the work is explicit.  Like if Task A needs to be done before Task B, let them know.

Project managers also care about if issues are blocked or blocking someone else.  Some tools such as JIRA, TFS will allow you to put relationships in items about this.


## Developers
In general a developers main goal is to take the issue and make the necessary changes to the software to resolve the issue.  If there are any specific behaviors you wish the issue to exhibit that are known before development begins, be sure to mention them in the issue or detail them in a design document.

For complex tasks, don't expect someone to know how to implement something and then be surprised they didn't know it (when you didn't tell them).


## Comments / Decisions

Use your issue tracking system to document critical decisions.  If there is a particular point of emphasis or problematic area in the code, make sure it is well known why you made the choices you did.  This allows the project team to go back through the issue and understand exactly why something was coded the way it was.

## Templates

Come up with a template for an issue.  Don't expect it to be followed to a T all the time, but consider it the starting point for entering a complete issue for the project.   It will also formalize a terminology for you across your development group, and it will help you get started on collection of any information you need.  Keep the template general enough so it doesn't become a hassle for someone to fill out, but make sure it hits the basic information you need.

## Code

Whenever committing code, make sure to include the issue number the code is associated with.  Even if there are multiple check-ins related to the code, make sure all are resolved.

# Source Control

Always use source control.  Even if you are not sure if a project will be long lived, a simple source control such as GIT will give you the ability to commit changes frequently with little overhead.

Source control everything.  For example, if you are developing a database and developing it in raw SQL, make sure to source control any scripts to build the database.

## Branching Policies

Branching policies help facilitate a team work, provide a historical account of your code base, and help stabilize a piece of software towards a final release.

There are a variety of branching strategies out there already. Rather than rolling your own, pick one that works for what you need to do.  For a simple project, perhaps all you need is one branch.  For more complex  projects where you need to support multiple releases, it's rarely that simple.

Overall, start simple.  You can always switch to something more complicated later in the project once you need it.  Branching strategies aren't written in stone.  Especially in a good version control such as GIT.

Consider:

* Github Flow (for very simple continuous deployment based models)
* Git Flow  (for multi-release products)


# Static Analysis / Linters

Static analysis of code is done during or after a build of software.  It is a set of checks against a  syntactical and semantic model of source code for various issues that can be caught without running the code.

Some compilers have various levels of this integrated, but overall the job of a compiler is to take source code and build it into a binary form or to transpile it into another language, and do it fast.  Thus adding additional static analysis on top of a compiled project can help find code issues before it is ever run.

Some language term these as linters as well.  Linting is a similar process, but not as in depth as some of the more sophisticated static analyzers.  Linters usually enforce coding standards such as whitespace do brackets go on the same line as their block or a new line, etc... as well.
