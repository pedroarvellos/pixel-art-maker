let color = null;

// Select color input
$("#colorPicker").change(function() {
  color = $("#colorPicker").val();

  // Color is taken in hexadecimal
  alert(`color: ${color}`);
});

// Select size input
$("#sizePicker").submit(function() {
  let height = $("#inputHeight").val();
  let width = $("#inputWidth").val();

  if (width > 100 || height > 30) {
    alert("Max width: 100, Max height: 30");
  } else {
    makeGrid(height, width);
  }

  // The page will not refresh because of this event
  event.preventDefault();
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  $("#pixelCanvas").empty();

  for (let i = 1; i <= height; i++) {
    let row = $("<tr></tr>");
    let cols = null;
    for (let j = 1; j <= width; j++) {
      cols += "<td>&nbsp;</td>";
    }
    row.append(cols);

    $("#pixelCanvas").append(row);
  }
}
