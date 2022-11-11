/*function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    */
  
  function addFields(){
    // Generate a dynamic number of inputs
    var number = document.getElementById("member").value;
    // Get the element where the inputs will be added to
    var wrapper = document.getElementsByClassName("wrapper");
    // Remove every children it had before
    while (wrapper.hasChildNodes()) {
        wrapper.removeChild(wrapper.lastChild);
    }
    for (i=0;i<number;i++){
        // Append a node with a random text
        wrapper.appendChild(document.createTextNode("Member " + (i+1)));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "text";
        input.name = "member" + i;
        wrapper.appendChild(input);
        // Append a line break 
        wrapper.appendChild(document.createElement("br"));
    }

  }



