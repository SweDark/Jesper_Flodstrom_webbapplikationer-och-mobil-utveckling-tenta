1.  **Have the needed programs downloaded.**
To download and run the project, you need to have <a href="https://nodejs.org/en/">Node.js</a>, <a href="https://www.gatsbyjs.com/docs/quick-start/"> Gatsby</a> and some kind of code-editor (preferably <a href="https://code.visualstudio.com/">Visual Studio Code<a/>).
If you're on a windows computer, it's prefered to download <a href="https://git-scm.com/">git</a> so you can use git bash as a command prompt to be able to use linux commands instead of the ones for windows.

```shell
  #If you don't have gatsby on your computer, copy this into your command prompt (you'll need node.js for this):
  npm install -g gatsby-cli
  #this creates a new gatsby project with the name "gatsby-blog" with this github project. After creating the project, it'll enter the gatsby-blog folder, and then opens it in a code-editor.
  gatsby new gatsby-blog https://github.com/SweDark/Jesper_Flodstrom_webbapplikationer-och-mobil-utveckling-tenta && cd gatsby-blog && code .
```
2. **download all the packages needed for the project.**
When you've gotten into the project, you'll need to open a new terminal in the code-editor. In the terminal you'll have to write

```shell
#This will install all packages needed to run the project that can be found in the package.json file.
npm install 
```

3. **Check if everything's working!**
After all the packages has been installed, you can check if everything works by doing this in the terminal:

```shell
#This will start running the site.
gatsby develop
```
Now, to see if it's running correctly, you can enter `http://localhost:8000` in your browser. If that worked, then you can start editing the project to your own liking.

4. **description of folders**

Here's a quick description of things you need to know:
components folder - Where you put all the components of the website. An example of components that you can find here will be the navigation, content and footer.
elements folder - This is where you add all your style components for all the components.
posts folder - all of the articles can be found here.
templates folder - this is where the website is built up. Every file in here is another page.
themes folder - Your theme file, add colors etc that you want to use here and then use them in the elements files instead of hex codes for color etc.
gatsby-node.js - creates the single post pages, and even the amount of pagination pages needed on your allposts page.
gatsby-browser.js & gatsby-ssr.js - these two files are always the same, since it the website won't work sometimes if you don't have it. Global styles are written in this one.
gatsby-config.js - rules for mapping pages, posts, images etc can be found here. Even the meta-data is in this file!






<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->
