DnD/MTG Copmendium
A DnD Compendium/MTG Card search (to be expanded) That allows a user to find creatures/races/cards and diplay info on them also allowing users to make an account to save all items they like to their profile and allows them to retreat inot the users profile to quick find an item


## Mvp:
* [X] Basic view of listings
* []login 
* [X] View items
* []Favorite cards
* []Display correct favorites on specific side of screen
* []Correctly design each page to show correct info for each api/   
* []Good search functionanilty
* []Allow users to swap between each 'App' page location with a good built in header bar

## Stretch:
* []Possible comment addition for people to discuss builds
	*forum maybe?
* []Make decks
* []Make characters in dnd
* []Add proper color/design to each api to correctly display the feeling of them
* []Focus cleaning the ui/navbars
* []page number/next button for page navigation
* 
* 
* 

## Daily Goals
* [x]D1: Set up basic navigation.page setup
* [x]D2: Query items from apis and fully set up DB
* []D3: Add a log in feauture/oAuth if i can make my min up on this!!!
* []D4: Begin to adjust layout options and collect
* []D5: Begin stretch goals
* []D6+:finish strech and finish design

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
* 
* 

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




# Things to not forget
https://api.magicthegathering.io/v1/cards?page=2 - how to change pages 
in your ejs file that used for rendering you wantto add a button to change pages
refactor routing '/:page'
acts like aPOST submission to change pages(adding/subtracting 1,2,3 etc)