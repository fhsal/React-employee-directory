import React from "react";
import "../styles/Employees.css";

const Filter = (props) => {

  let results = [
    {
    "name": {
    "title": "Ms",
    "first": "Lisa",
    "last": "Walters"
    },
    "email": "lisa.walters@example.com",
    "dob": {
    "date": "1992-04-24T00:22:34.295Z",
    "age": 28
    },
    "phone": "(592)-240-7345",
    "id": {
    "name": "SSN",
    "value": "650-38-9068"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/88.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
    }
    },
    {
    "name": {
    "title": "Mr",
    "first": "Vincent",
    "last": "Mitchelle"
    },
    "email": "vincent.mitchelle@example.com",
    "dob": {
    "date": "1951-05-25T22:35:13.537Z",
    "age": 69
    },
    "phone": "(132)-646-5395",
    "id": {
    "name": "SSN",
    "value": "352-16-8686"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/52.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/52.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
    }
    },
    {
    "name": {
    "title": "Mrs",
    "first": "Penny",
    "last": "Hart"
    },
    "email": "penny.hart@example.com",
    "dob": {
    "date": "1979-07-08T05:23:12.566Z",
    "age": 41
    },
    "phone": "(128)-697-7178",
    "id": {
    "name": "SSN",
    "value": "461-22-5603"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/90.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/90.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/90.jpg"
    }
    },
    {
    "name": {
    "title": "Ms",
    "first": "Marcia",
    "last": "Olson"
    },
    "email": "marcia.olson@example.com",
    "dob": {
    "date": "1954-06-26T16:50:48.166Z",
    "age": 66
    },
    "phone": "(003)-767-9773",
    "id": {
    "name": "SSN",
    "value": "893-08-3077"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/11.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/11.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/11.jpg"
    }
    },
    {
    "name": {
    "title": "Mr",
    "first": "Ben",
    "last": "Wilson"
    },
    "email": "ben.wilson@example.com",
    "dob": {
    "date": "1982-08-22T10:41:25.371Z",
    "age": 38
    },
    "phone": "(006)-427-4045",
    "id": {
    "name": "SSN",
    "value": "483-22-4368"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/63.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/63.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/63.jpg"
    }
    }
    ]

  return (
    <tr className="tr">
      <td style-prop="margin-top: 10px" >
      <img  alt={props.firstName} src={props.icon} /></td>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phone} </td>

    </tr>
  );
};

export default Filter;


