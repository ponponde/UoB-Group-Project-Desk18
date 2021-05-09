# Evaluation
## Frontend test

### Library Used

#### Jest [1] 
Jest is a JavaScript testing framework maintained by facebook. It makes the testing process simple by providing following features. First, it can run the tests in parallel and intelligently. Second, it can automatically generate the coverage analysis. Third, it can perform various mock function API to test the function call and the interactions are properly working. Fourth, snapshot function to 
 
#### React-testing-library [2] 
To work with the Jest. We chose react-testing-library for frontend component. React-testing -library is a library to help the developer to write testing frontend programs mainly from user perspective without focusing on the implementation detail  of the React component. React-testing-library takes the render logic to run the assertion. When it comes to frontend, user interaction is everything, so this library is perfect for our frontend testing.

### Testing Design
The frontend testing method design is mainly focus on what user see and what user interact because we thought that it is the most important part of frontend.
    
#### Testing file
In the folder of every component, there exist a corresponding xxx.test.js file in __test__ folder, which is responsible for testing the component. Which is clear and easy to manage (figure 1).

![](https://i.imgur.com/mvcwuuX.png)
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

 ![](https://i.imgur.com/y3HcAxv.png)
 
Figure 2. Frontend snapshot testing file structure

[1]    ‘Jest · 🃏 Delightful JavaScript Testing’. https://jestjs.io/ (accessed May 09, 2021).

[2]    ‘React Testing Library | Testing Library’. https://testing-library.com/docs/react-testing-library/intro (accessed May 09, 2021).

