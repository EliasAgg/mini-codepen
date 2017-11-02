// creation of vars for targets
var iframe = document.getElementById("output");
var js = $("#jsText").val(); 
var css = $("#cssText").val(); 
var html = $("#htmlText").val();

// var to check if an element is hidden or not
var htmlHidden = 0;
var cssHidden = 0;
var jsHidden = 0;
var opHidden = 0;

// Event listener
// check if something is written on each of the text area
// then update the output attribute "srcdoc" with the new content
$("#htmlText").on('input', function(){
    html = $("#htmlText").val(); 
    iframe.srcdoc = html + "<style>" + css + "</style>" + "<script>" + js + "</script>";
});

$("#cssText").on('input', function(){
    css = $("#cssText").val();  
    iframe.srcdoc = html + "<style>" + css + "</style>" + "<script>" + js + "</script>";
});

$("#jsText").on('input', function(){
    js = $("#jsText").val(); 
    iframe.srcdoc = html + "<style>" + css + "</style>" + "<script>" + js + "</script>";
});

// To hide and show elements
$("#buttonHTML").click(function(){
    if (htmlHidden == 0){
        $("#htmlInput").hide();
        htmlHidden = 1;
    }
    else{
        $("#htmlInput").show();
        htmlHidden = 0;
    }
});

$("#buttonJS").click(function(){
    if (jsHidden == 0){
        $("#jsInput").hide();
        jsHidden = 1;
    }
    else{
        $("#jsInput").show();
        jsHidden = 0;
    }
});

$("#buttonCSS").click(function(){
    if (cssHidden == 0){
        $("#cssInput").hide();
        cssHidden = 1;
    }
    else{
        $("#cssInput").show();
        cssHidden = 0;
    }
});

$("#buttonOutput").click(function(){
    if (opHidden == 0){
        $("#siteOutput").hide();
        opHidden = 1;
    }
    else{
        $("#siteOutput").show();
        opHidden = 0;
    }
});