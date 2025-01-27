from mdutils.mdutils import MdUtils
import os
import yaml
from pathlib import Path


def doc_func(func,mdfile:MdUtils,top_header=2):
    mdfile.new_header(top_header,f"""{func["name"]}""")

    for overload in func["overloads"]:
        # mdfile.new_line("""<summary style="border: none; bg-color: none; box-shadow: none;">""")
        mdfile.insert_code(f"""{overload["signature"]}""",language="swift")

        mdfile.new_line("""<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">""")
        mdfile.new_line("""<summary style="border: none; bg-color: none; box-shadow: none;">""")

        mdfile.new_line()
        mdfile.new_line(overload["summary"]) if overload["summary"] else mdfile.new_line("Show more details.")
        mdfile.new_line("""</summary>""")
        mdfile.new_line()

        paramlist = list()

        if overload["parameters"]:
            mdfile.new_line("""Parameters:""")
            mdfile.new_line()
            for param in overload["parameters"]:
                if "*" not in param["name"]:
                        name =param["name"]
                else:
                    name = param["name"].replace("*", "\\*")

                param_type = f"`{param.get('type', 'unknown')}`" if param.get('type') else "`unknown`" # Get type or default to unknown

                if param["description"]:
                    description = f': {param["description"]}'
                else:
                    description = ""
                if "default" in  list(param.keys()):
                    default = f""" Default: `{param["default"]}`"""
                else:
                    default = ""
                paramlist.append(f"* {name} {param_type}{description}{default}") # Added type to param list
            mdfile.new_list(paramlist)

        arglist = list()
        if overload["args"]:
            mdfile.new_line("""#### Args:""")
            mdfile.new_line()
            for arg in overload["args"]:
                if "*" not in arg["name"]:
                    name =arg["name"]
                else:
                    name = arg["name"].replace("*", "\\*")

                arg_type = f"`{arg.get('type', 'unknown')}`" if arg.get('type') else "`unknown`" # Get type or default to unknown

                if arg["description"]:
                    description = f': {arg["description"]}'

                else:
                    description = ""
                if "default" in  list(arg.keys()):
                    default = f""" Default: {arg["default"]}"""
                else:
                    default = ""
                arglist.append(f"* {name} {arg_type}{description}{default}") # Added type to arg list
            mdfile.new_list(arglist)

        if overload.get("returnType"):
            mdfile.new_line("""#### Returns:""")
            mdfile.new_line()
            if overload.get("returnsDoc"):
                mdfile.new_line(f"{overload['returnsDoc']}")
            return_type_str = overload["returnType"] if overload["returnType"] else "None"
            mdfile.new_line(f"Type: `{return_type_str}`")
            mdfile.new_line()

        mdfile.new_line()

        if overload.get("description"): # Include existing notes and dynamically created notes
            mdfile.new_line()
            if overload.get("description"):
                mdfile.new_paragraph(overload["description"])

        mdfile.new_line("""</details>""")

def doc_alias(alias,mdfile:MdUtils,top_header=2):
    if not alias:
        return
    mdfile.new_header(top_header,"Aliases")
    for al in alias:
        mdfile.new_line(f"""`{al["name"]}`: {al["summary"]}""") if al["summary"] else mdfile.new_line(f"""`{al["name"]}`""")

def doc_struct(struct, mdfile:MdUtils,top_header=1):
    mdfile.new_header(top_header,struct["name"])
    # mdfile.new_header(top_header+1,f"{struct['name']} Summary")
    mdfile.new_line()
    try:
        mdfile.new_line(struct["summary"])
    except:
        print(struct["name"])
    mdfile.new_line()
    if struct['parentTraits']:
        mdfile.new_header(top_header+1,"Parent Traits")
        mdfile.new_line()
        mdfile.new_list(struct['parentTraits'])
    if struct["fields"]:
        mdfile.new_header(top_header+1,"Fields")
        mdfile.new_line()
        for field in struct["fields"]:
            mdfile.new_line(f"* {field['name']} `{field['type']}`")
            if field["summary"]:
                mdfile.new_line("    - " + field["summary"])
    mdfile.new_line()
    if "aliases" in list(struct.keys()):
        if struct["aliases"]:
            doc_alias(struct["aliases"],mdfile,top_header=top_header+1)

    mdfile.new_header(top_header+1,"Functions")
    if struct["functions"]:
        for func in struct["functions"]:
            doc_func(func, mdfile,top_header=top_header+2)

