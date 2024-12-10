const Hashtag = require('../models/hashtag');

class HashtagRepository {
    async create(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag; // Corrected here
        } catch (error) {
            console.error(error);
            return null; // Return null or a suitable value in case of an error
        }
    }
    async bulkCreate(data){
        try {
            const tag=await Hashtag.insertMany(data)
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async get(id) {
        try {
            const tag = await Hashtag.findById(id); // Renamed to 'hashtag'
            return hashtag;
        } catch (error) {
            console.error(error);
            return null; // Return null or a suitable value in case of an error
        }
    }

    
    async destory(id) {
        try {
            const tag = await Hashtag.findByIdAndDelete(id); // Renamed to 'hashtag'
            return tag; // Return the deleted Hashtag or a suitable value
        } catch (error) {
            console.error(error);
            return null; // Return null or a suitable value in case of an error
        }
    }
    async findByName(titleList){
        try {
            const tags=await Hashtag.find({
                title:titleList
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = HashtagRepository;