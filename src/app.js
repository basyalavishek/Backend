import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // The origin option inside CORS specifies which domains or websites(frontend) are allowed to make requests to your server.
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
/*
When a client (like a web browser or mobile app) sends a JSON request to your server (e.g., when submitting a form or sending data via an API), this middleware('express.json') makes sure that the size of the request body doesn't exceed 16KB.
If the request body is larger than this limit, the server will reject the request and throw an error.
*/

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
/*
When you put files like images or files in the public folder, the server will be able to send those files to the client (the browser) when requested.
So, if someone visits your website and asks for an image or a CSS file, Express will look in the public folder and send the correct file.
*/

app.use(cookieParser());
/*
Cookies are small pieces of data that websites store in the user's browser.
When a user visits your site, their browser sends the cookies back to the server with every request. These cookies may store information like session IDs, preferences, etc.
cookieParser() helps the server access and read the cookies sent by the browser in the request headers.
*/

export { app };