def doc_modules(module, root:Path, parent:Path, github_base_url=""):
    module_path_name = str(parent/module["name"]) # calculate module path name for github link
    mdfile = MdUtils(str(root/parent)+"/"+module["name"])

    mdfile.new_header(1,module["name"])

    if github_base_url: # Add github link if base url is provided
        github_url = f"{github_base_url}/{module_path_name}.mojo" # Assuming .md extension and folder structure matches docs
        mdfile.new_line(f"[Source Code]({github_url})")
        mdfile.new_line()

    # mdfile.new_header(2," Module Summary")
    mdfile.new_line(module["summary"])
    if module["structs"]:
        for struct in module["structs"]:
            doc_struct(struct, mdfile,top_header=2)
    if module["traits"]:
        for trait in module["traits"]:
            doc_struct(trait, mdfile,top_header=2)
    if module["functions"]:
        for func in module["functions"]:
            doc_func(func, mdfile,top_header=2)
    mdfile.create_md_file()

def doc_package(package, root, parent, github_base_url=""):
    Path(str(root/parent)+"/"+package["name"]).mkdir(parents=True,exist_ok=True)
    if package["packages"]:
        for pack in package["packages"]:
            doc_package(pack,root,Path(str(parent)+"/"+package["name"]), github_base_url) # pass github_base_url down
    if package["modules"]:
        for mod in package["modules"]:
            if mod["name"] == "__init__":
                continue
            doc_modules(mod,root,Path(str(parent)+"/"+package["name"]), github_base_url) # pass github_base_url down

def title_from_filename(filename):
    """Convert filename to a readable title."""
    # Remove .md extension
    name = os.path.splitext(filename)[0]
    # Convert special cases like 1d, 2d, 3d to uppercase
    name = name.replace('1d', '1D').replace('2d', '2D').replace('3d', '3D')
    # Handle special abbreviations
    name = name.replace('fft', 'FFT').replace('ifft', 'IFFT')
    name = name.replace('mse', 'MSE').replace('mlp', 'MLP')
    # Replace underscores and hyphens with spaces
    name = name.replace('_', ' ').replace('-', ' ')
    # Title case the result
    return name.title()

def build_nav_structure(path, base_path='docs'):
    """Recursively build navigation structure."""
    result = []

    # Get all directories and files
    try:
        items = sorted(os.listdir(path))
    except OSError:
        return result

    # Process all markdown files first
    for item in items:
        full_path = os.path.join(path, item)
        if os.path.isfile(full_path) and item.endswith('.md'):
            # Get relative path from base_path
            rel_path = os.path.relpath(full_path, base_path)
            title = title_from_filename(item)
            result.append({title: rel_path})

    # Then process directories
    for item in items:
        full_path = os.path.join(path, item)
        if os.path.isdir(full_path) and not item.startswith('.'):
            sub_nav = build_nav_structure(full_path, base_path)
            if sub_nav:  # Only add non-empty directories
                result.append({title_from_filename(item): sub_nav})

    return result

def save_yaml(config, filename='mkdocs.yml'):
    """Save configuration to YAML file."""
    def str_presenter(dumper, data):
        """Configure yaml for better string formatting."""
        if len(data.splitlines()) > 1:
            return dumper.represent_scalar('tag:yaml.org,2002:str', data, style='|')
        return dumper.represent_scalar('tag:yaml.org,2002:str', data)

    yaml.add_representer(str, str_presenter)

    with open(filename, 'w', encoding='utf-8') as f:
        yaml.dump(config, f, sort_keys=False, allow_unicode=True, default_flow_style=False)


if __name__ == '__main__':
    # Example usage with the provided JSON (assuming it's in a file named 'api.json')
    import json
    with open('api.json', 'r') as f:
        api_data = json.load(f)

    root_dir = Path("docs")
    root_dir.mkdir(parents=True, exist_ok=True)

    github_base = "https://github.com/your-repo/your-project/tree/main/src" # Replace with your actual github base url

    doc_package(api_data["decl"], root_dir, Path("."), github_base_url=github_base) # Pass github_base_url

    nav_structure = build_nav_structure(root_dir)

    mkdocs_config = {
        'site_name': 'My API Documentation',
        'nav': nav_structure,
        'markdown_extensions': [
            'pymdownx.details',
            'pymdownx.superfences',
        ],
    }

    save_yaml(mkdocs_config, 'mkdocs.yml')
    print("Documentation generated in 'docs' directory with mkdocs.yml")