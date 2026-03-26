(function () {
  var consentKey = "lh_analytics_consent";
  var clarityProjectId = "w0w1tett9e";

  function getMemoryConsent() {
    return window.__analyticsConsent || null;
  }

  function setMemoryConsent(value) {
    window.__analyticsConsent = value;
  }

  function getConsent() {
    var storageConsent = null;
    try {
      storageConsent = localStorage.getItem(consentKey);
    } catch (error) {
      console.warn("[analytics] localStorage.getItem failed", error);
    }

    var consent = storageConsent || getMemoryConsent();
    console.info("[analytics] consent state detected:", consent);
    return consent;
  }

  function setConsent(value) {
    setMemoryConsent(value);
    try {
      localStorage.setItem(consentKey, value);
    } catch (error) {
      console.warn("[analytics] localStorage.setItem failed", error);
    }
  }

  function clearConsent() {
    setMemoryConsent(null);
    try {
      localStorage.removeItem(consentKey);
    } catch (error) {
      console.warn("[analytics] localStorage.removeItem failed", error);
    }
  }

  function loadClarity() {
    if (window.__clarityLoaded) {
      return;
    }

    try {
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        t.onerror = function () {
          console.warn("[analytics] Clarity script failed to load");
        };

        y = l.getElementsByTagName(r)[0] || l.head;
        if (!y || !y.parentNode) {
          throw new Error("No valid script insertion point found");
        }

        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", clarityProjectId);

      window.__clarityLoaded = true;
      console.info("[analytics] Loading Microsoft Clarity");
    } catch (error) {
      console.warn("[analytics] Clarity script injection failed", error);
    }
  }

  function showConsentBox() {
    var box = document.getElementById("analytics-consent");
    if (box) {
      box.style.display = "block";
    }
  }

  function hideConsentBox() {
    var box = document.getElementById("analytics-consent");
    if (box) {
      box.style.display = "none";
    }
  }

  function bindResetLink() {
    var resetLink = document.getElementById("analytics-reset");
    if (!resetLink) {
      return;
    }

    resetLink.addEventListener("click", function (event) {
      event.preventDefault();
      clearConsent();
      showConsentBox();
    });
  }

  function initConsentFlow() {
    var consent = getConsent();

    if (consent === "accepted") {
      loadClarity();
      return;
    }

    if (consent === "declined") {
      return;
    }

    var box = document.getElementById("analytics-consent");
    var acceptBtn = document.getElementById("analytics-accept");
    var declineBtn = document.getElementById("analytics-decline");

    if (!box || !acceptBtn || !declineBtn) {
      return;
    }

    showConsentBox();

    acceptBtn.addEventListener("click", function () {
      setConsent("accepted");
      loadClarity();
      hideConsentBox();
    });

    declineBtn.addEventListener("click", function () {
      setConsent("declined");
      hideConsentBox();
    });
  }

  bindResetLink();
  initConsentFlow();
})();
