# Tab Renamer Chrome Extension

A simple Chrome extension that allows users to rename the tab title and persist the change even after a page refresh.

## Features
- Change the title of any open tab.
- The new tab title persists after a page reload.
- Easy-to-use popup interface.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" (toggle is in the top right corner).
4. Click on "Load unpacked" and select the folder where you cloned/downloaded the repository.

The extension will now be available in your Chrome browser.

## How to Use

1. Click on the extension icon next to the address bar.
2. A popup will appear with an input box.
3. Enter the new title for the current tab and click "Rename."
4. The tab title will change and will persist even after refreshing the page.

## Folder Structure

- `manifest.json`: Defines the extension's metadata, permissions, and content scripts.
- `popup.html`: The popup UI that appears when clicking the extension icon.
- `popup.js`: Contains the logic for renaming the tab and storing the new title.
- `contentScript.js`: Ensures the renamed title is persistent even after the page is refreshed.

## Development

1. Fork the repository and clone it to your local machine.
2. Make your changes to the codebase.
3. Load your local version of the extension into Chrome by following the installation steps above.
4. Test your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributions

Feel free to open issues and submit pull requests if you have any improvements or bug fixes!
