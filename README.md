DnD/MTG Copmendium
A DnD Compendium/MTG Card search (to be expanded) That allows a user to find creatures/races/cards and diplay info on them also allowing users to make an account to save all items they like to their profile and allows them to retreat inot the users profile to quick find an item

# Website local
https://nesso-mtg.herokuapp.com/


## Mvp:
* [X] Basic view of listings
* [X] login 
	* [X] use the one we did in class over google Oauth until later
* [X] View items
* [X] Favorite cards
* [X] Correctly design each page to show correct info for each api/   

## Stretch:
* [] Possible comment addition for people to discuss builds
	*forum maybe?
* [X] Make decks
* [] Make characters in dnd
* [X] Add proper color/design to each api to correctly display the feeling of them
* [X] Focus cleaning the ui/navbars
* [X] page number/next button for page navigation
* [] Good search functionanilty
* 
* 
* 

## Daily Goals
* [X] D1: Set up basic navigation.page setup
* [X] D2: Query items from apis and fully set up DB
* [X] D3: Add a log in feauture/oAuth if i can make my mind up on this!!!
* [X] D4: Begin to adjust layout options and collect
* [X] D5: Begin stretch goals
* [] D6+:finish strech and finish design

## wireframe /staging ideas


# Main Page

![](/Wireframe/Untitled.png)

# General Page Layout
![](/Wireframe/pages.png)

# MTG displaying page
![](/Wireframe/mtgpage.png)

# DnD displaying page
![](/Wireframe/dndpage.png)

# Login page 
![](/Wireframe/logreg.png)

# Users favorite page
![](/Wireframe/favpage.png)

## Issues
*  api calls were being weird
* nope I was not doing the correct thing!
* show.ejs needs to a forEach to cycle through the legalities.format obj to check if there is 1-?? and display them(also need a nested one for legalities.legality) i'll probably ask someone for a help im not really able to see the answer im looking for...
	* this was so stinking easy i feel bad for not remembering how to do it!!!!!!
* This freaking switchstatement on how and where to add an card needing to be a nestednested nest of shenanigans
* 
* attempt to fix ejs dom amnipulation


## MTG 
* Deck types
* Deck relation to card/player
* 
* 

## Routes
* '/' displays the 'entire' collection
* '/show' displays the single
* lay out my routes
* layout Schema 1st
	* DB tables columns/tables
		* User

### Schema list
* User - (Name, Email, Password)
	* Decks
* Decks
	* cards(cards can be added to many decks)
		* Non Lands(MAX 4)
		* Lands(no max)

# RESTful charting(simplified)
GET - index of cards
POST - creating a deck
PUT - adding cards to said deck
DELETE - removing cards from deck/deleteing decks

# ERD
* https://drive.google.com/file/d/1KumPp1C9y34PU0bAMB8uLfkzsIwM0owR/view?usp=sharing




# Things to not forget
* https://api.magicthegathering.io/v1/cards?page=2 - how to change pages 
* in your ejs file that used for rendering you wantto add a button to change pages
* refactor routing '/:page'
* acts like aPOST submission to change pages(adding/subtracting 1,2,3 etc)
* add a header tag to each page i want a different style and make a new style.css page! 



* need forms for everything
	* each deck that is creatable
	* need to send all info to add the card


		whenitterating thoruhgt the cards of a deck 
		check the # of that card in the deck
			via <%= card.cardsdecks.amount %>X(number)

* attempt to fix ejs dom manipulation


# Thanks:
### Honest to god If you guys weren't ther to help me this would NEVER have been this successful
* Nick (helped me non-stop)
* Milcah (absolute champ that dealt mith my scatterbrain)
* Sarah (you da best)
* Pete (basic function for routing - that i forgot multiple times later)
* Yosh (for ALL of the explinations i needed and for all of your help)

#### THank you!