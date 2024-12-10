const HashtagRepository = require('../repository/hastag-repo');
const { TweetRepository }=require('../repository/index');
class TweetServices{

    constructor(){
        this.tweetRepository=new TweetRepository();
        this.hashtagRepository=new HashtagRepository();

    }

   async create(data){
        const content=data.content;
        const tags=content.match(/#[a-zA-Z0-9_]+/g);
        tags=tags.map((e)=>e.substring(1));
       console.log(tags);
        const tweet=await this.tweetRepository.create(data);
        const alreadyPresenttags=this.hashtagRepository.findByName(tags).map(tags=>);
       /**
        *  [exited,coding,js ]-> [{title:execited}]

   *  1 bulkCreate in mongoose
   *  2 filter title if hashtag based in multiple tags 
   * 3 how to ad tweet id inside all the hashatags
  
   */
        return tweet;
    }
}
// thiss is my #first #tweet ,I am really #execited (/#[a-z0-9_]+/g)

module.exports=TweetServices;

