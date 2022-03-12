     $(document).ready(function() {
         $("#cart-btn").click(function() {
             if ($(".cart-item-container").css("left") == "-" + $(".cart-item-container").css("width")) {
                 $(".cart-item-container").css("left", "0");
             } else {
                 $(".cart-item-container").css("left", "-" + $(".cart-item-container").css("width"));
             }
         });
     });


     $(document).ready(function() {
         $("#search-btn").click(function() {
             if ($(".search-form").css("transform") == "matrix(1, 0, 0, 0, 0, 0)") {

                 $(".search-form").css("transform", "scaleY(1)");
             } else {
                 $(".search-form").css("transform", "scaleY(0)");
             }
         });
     });


     $(document).ready(function() {
         $("#menu-btn").click(function() {
             if ($(".navbar").css("right") == "-" + $(".navbar").css("width")) {
                 $(".navbar").css("right", "0");
             } else {
                 $(".navbar").css("right", "-" + $(".navbar").css("width"));
             }
         });
     });