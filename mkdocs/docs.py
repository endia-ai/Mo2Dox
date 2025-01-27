import json
from pathlib import Path
from utils import *

def main():
    # Load documentation data
    docs = json.load(open("docs.json"))

    # for linking to the source code of a module
    github_base_url = "https://github.com/endia-ai/Endia/tree/main/endia"
    
    # Set up directories
    target_dir = './docs/API'
    target_dir_name = 'API'

    # Generate documentation for each package
    for pack in docs["decl"]["packages"]:
        doc_package(pack, Path(target_dir), Path(""), github_base_url)

    # Create and save MkDocs configuration
    config = {
        'site_name': 'Epic Mojo Project 🔥',
        'site_description': 'Epic Mojo Project 🔥 API Documentation',
        'site_author': 'Epic Mojo Project 🔥',
        'repo_url': 'https://github.com/endia-ai/Endia',
        'nav': [
            {'Get Started': 'index.md'},
            {target_dir_name: build_nav_structure(target_dir)}
        ],
        'theme': {
            'name': 'material',
            'palette': [
                {
                    'scheme': 'default',
                    'primary': 'white',
                    'accent': 'blue',
                    'toggle': {
                        'icon': 'material/brightness-7',
                        'name': 'Switch to dark mode'
                    }
                },
                {
                    'scheme': 'slate',
                    'primary': 'black',
                    'accent': 'deep-orange',
                    'toggle': {
                        'icon': 'material/brightness-4',
                        'name': 'Switch to light mode'
                    }
                }
            ]
        },
        'markdown_extensions': [
            # Basic markdown extensions
            'abbr',
            'admonition',
            'attr_list',
            'def_list',
            'footnotes',
            'md_in_html',
            
            # Table of contents
            {'toc': {'permalink': True}},
            
            # PyMdown extensions
            {'pymdownx.arithmatex': {'generic': True}},
            {'pymdownx.betterem': {'smart_enable': 'all'}},
            'pymdownx.caret',
            'pymdownx.details',
            'pymdownx.highlight',
            'pymdownx.inlinehilite',
            'pymdownx.keys',
            'pymdownx.mark',
            'pymdownx.smartsymbols',
            'pymdownx.superfences',
            {'pymdownx.tabbed': {'alternate_style': True}},
            {'pymdownx.tasklist': {'custom_checkbox': True}},
            'pymdownx.tilde',
            {'toc': {'toc_depth': 3}}
        ]
    }

    save_yaml(config)
    print("Successfully generated mkdocs.yml")

if __name__ == "__main__":
    main()