# Smooth Cursor (Ace Editor)

> Animation from VSCode 😉

Enhance your coding experience in Acode editor with smooth cursor animations for the Ace Editor component. This plugin replaces the default cursor behavior with a more visually pleasing and animated cursor that provides better visual feedback during editing.

## Features

- Smooth cursor animation that enhances the editing experience
- Customizable cursor styling through CSS
- Automatic cleanup when the plugin is unloaded
- Lightweight and performance-optimized implementation

## How It Works

The plugin works by injecting a custom CSS stylesheet (`style-clean-default-animations.css`) into the Acode editor's DOM. This stylesheet overrides the default Ace Editor cursor styling and adds smooth animations including:

1. A custom blinking animation for the cursor
2. A collapsing/expanding animation that triggers when the cursor position changes
3. Smooth transitions for all cursor movements

The main TypeScript file (`main.ts`) handles:
- Injecting the stylesheet when the plugin initializes
- Adding animation classes to the cursor element when the editor content changes
- Cleaning up the injected styles when the plugin is unloaded

## Installation

1. Install the plugin directly from Acode's plugin marketplace
2. Enable the plugin in Acode settings
3. Restart Acode to apply the changes

## Files

- `main.ts` - The main plugin logic that handles initialization and cleanup
- `style-clean-default-animations.css` - Custom CSS that provides the smooth cursor animations
- `plugin.json` - Plugin metadata and configuration
- `icon.png` - Plugin icon
- `LICENSE` - MIT License information

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Repository

[GitHub Repository](https://github.com/unschooledgamer/acode-smoothcursor-plugin)
