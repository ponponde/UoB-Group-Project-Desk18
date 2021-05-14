<p align="center"><img src="logoTxt.png"width=80%>

# Evaluation
## Table of Contents
- [Evaluation Method](#Evaluation-Method)
- [Testing](#Testing)
  - [Frontend Test](#Frontend-Test)
    - [Library Used](#Library-Used)
    - [Testing Design](#Testing-Design)
  - [Backend Testing](#Backend-Testing)
    - [Libraries](#Libraries)
    - [Implement](#implement)
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
## Frontend test

### Library Used

#### Jest
[Jest]( https://jestjs.io/) is a JavaScript testing framework maintained by facebook. It makes the testing process simple by providing following features. First, it can run the tests in parallel and intelligently. Second, it can automatically generate the coverage analysis. Third, it can perform various mock function API to test the function call and the interactions are properly working. Fourth, snapshot function to
 
#### React-testing-library
To work with the Jest. We chose react-testing-library for frontend component. [React-testing -library](https://testing-library.com/docs/react-testing-library/intro) is a library to help the developer to write testing frontend programs mainly from user perspective without focusing on the implementation detail of the React component. React-testing-library takes the render logic to run the assertion. When it comes to frontend, user interaction is everything, so this library is perfect for our frontend testing.

### Testing Design
The frontend testing method design is mainly focus on what user see and what user interact because we thought that it is the most important part of frontend.
    
#### Testing file
In the folder of every component, there exist a corresponding xxx.test.js file in __test__ folder, which is responsible for testing the component. Which is clear and easy to manage (figure 1).

```
├──Intro
│   ├──__test__
|   │   ├──__Snapshot__
|   |   └──Intro.test.js
│   ├──index.js
│   └──intro.scss
```
Figure 1. Frontend Testing file structure

#### Crash test
Check component can be rendered without crash. In the testing function, use ReactDOM to render the component just like the real render process performed in the react webpage. If it can’t be rendered successfully, it will fail the test. For example, the <Intro/> component is checked to be rendered without crashing in the following code (Code. 1).
```
it("renders without crashing", ()=>{
   const div = document.createElement("div");
   ReactDOM.render(<Intro/>, div);
});
```
Code 1. Frontend Crash test

#### Content test
We use expect() to check the content or the condition of the target components. For example,  the text content of the three buttons in <Intro/> component is checked in the following code(Code 2). 
```
it("render text correctly", () => {
   const {getByTestId} = render(<Intro/>);
 expect(getByTestId('btnStart')).toHaveTextContent("START");
   expect(getByTestId('btnTutorial')).toHaveTextContent("TUTORIAL");
   expect(getByTestId('btnSkip')).toHaveTextContent("SKIP AND START");
});
```
Code 2. Frontend content test

#### Interaction test
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

#### Snapshots test
A snapshot xxxx.snap of each component is stored in the __snapshots__ folder. Which can be used to check the component structure rendered is changed or not. For example,  the <Intro/> snapshot test is performed in the following code(Code 4). The snapshot file structure is shown in figure 2. 

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


## Backend Testing
The tests for the back end were performed with two libraries Mocha and SuperTest. SuperTest is used to allow the requests to be made run without the server being run in advance. Mocha is a javascript framework which we used to test the website’s asynchronous functionality.

### Libraries

- Mockgoose
"Mockgoose provides test database by spinning up mongod on the back when mongoose.connect call is made." [-1] We use it to build up testing environment of connection of backend server and MongoDB.

- SuperTest
"SuperTest is to provide a high-level abstraction for testing HTTP." [0] Supertest is built on another library called Superagent combining with Supertest allow us to send request to Express server and then test the result with Supertest. SuperTest extends API with a .expect() function which help us to make requests to generate HTTP client in order to test. The other usages are checking it allows append header and fetch by methods like GET and POST.

- Mocha
"Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases." [1] We choose Mocha because Express team also use Moca and it is easier to find tutorials. We use descibe() and it() methods of Mocha.

- Chai 
"Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework." [2] We use its method "expect" for verifying response. 

### Implement

The test case is initially described and after that the expected output is matched against the received data from the API. For verifying our APIs, we developed 13 unit tests for each api and its status.

<p align="center"><img src="https://i.imgur.com/nn3RgVo.png"width=90%>

1. Use Mocha's describe for the block of testing each API.   
2. Before each testing, we need to use before() to start connection of server and DB.  
3. After each testing, use after() to close the server and connection.  
```javascript
describe("GET /api/forum/:country", () => {
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((error) => {
                console.log("Error occurred in before tests.", error);
                done(error);
            });
    });

    after((done) => {
        conn.close()
            .then(() => done())
            .catch((error) => {
                console.log("Error occurred in before tests.", error);
                done(error);
            });
    });
   ...
})
```

4. Within describe, it() defines a testing case.  
5. Test successful status 200 in the first. We should also handle error response but we do not have time for this time.  
   For example, the following code tests whether the status code received from the API upon making a get request to an endpoint is 200:

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
 

6. For POST and insert a row into the DB, we use .send() to append request body for supertest and then expect response body's values of attributes should as same as request body's values.
```javascript
    it("should insert a post", (done) => {
        const reqData = {
            country: "GB",
            author: "Han Solo",
            author_id: 0,
            content: "We supply a series of design principles, practical patterns and high quality design resources",
        };
        supertest(app)
            .post("/api/forum/")
            .send(reqData)
            .then((res) => {
                const { body } = res;
                expect(body.country === reqData.country).to.be.true;
                expect(body.author === reqData.author).to.be.true;
                expect(body.author_id == reqData.author_id).to.be.true;
                expect(body.content === reqData.content).to.be.true;
            })
            .then(() => done())
            .catch((err) => done(err));
    });

```

7. For GET data for a forum, we use `.get("/api/forum/GB")` to fetch data and we expect() the response shoud be Array and the first object shoud contains particular attributes like content and author.
```javascript
    it("should return an array", (done) => {
        supertest(app)
            .get("/api/forum/GB")
            .then((res) => {
                const { body } = res;
                expect(Array.isArray(body)).to.be.true;
                expect(body[-2]).to.have.property("content");
                expect(body[-2]).to.have.property("author");
                expect(body[-2]).to.have.property("country");
                expect(body[-2]).to.have.property("date");
            })
            .then(() => done())
            .catch((err) => done(err));
    });

```
[1]https://www.npmjs.com/package/mockgoose/  
[2]https://www.npmjs.com/package/supertest/  
[3]https://mochajs.org/  
[4]https://www.chaijs.com/   

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
