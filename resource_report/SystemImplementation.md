# System Implementation

## 1. Frontend implementation 

### Frontend Overview 

We implemented our webpage frontend with some libraries and some well-built Html components. Generally, our main implement methods and libraries used can be shown in Table 1.  

![](https://i.imgur.com/JRxxAtG.png)
Table 1. Frontend libraries overview

### Framework – React + Redux

#### React

React is an open source JavaScript library for building user interfaces maintained by Facebook. It lets you compose complex UIs from small and isolated pieces of code called “components”[1]. In mechanism, it features virtual document object model, which only rendered the components actually change.

There are plenty of frontend frameworks nowadays. The most popular ones are the big three Angular, React, and Vue. We finally chose React for our project not only because of its popularity but also its outstanding advantages[2].  

First, popularity, According the research by Elar Saks[3],  react have got the highest package downloads which means that the resources must be sufficient to do a good project. We indeed found a perfect react-svg-map[4] for our data visualization  and a fantastic UI library ant-design[5].Second, easy to make separate components. Our components lie in the components folder, like figure 1. Third, simplicity, well defined methods, HTML like in-javascript tags for component rendering, and a full CSS support make the user learn quickly with some basic of frontend skills. We arranged our components like Figure 2.  Fourth, testability, with a bunch of testing library[6][7][8] and components structure React web app is very easy to test.

![](https://i.imgur.com/YoCjRnZ.png)
Figure 1. Frontend Structure

 ![](https://i.imgur.com/yvgBfur.png)
Figure 2. Frontend Component structure

#### Redux

Because of the components structure of React, the states of each will become very hard to maintain through the growth of the scale of the web application. Hance, we need a library to help us manage the states. Redux[9], a predictable state container for JS Apps, is perfect for this job.

To use Redux, we also need a UI binder to support Redux. We chose an official library React-Redux[10] to do the job.


#### Data Visualization - react-svg-map[4]

We introduce a novel method to visualize the data in map. Because the shape of every country is not a rectangle like a typical html component or a simple shape easy to implement by css.  We reach out for a support from a ready-made react map component. We put react-svg-map into the main page of our webpage,  and combine it with the data to show. With one click , all of the data are changed to that country.


![](https://i.imgur.com/yUD0PFY.gif)

Gif 1. React-svg-map interaction

#### UI Design – Ant-Design[5]

To make our webpage keep a neat and nice design, We adopt Ant-Design for our UI design library. Ant-Design provides a complete program including lots of common component like buttons, modal and carousel. For example, the modal for Forum button( Gif. 2 ) and the carousel for intro tutorial( Gif. 3 ).

 ![](https://i.imgur.com/kojuIm3.gif)
Gif 2. Forum modal

![](https://i.imgur.com/OfhgDH7.gif)
Gif 3. Carousel for intro tutorial information

## Additional elements and components

We have implemented some components with some special methods and libraries. We outline them in the following paragraph.

### Authentication

To accomplish a login function, a reliable method to do Authentication is very important. We adopted JSON Web Tokens for our login authentication. JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties[11]. We set the login function  in the webpage to remember the JWT token of user login for 24 hours. After 24 hours, it will automatically expired. A button for logout also provided. 

### Sound

We use JavaScript to control the primitive Audio component in Html. We considered other music frameworks like Tone.js and Howler.js. However, we found that the build in Audio component is enough for our work. We implemented this in the MusicPlayer component ( Figure. 1 ). We implement whole page click sound by document.body.addEventListener() (Code 1.). Background music play by document.getElementById() (Code 2.). We create an easy toggle for play and stop of the background music (Gif 4 ). 

 ```
useEffect(() => {
         document.body.addEventListener('mousedown', soundEffect );
      return function cleanup() {
          window.removeEventListener('mousedown', soundEffect );
      } 
  },[]);
  ```
Code 1. Whole page click sound

```
useEffect(() => {
    const audio = document.getElementById("audio");
    if(audio != null){
      audio.volume = finalVolume;
      audio.loop = true;
      playing ? audio.play() : audio.pause();
    }
  });
```
Code 2. Back ground music



<img width="250" height="250" src="https://i.imgur.com/9jmaRJQ.gif">

Gif 4. Music Toggle

### Animation

After considering some animation libraries like react-spring and Framer-motion, we decided using the primitive @keyframe in CSS for our animation. For example our intro animation is fully implemented with  @keyframe ( Gif 5 ).

 
![](https://i.imgur.com/VM7Dp0l.gif)

Gif 5. Intro animation


[1]    ‘Tutorial: Intro to React – React’. https://reactjs.org/tutorial/tutorial.html (accessed May 09, 2021).
[2]    ‘What And Why React.js’. https://www.c-sharpcorner.com/article/what-and-why-reactjs/ (accessed May 09, 2021).
[3]    E. Saks, ‘JavaScript Frameworks: Angular vs React vs Vue.’, 2019. http://www.theseus.fi/handle/10024/261970 (accessed May 09, 2021).
[4]    victorcazanave, ‘react-svg-map’, npm. https://www.npmjs.com/package/react-svg-map (accessed May 09, 2021).
[5]    ‘Ant Design - The world’s second most popular React UI framework’. https://ant.design/ (accessed May 09, 2021).
[6]    ‘Jest · 🃏 Delightful JavaScript Testing’. https://jestjs.io/ (accessed May 09, 2021).
[7]    ‘React Testing Library | Testing Library’. https://testing-library.com/docs/react-testing-library/intro (accessed May 09, 2021).
[8]    ‘Introduction · Enzyme’. https://enzymejs.github.io/enzyme/ (accessed May 09, 2021).
[9]    ‘Redux - A predictable state container for JavaScript apps. | Redux’. https://redux.js.org/ (accessed May 09, 2021).
[10]    ‘Why Use React Redux? | React Redux’. https://react-redux.js.org/introduction/why-use-react-redux (accessed May 09, 2021).
[11]    auth0.com, ‘JWT.IO’. http://jwt.io/ (accessed May 09, 2021).








