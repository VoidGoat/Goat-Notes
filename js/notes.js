
var notes = {
  "notes": [
    "Hey \nI love this note!",
    "This is the text note \nhaha",
    "More notes wow! \nthis is a neat webpage",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ],
  "display" : function(){
    for ( var i = 0; i < notes.notes.length; i++ ) {
      var note = HTMLnoteListItem.replace( "%idnum%", i ).replace("%header%", notes.notes[i]).replace("%subheader%", "this is the subheader");
      $("#note-list").append(note);
    }

  }
};

notes.display();

var numberPattern = /\d+/g;

var selectedNote;
function list_click(clicked_id) {

    var id = parseInt(clicked_id.replace(/[^0-9\.]/g, '') , 10 );
    console.log( id ) ;
    console.log($("#note-text").val());
    $("#note-text").val(notes.notes[id]);
    $("#listitem" + selectedNote).removeClass( "selected-note" );

    $("#" + clicked_id).addClass( "selected-note" );

    selectedNote = id;

}
var movingList = false;
var listVisible = true;

var removeList = function() {
  var scale = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (scale === 100) {
      movingList = false;
      clearInterval(id);
    } else {
      scale += 1;
      $("#note-list").css("margin-left", (scale * -0.5) + '%');
      $("#note").css("width", (50 + (scale * 0.5)) + '%');
    }
  }
};
var addList = function() {
  var scale = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (scale === 100) {
      movingList = false;
      clearInterval(id);
    } else {
      scale += 1;
      $("#note-list").css("margin-left", (-50 + (scale * 0.5)) + '%');
      $("#note").css("width", (100 + (scale * -0.5)) + '%');
    }
  }
};

var toggleList = function() {

};

function menu_button_clicked() {
  if ( movingList === false ) {
    if ( listVisible ) {
      movingList = true;
      removeList();
      listVisible = false;
    } else {
      movingList = true;
      addList();
      listVisible = true;
    }
  }
}
var delay=1000; //1 second

setTimeout(function() {
  // $("#note-list").addClass("slide-on");
  // $("#note-list").removeClass("offscreen");
  // $("#note").addClass("scale-note");
  // $("#note").addClass("note-fill-screen");
}, delay);
