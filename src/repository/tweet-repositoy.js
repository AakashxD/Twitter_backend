const Tweet = require('../models/tweet');

class TweetRepository {
    async create(data) {
        try {
            const tweet = new Tweet(data);
            return tweet.save();
        } catch (error) {
            console.error(error);
            return null; // Return null or a suitable value in case of an error
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.error(error);
            return null; // Return null or a suitable value in case of an error
        }
    }

    async getWithComment(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'comment' }).lean();
            return tweet;
        } catch (error) {
            console.error(error);
            return null; // Return null or a suitable value in case of an error
        }
    }

    async remove(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet; // Return the deleted tweet or a suitable value
        } catch (error) {
            console.error(error);
            return null; // Return null or a suitable value in case of an error
        }
    }

    async getAll() {
        try {
            const tweets = await Tweet.find({});
            return tweets;
        } catch (error) {
            console.error(error);
            return []; // Return an empty array or a suitable value in case of an error
        }
    }
}

module.exports = TweetRepository;
