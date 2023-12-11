const ObjectId = require("mongodb").ObjectId;

const reviews = [
  {
    comment: "Test Review with a rating",
    rating: 5,
    user: { _id: ObjectId(), name: "John Doe" },
  },
  {
    comment: "Test Review with a rating of 5",
    rating: 5,
    user: { _id: ObjectId(), name: "John Doe" },
  },
  {
    comment: "Test Review with a rating of 5",
    rating: 5,
    user: { _id: ObjectId(), name: "John Doe" },
  },
  {
    comment: "Test Review with a rating of 4",
    rating: 4,
    user: { _id: ObjectId(), name: "John Doe" },
  },
  {
    comment: "Test Review with a rating of 3",
    rating: 3,
    user: { _id: ObjectId(), name: "John Doe" },
  },
];

module.exports = reviews;
