
var notes = {
  "notes": [
    "Hey \nI love this note!",
    "This is the text note \nhaha",
    "More notes wow! \nthis is a neat webpage",
    "-Kanji \n-Algorithmic Thinking \n-Read japanese \n-English pick topic \n-Annotated Bibliography"
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
function reply_click(clicked_id) {

    var id = parseInt(clicked_id.replace(/[^0-9\.]/g, '') , 10 );
    console.log( id ) ;
    console.log($("#note").val());
    $("#note").val(notes.notes[id]);
    $("#listitem" + selectedNote).removeClass( "selected-note" );

    $("#" + clicked_id).addClass( "selected-note" );

    selectedNote = id;

}
