const { Books, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parents, args) => {
            return await User.find(args.id).populate('books')
        }
    },

    Mutation: {
        login: async (parent, {email, password }) => {
            const user = await User.findOne({email});
            if (!user) {
                throw new AuthenticationError('No profile with this email found.');
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password');
            }

            const token = signToken(user);
            return { token, user };
        },
        
        addUser: async (parent, {username, email, password }) => {
            return await User.create({username, email, password});
        },

        removeBook: async (parent, { userId, book}) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { books: book } },
                { new: true }
            );
        },
        
    },
};

module.exports = resolvers;