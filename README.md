# 🏛 react-columned
[![Build Status](https://travis-ci.org/doitadrian/react-columned.svg?branch=master)](https://travis-ci.org/doitadrian/react-columned)
[![Coverage Status](https://coveralls.io/repos/github/doitadrian/react-columned/badge.svg?branch=master)](https://coveralls.io/github/doitadrian/react-columned?branch=master)
[![](https://img.shields.io/npm/dw/react-columned.svg)](https://www.npmjs.com/package/react-columned) 
[![](https://img.shields.io/npm/v/react-columned.svg)](https://www.npmjs.com/package/react-columned)
![](https://img.shields.io/npm/types/react-columned.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
  
A component that sorts given child nodes into a preferred number of columns. 

## Install
```
npm install --save react-columned
```

Or if you prefer yarn: 
```
yarn add react-columned
```

## Quick Example:
Sort images into columns. Use default columns configuration. 

```javascript
import Columns from "react-columned";
```

```javascript
<Columned className={styles}>
    <img
        alt="Image 1"
        src={"https://via.placeholder.com/800x600/001F3F/FFFFFF.png?text=1"}
    />
    <img
        alt="Image 2"
        src={"https://via.placeholder.com/400x300/0074D9/FFFFFF.png?text=2"}
    />
    <img
        alt="Image 3"
        src={"https://via.placeholder.com/1024x768/7FDBFF/FFFFFF.png?text=3"}
    />
    <img
        alt="Image 4"
        src={"https://via.placeholder.com/1280x1024/39CCCC/FFFFFF.png?text=4"}
    />
    <img
        alt="Image 5"
        src={"https://via.placeholder.com/640x480/3D9970/FFFFFF.png?text=5"}
    />
    <img
        alt="Image 6"
        src={"https://via.placeholder.com/1000x500/2ECC40/FFFFFF.png?text=6"}
    />
    <img
        alt="Image 7"
        src={"https://via.placeholder.com/700x1000/01FF70/FFFFFF.png?text=7"}
    />
    <img
        alt="Image 8"
        src={"https://via.placeholder.com/800x600/FFDC00/FFFFFF.png?text=8"}
    />
    <img
        alt="Image 9"
        src={"https://via.placeholder.com/200x100/FF851B/FFFFFF.png?text=9"}
    />
    <img
        alt="Image 10"
        src={"https://via.placeholder.com/200x100/FF4136/FFFFFF.png?text=10"}
    />
</Columned>
```

More examples on https://react-columned.netlify.com.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/5121148?v=4" width="100px;"/><br /><sub><b>Adrian Smijulj</b></sub>](https://github.com/doitadrian)<br />[💻](https://github.com/doitadrian/react-columned/commits?author=doitadrian "Code") [📖](https://github.com/doitadrian/react-columned/commits?author=doitadrian "Documentation") [💡](#example-doitadrian "Examples") [👀](#review-doitadrian "Reviewed Pull Requests") [⚠️](https://github.com/doitadrian/react-columned/commits?author=doitadrian "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
