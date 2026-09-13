(() => {
  const out = document.getElementById("console");
  const status = document.getElementById("status");
  const log = (msg) => {
    const line = `[${new Date().toLocaleTimeString()}] ${msg}`;
    out.textContent += (out.textContent ? "\n" : "") + line;
    out.scrollTop = out.scrollHeight;
  };

  const ua = navigator.userAgent;
  document.getElementById("browser").textContent =
    /PlayStation 4/i.test(ua) ? "PlayStation 4 WebKit" : "Desktop/mobile browser";

  log("Page loaded.");
  log("Static WebKit research host initialized.");
  log("Firmware profile: 13.02");
  log("No kernel payload is loaded.");

  document.getElementById("testBtn").addEventListener("click", () => {
    status.textContent = "TESTING";
    status.className = "status";
    try {
      const test = {
        bigint: typeof BigInt === "function",
        wasm: typeof WebAssembly !== "undefined",
        fetch: typeof fetch === "function",
        typedArrays: typeof Uint8Array === "function"
      };
      Object.entries(test).forEach(([k,v]) => log(`${k}: ${v ? "available" : "unavailable"}`));
      log("Web runtime test completed.");
      status.textContent = "READY";
      status.className = "status ok";
    } catch (e) {
      log(`Test error: ${e.message}`);
      status.textContent = "ERROR";
    }
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    out.textContent = "";
    status.textContent = "READY";
    status.className = "status";
    log("Console cleared.");
  });
})();
