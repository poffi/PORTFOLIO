if (!CSS.supports("animation-timeline: view()")) {
    console.log("BACK FILL!!");
    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
      },
      false
    );
  }
  