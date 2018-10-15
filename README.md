# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

Unfortunately, an error is thrown that there is a time out (perhaps it is no longer validated as a secure site?).  However, if I remove the secure HTTP, I can view techtonicgroup.com.  Essentially, by using the http, I am making a request (client side) to the server, that I would like to see the web site.  See below for further details.

## From start to finish how does that data reach you to be rendered in the browser?

The browser looks up the IP address for the url that was entered. The browser tries to connect to the server.  If it is an https site the server certificate is validated, the browser sends a http request to the server.  The server sends a response to the browser.  The browser renders the response.

## What code is rendered in the browser?

Anything that is loaded from HTML, since that is the language of the web.

## What is the server-side code’s main function?

To deliver requested data to the user or client.

## What is the client-side code’s main function?

To render a request to the server.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One.

## How many instances of the server-side code are available at any given time?

One.  The web server might be load-balanced, but the browser connects to just one of them

## What is runtime?

Runtime is the amount of time from the client making a request to the server providing the requested information.  During this time, the code is enacted and either renders the request or throws an error to the client making the request of the server.

## How many instances of the the databases connected to the server application are created?

One.
