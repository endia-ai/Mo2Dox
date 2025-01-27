# Mo2Dox ⚡ with Nextra (Markdown + JSX)

## Documentation Generation

1. **Generate your Mojo documentation JSON** and place it in the root directory. You can generate the documentation JSON using the following command:

    ```bash
    mojo doc <module-name> -o <docs-name>.json
    ```

    *Note: You must have a packable Mojo module in a Magic environment to generate the documentation JSON.*

2. **Edit `generate-mdx-config.json`** to customize your documentation. Here are the available configuration options:

    - `docs_json_source_type`: Specify "local" for local file or "remote" for URL source
    - `docs_json_path`: Path to your documentation JSON file or URL
    - `nextra_output_dir`: Output directory for generated files (keep as "src/content")
    - `get_started_input_path`: Path to your README file that will serve as the landing page
    - `github_base_url`: Base URL for GitHub repository branch references
    - `projectName`: Name of your project to display in the documentation
    - `githubRepo`: Optional GitHub repository URL
    - `discordLink`: Optional Discord server invitation link
    - `projectDescription`: Optional project description
    - `projectVersion`: Optional version number (e.g., "v24.6")
    - `banner`: Configure the announcement banner
      - `show`: Boolean to toggle banner visibility
      - `content`: Message to display in the banner

3. **Generate MDX files**:

    ```bash
    node generate-mdx.js
    ```

If not already running, start the development server:

```bash
npm run dev
```
