# styled-gist-embed

Upgraded rewrite of [react-gist](https://github.com/tleunen/react-gist) created by [Tommy](https://github.com/tleunen). Credit goes out to those who helped build that library.


[![NPM](https://img.shields.io/npm/v/styled-gist-embed.svg)](https://www.npmjs.com/package/styled-gist-embed)
<a href="https://reactjs.org/">
    <img alt="react" src="https://badges.aleen42.com/src/react.svg" >
</a>
<a href="https://www.typescriptlang.org">
    <img alt="code language: typescript" src="https://badges.aleen42.com/src/typescript.svg">
</a>


This rewrite:
- Adds native TS support
- Adds Styling feature ( url : css file link || raw css )



#### How it works

Injects css into the embedded iframe, it can a url of a css file or raw css or both!. <br>
Using raw css will override the url-imported css,
this will allow applying adjustments to an imported css file :)

## 🚀 Installation

##### [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm):

```bash
npm i styled-gist-embed
```

##### [`yarn`](https://classic.yarnpkg.com/en/docs/install/#mac-stable):

```bash
yarn add styled-gist-embed
```

## ✨ Usage

```typescript jsx
import React from "react";
import Gist from "styled-gist-embed";

export const YourComponent = () => {

  const cssString = `
    .js-file-line-container {
      background : whitesmoke !important;
    }
    .gist-meta{
      display : none !important
    }
    .gist-data {
      background : whitesmoke !important;
      padding : 1rem 0.5rem !important;
      // background: transparent !important;
    }
  `;

  return (
    <Gist
      gistId = '189e5c6bbc7217b8bdf952ff243c2411'
      file = 'styled-gist-embed.jsx'
      gistUrl = 'https://gist.github.com/hammamikhairi/189e5c6bbc7217b8bdf952ff243c2411'

      style = {cssString}
      styleSheetUrl = "https://pleasedont.hammamikhairi.repl.co/css/npm.css"
    />
  );
};
```
The component will render :
<p>
  <img src='https://cdn.discordapp.com/attachments/992802358998355999/1002328190364168273/unknown.png'>
</p>

## 📌 Props

Prop                  | Type     | Description                   | Required
--------------------- | -------- | ------------------------- | --------
`file`|string|Name of the gist's file (if the gist has many file, pick any of them) <br> **avoid using special Characters**|Yes
`gistId`|string|gist's id|Yes (if `url` isn't specified)
`gistUrl`|string|gist's url| Yes (if `gistId` isn't specified)
`cssString`|string| a string containing css (refer to this <a href='##-usage'>example</a>) |No
`styleSheetUrl`|string|a url to a `.css` file|No|


### 📝 Notes
> this package is still in development

for now you can copy one of the themes in `./styles` and use it either as a `cssString` or `styleSheetUrl`

## ✌️ License
[MIT](https://opensource.org/licenses/MIT)