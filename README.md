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

![A simple example](./docs/simple-example.gif)
```javascript
import Columns from "react-columned";
```

```javascript
<Columned className={styles}>
  <img alt="Image 1" src={"https://..."} />
  <img alt="Image 2" src={"https://..."} />
  <img alt="Image 3" src={"https://..."} />
  <img alt="Image 4" src={"https://..."} />
  <img alt="Image 5" src={"https://..."} />
  <img alt="Image 6" src={"https://..."} />
  <img alt="Image 7" src={"https://..."} />
  <img alt="Image 8" src={"https://..."} />
  <img alt="Image 9" src={"https://..."} />
  <img alt="Image 10" src={"https://..."} />
</Columned>;

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
