# Meteor-Todo-App-Notes
###### Notes on Meteor's tutorial on creating a todo list with react

## Todo App with React
###### Integrate Meteor and React
### Contents
1. Creating an app
2. Components
3. Collections
4. Forms and events
5. Update and remove
6. Running on mobile
7. Temporary UI state
8. Adding user accounts
9. Security with methods
10. Publish and subscribe
11. Testing
12. Next steps
### 1. Creating an app
#### Creating your first app
In this tutorial, we are going to create a simple app to manage a 'to do' list and collaborate with others on those tasks. By the end, you should have a basic understanding of Meteor and its project structure.
To create the app, open your terminal and type:
```
meteor create simple-todos
```
This will create a new folder called ```simple-todos``` with all of the files that a Meteor app needs:
```
client/main.js      # a JavaScript entry point loaded on the client
client/main.html    # an HTML file that defines view templates
client/main.css     # a CSS file to define your app's styles
server/main.js      # a JavaScript entry point loaded on the server
package.json        # a control file for installing NPM packages
package-lock.json   # Describes the NPM dependency tree
.meteor             # internal Meteor Files
.gitignore          # a control file for git
```
To run the newly created app:
```
cd simple-todos
meteor
```
Open your web browser and go to ```http://localhost:3000``` to see the app running.
You can play around with this default app for a bit before we continue. For example, try editing the text in ```<h1>``` inside ```client/main.html``` using your favorite text editor. When you save the file, the page in your browser will automatically update with the new content. We call this "hot code push".
>##### Newer JavaScript syntax
>Meteor supports many newer JavaScript features, such as those in ECMAScript 2015 (ES6). If you haven't tried these next-generation JavaScript features yet, we recommend taking a look at Luke Hoban's "ES6 features" to familiarize yourself with the newer syntax.
Now that you have some experience editing the files in your Meteor app, let's start working on a simple todo list application. If you find a bug or error in the tutorial, please file an issue or submit a pull request [on GitHub](https://github.com/meteor/tutorials).
