const http = require("http");

const homepage = `<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>EdTech Homepage</title>
 </head>
 <body
   style="
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
     background-color: #f4f4f4;
   "
 >
   <header
     style="
       background-color: #4caf50;
       padding: 20px;
       text-align: center;
       color: white;
     "
   >
     <h1>Welcome to EdTech</h1>
     <p>Your portal to the future of education</p>
   </header>


   <nav style="background-color: #333; overflow: hidden">
     <ul style="list-style-type: none; margin: 0; padding: 0">
       <li style="float: left">
         <a
           href="#"
           style="
             display: block;
             color: white;
             text-align: center;
             padding: 14px 16px;
             text-decoration: none;
           "
           >Home</a
         >
       </li>
       <li style="float: left">
         <a
           href="#"
           style="
             display: block;
             color: white;
             text-align: center;
             padding: 14px 16px;
             text-decoration: none;
           "
           >Courses</a
         >
       </li>
       <li style="float: left">
         <a
           href="#"
           style="
             display: block;
             color: white;
             text-align: center;
             padding: 14px 16px;
             text-decoration: none;
           "
           >About Us</a
         >
       </li>
       <li style="float: left">
         <a
           href="#"
           style="
             display: block;
             color: white;
             text-align: center;
             padding: 14px 16px;
             text-decoration: none;
           "
           >Contact</a
         >
       </li>
     </ul>
   </nav>


   <div style="padding: 20px">
     <section
       style="
         background-color: white;
         padding: 20px;
         margin: 20px 0;
         border-radius: 8px;
         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
       "
     >
       <h2>Our Mission</h2>
       <p>
         At EdTech, we aim to provide quality education to students around the
         globe through innovative online courses and interactive learning
         methods.
       </p>
     </section>


     <section
       style="
         background-color: white;
         padding: 20px;
         margin: 20px 0;
         border-radius: 8px;
         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
       "
     >
       <h2>Featured Courses</h2>
       <ul style="padding-left: 20px">
         <li>Introduction to Programming</li>
         <li>Advanced Mathematics</li>
         <li>Data Science and Machine Learning</li>
         <li>Web Development Basics</li>
       </ul>
     </section>


     <section
       style="
         background-color: white;
         padding: 20px;
         margin: 20px 0;
         border-radius: 8px;
         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
       "
     >
       <h2>Get in Touch</h2>
       <p>
         For inquiries and support, please
         <a href="mailto:support@edtech.com">email us</a>.
       </p>
     </section>
   </div>


   <footer
     style="
       background-color: #333;
       color: white;
       text-align: center;
       padding: 10px;
       position: fixed;
       width: 100%;
       bottom: 0;
     "
   >
     <p>&copy; 2024 EdTech. All rights reserved.</p>
   </footer>
 </body>
</html>

`;

const aboutUs = `<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>About Us - EdTech</title>
 </head>
 <body
   style="
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
     background-color: #f4f4f4;
   "
 >
   <header
     style="
       background-color: #4caf50;
       padding: 20px;
       text-align: center;
       color: white;
     "
   >
     <h1>About Us</h1>
     <p>Learn more about EdTech and our mission</p>
   </header>


   <nav style="background-color: #333; overflow: hidden">
     <ul style="list-style-type: none; margin: 0; padding: 0">
       <li style="float: left">
         <a
           href="#"
           style="
             display: block;
             color: white;
             text-align: center;
             padding: 14px 16px;
             text-decoration: none;
           "
           >Home</a
         >
       </li>
       <li style="float: left">
         <a
           href="#"
           style="
             display: block;
             color: white;
             text-align: center;
             padding: 14px 16px;
             text-decoration: none;
           "
           >Courses</a
         >
       </li>
       <li style="float: left">
         <a
           href="#"
           style="
             display: block;
             color: white;
             text-align: center;
             padding: 14px 16px;
             text-decoration: none;
           "
           >About Us</a
         >
       </li>
       <li style="float: left">
         <a
           href="#"
           style="
             display: block;
             color: white;
             text-align: center;
             padding: 14px 16px;
             text-decoration: none;
           "
           >Contact</a
         >
       </li>
     </ul>
   </nav>


   <div style="padding: 20px">
     <section
       style="
         background-color: white;
         padding: 20px;
         margin: 20px 0;
         border-radius: 8px;
         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
       "
     >
       <h2>Our Mission</h2>
       <p>
         At EdTech, our mission is to revolutionize education by providing
         accessible and high-quality learning experiences through our online
         platform.
       </p>
     </section>


     <section
       style="
         background-color: white;
         padding: 20px;
         margin: 20px 0;
         border-radius: 8px;
         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
       "
     >
       <h2>Our Vision</h2>
       <p>
         We envision a world where every individual has equal opportunities to
         learn and grow, regardless of their background or location.
       </p>
     </section>


     <section
       style="
         background-color: white;
         padding: 20px;
         margin: 20px 0;
         border-radius: 8px;
         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
       "
     >
       <h2>Our Team</h2>
       <p>
         We are a passionate team of educators, developers, and innovators
         dedicated to transforming education and empowering learners worldwide.
       </p>
     </section>
   </div>


   <footer
     style="
       background-color: #333;
       color: white;
       text-align: center;
       padding: 10px;
       position: fixed;
       width: 100%;
       bottom: 0;
     "
   >
     <p>&copy; 2024 EdTech. All rights reserved.</p>
   </footer>
 </body>
</html>

`;

