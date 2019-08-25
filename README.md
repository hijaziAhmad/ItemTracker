# ItemTracker
Version 1.0 by HA

1. Background

This is a local web apps project for training purposes.
Using MongoDB, ExpressJS, ReactJS and Node.JS.

MongoDB Atlas : A place to store user's database and accessed by RESTful API. It is a document based opensource database. Uses mongoose for its' simple, schema-based solution to model application data, in a short-hand, it makes MongoDB and NodeJS intergration easier.
ExpressJS : A web application framework for Node.JS
ReactJS : JS front-end library to build up user interface.
Node.JS : JS run-time environment that executes JS code outside of a  browser.

2. About the app

It provide a local web app solution to keep track record of customers' item. User can register customer name, create new ticket, and review all the collected and registered item.

HOME / Item List -> Shows the logged item. User can review, edit and delete the item registered.
Edit Item Log -> Let the user update the status of the item. 
Create New Item -> Shows the registration page for new ticket. All fields are required in order to submit it to the local server.
Register Company -> Register new customer in order to create new item. 

3. Improvements   

Field formats -> create a standardize formatting of the Received Note Number(RNO). i.e. RNO should be keyed in as ABC1234 instead of ABC (space) 1234.
Search Box -> to display registered item by any of the fields.
Status Field Box -> create a standardize template based of the normal work flow and can be selected thru dropdown option.
History Log -> Shows History Log below the EditItem page.
