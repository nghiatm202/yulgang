$(document).ready(function () {
  $(".bannerBox").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
  })
})

$(function () {
  $(".newsTabs a").click(function () {
    var elm = $(this)
    if (!elm.hasClass("active")) {
      elm.siblings().removeClass("active")
      elm.addClass("active")
      elm.parents(".newsTabs").next().children(".tabBox").hide()
      $(this.hash).fadeIn()
    }
    return false
  })
})

$(document).ready(function () {
  $(".dropdownToggle").click(function (e) {
    e.stopPropagation()

    $(".dropdownMenu").toggleClass("show")
    $(".dropdownArrow").toggleClass("fa-caret-down fa-caret-up")
  })

  $(document).click(function () {
    $(".dropdownMenu").removeClass("show")
    $(".dropdownArrow").removeClass("fa-caret-up").addClass("fa-caret-down")
  })

  $(".dropdownItem").click(function (e) {
    e.preventDefault()

    var selectedValue = $(this).data("value")
    $(".dropdownToggle").html(
      $(this).html() + ' <i class="fas fa-caret-down dropdownArrow"></i>'
    )
    $(".dropdownToggle").data("value", selectedValue)
    $(".dropdownMenu").removeClass("show")
  })

  $(".rankingTabs a").click(function () {
    var elm = $(this)

    if (!elm.hasClass("active")) {
      elm.siblings().removeClass("active")
      elm.addClass("active")
      elm
        .parents(".rankingTabs")
        .next()
        .children(".tabBox")
        .hide()
        .removeClass("active")
      $(this.hash).fadeIn().addClass("active")
    }

    return false
  })
})
