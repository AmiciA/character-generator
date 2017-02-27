var charPic;
var prodPic;

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#char_pic')
                .attr('src', e.target.result)
                .width(150)
                .height(150);
        };
        
        reader.addEventListener("load", function(e) {
            document.getElementById("char_pic").src       = e.target.result;
            //document.getElementById("char_pic_b64").innerHTML = e.target.result;
            charPic = e.target.result;
        }); 

        reader.readAsDataURL(input.files[0]);
    }
}

function readURLprod(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#prod_pic')
                .attr('src', e.target.result)
                .width(150)
                .height(150);
        };
        
        reader.addEventListener("load", function(e) {
            document.getElementById("prod_pic").src       = e.target.result;
            //document.getElementById("prod_pic_b64").innerHTML = e.target.result;
            prodPic = e.target.result;
        }); 

        reader.readAsDataURL(input.files[0]);
    }
}

function SubmitClick() { 
    $("#subTest").click(function(event) {
        // NAME
        localStorage.setItem("char name", document.getElementById("char_name").value);
        // TITLE
        localStorage.setItem("char title", document.getElementById("char_title").value);
        // PICTURE
        localStorage.setItem("char pic", charPic);
        // AGE
        localStorage.setItem("char age", document.getElementById("char_age").value);   
        // GENDER
        localStorage.setItem("char gend", document.querySelector('input[name = "gender"]:checked').value);
        // LOCATION
        localStorage.setItem("char loc", document.getElementById("char_loc").value);    
        // AREA
        var charareas = $('input[name="areatype"]:checked').map(function() {
            return this.value;
        }).get();
        localStorage.setItem("char area", charareas);
    }); 
}

function SubmitPage2() {
    $("#subP2").click(function(event) {
        // 1
        localStorage.setItem("am 1", document.getElementById("am_1").value);      
        // 2
        localStorage.setItem("am 2", document.getElementById("am_2").value);      
        // 3
        localStorage.setItem("am 3", document.getElementById("am_3").value);
    });
}

function SubmitPage3() {
    $("#subP3").click(function(event) {
        // 1
        localStorage.setItem("ie 1", document.getElementById("ie_1").value);      
        // 2
        localStorage.setItem("ie 2", document.getElementById("ie_2").value);      
        // 3
        localStorage.setItem("ie 3", document.getElementById("ie_3").value);
    });
}

function SubmitPage4() {
    $("#subP4").click(function(event) {
        // 1
        localStorage.setItem("is 1", document.getElementById("is_1").value);      
        // 2
        localStorage.setItem("is 2", document.getElementById("is_2").value);      
        // 3
        localStorage.setItem("is 3", document.getElementById("is_3").value);
    });
}

function SubmitPage5() {
    $("#subP5").click(function(event) {
        // PNAME
        localStorage.setItem("prod name", document.getElementById("prod_name").value);
        // PENVIRON
        localStorage.setItem("prod environ", document.getElementById("prod_environ").value);
        // PTYPE
        localStorage.setItem("prod type", document.getElementById("prod_type").value);
        // PDATA
        localStorage.setItem("prod data", document.getElementById("prod_data").value);   
        // PTIME
        localStorage.setItem("prod time", document.getElementById("prod_time").value); 
        // PIMG
        localStorage.setItem("prod pic", prodPic);
        // GOAL 1
        localStorage.setItem("gs 1", document.getElementById("gs_1").value);      
        // GOAL 2
        localStorage.setItem("gs 2", document.getElementById("gs_2").value);      
        // MIND 1
        localStorage.setItem("gs 3", document.getElementById("gs_3").value);
    });
}

$(document).ready(function() { 
    SubmitClick();
    SubmitPage2();
    SubmitPage3();
    SubmitPage4();
    SubmitPage5();
    
    // NAME
    $("#namehere").html(localStorage.getItem("char name"));
    // TITLE
    $("#titlehere").html(localStorage.getItem("char title"));
    // PICTURE
    $("#pichere").attr("src", localStorage.getItem("char pic"));
    
    // AGE
    $("#agehere").html(localStorage.getItem("char age"));
    // GENDER
    $("#gendhere").html(localStorage.getItem("char gend"));
    // LOCATION
    $("#lochere").html(localStorage.getItem("char loc"));
    // AREA
    $("#areahere").html(localStorage.getItem("char area"));
    
    // AM1
    $("#am1here").html(localStorage.getItem("am 1"));     
    // AM2
    $("#am2here").html(localStorage.getItem("am 2"));       
    // AM3
    $("#am3here").html(localStorage.getItem("am 3"));
    
    // IE1
    $("#ie1here").html(localStorage.getItem("ie 1"));     
    // IE2
    $("#ie2here").html(localStorage.getItem("ie 2"));       
    // IE3
    $("#ie3here").html(localStorage.getItem("ie 3"));
    
    // IS1
    $("#is1here").html(localStorage.getItem("is 1"));     
    // IS2
    $("#is2here").html(localStorage.getItem("is 2"));       
    // IS3
    $("#is3here").html(localStorage.getItem("is 3"));
    
    // GS1
    $("#gs1here").html(localStorage.getItem("gs 1"));     
    // GS2
    $("#gs2here").html(localStorage.getItem("gs 2"));       
    // GS3
    $("#gs3here").html(localStorage.getItem("gs 3"));
    
    // PNAME
    $("#pnamehere").html(localStorage.getItem("prod name"));
    // PTITLE
    $("#ptypehere").html(localStorage.getItem("prod type"));
    // PICTURE
    $("#ppichere").attr("src", localStorage.getItem("prod pic"));
    // PENVIORN
    $("#penvironhere").html(localStorage.getItem("prod environ"));
    // PDATA
    $("#pdatahere").html(localStorage.getItem("prod data"));
    // PTIME
    $("#ptimehere").html(localStorage.getItem("prod time"));
}); 