introduction in angular form
important thing that angular forms are expected to do
initialize:the form fields & present it to the user.
capture the data from user
track changes made to the fields
validate the inputs
Display helpfull error to the user.

angular form provide 
template driven from reactive form

form are divide three basic building bloack
From contrl form group and form array
from control
==================
 represent single input fields
 ========
keep track of value entered,&performs input validation and other input realted tasks
like enable and disable the input fields or retrieve the input data.
form group
===========
form group is just collection different form control
=======
each from control ===>property form group
Acts as a Wrapper for collection of Form Controls Which help in Manging them easily by keeping track of the FormControl Staus.
form array
==========
form array  is array  form control list of item and checkbox etc
it allows controlling of various from controls like adding removing input fields dynamicallly other data reterieval and validation properties.
angular forms can be template driven or reactive ,proivde a flexible way to crate user friendly & interactive web based forms--
ngForm 
=================
 is directive provide by the forms module
this directive is used for creating is used for creating & handling forms in template driven approrach 
===NgForms
import {NgForm}from '@angular/forms';
an essential import statement while building a template driven form.
Form validatin
submission
Reset
Error Handling
Form state Mangement
etc.

ng form directive and ngForm class
