import { HashtagRepository } from '../repository/index.js';
import { TweetRepository } from '../repository/index.js';

class TweetServices{

    constructor(){
        this.tweetRepository=new TweetRepository();
        this.hashtagRepository=new HashtagRepository();

    }

    async create(data) {
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g) || []; // Default to empty array if no matches
        tags = tags.map((e) => e.substring(1)); // Remove the '#' symbol
    
        const tweet = await this.tweetRepository.create(data);
    
        // Find hashtags already present in the repository
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
    
        // Extract titles for comparison
        const alreadyPresentTagTitles = alreadyPresentTags.map((tag) => tag.title);
    
        // Filter out new tags (not present in the repository)
        let newTags = tags.filter(tag => !alreadyPresentTagTitles.includes(tag));
        newTags = newTags.map(tag => ({
            title: tag,
            tweets: [tweet.id]
        }));
    
        // Create new tags in the repository
       await this.hashtagRepository.bulkCreate(newTags);
    
        // Update tweets in already existing tags
        for (const tag of alreadyPresentTags) {
            if (!Array.isArray(tag.tweets)) {
                tag.tweets = []; // Initialize if undefined
            }
            tag.tweets.push(tweet.id); // Add the tweet ID to the tag's tweets
            await tag.save(); // Save the updated tag
        }
    
        return tweet;
         
        
    }
    
    
    
    
}


export default TweetServices;