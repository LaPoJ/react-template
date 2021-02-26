# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### react项目配置域名
  本地增加 `.env.development` 文件，内容如下
  ```env
    REACT_APP_PUBLIC_URL = 'http://cc.test.com'
  ```

  `/node_modules/react-dev-utils/WebpackDevServerUtils.js`

  更改 `printInstructions` 内容, 一下为已更改的内容
  开始行在 90 行
  ```javascript
      if (urls.lanUrlForTerminal) {
        console.log(
          `  ${chalk.bold('Local:')}            ${urls.localUrlForTerminal}`
        );
        console.log(
          `  ${chalk.bold('On Your Network:')}  ${urls.lanUrlForTerminal}`
        );
      } else if (process.env.REACT_APP_PUBLIC_URL) {
        console.log(
          `  ${chalk.bold('Local:')}            ${urls.localUrlForTerminal}`
        );
        console.log(
          `  ${chalk.bold('On Your Network:')}  ${process.env.REACT_APP_PUBLIC_URL}`
        );
      } else {
        console.log(`  ${urls.localUrlForTerminal}`);
      }
  ```

  **重要： 此处一定要改**

  `/node_modules/react-scripts/scripts/start.js/` 需要更改内容

  将 `openBrowser(urls.localUrlForBrowser)`（约在160行左右） 行代码替换成下面的代码片段

  ```javascript
    if (process.env.REACT_APP_PUBLIC_URL) {
      openBrowser(process.env.REACT_APP_PUBLIC_URL)
    } else {
      openBrowser(urls.localUrlForBrowser);
    }
  ```

配合 nginx 使用

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
