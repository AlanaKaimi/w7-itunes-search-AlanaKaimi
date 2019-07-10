Demo here: [iTunes Search Project](https://alanakaimi.github.io/w7-itunes-search-AlanaKaimi/) 

# iTunes Search

## Directions

For this app, we will pull data from the iTunes API. 

You'll use this data to pull songs based on a user search that your user performs. Here is an idea of what the [end result](musicapp.jpg) should look like, though you can have fun with the design.

Here are the steps you'll need to take in order to complete this project.

1. Build a form that has an `<input>` where a user can fill in a band or artist.
2. When the user types in a band or artist and presses the submit button (or presses Enter), you will make the search request.
3. When your request returns, use the results to display a listing of songs related to the search term.
4. When a user clicks a song in your listing, the song should play in an `<audio>` tag that you've also added to the page (see the mockup).

### Hints & Tips

There will be some new concepts you'll need to work through on this project, so feel free to ask for assistance along the way.

- [API documents](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
  - Read through the documentation before getting started. Everything you'll need to know is in there. 
- Playing a song
  - You'll need to research the `<audio>` tag for this part - [docs here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
  - **Hint**: _You'll need to dynamically change the `src` value_

**NOTE**: The iTunes API can be a little flaky when it comes to returning CORS headers. These headers are necessary for Ajax to work correctly. If you have any problems, you can use a proxy I have set up. Replace `https://itunes.apple.com/` in the API URL with `https://itunes-api-proxy.glitch.me/`.

One hard part will be getting the song to play. Since you will be dynamically generating the HTML for your results, adding an event listener to each result can be tricky. One way to make this easier is to put your `click` event listener on a parent node (like a `div` around the entire results section) and then get the correct item clicked on in your event listener. This is called "event delegation" and here is a comprehensive [article on the technique](https://davidwalsh.name/event-delegate).

### Bonus steps

Add a radio button to switch the search between artist, song title, or album title.
