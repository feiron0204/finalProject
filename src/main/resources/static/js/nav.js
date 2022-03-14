$("#second_large span").mouseover(function (event) {
  $("#third_large").css("display", "block");
  $("#third_large").empty();
  if (event.currentTarget.innerText == "MEN") {
    $("<div/>")
      .append(
        $("<ul/>")
          .append($("<li/>").append($("<a/>", { text: "TOP", href: "#" })))
          .append($("<li/>").append($("<a/>", { text: "BOTTOM", href: "#" })))
          .append($("<li/>").append($("<a/>", { text: "BAG", href: "#" })))
          .append($("<li/>").append($("<a/>", { text: "HANDWEAR", href: "#" })))
          .append(
            $("<li/>").append($("<a/>", { text: "ACCESSORIES", href: "#" }))
          )
          .append($("<li/>").append($("<a/>", { text: "SHOES", href: "#" })))
          .append(
            $("<li/>").append($("<a/>", { text: "COLLABORATIONS", href: "#" }))
          )
      )
      .appendTo($("#third_large"));

    $("<div/>")
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .appendTo($("#third_large"));
  } else if (event.currentTarget.innerText == "WOMEN") {
    $("<div/>")
      .append(
        $("<ul/>")
          .append($("<li/>").append($("<a/>", { text: "TOP", href: "#" })))
          .append($("<li/>").append($("<a/>", { text: "BOTTOM", href: "#" })))
          .append($("<li/>").append($("<a/>", { text: "BAG", href: "#" })))
          .append($("<li/>").append($("<a/>", { text: "HANDWEAR", href: "#" })))
          .append(
            $("<li/>").append($("<a/>", { text: "ACCESSORIES", href: "#" }))
          )
          .append($("<li/>").append($("<a/>", { text: "SHOES", href: "#" })))
      )
      .appendTo($("#third_large"));

    $("<div/>")
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .appendTo($("#third_large"));
  } else if (event.currentTarget.innerText == "LIFE STYLE") {
    $("<div/>")
      .append(
        $("<ul/>")
          .append(
            $("<li/>").append($("<a/>", { text: "CRAFT PRACTISE", href: "#" }))
          )
          .append(
            $("<li/>").append($("<a/>", { text: "CROWCANYON", href: "#" }))
          )
          .append($("<li/>").append($("<a/>", { text: "HELINOX", href: "#" })))
          .append(
            $("<li/>").append($("<a/>", { text: "MAGAZINE B", href: "#" }))
          )
          .append(
            $("<li/>").append($("<a/>", { text: "NAG CHAMPA", href: "#" }))
          )
          .append(
            $("<li/>").append(
              $("<a/>", { text: "NTFU COLLECTABLES", href: "#" })
            )
          )
          .append(
            $("<li/>").append($("<a/>", { text: "SALT RAIN", href: "#" }))
          )
          .append(
            $("<li/>").append($("<a/>", { text: "XENIA TALER", href: "#" }))
          )
      )
      .appendTo($("#third_large"));

    $("<div/>")
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .appendTo($("#third_large"));
  } else if (event.currentTarget.innerText == "SALE") {
    $("<div/>")
      .append(
        $("<ul/>")
          .append(
            $("<li/>").append(
              $("<a/>", { text: "ALL SALE", href: "#" }).append(
                $("<span/>", {
                  text: "UP TO 70%",
                  style: "color:red;font-size:12px;margin-left:5px",
                })
              )
            )
          )
          .append($("<li/>").append($("<p/>")))
          .append(
            $("<li/>").append($("<a/>", { text: "BROWNYARD", href: "#" }))
          )
          .append(
            $("<li/>").append($("<a/>", { text: "CARHARTT WIP", href: "#" }))
          )
          .append($("<li/>").append($("<a/>", { text: "DEUS", href: "#" })))
          .append($("<li/>").append($("<a/>", { text: "GRAMICCI", href: "#" })))
          .append($("<li/>").append($("<a/>", { text: "LMC", href: "#" })))
          .append($("<li/>").append($("<a/>", { text: "MISCHIEF", href: "#" })))
          .append($("<li/>").append($("<a/>", { text: "OBEY", href: "#" })))
          .append($("<li/>").append($("<a/>", { text: "POLAR", href: "#" })))
          .append(
            $("<li/>").append($("<a/>", { text: "THISISNEVERTHAT", href: "#" }))
          )
          .append(
            $("<li/>").append($("<a/>", { text: "UNAFFECTED", href: "#" }))
          )
          .append(
            $("<li/>").append($("<a/>", { text: "WHIDTHINGS", href: "#" }))
          )
      )
      .appendTo($("#third_large"));

    $("<div/>")
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .appendTo($("#third_large"));
  } else if (event.currentTarget.innerText == "BRANDS") {
    $("<div/>")
      .append(
        $("<ul/>")
          .append(
            $("<li/>").append($("<a/>", { text: "ARC'TERYX", href: "#" }))
          )
          .append(
            $("<li/>").append($("<a/>", { text: "CARHARTT WIP", href: "#" }))
          )
          .append($("<li/>").append($("<a/>", { text: "HELINOX", href: "#" })))
          .append(
            $("<li/>").append($("<a/>", { text: "HOKAONEONE", href: "#" }))
          )
          .append($("<li/>").append($("<a/>", { text: "MERRELL", href: "#" })))
          .append($("<li/>").append($("<a/>", { text: "POTTERY", href: "#" })))
          .append(
            $("<li/>").append($("<a/>", { text: "THISISNEVERTHAT", href: "#" }))
          )
          .append(
            $("<li/>").append(
              $("<a/>", { text: "THEMUSEUMVISITOR", href: "#" })
            )
          )
          .append(
            $("<li/>").append($("<a/>", { text: "THEOPEN PRODUCT", href: "#" }))
          )
          .append(
            $("<li/>").append($("<a/>", { text: "XENIA TALER", href: "#" }))
          )
          .append($("<li/>").append($("<p/>")))
          .append(
            $("<li/>").append(
              $("<a/>", { text: "VIEW ALL BRANDS", class: "small-font" })
            )
          )
      )
      .appendTo($("#third_large"));

    $("<div/>")
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .appendTo($("#third_large"));
  } else if (event.currentTarget.innerText == "POST") {
    $("<div/>")
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .append($("<a/>").append($("<p/>")).append($("<img/>")))
      .appendTo($("#third_large"));
  }

  $("li a").mouseenter(function (event) {
    event.currentTarget.setAttribute(
      "style",
      "color:gray;text-decoration:underline"
    );
  });
  $("li a").mouseleave(function (event) {
    event.currentTarget.setAttribute("style", "color:black");
  });
});

$("nav").mouseleave(function () {
  $("#third_large").attr("style", "display:none");
});
$(function () {
	if(window.innerWidth<800){
		$('#second_large').hide();
	}else{
		$('#second_small').hide();
	}
  $("#fourth").hide();
});

$(".search").click(function () {
  $("#fourth ").animate({ height: "toggle" }, 300, "linear");
});
$("#searchCloseBtn").click(function () {
  $("#fourth").animate({ height: "toggle" }, 200, "linear");
});


$(window).resize(function(){
	if(window.innerWidth<810){
		$('#second_large').hide();
		$('#second_small').show();
		$('#third_large').hide();
		$('#third_small').hide();
	}else{
		$('#second_large').show();
		$('#second_small').hide();
		$('#third_large').hide();
		$('#third_small').hide();
	}
});

$('#menu').hover(function(){
	$('#menu i').toggleClass("fa-bars fa-bars-staggered");
});
$("#menu").click(function () {
  $("#third_small").toggle();
});