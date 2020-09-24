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

images folder - You can put images that should be global here.

pages folder - You can have your pages here.

posts folder - all of the articles can be found here.

templates folder - this is where the website is built up. Every file in here is another page.

themes folder - Your theme file, add colors etc that you want to use here and then use them in the elements files instead of hex codes for color etc.

gatsby-node.js - creates the single post pages, and even the amount of pagination pages needed on your allposts page.

gatsby-browser.js & gatsby-ssr.js - these two files are always the same, since it the website won't work sometimes if you don't have it. Global styles are written in this one.

gatsby-config.js - rules for mapping pages, posts, images etc can be found here. Even the meta-data is in this file!

5. **You now know what is where, thus you can now start coding!**
You can experiment with queries on `http://localhost:8000/___graphql`.

<!-- auto generated-content:start -->
## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->
