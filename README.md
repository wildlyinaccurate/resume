## Setting up the App

```
git clone https://github.com/wildlyinaccurate/resume.git
cd resume
npm install
bower install
```

## Building the App

The app can be built to the `dist/` directory with

```
grunt build
```

If the app is hosted on GitHub pages, it can be published with

```
grunt release
```

To use a custom domain on GitHub pages, modify the `app/CNAME` file.

## Modifying the App

A development server can be run with

```
grunt server
```

This will watch the source files for changes and re-build the modified files.
