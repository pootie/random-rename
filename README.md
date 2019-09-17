# random-rename
Rename files in a directory with a prefix number in a random order.  **Why?** Because my car stereo doesn't have a shuffle function, so I need to shuffle my on songs by changing their filenames.

You can run it multiple times and it will strip any existing *0000 -* numbering on the filenames and prefix them again.

## Limitations
Only pads prefix numbers to 4 digits.

## Dependencies
* Node.js (uses fs)

## Usage
```bash
node index.js path/to/my/folder
```