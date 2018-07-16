# Overview

Publish markdown or HTML via github.  This allows to have a generated website via Jekyll, or to publish static content managed by a git repository.  This is typically utilized for project documentation and wikis.

# index.html

When publishing with HTML and using an index.html as a landing page, make sure it is well formatted.  One problem I had was extra whitespace at the end of the file, github pages didn't like that and would not serve the HTML file.  I used the VS code format document prior to publishing.