const fs = require('fs');
const path = require('path');

/**
 * Generates a Markdown code block.
 *
 * @param {string} code The code to be placed in the code block.
 * @returns {string} Markdown code block string.
 */
function _generateCodeBlock(code) {
    return `\`\`\`python\n${String(code)}\n\`\`\`\n\n`;
}

/**
 * Generates a Markdown details/summary block.
 *
 * @param {string} summary The summary text for the details block.
 * @param {string} content The content to be hidden within the details block.
 * @returns {string} Markdown details block string.
 */
function _generateDetailsBlock(summary, content) {
    return `<details>\n<summary>${String(summary)}</summary>\n\n${content}\n</details>\n\n`;
}

/**
 * Generates Markdown for a list of function arguments.
 *
 * @param {Array<object>} args A list of argument dictionaries, each with 'name', 'type', 'description', and optional 'default'.
 * @returns {string} Markdown string for the argument list.
 */
function _generateArgListMdx(args) {
    if (!args) {
        return "";
    }
    let argMdx = "###### Args\n\n";
    for (const arg of args) {
        let argLine = `- \`\`${String(arg.name)}\`\`: \`\`${String(arg.type)}\`\``;
        if ('default' in arg && arg.default) {
            argLine += ` (default: \`\`${String(arg.default)}\`\`)`;
        }
        argMdx += argLine + "\n";
        argMdx += `  ${String(arg.description)}\n\n`;
    }
    return argMdx;
}

/**
 * Generates Markdown for function return information.
 *
 * @param {string} returnType The return type of the function.
 * @param {string} returnsDoc The documentation for the return value.
 * @returns {string} Markdown string for the return information.
 */
function _generateReturnsMdx(returnType, returnsDoc) {
    if (!returnType) {
        return "";
    }
    return `###### Returns\n- \`\`${String(returnType)}\`\` - ${String(returnsDoc)}\n\n`;
}

/**
 * Formats description notes, handling examples, notes, and supports sections.
 *
 * @param {string} description The description string potentially containing notes and examples in "####" headings.
 * @returns {string} Formatted description string with headings converted to bold Markdown.
 */
function _formatDescriptionNotes(description) {
    if (description) {
        let notes = String(description)
            .replace("#### Examples:", "**Examples:**")
            .replace("#### Note:", "**Note:**")
            .replace("#### This function supports", "**This function supports**");
        notes = notes.replace("###### ", ""); // Remove extra heading levels
        return notes + "\n\n";
    }
    return "";
}

/**
 * Generates Markdown for a single function overload.
 *
 * @param {object} overloadData Dictionary containing overload information ('signature', 'summary', 'args', 'returnType', 'returnsDoc', 'description').
 * @returns {string} Markdown string for the function overload.
 */
function _generateFunctionOverloadMdx(overloadData) {
    let mdxContent = _generateCodeBlock(overloadData.signature);
    const summary = overloadData.summary ? overloadData.summary : "more details";
    let detailsContent = "";

    detailsContent += _generateArgListMdx(overloadData.args);
    detailsContent += _generateReturnsMdx(overloadData.returnType, overloadData.returnsDoc);
    detailsContent += _formatDescriptionNotes(overloadData.description);

    mdxContent += _generateDetailsBlock(summary, detailsContent);
    return mdxContent;
}

/**
 * Generates Markdown for a function including all its overloads.
 *
 * @param {object} functionData Dictionary containing function data with 'overloads' list.
 * @returns {string} Markdown string for the function (all overloads).
 */
function _generateFunctionMdx(functionData) {
    let mdxContent = "";
    for (const overload of functionData.overloads) {
        mdxContent += _generateFunctionOverloadMdx(overload);
    }
    return mdxContent;
}

/**
 * Generates Markdown for module-level functions.
 *
 * @param {Array<object>} functionsData List of function data dictionaries.
 * @returns {string} Markdown string for module functions section.
 */
