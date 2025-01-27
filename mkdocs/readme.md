# Mo2Dox ⚡ with Material for Mkdocs

## Documentation Generation

The `mkdocs.yml` is created automatically by a Python script that reads the documentation JSON file. In order to configure the documentation, you must edit the `docs.py` file directly. Here you can configure the site name, description, author, repository URL, navigation, theme, and markdown extensions. Configure the github_base_url to link to the source code of your Mojo project and enable direct linking to the source code of a module.

Then run the following command to generate the documentation:

```bash
python docs.py
```

If not already running, start the development server:

```bash
mkdocs serve
```
