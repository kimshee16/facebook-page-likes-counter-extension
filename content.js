//import "jquery" as $ from "jquery-3.5.1.min.js";
//import "jquery" as $ from "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
// Inform the background page that 
// this tab should have a page-action.
chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction',
});

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    // Collect the necessary data. 
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`.)

    //jquery alternate for var pagenames = document.querySelectorAll('.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.jq4qci2q.a3bd9o3v.lrazzd5p.oo9gr5id.hzawbc8m');
    var pagenames = $(".d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.jq4qci2q.a3bd9o3v.lrazzd5p.oo9gr5id.hzawbc8m");
    var pagestring = "";
    for(var i = 0; i < pagenames.length; i++) {
       if(i == 0) {
        pagestring = pagenames[i].innerHTML;
       } else {
        pagestring = pagestring + ", " + pagenames[i].innerHTML;
      }
    }

    var domInfo = {
      //jquery alternate for names: document.querySelectorAll('.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.jq4qci2q.a3bd9o3v.lrazzd5p.oo9gr5id.hzawbc8m').length,
      names: $(".d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.jq4qci2q.a3bd9o3v.lrazzd5p.oo9gr5id.hzawbc8m").length,
      pagesnames: pagestring
    };

    // Directly respond to the sender (popup), 
    // through the specified callback.
    response(domInfo);
  }
});