function _generateModuleFunctionsMdx(functionsData) {
    if (!functionsData) {
        return "";
    }
    let mdxContent = "## Functions\n\n";
    for (const functionData of functionsData) {
        mdxContent += `#### **${String(functionData.name)}**\n\n`; // Function name as H4
        mdxContent += _generateFunctionMdx(functionData);
    }
    return mdxContent;
}

/**
 * Generates Markdown for struct methods.
 *
 * @param {Array<object>} methodsData List of struct method function data dictionaries.
 * @returns {string} Markdown string for struct methods section.
 */
function _generateStructMethodsMdx(methodsData) {
    if (!methodsData) {
        return "";
    }
    let mdxContent = "#### Methods\n\n";
    for (const functionData of methodsData) { // Struct methods
        mdxContent += _generateFunctionMdx(functionData);
    }
    return mdxContent;
}

/**
 * Generates Markdown for struct fields.
 *
 * @param {Array<object>} fieldsData List of struct field data dictionaries.
 * @returns {string} Markdown string for struct fields section.
 */
function _generateStructFieldsMdx(fieldsData) {
    if (!fieldsData) {
        return "";
    }
    let mdxContent = "#### Fields\n\n";
    for (const field of fieldsData) {
        mdxContent += `- \`\`${String(field.name)}\`\`: \`\`${String(field.type)}\`\`\n`;
        mdxContent += `  ${String(field.description)}\n\n`;
        mdxContent += `  ${String(field.summary)}\n\n`;
    }
    return mdxContent;
}

/**
 * Generates Markdown for struct header (name, summary, description).
 *
 * @param {object} structData Dictionary containing struct data ('name', 'summary', 'description').
 * @returns {string} Markdown string for struct header.
 */
function _generateStructHeaderMdx(structData) {
    let mdxContent = `### Struct: ${String(structData.name)}\n\n`;
    mdxContent += `${String(structData.summary)}\n\n`;
    mdxContent += `${String(structData.description)}\n\n`;
    return mdxContent;
}

/**
 * Generates Markdown for a single struct, composing header, fields, and methods.
 *
 * @param {object} structData Dictionary containing struct data.
 * @returns {string} Markdown string for the complete struct documentation.
 */
function _generateStructMdx(structData) {
    let mdxContent = _generateStructHeaderMdx(structData);
    mdxContent += _generateStructFieldsMdx(structData.fields);
    mdxContent += _generateStructMethodsMdx(structData.functions);
    return mdxContent;
}

/**
 * Generates Markdown for a list of structs.
 *
 * @param {Array<object>} structsData List of struct data dictionaries.
 * @returns {string} Markdown string for structs section.
 */
function _generateStructsMdx(structsData) {
    if (!structsData) {
        return "";
    }
    let mdxContent = "## Structs\n\n";
    for (const structData of structsData) {
        mdxContent += _generateStructMdx(structData);
    }
    return mdxContent;
}

/**
 * Generates Markdown for the module header (name and description).
 *
 * @param {string} moduleName Name of the module.
 * @param {string} packageName Name of the package the module belongs to.
 * @param {string} description Module description.
 * @returns {string} Markdown string for module header.
 */
function _generateModuleHeaderMdx(moduleName, packageName, description) {
    const moduleNameDisplay = String(moduleName).replace('__init__', packageName);
    let mdxContent = `# ${moduleNameDisplay}\n\n`;
    mdxContent += `${String(description)}\n\n`;
    return mdxContent;
}

/**
 * Generates Markdown for the GitHub link.
 *
 * @param {string} githubBaseUrl Base URL of the GitHub repository.
 * @param {string} moduleGithubPath Relative path to the module's file on GitHub.
 * @returns {string} Markdown string for the GitHub link.
 */
function _generateGithubLinkMdx(githubBaseUrl, moduleGithubPath) {
    if (!githubBaseUrl) { // Handle case where githubBaseUrl is null or empty
        return "";
    }
    return `[View the code on GitHub](${githubBaseUrl}/${moduleGithubPath})\n\n`;
}

