# Project Description

Our application is a trip planning and sharing web application for people who want to plan and organize trips collaboratively in real-time with other users, and share their trip plans with others. Our application allows users to create trips by adding certain information such as the timeframe of the trip, and several trip elements such as places to visit, activities, reservations, and more, through an intuitive drag and drop interface.
The application will be using data such as user information (username, email, password), trip information (trip name, description, trip dates, trip destinations, other users as collaborators), and trip elements (activity name, description, image, date of visit, location). Using this data, a user will be able to register and login, and create and edit trips. They will also able to add and edit destinations for each trip, and add collaborators to their trips. They should be able to see all their destinations on their respective trips.
Some additional functionality that we could include is a popularity system that allows users to rate and comment on other trips, and find trips based on related tags and popularity.

# Project Task Requirements

Minimum Requirements:

- Add, edit, delete, view trip information, such as title, description, duration, and trip elements representing activities, reservations…
- Visualize the trip elements via a map interface
- Add other users as collaborators to a trip, so that each collaborator can make changes on the trip
- Basic user authentication functionality

Standard Requirements:

- Users can publish their created trips so all other users can view them, and use them as templates when creating their own trips
- Users can add comments and attachments to their trip elements for the trip collaborators to see
- Changes and updates done by one user should be reflected in real-time for all members of the trip.

Stretch Requirements:

- Search for published trips using parameters such as locations, activities, tags, etc.
- Popularity system that allows users to rate and comment on other trips.
- Functionality to allow users to keep track of trip expenses and distribute costs among all travellers.
- Automatic recommendations for trip routes based on activities and locations.
- Integrations with travel-related applications such as Airbnb, Booking.com, etc.

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
