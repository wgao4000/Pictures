
setInterval(function(){
 $.ajax({
  type: "GET",
  dataType: "jsonp",
	cache: false,
  url: "https://api.instagram.com/v1/media/popular?access_token=806401368.5aa13be.4a08df065cbb41469c9cc20041432d3b",
  success: function(data) {
    $(".popular").empty();
    for (var i = 0; i < 3; i++) {
      $(".popular").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
    }
   }
 });
},2000);
setTimeout(function(){
 $(".taginfo").append('<h1>Tag</h1><label for="tag" class="ltag">Enter the tag:</label><input type="text" id="tag"><button type="button" class="btag">Find</button>');
},3000);
$.ajax({
  type: "GET",
  dataType: "jsonp",
  url: "https://api.instagram.com/v1/users/1444396272/?access_token=1444396272.7ca01c7.0cdf1f7b95f846f2a19434349c2d3421",
  success: function(data) {
  //  $('.name').text(data.data.username);
   // $('.tagline').text(data.data.bio);
  }
});
$(document).on('click','.btag',function(){
 setInterval(function(){ 
  $.ajax({
   type: "GET",
   dataType: "jsonp",
   cache: false,
   url: "https://api.instagram.com/v1/tags/"+$.trim($("#tag").val())+"/media/recent?client_id=1444396272&access_token=1444396272.7ca01c7.0cdf1f7b95f846f2a19434349c2d3421",
   success: function(data) {
    $(".latest").empty();
    for (var i = 0; i < 3; i++) {
    $(".latest").append("<li><a target='_blank' href='" + data.data[i].link +"'><img   src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
    }
    $(".ltag").hide();
    $("#tag").hide();
    $(".btag").hide();
   },
   error:function(data){
    $(".latest").append("Sorry, but there is no such a tag.");
   }
  });
 },2000);  
}); 