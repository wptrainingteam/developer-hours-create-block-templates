# Create Block Templates

A collection of templates for creating WordPress blocks and Editor extensions. These templates are designed to work with the [`create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) tool and were built to simulate templates you might create for your own projects (in this case @ndiego). However, feel free to use them or modify the templates as you see fit.

## Usage

To use the templates, use the traditional `create-block` command and specify the template you want to use. The following command will create a new block in the current directory called `my-dynamic-block` using the `dynamic-block` template.

```bash
npx @wordpress/create-block my-dynamic-block --template ../create-block-templates/templates/dynamic-block
```
