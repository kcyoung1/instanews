$(function(){$("select").on("change",function(){event.preventDefault(),$("header").switchClass("head-large","head-small",1e3,"easeOutQuad"),$("img").switchClass("logo-large","logo-small",1e3,"easeOutQuad"),$(".news-articles").empty(),$(".loading").show();var e=$(".selectopt").val();$.ajax({method:"GET",url:"http://api.nytimes.com/svc/topstories/v1/"+e+".json?api-key=79cdc4c15ba80dc0b637d0b5c9ca165f:2:75124069"}).done(function(e){if(0===e.results.length)$(".news-articles").append("<p>Sorry, nothing found. Please try another section.</p>");else{var a=e.results;a=a.filter(function(e){return e.multimedia.length}).splice(0,12),a.forEach(function(e,a){$(".news-articles").append('<div class="all-articles article-'+a+'"><div class="text"><a href="'+e.url+'"> '+e["abstract"]+"</a></div></div>"),img=e.multimedia[4],$(".article-"+a).css("background-image",'url("'+img.url+'")')})}}).always(function(){$(".loading").hide()})})});