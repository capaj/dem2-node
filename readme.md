Single page web application powered by Javascript(KnockoutJS, Twitter bootstrap), node.js(mongoDB, Mongoose) on server.
Server-client communication is done only via webscokets.
Usecase should be like this:
Server scrapes a document(new law, law reform, international treaty or other parliamentary document which is in hands of every parliamentary member) and then it presents the voting on this document to the user of the web application. He then can vote on it. Voting should end before the last voting on it occurs in the parliament. That's basically it for now. For the future, I would like to implement parliamentary parties and a lot of social aspects.

Scraper is hand tailored for the purpose of getting vital information from the domain psp.cz. It is its own npm module.

Clientside language is Czech, I don't plan on supporting any other languages just yet. All code and comments are written in english.

There are a few client side widget tests for this app available for viewing here: http://plnkr.co/users/capaj
©GNU General Public License