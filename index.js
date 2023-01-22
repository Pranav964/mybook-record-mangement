const express =require("express");

const DbConnection =require("./databaseConnection");  //import from dataconnection


const dotenv =require("dotenv");

const usersRouter = require("./routes/users");   //import and then use
const booksRouter = require("./routes/books");

dotenv.config();      //calling method

const app =express();

DbConnection();   //CALLING THE METHOD FROM Dbconnection

const PORT =8081;
app.use (express.json());
//api  app programing interface   server to ui    transfer data to one point to other point 






app.get("/", (req, res) => {
    res.status(200).json({     //json mul para
      message: "Server is up and running succesfully",
    });
  });

app.use("/users", usersRouter);   //use is a express function  
app.use("/books", booksRouter);



app.get("*", (req, res) => {
    res.status(404).json({
      message: "This route doesn't exist",
    });
  });


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