const contactUs = `<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Contact Us - EdTech</title>
 </head>
 <body
   style="
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
     background-color: #f4f4f4;
   "
 >
   <header
     style="
       background-color: #4caf50;
       padding: 20px;
       text-align: center;
       color: white;
     "
   >
     <h1>Contact Us</h1>
     <p>Get in touch with EdTech</p>
   </header>


   <nav style="background-color: #333; overflow: hidden">
     <ul style="list-style-type: none; margin: 0; padding: 0">
       <li style="float: left">
         <a
           href="#"
           style="
             display: block;
             color: white;
             text-align: center;
             padding: 14px 16px;
             text-decoration: none;
           "
           >Home</a
         >
       </li>
       <li style="float: left">
         <a
           href="#"
           style="
             display: block;
             color: white;
             text-align: center;
             padding: 14px 16px;
             text-decoration: none;
           "
           >Courses</a
         >
       </li>
       <li style="float: left">
         <a
           href="#"
           style="
             display: block;
             color: white;
             text-align: center;
             padding: 14px 16px;
             text-decoration: none;
           "
           >About Us</a
         >
       </li>
       <li style="float: left">
         <a
           href="#"
           style="
             display: block;
             color: white;
             text-align: center;
             padding: 14px 16px;
             text-decoration: none;
           "
           >Contact</a
         >
       </li>
     </ul>
   </nav>


   <div style="padding: 20px">
     <section
       style="
         background-color: white;
         padding: 20px;
         margin-bottom: 20px;
         border-radius: 8px;
         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
       "
     >
       <h2>Contact Information</h2>
       <p>Feel free to reach out to us using the contact details below:</p>
       <ul>
         <li>
           Email: <a href="mailto:contact@edtech.com">contact@edtech.com</a>
         </li>
         <li>Phone: +1 (123) 456-7890</li>
         <li>Address: 123 Education Street, Cityville, Country</li>
       </ul>
     </section>


     <section
       style="
         background-color: white;
         padding: 20px;
         margin-bottom: 20px;
         border-radius: 8px;
         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
       "
     >
       <h2>Send us a Message</h2>
       <form action="#" method="post">
         <label for="name">Your Name:</label><br />
         <input
           type="text"
           id="name"
           name="name"
           style="
             width: 100%;
             padding: 8px;
             margin-bottom: 10px;
             border: 1px solid #ccc;
             border-radius: 4px;
           "
         /><br />


         <label for="email">Your Email:</label><br />
         <input
           type="email"
           id="email"
           name="email"
           style="
             width: 100%;
             padding: 8px;
             margin-bottom: 10px;
             border: 1px solid #ccc;
             border-radius: 4px;
           "
         /><br />


         <label for="message">Your Message:</label><br />
         <textarea
           id="message"
           name="message"
           rows="4"
           style="
             width: 100%;
             padding: 8px;
             margin-bottom: 10px;
             border: 1px solid #ccc;
             border-radius: 4px;
           "
         ></textarea
         ><br />


         <input
           type="submit"
           value="Submit"
           style="
             background-color: #4caf50;
             color: white;
             padding: 10px 20px;
             border: none;
             cursor: pointer;
             border-radius: 4px;
           "
         />
       </form>
     </section>
   </div>


   <footer
     style="
       background-color: #333;
       color: white;
       text-align: center;
       padding: 10px;
       position: fixed;
       width: 100%;
       bottom: 0;
     "
   >
     <p>&copy; 2024 EdTech. All rights reserved.</p>
   </footer>
 </body>
</html>


`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.end(homepage);
  }

  if (req.url === "/about-us") {
    res.end(aboutUs);
  }
  if (req.url === "/contact-us") {
    res.end(contactUs);
  }
});

server.listen(3000);
