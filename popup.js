// Update the relevant fields with the new data.
const setDOMInfo = info => {
  // jquery alternate for document.getElementById('names').textContent = info.names;
  $('#names').text(info.names);
  // jquery alternate for document.getElementById('pagenames').value = info.pagesnames;
  $('#pagenames').text(info.pagesnames);
};

// API cannot be converted from JS to JQuery
// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        // ...also specifying a callback to be called 
        //    from the receiving end (content script).
        setDOMInfo
    );
  });
});

// jquery alternate for the code below
//document.getElementById("copydata").onclick = function() {myFunction()};
//function myFunction() {
//  navigator.clipboard.writeText(document.getElementById("pagenames").value);
//  document.getElementById('remarks').innerHTML = "Liked page names already copied!";
//}
$("#copydata").click(function() {
  navigator.clipboard.writeText(
    // alternate for document.getElementById("pagenames").value
    $('#pagenames').val()
    );
  // alternate for document.getElementById('remarks').innerHTML = "Liked page names already copied!";
  $('#remarks').html("Liked page names already copied!");
});