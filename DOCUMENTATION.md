# API Documentation

This documentation provides an overview of a simple REST API - **Person API** built with Node.js, Express.js, Mongoose and MongoDB for CRUD operation. The API will run at `http://localhost/3000`.

## API Endpoints

### Create a new Person

#### Description: Creates a new person and assigns a uniques id.
### URL: `/api`
#### Method: `POST`
#### Sample Request Body
```json
{
  "name": "Jane Doe"
}
```

#### Response
```json
{
  "name": "Jane Doe",
  "_id": "6434tdfghj9876544rftgh",
  "__v": 0
}
```

### Get a Person by ID

#### Description: Gets a person using their id.
### URL: `/api/:id`
#### Method: `GET`
#### Response
```json
{
  "_id": "6434tdfghj9876544rftgh",
  "name": "Jane Doe",
  "__v": 0
}
```

### Update a Person by ID

#### Description: Updates a person using their id.
### URL: `/api/:id`
#### Method: `PUT`
#### Response
```json
{
  "_id": "6434tdfghj9876544rftgh",
  "name": "New Name",
  "__v": 0
}
```

### Delete a Person by ID

#### Description: Deltes a person using their id.
### URL: `/api/:id`
#### Method: `DELETE`
#### Response
```json
{
  message: Person with id 6434tdfghj9876544rftgh has been deleted
}
```


