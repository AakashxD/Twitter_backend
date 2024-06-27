import Hashtag from "../models/hashtag";
class HashtagRepository{
    async create(data){
      try {
        let hashtag= await Hashtag.create(data);

      } catch (error) {
        console.log(error);
      }
    }
    async bulkCreate(data){
        try {
            const tags= await Hashtag.insertMany(data);
        } catch (error) {
            console.log(error);
        }
    }
    async getHashtagbyName(text){
        try {
            let hashtag=await Hashtag.find({
                text:text
            });
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }

    async getHashtag(text){
        try {
            let hashtag=await Hashtag.findById(text);
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteHashtag(data){
        try {
            let Hashtag=await Hashtag.deleteOne(data)
            return Hashtag;
        } catch (error) {
            console.log(error);
        }

    }

    }
    export default HashtagRepository
