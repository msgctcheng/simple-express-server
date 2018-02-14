const router = require("express").Router();
router.route("/status").get((req, res) => {
  const response1 = {
    title: "Uploading Students",
    percentage: 30,
    status: "Loading...",
    log: [
      {
        id: "Vostok-1",
        line: "First manned space mission!",
        updated_at: "01/12/1961"
      },
      {
        id: "Apollo-11",
        line: "First humans on the moon!",
        updated_at: "07/20/1969"
      },
      {
        id: "Falcon Heavy",
        line: "First returning rocket boosters!",
        updated_at: "02/06/2018"
      }
    ]
  };

  res.json(response1);
});

router.route("/status2").get((req, res) => {
  const response2 = {
    title: "Uploading More Students",
    percentage: 90,
    status: "Loading More...",
    log: [
      {
        id: "Vostok-1",
        line: "First manned space mission!",
        updated_at: "01/12/1961"
      },
      {
        id: "Apollo-11",
        line: "First humans on the moon!",
        updated_at: "07/20/1969"
      },
      {
        id: "Falcon Heavy",
        line: "First returning rocket boosters!",
        updated_at: "02/06/2018"
      },
      {
        id: "Some Rocket Name",
        line: "Some significant space event!",
        updated_at: "02/13/2018"
      }
    ]
  };
  res.json(response2);
});
module.exports = router;
