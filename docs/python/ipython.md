# Overview

IPython is an advanced shell execution environment primarily aimed at python.

# Autoreload

In your ipython_config.py add the following to the exec lines:

```python
c.InteractiveShellApp.exec_lines = [
    '%load_ext autoreload',
    '%autoreload 2',
    ]
```

This will reload code as you modify it in your editor.  It doesn't work all the time, but it works pretty well for simple behavioral changes to existing code if there is a bug, etc.
