

document.addEventListener('polymer-ready', function() {
  var navicon = document.getElementById('navicon');
  var drawerPanel = document.getElementById('drawerPanel');
  navicon.addEventListener('click', function() {
    drawerPanel.openDrawer();
  });
    loadWorksData();
});

function href(url){
location.href = url.toString();
}

document.addEventListener('polymer-ready', function() {
    console.log("Polymer is Ready")
     loadWorksData()
  });


function loadWorksData(){
   console.log("Loading Works Data from JSON...");
//Json 파일 읽기
$.getJSON( "/works.json", function( data ) {
    console.log("Loading Works Data from JSON... - JSON Loaded");
 var WorksArray = data.works;
    for(var i=0; i<WorksArray.length; i++){
        console.log(WorksArray[i].title);
   
        var name = WorksArray[i].title;
        var desc = WorksArray[i].desc;
        var link = "'"+WorksArray[i].link+"'";
        var element = '<paper-shadow z="1" class="works-card" align="center"><h2>'+name+'</h2><p>'+desc+'</p><paper-fab onclick="href('+link+')" icon="arrow-forward"></paper-fab></paper-shadow>';
        
  $('#works-contents').append(element);
    }
 
});
}