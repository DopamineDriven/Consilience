const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const validate = require('validator');
require('dotenv').config();

const RegisterSchema = new Schema(
  {
            type: {
                type: String,
                trim: true,
                // enum: ["student", "teacer"],
                required: "select role",
                // validate: `student` || `teacher` 
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
            ID: {
                // type: Schema.Types.ObjectId,
                type: String,
                ref: 'User',
            },
            discipline: {
                type: String,
                trim: true
                },
            // TOUCH ON THIS LATER!!!
            // activeCourses: {
            //     type: String,
            //     trim: true,
            // },
            // completedCourses: {
            //     type: Array,
            //     trim: true
            // },
            email: {
                type: String,
                validate: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                required: true,
                unique: true
            },
            password: {
                type: String,
                // validate: /^[0-9A-Za-z!@.,;:'"?-]{8,50}\z/,
                required: true,
                minlength: 8,
                maxlength: 64
            },
            grades: [
                {
                  classId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Classroom',
                  },
                  assignment: {
                    type: String,
                    trim: true,
                  },
                  grade: {
                    type: String,
                    trim: true,
                  }
                }
              ],
            createDate: {
                type: Date,
                required: true,
                default: Date.now
            }
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

const RegisterModel = mongoose.model("Register", RegisterSchema);

module.exports = RegisterModel;