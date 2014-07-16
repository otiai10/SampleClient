var thisId = "dicghhgfikmdikhejcapjchnphinnfca";
chrome.runtime.onMessageExternal.addListener(function(message, sender, responder) {
    console.log(message, sender, responder);
    responder({message:"うんこ"});
});
chrome.runtime.sendMessage(thisId, {hoge:true}, function(response) {
    console.log("response", response);
});
chrome.runtime.sendMessage("oejgljdpeflceokfdgnobmijcnkmkdpi", {path:"/api/subscribe"}, function(response) {
    console.log("艦これウィジェットから", response);  
});
