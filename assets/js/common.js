$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    var hiddenBlock = $(this).parent().parent().find(".abstract.hidden");
    hiddenBlock.toggleClass("open");
    
    // Lazy load video iframe when opening
    if (hiddenBlock.hasClass("open")) {
      var videoContainer = hiddenBlock.find(".video-container");
      if (videoContainer.length && !videoContainer.data("loaded")) {
        var videoSrc = videoContainer.data("video-src");
        var poster = videoContainer.data("poster");
        if (videoSrc) {
          var extension = videoSrc.split('.').pop().toLowerCase();
          if (extension === 'mp4' || extension === 'webm' || extension === 'ogg') {
            // Local video
            videoContainer.html('<video class="img-fluid rounded z-depth-1" controls preload="none" poster="' + poster + '" style="width: 100%; max-width: 100%;"><source src="' + videoSrc + '"></video>');
          } else {
            // External video (YouTube, Bilibili, etc.)
            videoContainer.html('<iframe src="' + videoSrc + '" class="img-fluid rounded z-depth-1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation" style="width: 100%; max-width: 100%; height: auto; min-height: 400px;"></iframe>');
          }
          videoContainer.data("loaded", true);
        }
      }
    }
    
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
