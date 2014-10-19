chrome.runtime.onMessageExternal.addListener(function(message, sender, responder) {
    console.log("Payload >", message);
    responder({message:"SampleClient has recieved payload"});
});
chrome.runtime.sendMessage("oejgljdpeflceokfdgnobmijcnkmkdpi", {path:"/api/subscribe"}, function(response) {
    console.log("艦これウィジェットから", response);
});
chrome.runtime.sendMessage("oejgljdpeflceokfdgnobmijcnkmkdpi", {path:"/path/invalid"}, function(response) {
    console.log("艦これウィジェットから", response);
});
chrome.runtime.sendMessage("oejgljdpeflceokfdgnobmijcnkmkdpi", {path:"/api/unsubscribe"}, function(response) {
    console.log("艦これウィジェットから", response);
});
