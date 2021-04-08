###### Roadmap
  ├─ Create project client and server folders, integrate Git, 
  ├─ /Client
  │    ├─ Install CRA in /client, add Bootstrap as dep     
  │    ├─ Implement Routing, install react-router-dom dep
  │    │    ├─ Create Register Page and config routing
  │    │    └─ Create Login Page and config routing
  │    ├─ Create TopNavigation Bar and add Links
  │    └─ Initialize Global State
  │         ├─ Install redux and react-redux
  │         └─ Modify index.js to implement redux and react-redux initial configs
  ├─ /Server
  │    ├─ Initialize and configure express and test routes.
  │    │     └─ Install express morgan mongoose nodemon dotenv cors
  │    ├─ Install esm (import/export) package module - test
  │    ├─ Modularize test route to /routes/auth.js
  │    ├─ Create autoload script for all routes.
  │    ├─ Further refactoring: Create /controllers/auth.js
  │    ├─ Creating .env file, using PORT=8000 as env variable.
  │    ├─ Use Morgan middleware
  │    └─ Initialize mongoose and connect the URI
  ├─ /Client
  │    ├─ Update Register page. add Register Form
  │    ├─ Complete Register Form, wire-up state, style w/ bootstrap
  │    ├─ create new component for RegisterForm, passdown state
  │    └─ Setup axios package use it on handleSubmit
  ├─ /Server
  │    Registering User    
  │    ├─ Register route endpoints and express.json middleware.
  │    ├─ Create controller method for user registration.
  │    ├─ Create /models. Setup mongoDB schema for name, email & pw, w/ option timestamp
  │    ├─ Hash the password
  │    │    └─ use pre function and bcrypt package
  │    └─ Save the user to database, taking to account error handling.
  ├─ /Client
  │    ├─ update error handling in Register.js
  │    ├─ use react react-toastify to show reg success or fail        
  │    ├─ redirect user to login if success using history prop
  │    ├─ create .env file and refactor register api url to env
  │    ├─ move and separate api call in Register to actions folder
  │    ├─ create Login page, and Loginform in separate files
  │    └─ code initial logic of handleSubmit for login  
  ├─ /Server
  │    ├─ Compare password from frontend and db using 
  │    │     └─ mongoose methods.comparePassword and bcrypt
  │    ├─ Create login route 
  │    └─ Create login controller
  │         ├─ Lookup user
  │         ├─ Compare password and send appropriate error or success response
  │         └─ Generate token and send a res to client - jsonwebtoken npm
  ├─ /Client 
  │    ├─ Save user and token to local storage
  │    ├─ Save user and token to redux
  │    ├─ Make initial state use token
  │    ├─ Code logic in Topnav
  │    │     ├─ useDispatch hook - react-redux
  │    │     ├─ useSelector hook - react-redux
  │    │     ├─ redirect customers using useHistory hook;
  │    │     └─ Code conditional rendering of links




#### POSSIBLE ISSUES
• you get no data/undefine - to fix this make sure to use body-parser or use express.json()
• you get CORS error - to fix this make sure you have cors applied in server.js app.use
(cors());

#### HOW LOGIN WORKS
1. Find the user by email in db.
2. Compare that user's pw (hashed) with incoming password.
      └─ middleware function in user model, that compares incoming pw hashed and pw db hashed.
3. If pw match user login success.
4. respond to frontend with JWT.
5. JWT is configured with expiry
6. User is allowed to perform certain actions like posting a new hotel for booking.

