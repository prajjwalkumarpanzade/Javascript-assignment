`Assignment =>
● Visit any page on the browser, and replace the content of all the p tags with the phrase “How’s the Josh?” using Javascript
● Go to youtube. Open any video. Add a button to the page using JS. On click of the button, the video playback speed should change to 10x
● Create a form to submit a blog to a mock API (reqres.in)
● Create a blog list page that fetches a list of users from a mock API and adds them to a table on the page after loading. Add a button to sort the users by name. Add an input to filter the table by search. (Optional: Show “Loading…” or a loading spinner on the screen till the data loads)
`
//1.Visit any page on the browser, and replace the content of all the p tags with the phrase “How’s the Josh?” using Javascript

// document.getElementsByTagName("p").innerHTML = "How's the Josh?";
document.querySelectorAll("p").textContent = "How's the Josh?";


//2.Go to youtube. Open any video. Add a button to the page using JS. On click of the button, the video playback speed should change to 10x

// var button = document.createElement("button");
// button.innerHTML = "Change Playback Speed";
// button.style.color = "white";
// button.onclick = function() {
//     var video = document.querySelector("video");
//     if (video) {
//         video.playbackRate = 10;
//     }
// };
// document.body.appendChild(button);

//or

btn = document.createElement("button")
btn.innerHTML = "Changeto10X"
document.getElementById("owner").appendChild(btn)
btn.addEventListener('click', function () {
    document.querySelector('video').playbackRate = 10
})
