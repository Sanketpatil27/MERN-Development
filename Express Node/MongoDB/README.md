<!-- 
1. require and setup connection
2. make schema
3. create model and export 

some methods to work on model:
note: all methods related to model are `async`

model.findOne({name: 'helo'}): -  give specific user with matching object
model.find():-                    give all user in array

Model.findOneAndDelete({name: 'thor'}):-  delete user & return its data, if not found then return null
-->