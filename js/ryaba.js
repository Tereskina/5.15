const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields = [
    "var1",
    "var2",
    "var3",
    "var4",
    "var5",
    "var6",
    "speach"
]

//////Получить текст///////

function handleButton1() {
    $.getJSON(dataURL, handleData1);
}


function handleData1(data) {
    $("div#result1").text(data["text"]);
}

////Подставить значения///////
function getFormValues() {
    let values = {};

    fields.forEach(function(field) {
        values[field] = $("input[name=" + field + "]")[0].value
    });

    return values;
}


function handleButton() {
    $.getJSON(dataURL, handleData);
    $("form").hide();
}

function handleData(data) {
    let message = "";

    let values = getFormValues();

    data["text"].forEach(function(line) {
        for(key in values) {
            line = line.replace("{" + key + "}", values[key]);
        }

        message = message + line + "<BR>";
    });

    $("div#result").html(message);
}


function init() {
	$("#button-fetch").click(handleButton);
    $("#button-fetch1").click(handleButton1);
}

$(document).ready(init);