/**
 * Generates MDX content for a module by composing smaller components.
 *
 * @param {object} moduleData Dictionary containing module data.
 * @param {string} packageName Name of the package.
 * @param {string} mdxFileRelativePath Relative path to the MDX file being generated.
 * @param {object} config The entire configuration object.
 * @returns {string} The complete MDX content for the module.
 */
function generateModuleMdxContent(moduleData, packageName, mdxFileRelativePath, config) {
    const nextraOutputDir = config.nextra_output_dir;
    // Remove nextraOutputDir from mdxFileRelativePath to get the correct moduleGithubPath
    let moduleGithubPath = mdxFileRelativePath.replace(path.join(nextraOutputDir, path.sep), "").replace(".mdx", ".mojo");
    if (moduleGithubPath.startsWith(nextraOutputDir)) { // Fallback if path.join/path.sep doesn't work as expected
        moduleGithubPath = moduleGithubPath.substring(nextraOutputDir.length).replace(/^\/+/, '').replace(".mdx", ".mojo"); // remove leading slashes
    }


    let mdxContent = _generateModuleHeaderMdx(moduleData.name, packageName, moduleData.description);
    mdxContent += _generateGithubLinkMdx(config.github_base_url, moduleGithubPath); // Use passed githubBaseUrl
    mdxContent += _generateStructsMdx(moduleData.structs);
    mdxContent += _generateModuleFunctionsMdx(moduleData.functions);

    return mdxContent;
}

/**
 * Processes modules and returns _meta.json data for them.
 *
 * @param {Array<object>} modulesData List of module data dictionaries.
 * @param {string} parentDir Directory to create module MDX files in.
 * @param {string} packageName Name of the parent package.
 * @param {object} config The entire configuration object.
 * @returns {object} Metadata for the modules (for _meta.json).
 */
function processModules(modulesData, parentDir, packageName, config) {
    const moduleMetaData = {};
    for (const moduleData of modulesData) {
        const moduleName = moduleData.name;

        // Skip MDX generation for __init__ modules
        if (moduleName === "__init__") {
            continue;
        }

        const isLeafModule = !moduleData.modules && !moduleData.packages; // Simplified leaf check

        if (isLeafModule) { // Only flatten if it's a leaf AND has functions
            const moduleMdxPath = path.join(parentDir, `${moduleName}.mdx`); // MDX file directly in parent dir
            try {
                fs.writeFileSync(moduleMdxPath, generateModuleMdxContent(moduleData, packageName, moduleMdxPath, config)); // Pass config
            } catch (e) {
                console.error(`Error writing to file: ${moduleMdxPath}. ${e}`); // Error handling
                continue; // Or raise, depending on desired error behavior
            }
            moduleMetaData[moduleName] = { "title": moduleName.replace("__init__", packageName) }; // _meta entry directly with module name

        } else {
            const moduleDir = path.join(parentDir, moduleName);
            fs.mkdirSync(moduleDir, { recursive: true });

            // Generate index.mdx for module
            const moduleMdxPath = path.join(moduleDir, 'index.mdx');
            try {
                fs.writeFileSync(moduleMdxPath, generateModuleMdxContent(moduleData, packageName, moduleMdxPath, config)); // Pass config
            } catch (e) {
                console.error(`Error writing to file: ${moduleMdxPath}. ${e}`); // Error handling
                continue; // Or raise
            }
        }
    }

    return moduleMetaData;
}

/**
 * Processes packages recursively and returns _meta.json data for them.
 *
 * @param {Array<object>} packagesData List of package data dictionaries.
 * @param {string} parentDir Directory to create package directories and MDX files in.
 * @param {string} packageName Name of the current package level.
 * @param {object} config The entire configuration object.
 * @returns {object} Metadata for the packages (for _meta.json).
 */
