$(document).ready(function () {
  // alert("page is ready");
  console.log("doc is ready");})

  $("#clear").click(() => {
    form.reset();
  });

 $("input[type=radio][name=entertained]").change(function () {
    //if they say no, display the textbox

    //get value of the thing
    let entertain = $("input[name=entertained]:checked").val();

    //act accordingly
    if (entertain === "No") {
      $("#divExplain").show();
    } else {
      $("#divExplain").hide();
    }
  });

$("#submitButton").click(function () {
    if ($("#noSpaces").val()) {
      console.log("there is something in this text box");
      $("#noSpaces").removeClass("error");
    } else {
      console.log("there is NOTHING in this text box");
      $("#noSpaces").removeClass("success").addClass("error").focus();
      //bring focus to it
      //change the placeholder text
    }
  });
