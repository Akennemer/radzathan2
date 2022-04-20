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
