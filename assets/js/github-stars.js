(function () {
  "use strict";

  var links = document.querySelectorAll("[data-github-repo]");

  links.forEach(function (link) {
    var repo = link.getAttribute("data-github-repo");
    var count = link.querySelector("[data-github-star-count]");
    var stars = link.querySelector(".github-stars");

    if (!repo || !count || !stars) return;

    fetch("https://api.github.com/repos/" + repo, {
      headers: { Accept: "application/vnd.github+json" }
    })
      .then(function (response) {
        if (!response.ok) throw new Error("GitHub request failed");
        return response.json();
      })
      .then(function (data) {
        if (typeof data.stargazers_count !== "number") return;

        var formatted = new Intl.NumberFormat("en-US").format(data.stargazers_count);
        count.textContent = formatted;
        stars.setAttribute("aria-label", formatted + " GitHub stars");
      })
      .catch(function () {
        // Keep the build-time fallback count when GitHub is unavailable.
      });
  });
})();
