import { HashtagRepository } from "../repository/hashtag-repo";
import { TweetRepository } from "../repository/tweet-repo";

class TweetService {
  constructor() {
    this.hashtagRepository = new HashtagRepository();
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    const content = data.content;

    const tags = content
      .match(/#+[a-zA-Z0-9(_)]+/g)
      .map((tag) => tag.substring(1).toLowerCase());

    // storing this tweet
    const tweet = await this.tweetRepository.create(data);

    let alreadyPresenttags = await this.hashtagRepository.findByName(tags);

    let textOfPresentTags = alreadyPresenttags.map((tags) => tags.text);

    let newTags = tags.filter((tag) => !alreadyPresenttags.includes(tag));

    // Further processing for newTags or alreadyPresenttags if needed

    newTags = newTags.map((tag) => {
      return {
        text: tag,
        tweet: [tweet.id],
      };
    });
  }
}
