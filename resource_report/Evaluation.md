<p align="center"><img src="logoTxt.png"width=80%>

# **Evaluation**

## Table of Contents

- [Evaluation Method](#Evaluation-Method)
- [Testing](#Testing)
  - [Frontend Test](#Frontend-Test)
    - [Library Used](#Library-Used)
    - [Testing Design](#Testing-Design)
  - [Backend Test](#Backend-Test)
- [User acceptance testing](#User-acceptance-testing)
  - [Methods](#Methods)
    - [Think aloud methods](#Think-aloud-methods)
    - [Interview](#Interview)
  - [Timeline](#timeline)
- [Appendix : User Evaluation Survey](#Appendix-User-Evaluation-Survey)

## Evaluation Method

The evaluation is divided into two main areas: code evaluation and usability testing.

In terms of code, the team members first tested the APIs independently as assigned. After merging branches, functional and unit tests are then done separately according to front-end and back-end.

In terms of user testing, we designed a total of two usability tests. The first was based on the initial iteration, and we modified the design of the feature based on user feedback from this iteration. The second iteration was based on the completed basic functionality. Based on the user feedback, we mainly adjusted the layout and added an additional tutorial to help users understand the basic usage when opening the page.

## Testing 

###  Frontend test

#### Library Used

##### Jest 

[Jest]( https://jestjs.io/) is a JavaScript testing framework maintained by facebook. It makes the testing process simple by providing following features. First, it can run the tests in parallel and intelligently. Second, it can automatically generate the coverage analysis. Third, it can perform various mock function API to test the function call and the interactions are properly working. Fourth, snapshot function to

##### React-testing-library 

To work with the Jest. We chose react-testing-library for frontend component. [React-testing -library](https://testing-library.com/docs/react-testing-library/intro) is a library to help the developer to write testing frontend programs mainly from user perspective without focusing on the implementation detail of the React component. React-testing-library takes the render logic to run the assertion. When it comes to frontend, user interaction is everything, so this library is perfect for our frontend testing.

#### Testing Design

The frontend testing method design is mainly focus on what user see and what user interact because we thought that it is the most important part of frontend.

##### Testing file

In the folder of every component, there exist a corresponding xxx.test.js file in **test** folder, which is responsible for testing the component. Which is clear and easy to manage (figure 1).

```
├──Intro
│   ├──__test__
|   │   ├──__Snapshot__
|   |   └──Intro.test.js
│   ├──index.js
│   └──intro.scss
```

Figure 1. Frontend Testing file structure

##### Crash test

Check component can be rendered without crash. In the testing function, use ReactDOM to render the component just like the real render process performed in the react webpage. If it can’t be rendered successfully, it will fail the test. For example, the <Intro/> component is checked to be rendered without crashing in the following code (Code. 1).

```
it("renders without crashing", ()=>{
   const div = document.createElement("div");
   ReactDOM.render(<Intro/>, div);
});
```

Code 1. Frontend Crash test

##### Content test

We use expect() to check the content or the condition of the target components. For example, the text content of the three buttons in <Intro/> component is checked in the following code(Code 2).

```
it("render text correctly", () => {
   const {getByTestId} = render(<Intro/>);
 expect(getByTestId('btnStart')).toHaveTextContent("START");
   expect(getByTestId('btnTutorial')).toHaveTextContent("TUTORIAL");
   expect(getByTestId('btnSkip')).toHaveTextContent("SKIP AND START");
});
```

Code 2. Frontend content test

##### Interaction test

Use fireEvent() to perform some mock interactions on the target component. For example, the button conditions will change after a mock mouse click is performed, which is checked in the following code(Code 3).

```
it("check music button playing state", ()=>{
   const {queryByTitle} = render(<MusicPlayer/>);
   expect(queryByTitle('btnPlay')).toBe(null);
   expect(queryByTitle('btnPause')).toBeTruthy();
   fireEvent.click(queryByTitle('btnPause'));
   expect(queryByTitle('btnPlay')).toBeTruthy();
   expect(queryByTitle('btnPause')).toBe(null);
   fireEvent.click(queryByTitle('btnPlay'));
   expect(queryByTitle('btnPlay')).toBe(null);
   expect(queryByTitle('btnPause')).toBeTruthy();
});
```

Code 3. Frontend interaction test

##### Snapshots test

A snapshot xxxx.snap of each component is stored in the **snapshots** folder. Which can be used to check the component structure rendered is changed or not. For example, the <Intro/> snapshot test is performed in the following code(Code 4). The snapshot file structure is shown in figure 2.

```
It(“match snapshot”, () => {
   const tree = renderer.create(<Intro/>).toJSON();
   expect(tree).toMatchSnapshot();
});
```

Code 4. Frontend snapshot test

```
├──Intro
│   ├──__test__
|   │   ├──__Snapshot__
│   |   |   └──Intro.test.js.snap
|   |   └──Intro.test.js
│   ├──index.js
│   └──intro.scss
```

Figure 2. Frontend snapshot testing file structure

[1] ‘Jest · 🃏 Delightful JavaScript Testing’. https://jestjs.io/ (accessed May 09, 2021).
[2] ‘React Testing Library | Testing Library’. https://testing-library.com/docs/react-testing-library/intro (accessed May 09, 2021).



### Backend Testing

The tests for the back end were performed with two libraries Mocha and SuperTest. SuperTest is used to allow the requests to be made run without the server being run in advance. Mocha is a javascript framework which we used to test the website’s asynchronous functionality.

 

The test case is initially described and after that the expected output is matched against the received data from the API. For example, the following code tests whether the status code received from the API upon making a get request to an endpoint is 200:

 ```
it("should respond with code 200", (done) => {
​      supertest(app)
​       .get("/api/forum/GB")
​       .expect(200)
​       .end((err) => {
​         if (err) {
​           done(err);
​         }
​         done();
​       });
​    });
 ```



Our code also tests that the expected properties are received and that the server connects to the database successfully.

## User acceptance testing

### Methods

In usability testing, two methods are used to obtain feedback from users on their use.

#### Think aloud methods

Think aloud methods are often used when trying to detect usability problems. Here we use concurrent think aloud method (CTA) where participants verbalize their thoughts during task completion. The CTA provides a visible window into ideas, through which we can discover how your users actually use and perceive your design. In particular, we can discover where they have misunderstood, and these are often the areas that need to be redesigned.

**Before the experiment began**, users were told that they needed to manipulate the web page while saying what was on their mind. In this process, we observe whether the user can do it independently to determine the effectiveness of the interface; we observe whether the user does a lot of ineffective operations to determine the efficiency of the interface; we observe whether the user is dissatisfied during or after the operation to determine the satisfaction of the interface.

**During the experiment**, users were first free to browse the web for 5 minutes and then had to complete the following actions.

1. learn about the world's coronavirus statistics and view information about the inhabitants of different countries
2. learn about coronavirus statistics in three countries and view messages from residents of those countries
3. like, comment and post messages in more than two channels.
4. browse the web aimlessly and say what else you see.

**Data indicators**
We have differentiated the severity levels of problems according to their impact on the completion of the task; the higher the mark, the more devastating the impact of the problem on the task.

- 0 : Users' methods and habits are consistent with the design
- 1 : Users can do the task independently in their own way, but are dissatisfied
- 2 : The user eventually completes the task, but there are many ineffective actions that require the user to think several times
- 3 : The user is unable to complete the task independently

#### Interview

Interview is one of the most widely-used techniques. We move on to more specific questions to obtain specific information about the tasks. Mostly, we interview the user after they finished using the website with think aloud method (CTA). Here is the question list:

1. Could you tell me what impressed you the most during the use of the website?
2. Could you tell me if there is anything that makes you feel offended or uncomfortable?
3. Is there any information that you would like to know but don't see in the process of using it?
4. Are there any features that cause you some confusion or require you to actively think about them?

### Timeline

We conducted two phases of usability testing throughout the project. For each test, there are 7 participants which finally give several advice on our project.

The first evaluation was based on the first iteration and the goal was to assess the soundness of the functional design. After this phase of usability testing we removed the gambling feature and added community attributes to the site. 

The second evaluation was based on the second iteration, that is, the version where the basic functionality was completed. This test focused on adding guidance when first landing on the page and improving the artistry of the page design.
