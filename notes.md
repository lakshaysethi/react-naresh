formik - form handeling in component

helps in data collection

eg login form - data to be sent to backend

formik - gives us methods 
- helps in front end error handeling - eg warnings
- 

we use Yup library - validation of user input 

Eg user name must be string required - not empty - error message will be shown 
eg password - validation - min 8 char upper case symbol etc regex 
`yup` helps with this 

min - max in number imput 

Login page validation - reg ex - not in component - we do it in a seperate folder
eg app Utils - js file eg validation.js 

registeration import from app utils

formik validation schema - yup 

data management - all via redux

any api call we get data 

All Api calling etc all is done with Redux

Redux Reducer - store the data 

We need to learn Redux , formik , yup 

Now redux is simpler - Redux Toolkit  - less hardcodning 

More Hooks in Redux toolkit 

eg - >Redux UseDispatch 

Network calling fetch axios 

we will only use axios 

Fetch does not give proper error

Axios gives proper error

Api call url - is common - 
base url can be defined  with axios 
eg axios.get('post/1')

axios instance - client 

we use a client to call the api 








