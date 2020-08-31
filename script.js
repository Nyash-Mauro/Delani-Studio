$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown('1500').hide('1000');
    $("#development").show('1500');
  });
  $("#development").click(function(){
    $("#development").slideUp('1500');
    $("#development-image").slideDown('1500');
  });
});
$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function(){
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });
});
$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideDown('1500').hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function(){
    $("#design").slideUp('1500');
    $("#design-image").slideDown('1500');
  });
});
$("#work1").hover(
  function () {
    $("#overlay").show("");
  },
  function () {
    $("#overlay").hide("");
  }
);
$("#work2").hover(
  function () {
    $("#overlay2").show("");
  },
  function () {
    $("#overlay2").hide("");
  }
);
$("#work3").hover(
  function () {
    $("#overlay3").show("");
  },
  function () {
    $("#overlay3").hide("");
  }
);
$("#work4").hover(
  function () {
    $("#overlay4").show("");
  },
  function () {
    $("#overlay4").hide("");
  }
);
$("#work5").hover(
  function () {
    $("#overlay5").show("");
  },
  function () {
    $("#overlay5").hide("");
  }
);
$("#work6").hover(
  function () {
    $("#overlay6").show("");
  },
  function () {
    $("#overlay6").hide("");
  }
);
$("#work7").hover(
  function () {
    $("#overlay7").show("");
  },
  function () {
    $("#overlay7").hide("");
  }
);
$("#work8").hover(
  function () {
    $("#overlay8").show("");
  },
  function () {
    $("#overlay8").hide("");
  }
);