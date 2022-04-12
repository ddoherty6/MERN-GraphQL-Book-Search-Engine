/// executes database calls
const User = require('../models/User');
const Book = require('../models/Book');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({})
                    .select('-__v -password')
                    .populate('books');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
            
        }
    },

    Mutation: {
        login: async(parent, { email, password}) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            
            const correctPw = await user.isCorrectPassword(password);
            
            if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addUser: async(parent, args, context) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        saveBook: async(parent, args, context) => {
            console.log(args);
            console.log(context);

            const user = User.findOneAndUpdate(
                {
                    _id: context.user._id
                },
                {
                    $push: {
                        savedBooks: args.bookData
                    }
                },
                {
                    new: true
                }
            );

            return user;
            // const user = User.findOne()
            // return fetch('/api/users', {
            //     method: 'PUT',
            //     headers: {
            //     'Content-Type': 'application/json',
            //     authorization: `Bearer ${token}`,
            //     },
            //     body: JSON.stringify(bookData),
            // });
        },
        removeBook: async(parent, args, context) => {
            if (context.bookId) {
                console.log(context.bookId);
            } else {
                console.log("No context.bookId exists");
            }
        }

    }
};

module.exports = resolvers;