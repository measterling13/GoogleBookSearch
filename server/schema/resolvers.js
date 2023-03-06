const { Books, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        User: async (parents, args) => {
            return await User.find(args.id).populate('books')
        }
    },

    Mutation: {

    }
};

module.exports = resolvers;