# This guide will help you to setup the Geobyte application successfully

GeoByte Inc is a leading courier and logistics company with focus on safe and fast delivery of items to destinations across the globe.
First, clone the project repository at [https://github.com/Egovictorc/geobyte](https://github.com/Egovictorc/geobyte)  

To run the project in development environment, you need to start the development server for both frontend and backend
## Frontend setup
Navigate to Project directory
```bash
   cd geobyte
```  

Next Install Project (Frontend) dependencies
```bash
   pnpm install
```
Next, start the (Frontend) development server:
```bash
   pnpm run dev
```
The frontend server runs locally on [http://localhost:5173](http://localhost:5173).
The frontend server runs on [https://egovictor-geobyte.netlify.app/](https://egovictor-geobyte.netlify.app/).

## pages
home: [https://egovictor-geobyte.netlify.app](https://egovictor-geobyte.netlify.app)

login: [https://egovictor-geobyte.netlify.app/auth/login](https://egovictor-geobyte.netlify.app/auth/login)

signup: [https://egovictor-geobyte.netlify.app/auth/signup](https://egovictor-geobyte.netlify.app/auth/login)

delivery-locations: [https://egovictor-geobyte.netlify.app/dashboard/locations](https://egovictor-geobyte.netlify.app/dashboard/locations)

add delivery-location: [https://egovictor-geobyte.netlify.app/dashboard/new-location](https://egovictor-geobyte.netlify.app/dashboard/new-location)


## Backend setup
Navigate to Backend directory inside the Project directory
```bash
   cd geobyte/backend
```  
## setup postgresql database
create **geobyte** database

Next, configure the database

The information to configure the database can be found in **application.yml** file 


Next start the backend server
```bash
   mvn spring-boot:run
```

The backend server runs on [http://localhost:8080](http://localhost:8080).