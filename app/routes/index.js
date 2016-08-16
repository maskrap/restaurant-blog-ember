import Ember from 'ember';

var articles = [{
  id: 1,
  titleListView: "'The Nightly Show' Has Been Canceled",
  titleDetailView: "'The Nightly Show With Larry Wilmore' Is Canceled, But We Shouldn't Be Ready To Say Goodbye",
  category: "Entertainment",
  timestamp: "8am",
  author: "Jordana Lipsitz",
  bodyCopy:"It is a very sad day in the world of 'fake news.' Deadline reports that Comedy Central made the decision to cancel The Nightly Show With Larry Wilmore, a show created and executive produced by Jon Stewart and hosted by Wilmore. The Nightly Show was doing poorly in the ratings, but had a few classic viral moments like his coverage of the arrest of Bill Cosby among many other bits. It's so upsetting that this show only had two seasons to get in its stride, and then didn't even get the chance to make it to that stride. But I like to think there's still hope for the show — like maybe it could find new life on the internet. Because what Wilmore is saying and doing needs to be heard and seen.",
  imageURL: "https://lovelace-media.imgix.net/getty/503501954.jpg?w=1200&h=1200&fit=max&auto=format&q=70"
}
,{
  id: 2,
  titleListView: "Chuck Palahniuk On 'Fight Club' — 20 Years Later",
  titleDetailView: "On 'Fight Club's' 20th Anniversary, Author Chuck Palahniuk Talks About The Cult Classic Book",
  category: "Books",
  timestamp: "8:30am",
  author: "Kristian Wilson",
  bodyCopy: "In a video interview with Scribd, Chuck Palahniuk talks Fight Club, 20 years later. The anarchist, anti-consumerist novel struck a chord with fans, and spawned David Fincher's 1999 film adaptation, a comic book series sequel, and an upcoming stage musical. Wednesday marks the 20th anniversary of Palahniuk's postmodern anthem, and the author reveals his inspirations for both Fight Club and Fight Club 2 in the video below.",
  imageURL: "https://lovelace-media.imgix.net/uploads/1094/79e959b0-454b-0134-cd12-0aec1efe63a9.jpeg?w=1200&h=1200&fit=max&auto=format&q=70"
},{
  id: 3,
  titleListView: "Ranking Harley Quinn & The Joker's Tattoos",
  titleDetailView: "Harley Quinn & The Joker's Tattoos In 'Suicide Squad' Ranked By Easter Egg Importance",
  category: "Entertainment",
  timestamp: "5:30pm",
  author: "Olivia Truffaut-Wong",
  bodyCopy:"There was only one thing in Suicide Squad more talked about than the actual Suicide Squad: Harley Quinn and the Joker's tattoos. The ink, first revealed in an early photo of Jared Leto as the Joker, have been debated, examined, interpreted, and debated all over again for the better part of the summer. And now that the movie is finally out in theaters, we can all go in for another round. But, instead of trying to find hidden meanings in the creepy (yet fun) tattoos Joker and Harley have in Suicide Squad, I'm going to rank them instead.",
  imageURL: "https://lovelace-media.imgix.net/uploads/1192/7189eb90-3667-0134-0658-062f3a35be5f.png?w=1200&h=1200&fit=max&auto=format&q=70"
},{
  id: 4,
  titleListView: "This Casting Choice Is A 'Genius' Move",
  titleDetailView: "Geoffrey Rush Will Play Albert Einstein In 'Genius,' A TV Series That Looks To Hit All The Right Notes",
  category: "Entertainment",
  timestamp: "11:00pm",
  author: "Jefferson Grubbs",
  bodyCopy: "When we talk about 'perfect casting', we're often using the term to either describe when a particular casting choice has matched up with our preconceived vision of a character (Sean Connery as James Bond), or in retrospect to describe an unconventional choice who turned out to be perfect for a role (Heath Ledger as The Joker). Occasionally, a certain bit of casting is so perfect, it seems like the actor in question was born to play the role. Case in point: Geoffrey Rush as Albert Einstein in Genius, an upcoming scripted series from National Geographic, as reported this Monday by TVLine.",
  imageURL: "https://lovelace-media.imgix.net/getty/462446064.jpg?w=1200&h=1200&fit=max&auto=format&q=70"
},{
  id: 5,
  titleListView: "What The 11 'AHS' Teasers Could Mean For Season 6",
  titleDetailView: "Analyzing The 11 'American Horror Story' Season 6 Teasers Because One Of Them Is The Real Deal",
  category: "Entertainment",
  timestamp: "10:00pm",
  author: "Kaitlin Reilly",
  bodyCopy: "Something creepy is headed our way, but what exactly this creepiness consists of is a total mystery. The Season 6 premiere of American Horror Story is only a month away, and fans are still in the dark about what the show's subtitle could be. It now seems that FX's anthology series wants to do more than merely keep the season's theme under wraps: it also wants fans to go crazy trying to figure it out. According to FX CEO John Landgraf at the Television Critic's Association press tour, the new American Horror Story teasers don't all connect to this season's theme. Says Landgraf: '[The AHS marketing team] went out and made many more trailers than you’ve actually seen for hypothetical seasons of American Horror Story. One of them is accurate.' Hmm... it seems the biggest mystery of Season 6 might start before its premiere on Sept. 14 — but that doesn't mean we can't theorize as to what this theme could be.",
  imageURL: "https://lovelace-media.imgix.net/uploads/26/36f8bdb0-4551-0134-17c4-060e3e89e053.png?w=1200&h=1200&fit=max&auto=format&q=70"
},{
  id: 6,
  titleListView: "The 'Two Per Country' Gymnastics Rule Isn't New",
  titleDetailView: "When Was The Gymnastics 'Two Per Country' Rule Instated? The Olympics Have Made Many Changes Over The Years",
  category: "Entertainment",
  timestamp: "3:00pm",
  author: "Leah Thomas",
  bodyCopy: "Rules are always changing at the Olympics. At the 2020 Summer Games, gymnastics teams will consist of four athletes instead of five or more, which is one the the reasons that this year's group of American ladies are calling themselves 'The Final Five.' However, that's not the rule that is getting all of the attention in Rio. When was the two-per-country gymnastics rule instated at the Olympics? While frustrating for fans of Team USA at the moment, the rule that states only two gymnasts can represent their country in the individual all-around and event finals has been around for quite a while.",
  imageURL: "https://lovelace-media.imgix.net/getty/589919186.jpg?w=1200&h=1200&fit=max&auto=format&q=70"
}];

export default Ember.Route.extend({
  model() {
    return articles;
  },
});