function processPackages(packagesData, parentDir, packageName, config) {
    const packageMetaData = {};
    for (const packageData of packagesData) {
        const nestedPackageName = packageData.name;
        const nestedPackageDir = path.join(parentDir, nestedPackageName);
        fs.mkdirSync(nestedPackageDir, { recursive: true });

        // Process sub-modules within package
        const moduleMetaData = processModules(packageData.modules || [], nestedPackageDir, nestedPackageName, config); // Pass config
        // Process nested packages recursively
        const nestedPackageMetaData = processPackages(packageData.packages || [], nestedPackageDir, nestedPackageName, config); // Pass config

        // Combine module and nested package meta data
        const currentPackageMetaData = {};
        Object.assign(currentPackageMetaData, moduleMetaData);
        Object.assign(currentPackageMetaData, nestedPackageMetaData);
    }

    return packageMetaData;
}

/**
 * Main function to generate Nextra documentation files.
 *
 * @async
 * @param {object} config Configuration object containing all settings.
 */
async function generateNextraDocsJS(config) {
    let docsData = null;
    const docsJsonSource = config.docs_json_source_type;
    const docsJsonPath = config.docs_json_path;
    const outputPagesDir = config.nextra_output_dir;
    const githubBaseUrl = config.github_base_url;

    try {
        if (docsJsonSource === "remote") {
            if (docsJsonPath.startsWith("http://") || docsJsonPath.startsWith("https://")) {
                console.log(`Downloading docs.json from remote URL: ${docsJsonPath} ...`);
                const response = await fetch(docsJsonPath);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const content = await response.text();
                docsData = JSON.parse(content);
                console.log("docs.json downloaded successfully from remote URL.");
            } else {
                throw new Error(`Invalid docs_json_path for remote source. Must be a URL.`);
            }
        } else if (docsJsonSource === "local") {
            const localDocsJsonFilepath = docsJsonPath;
            console.log(`Loading docs.json from local file: ${localDocsJsonFilepath} ...`);
            try {
                const content = fs.readFileSync(localDocsJsonFilepath, 'utf-8');
                docsData = JSON.parse(content);
                console.log("docs.json loaded successfully from local file.");
            } catch (e) {
                if (e.code === 'ENOENT') {
                    throw new Error(`Local docs.json file not found at: ${localDocsJsonFilepath}`);
                } else if (e instanceof SyntaxError) {
                    throw new Error(`Error: Invalid JSON format in local docs.json file: ${e}`);
                } else {
                    throw new Error(`Error reading local docs.json file: ${e}`);
                }
            }
        } else {
            throw new Error(`Invalid 'docs_json_source_type' in configuration. Must be 'local' or 'remote'.`);
        }


    } catch (error) {
        if (error.message.startsWith('HTTP error')) { // Catch fetch errors specifically
            console.error(`Error fetching remote docs.json from ${docsJsonPath}: ${error}`);
        } else {
            console.error(`Error: ${error.message}`);
        }
        return;
    }

    const topLevelPackages = docsData.decl.packages;

    const docsDir = path.join(outputPagesDir, ""); // Hardcoded "" directory
    fs.mkdirSync(docsDir, { recursive: true });


    // Process top-level packages recursively
    processPackages(topLevelPackages, docsDir, "", config); // Pass config

}

/**
 * Creates a docs-config.json file based on the configuration dictionary.
 *
 * @param {object} config Configuration dictionary containing documentation parameters.
 * @returns {object} The configuration used to create the docs-config.json file
 */
function createDocsConfig(config) {
    // Default fields with fallback values are now taken from the config itself if missing
    const docsConfig = {
        "projectName": config.projectName || "Project Documentation",
        "githubRepo": config.githubRepo || "",
        "discordLink": config.discordLink || "",
        "projectDescription": config.projectDescription || "Automatically generated documentation",
        "projectVersion": config.projectVersion,
        "banner": {
            "show": config.banner?.show || false, // Use optional chaining to avoid errors if banner is missing
            "content": config.banner?.content || "Documentation recently updated"
        }
    };

    // Write the configuration to docs-config.json
    fs.writeFileSync('docs-config.json', JSON.stringify(docsConfig, null, 2));

    return docsConfig;
}


/**
 * Main function to generate documentation. Configuration is read from generate-mdx-config.json.
 *
 * @async
 */
