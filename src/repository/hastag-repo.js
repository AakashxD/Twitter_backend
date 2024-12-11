const Hashtag = require('../models/hashtag');

class HashtagRepository {
    async create(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.error(error);
            return null; // Return null or a suitable value in case of an error
        }
    }

    async bulkCreate(data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.error(error);
            return null; // Return null or a suitable value in case of an error
        }
    }

    async get(id) {
        try {
            const hashtag = await Hashtag.findById(id);
            return hashtag;
        } catch (error) {
            console.error(error);
            return null; // Return null or a suitable value in case of an error
        }
    }

    async destroy(id) {
        try {
            const tag = await Hashtag.findByIdAndDelete(id);
            return tag; // Return the deleted Hashtag or a suitable value
        } catch (error) {
            console.error(error);
            return null; // Return null or a suitable value in case of an error
        }
    }

    async findByName(titleList) {
        try {
            const tags = await Hashtag.find({
                title:  titleList 
            });
            return tags;
        } catch (error) {
            console.error(error);
            return null; // Return null or a suitable value in case of an error
        }
    }
}

module.exports = HashtagRepository;
