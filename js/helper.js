
var HTMLnoteListItem = '<button class="note-list-item" id="listitem%idnum%" onclick="reply_click(this.id)"><h1 class="item-header">%header%</h1> <span class="item-subheader">%subheader%</span></button>';


var kToF = function(kelvin) {
  fahrenheit = (kelvin * (9/5)) - 459.67;
  return fahrenheit;
};
