let statis = $(".statistics").offset().top;
$(window).scroll(function () {
  let scrollvalue = $(window).scrollTop();

  if (scrollvalue >= statis - 600) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 4000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  }

  if (scrollvalue >= 700) {
    $(".go-to-up").css("opacity", "1");
    $(".go-to-up").click(function () {
      $("html, body").scrollTop(0);
    });
  } else {
    $(".go-to-up").css("opacity", "0");
  }
});