async function main() {
    let config; // Configuration from generate-mdx-config.json
    const jsonConfigFilePath = 'generate-mdx-config.json';

    const defaultConfig = { // Fallback default configuration
        "docs_json_source_type": "remote",
        "docs_json_path": "https://raw.githubusercontent.com/endia-ai/Endia/nightly/docs.json",
        "get_started_input_path": "readme.md",
        "nextra_output_dir": "src/content",
        "github_base_url": "https://github.com/endia-ai/endia/tree/main/endia",
        "projectName": "My Project Docs",
        "githubRepo": "https://github.com/endia-ai/endia/tree/main/endia",
        "discordLink": "https://discord.gg/your-invite",
        "projectDescription": "Comprehensive documentation for the project",
        "projectVersion": "0.1.0",
        "banner": {
            "show": true,
            "content": "New documentation available!"
        },
        "metadata": {
            "title": "My Project Docs",
            "applicationName": "Docs Generator",
            "generator": "Nextra Docs Generator",
            "twitterSite": "https://x.com/your-handle"
        }
    };


    try {
        const configFileContent = fs.readFileSync(jsonConfigFilePath, 'utf-8');
        config = JSON.parse(configFileContent);
        console.log(`Loaded project configuration from ${jsonConfigFilePath}`);
    } catch (error) {
        console.warn(`Could not load configuration from ${jsonConfigFilePath}. Using default configuration.`);
        config = defaultConfig; // Fallback to default config
    }

    // Create docs-config.json using the configuration from generate-mdx-config.json (or default)
    createDocsConfig(config);
    console.log("Created docs-config.json");


    const docsJsonSource = config.docs_json_source_type;
    const docsJsonPath = config.docs_json_path;
    const nextraOutputDir = config.nextra_output_dir;
    const githubBaseUrl = config.github_base_url;
    const getStartedInputPath = config.get_started_input_path;


    if (!docsJsonSource || !docsJsonPath || !nextraOutputDir) {
        console.error(`Error: Missing documentation generation parameters in configuration (generate-mdx-config.json or defaults).`);
        return;
    }

    if (docsJsonSource !== "local" && docsJsonSource !== "remote") {
        console.error(`Error: Invalid 'docs_json_source_type' in configuration. Must be 'local' or 'remote'.`);
        return;
    }


    console.log(`Generating Nextra docs to ${nextraOutputDir} ...`);

    // --- ADDED SECTION START ---
    // 1. Remove the entire nextra output folder before creating new stuff.
    const outputDirPath = path.join(__dirname, nextraOutputDir);
    fs.rmSync(outputDirPath, { recursive: true, force: true });
    console.log(`Removed existing output directory: ${outputDirPath}`);
    fs.mkdirSync(outputDirPath, { recursive: true }); // Re-create the output directory

    // --- ADDED SECTION END ---

    await generateNextraDocsJS(config);
    console.log("Nextra documentation generation completed.");

    // --- ADDED SECTION START ---
    // 2. Read in get_started.mdx and copy content to src/content
    // const getStartedInputPath = get_started_pathpath.join(__dirname, 'get_started.mdx');
    const getStartedOutputPath = path.join(outputDirPath, 'get_started.mdx'); // use outputDirPath here
    try {
        const getStartedContent = fs.readFileSync(getStartedInputPath, 'utf-8');
        fs.writeFileSync(getStartedOutputPath, getStartedContent);
        console.log(`Copied content of ${getStartedInputPath} to ${getStartedOutputPath}`);
    } catch (error) {
        console.error(`Error reading or writing get_started.mdx: ${error}`);
    }

    // 3. Create _meta.js with specific content
    const metaJSContent = `export default {\n  'get_started': '',\n}`;
    const metaJSPath = path.join(outputDirPath, '_meta.js'); // use outputDirPath here
    try {
        fs.writeFileSync(metaJSPath, metaJSContent);
        console.log(`Created _meta.js at ${metaJSPath}`);
    } catch (error) {
        console.error(`Error creating _meta.js: ${error}`);
    }
    // --- ADDED SECTION END ---

}

// Execute main function if script is run directly
if (require.main === module) {
    main();
}