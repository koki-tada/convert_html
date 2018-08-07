    function onButtonClick() {
        target = document.getElementById("output");
        textBox = document.getElementById("separate");
        output = textBox.value.replace(/\r?\n/g,",");
        target.value = output;
    }
    function onCancelButtonClick() {
        document.getElementById("separate").value = "";
        document.getElementById("output").value = "";
    }
