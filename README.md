# React

# parcel
- Dev Build 
- Creates Local Server
- HMR - Hot Module Replacement - auto refersh on any changes when we save it.
  For HMR Parser is uses a file watching algorithm which is written in c++ 
- Caching - Faster Build - parser is caching code for faster build.
  in .parcel-cache folder
- Image Optimization
- Minification 
- Bundling
- Compressing
- Consistant Hashing
- Code Splitting
- Differential Bundling - To Support Older Browsers So Our App is Also Support 
                        on Different Older Browsers
- Diagnostics - if there is any error in our app. parcel will 
                show beautiful diagnostics in terminal and Browser of the error.
- Error Handling
- Https - Paser Also gives us a way we can run our on https in local machine 
- Tree Shaking Algorithm - Parcel Will Remove Unused Code from Our App.
                           Suppose We have 100's of function but we are using only
                           some of them. parcel will remove unused code from our app.
- Different Build For Dev and Production.
- we have remove  "main": "app.js" from package.json before production build.  


