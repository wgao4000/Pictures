$(document).ready(function(){
  getpopul();
  $(document).on('click','.refresh1',function(){
    $('.refresh1').fadeOut("slow");
    getpopul();
    $('.refresh1').fadeIn();
  });
  setTimeout(function(){
   $(".taginfo").append('<h1>Tag</h1><label for="tag" class="ltag">Enter the tag:</label><input type="text" id="tag"><button type="button" class="btag">Find</button>');
  },1000);
  $.ajax({
   type: "GET",
   dataType: "jsonp",
   url: "https://api.instagram.com/v1/users/1444396272/?access_token=1444396272.7ca01c7.0cdf1f7b95f846f2a19434349c2d3421",
   success: function(data) {
   }
 });
 $(document).on('click','.btag',function(){
   gettag();
 }); 

 $(document).on('click','.refresh2',function(){
   $('.refresh2').fadeOut("slow");
   gettag();
   $('.refresh2').fadeIn();
 }); 
});
function getpopul(){ 
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
      $(".popular").append('<img src="refresh.png" alt="Refresh Button" class="refresh1">');
   }
 });
}
function gettag(){
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
    $(".latest").append('<img src="refresh.png" class="refresh2">');
   },
   error:function(data){
    $(".latest").append("Sorry, but there is no such a tag.");
   }
  });
}