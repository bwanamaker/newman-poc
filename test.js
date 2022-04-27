const newman = require("newman");

const apiTest = () =>
  newman.run(
    {
      collection: "https://www.getpostman.com/collections/0c39bb240ee75f37e433",
      reporters: "cli",
    },
    (err) => {
      if (err) {
        throw err;
      }
      console.log("Collection run complete! 🎉");
      return;
    }
  );

apiTest();
