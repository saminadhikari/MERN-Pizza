# MERN - Pizza

This is the application from udemy course [MERN Stack : React ,Redux ,Node ,Mongo - Pizza Delivery App](https://www.udemy.com/course/mern-stack-react-redux-node-mongo-pizza-delivery-app/) that I took to learn differences between React Native and React (not much). Since there were some changes in current **npm packages** and the one used in this tutorial, this sample app can help users stuck due to minor but frustating behaviour.

This app does not contain codes for order list, stripe integration and heroku config.

The application uses React and Node.js and has:
- Minor login and register feature using frontend/backend.
- Redux integration and api calls using redux thunk middleware.
- Load component as per application state.
- Simple CRUD backend/frontend functions.

### Running the app
1. Change **db.js** file's **mongoURL** value to your mongodb URL.
2. On first terminal
- `npm i`
- `nodemon server`
2. Then on separate terminal
- `cd client && npm i`
- `npm start`
