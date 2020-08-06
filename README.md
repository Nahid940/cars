# Instructions
To run the system follow the instructions bellow.
  - This system is built with React and php.
  - React is for front end and php for backend.
  - php files are given in the folder named car.

# Run backend(PHP)!
  - Store php folder(car) in your suitable php enabled directory(htdocs for xampp, and other suitable place if you are running linux (apaceh, nginx, docker))
  - Change database credentials in .env file
  - Run `composer update`
  - Make sure that the server is running and executes the requests.
  - A sql file is provided within the project folder.
  Import that sql file in your mysql database if you need.
  - A CSV file of cars is also provided in the project folder.
  - Upload that CSV file through the system if you want.
# Run Frontend
 - Edit endpoint.js to define the api url in the endpoint constant. For me the url is
    http://localhost/car/api/cars.php in your case you have to change the base url (http://localhost) according to your setup.
 - Run `npm install` to install node modules.
 - Go inside the folder and run `npm start` this will run the application.
