# MkDocs

[MkDocs](https://mkdocs.org) is a tool written in python for generating a static site from multiple markdown files.

The project is set up via a YAML file in the main directory.
The YAML file sets up options for the build of static site.

## Configuration YAML

[Configuration YAML Reference]

### Sample Configuration File

This is a sample configuration file from this project.

````YAML
site_name: honlSoft Developer Documentation
repo_url: https://gitlab.com/jerhon/developer-notes
site_url: https://jerhon.gitlab.io/developer-notes
site_author: Jeremy Honl
theme: readthedocs
````

## GitLab Pages CI / CD

If the site is hosted in GitLab, the pages can be set up to automatically be built and published.  
Here's an example of the .gitlab-ci.yml for building the pages.

The pages are then available at https://USERNAMEHERE.gitlab.io/PROJECTNAMEHERE

````yaml
image: python:alpine

before_script:
  - pip install mkdocs
  # Add your custom theme if not inside a theme_dir
  # (https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes)
  # - pip install mkdocs-material

pages:
  script:
  - mkdocs build
  - mv site public
  artifacts:
    paths:
    - public
  only:
  - master
````