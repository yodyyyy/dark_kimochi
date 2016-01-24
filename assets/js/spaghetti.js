
   

var options = {

  url: "/gblk.json",

  getValue: "title",


   list: {
		match: {
			enabled: true
		}
	},
  
    template: {
        type: "links",
        fields: {
            link: "url"
        }
        
    },
  

  theme: "square"
};

$("#countries").easyAutocomplete(options);



   Pace.on("start", function(){
    $(".pacel").show();
   });
   Pace.on("done", function(){
    $(".pacel").hide();
   });
   
 
$(function() {
    $("img").lazyload({
      effect : "fadeIn",
      });
});

  // use querySelector/querySelectorAll internally
var waterfall = new Waterfall({ 
    containerSelector: '.wf-container',
    boxSelector: '.wf-box',
    minBoxWidth: 180
});

  $(document).ready(function(){
    $(".menu-icon").click(function(){
        $(".trigger").toggle();
    });
});