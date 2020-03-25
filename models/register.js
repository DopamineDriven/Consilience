const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const moment = require('moment');
//const dateChicago = moment.parseZone()
//const dateChicago = moment().tz("America/Chicago").format();

const RegisterSchema = new Schema(
  {
    //using seed.js from seeders, define day and exercises
    register: [
        {
            type: {
                type: String,
                trim: true,
                required: "select role"
            },
            firstName: {
                type: String,
                trim: true,
                required: 'enter first name'
            },
            lastName: {
                type: String,
                trim: true,
                required: 'enter last name'
            },
            studentID: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            staffID: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            // TOUCH ON THIS LATER
            // activeCourses: {
            //     type: Array,
            //     trim: true,
            // },
            // completedCourses: {
            //     type: Array,
            //     trim: true
            // },
            grades: {
                type: Schema.Types.ObjectId,
                ref: 'Classroom',
            },
            gradebook: {
                type: Schema.Types.ObjectId,
                ref: 'Classroom'
            },
            email: {
                type: String,
                validate: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                required: true
            },
            password: {
                type: String,
                validate: /^[0-9A-Za-z!@.,;:'"?-]{6,50}\z/,
                required: true
            },
            //no required true boolean because access tokens are only issued when logged in
            accessToken: {
                type: String
            },
            createDate: {
                type: Date,
                required: true,
                default: new Date()
            }
        }
      ]
    },

  // Mongoose Virtuals https://mongoosejs.com/docs/tutorials/virtuals.html
  // a property not stored in MongoDB
  // virtuals typically used for computed properties on documents
  // setting virtuals to true to pass properties to response.json()
  {
    toJSON: {
      virtuals: true
    }
  }
);

// https://mongoosejs.com/docs/api/virtualtype.html#virtualtype_VirtualType-get
// incorporate dynamically-created properties to workoutSchema
// workoutSchema.virtual("totalDuration").get(function () {
//     return this.exercises.reduce((total, exercise) => {
//         return total+exercise.duration
//     }, 0)
// });

const RegisterModel = mongoose.model("Register", RegisterSchema);

module.exports = RegisterModel;