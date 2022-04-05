/// executes database calls
const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            if (context.user) {
                // const userData = await User.findOne({
                //     _id: context.user._id
                // })
                //   .select('-__v -password')
                //   .populate('thoughts')
                //   .
                console.log(context.user);
            } else {
                console.log("No context.user exists");
            }
        }
    },

    Mutation: {
        login: async(parent, args, context) => {
            if (context.email) {
                console.log(context.email);
                // args.email, args.password

                // async login({ body }, res) { //////////////////////////////////////////////////////////////////////////// using args from mutation
                //     const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
                //     if (!user) {
                //       return res.status(400).json({ message: "Can't find this user" });
                //     }
                
                //     const correctPw = await user.isCorrectPassword(body.password);
                
                //     if (!correctPw) {
                //       return res.status(400).json({ message: 'Wrong password!' });
                //     }
                //     const token = signToken(user);
                //     res.json({ token, user });
                //   },


            } else {
                console.log("No context.email exists");
            }
        },
        addUser: async(parent, args, context) => {
            if (context.email) {
                console.log(context.email);
            } else {
                console.log("No context.email exists");
            }
        },
        saveBook: async(parent, args, context) => {
            if (context.title) {
                console.log(context.title);
            } else {
                console.log("No context.title exists");
            }
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