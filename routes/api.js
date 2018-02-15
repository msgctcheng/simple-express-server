const router = require("express").Router();

router.route("/status1").get((req, res) => {
  const response = {
    title: "Preparing to Upload",
    percentage: 10,
    status: "Preparing...",
    log: [
      {
        id: "ID-2",
        line: "Retrieving files for upload.",
        updated_at: "02/15/2018"
      }
    ],
    done: false
  };

  res.json(response);
});

router.route("/status2").get((req, res) => {
  const response = {
    title: "Beginning Upload",
    percentage: 33,
    status: "Starting Upload...",
    log: [
      {
        id: "ID-3",
        line: "Uploading first data set....",
        updated_at: "02/15/2018"
      }
    ],
    done: false
  };

  res.json(response);
});

router.route("/status3").get((req, res) => {
  const response = {
    title: "Uploading Data",
    percentage: 66,
    status: "Uploading...",
    log: [
      {
        id: "ID-4",
        line: "Uploading second data set...",
        updated_at: "02/15/2018"
      }
    ],
    done: false
  };

  res.json(response);
});

router.route("/status4").get((req, res) => {
  const response = {
    title: "Uploading Data",
    percentage: 99,
    status: "Loading...",
    log: [
      {
        id: "ID-5",
        line: "Uploading third data set...",
        updated_at: "02/15/2018"
      }
    ],
    done: false
  };

  res.json(response);
});

router.route("/status5").get((req, res) => {
  const response = {
    title: "Uploading Data",
    percentage: 100,
    status: "Uploading Complete!",
    log: [
      {
        id: "ID-6",
        line: "Finished Uploading...",
        updated_at: "02/15/2018"
      }
    ],
    done: true
  };
  res.json(response);
});

router.route("/status6").get((req, res) => {
  const response = {
    title: "When Log Values are 'null'",
    percentage: 5,
    status: "Log Unavailable...",
    log: null,
    done: false
  };

  res.json(response);
});

router.route("/status7").get((req, res) => {
  const response = {
    title: "When Percentage is 'null'",
    percentage: null,
    status: "Loading bar unavailable...",
    log: [
      {
        id: "ID-1",
        line: "Percentage is null, loading bar unavailable.",
        updated_at: "02/15/2018"
      }
    ],
    done: false
  };

  res.json(response);
});

router.route("/status8").get((req, res) => {
  const response = {
    title: "When log is 'null'",
    percentage: 10,
    status: "Log is 'null'...",
    log: null,
    done: false
  };

  res.json(response);
});
router.route("/status9").get((req, res) => {
  const response = {
    title: "When log is 'null'",
    percentage: 60,
    status: "Log is 'null'...",
    log: null,
    done: false
  };

  res.json(response);
});

module.exports = router;
