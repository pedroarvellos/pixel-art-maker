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

  event.preventDefault();
});

//Color the grid
$("#pixelCanvas").on("click", "td", function() {
  let elementToBeColored = $("." + this.className);
  elementToBeColored.css("background-color", color);

  event.preventDefault();
});

//Information to execute when page is loaded
$(function(){
  color = $("#colorPicker").val();

  let height = $("#inputHeight").val();
  let width = $("#inputWidth").val();
  
  makeGrid(height, width);
})

function makeGrid(height, width) {
  $("#pixelCanvas").empty();

  for (let i = 1; i <= height; i++) {
    let row = $(`<tr class="row${i}"></tr>`);
    let cols = null;
    for (let j = 1; j <= width; j++) {
      cols += `<td class="row${i}colum${j}">&nbsp;</td>`;
    }
    row.append(cols);

    $("#pixelCanvas").append(row);
  }
}
