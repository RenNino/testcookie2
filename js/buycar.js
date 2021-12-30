
 
  //设置cookie的值
  $("#setCookie").click(function(){
  
      $.cookie('the_cookie', 'the_value', { expires: 7 });
      $("#cookieValue").text($.cookie('the_cookie'));
 
  });
 
 
  //查看cookie的值
  $("#lookCookie").click(function(){
 
    $("#cookieValue").text($.cookie('the_cookie'));
 
  });
 
 
  //清除cookie的值
  $("#clearCookie").click(function(){
 
    $.cookie('the_cookie',null);
 
  });
 
