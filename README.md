# Project Summary

TravelGram is a trip planning and sharing web application for people who want to plan and organize trips collaboratively in real-time with other users, and share their trip plans with others. Our application allows users to create trips by adding certain information such as the timeframe of the trip, and several trip elements such as places to visit, activities, reservations, and more, through an intuitive drag and drop interface.

# Project Details

The application will be using data such as user information (username, email, password), trip information (trip name, description, trip dates, trip destinations, other users as collaborators), and trip elements (activity name, description, image, date of visit, location). Using this data, a user will be able to register and login, and create and edit trips. They will also able to add and edit destinations for each trip, and add collaborators to their trips. They should be able to see all their destinations on their respective trips.
Some additional functionality that we could include is a popularity system that allows users to rate and comment on other trips, and find trips based on related tags and popularity.

# Project Task Requirements

Minimum Requirements:

- Add, edit, delete, view trip information, such as title, description, duration, and trip elements representing activities, reservations… (Completed)
- Visualize the trip elements via a map interface (Completed)
- Add other users as collaborators to a trip, so that each collaborator can make changes on the trip (Completed)
- Basic user authentication functionality (Completed)

Standard Requirements:

- Users can publish their created trips so all other users can view them, and use them as templates when creating their own trips (Completed)
- Users can add attachments to their trip elements for the trip collaborators to see (Completed)
- Changes and updates done by one user should be reflected in real-time for all members of the trip. (Not Completed)

Stretch Requirements:

- Search for published trips using parameters such as locations, activities, tags, etc. (Not Completed)
- Popularity system that allows users to rate and comment on other trips. (Not Completed)
- Functionality to allow users to keep track of trip expenses and distribute costs among all travellers. (Not Completed)
- Automatic recommendations for trip routes based on activities and locations. (Not Completed)
- Integrations with travel-related applications such as Airbnb, Booking.com, etc. (Not Completed)

# Description of how technologies from units 1-5 are used

TravelGram uses all the technologies we worked with in every unit. We used CSS from unit 1 to style the entire app, React from unit 2 to build the user-facing side of the app, Node.js and Express from unit 3 to run our backend server, MongoDB from unit 4 to hold all of our user and travel data, and finally, release engineering from unit 5 to have a continuously integrated release line from pushing to Github to releasing publicly on Heroku.

# Above and Beyond

Our application is integrated with a variety of interesting technologies. Firstly, we used a Google Maps API wrapper component for visualizing the trip activities, and a Google Maps Location API component for creating an autocompleted location search. We also used browsers’ navigator API to fetch the current user’s location, and create the trip map based on that. In order to store trip images and attachments, we integrated our app with Firebase Storage, and created an interface to interact with the Firebase Storage API. We also made use of a tool called Storybook while developing our components, which allowed us to build and test our React components in an isolated way as we were developing them. We’ve also set up a Redux store in our app to manage data in a central place and make it available to the whole component tree.

# Next Steps

To increase the functionality of our app, we plan to implement the features in our stretch goals. These include giving users the ability to publish their trips publicly, to rate and comment on public trips, and to search for public trips based on popularity and other parameters such as trip location, tags, activities, etc. so they may use them as their inspiration. We also plan to integrate travel-related APIs such as Airbnb, Booking.com, etc. to allow users to manage and make accommodations for their trips. A plan to implement a trip recommendation system based on users’ activity and trip history is also in the forecast.

# Contributions

Gokce: For our app, I created a dashboard page that displays a paginated feed of user’s trips via filtering the trips on the backend. I created a comprehensive form component that allows users to upload images, search for other user accounts in our app and add them to their trips as collaborators, search for a location using the Google Maps Places API, I also customized this component to be reused in multiple places in our app: when creating trips, trip activities, and trip templates. I also implemented the trip editing and deleting functionality and backend routes, such that only the trip owners or collaborators can perform these actions, and I implemented a trip templating functionality that allows users to copy over certain properties from an existing trip when creating a new trip. I also integrated our app with Storybook, Firebase Storage, and the Google Maps wrapper components.

Ryan: I was responsible for implementing the Navigation bar with drawers, as well as user profiles and user avatars. The navigation bar included routes to other components, as well as showing the currently logged in user and the options it can take such as linking to the profile or signing out. The profile component allows users to see their information that is linked to MongoDB and edit their information as well as their user Icon. The profile icon component was implemented in a modular way so that users can call it with varying sizes depending on their needs, or pass in a picture if their component already has it, and if not, pass in a user ID so the profile icon component can find it itself.

Maia: For TravelGram, I worked on features like user authentication, which included login, register, conditional routing (aka limiting access to pages only viewable by logged in users), and persistent sessions (or, being able to stay logged in even after refreshing the page). I was also responsible for integrating Redux into our app to hold the user information, to allow the rest of the team to easily access the user data they needed. I also worked on routing, which included putting the pages of the app together as one coherent collection of pages all connected together by routes and the main parent component. I also added some smaller forms of error handling like catching a non-existent page or bad user data. My other responsibility was engineering the release, which included restructuring our folders, writing the yaml file, creating our heroku account, and connecting it to our Github repo. Once code is pushed to the 'release' branch, it will automatically get deployed to our live heroku site by using Github activities. 

# Task Breakdown

Task 1: User profile

- Implement register functionality
  - Store data: Email, name, password
- Implement login functionality
  - Get/use data: Email, password
- Allow users to see their profile information
  - Get data: Email, name
- Allow users to edit certain parts of their profile
  - Get/edit data: Email, name, password
- Allow users to deactivate their account
  - If the trips made by the user have collaborators, the trips will still be accessible by the collaborators

Task 2: Create Trip / Add details about Trip

- Implement functionality to add other users to the current trip as collaborators.
  - Add users through email/username.
  - Extra feature: User can accept/decline invitation.
- Button to add elements to a trip
  - Shows pop-up window with preset elements to choose from
- Allow users to set trip dates
  - Start Date
  - End Date
- Display the added trip elements on a map interface
- Drag and drop interface that allows users to move trip elements around
  - Trash bucket to delete items
  - Order activities based on when they will take place

# Sketches

![Capture](https://user-images.githubusercontent.com/44722892/119239649-5e82f680-baff-11eb-8c42-f1435bdb0625.PNG)
![Capture](https://user-images.githubusercontent.com/44722892/119239636-47dc9f80-baff-11eb-9365-3ea998524887.PNG)
![Capture](https://user-images.githubusercontent.com/44722892/119239659-6b9fe580-baff-11eb-9564-80f3c5e10bb2.PNG)
![Capture](https://user-images.githubusercontent.com/44722892/119239671-78bcd480-baff-11eb-9f38-85451b93e0e2.PNG)
![Capture](https://user-images.githubusercontent.com/44722892/119239678-85d9c380-baff-11eb-9355-d89dab811314.PNG)
