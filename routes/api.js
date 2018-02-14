const router = require("express").Router();

router.route("/status1").get((req, res) => {
  const response = {
    title: "Preparing to Upload",
    percentage: 10,
    status: "Preparing...",
    log: [
      {
        id: "ID-1",
        line: "Retrieving files for upload.",
        updated_at: "02/15/2018"
      }
    ]
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
        id: "ID-1",
        line: "Retrieving files for upload.",
        updated_at: "02/15/2018"
      },
      {
        id: "ID-2",
        line: "Uploading first data set....",
        updated_at: "02/15/2018"
      }
    ]
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
        id: "ID-1",
        line: "Retrieving files for upload.",
        updated_at: "02/15/2018"
      },
      {
        id: "ID-2",
        line: "Uploading first data set...",
        updated_at: "02/15/2018"
      },
      {
        id: "ID-3",
        line: "Uploading second data set...",
        updated_at: "02/06/2018"
      }
    ]
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
        id: "ID-1",
        line: "Retrieving files for upload.",
        updated_at: "02/15/2018"
      },
      {
        id: "ID-2",
        line: "Uploading first data set...",
        updated_at: "02/15/2018"
      },
      {
        id: "ID-3",
        line: "Uploading second data set...",
        updated_at: "02/15/2018"
      },
      {
        id: "ID-4",
        line: "Uploading third data set...",
        updated_at: "02/15/2018"
      }
    ]
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
        id: "ID-1",
        line: "Retrieving files for upload.",
        updated_at: "02/15/2018"
      },
      {
        id: "ID-2",
        line: "Uploading first data set...",
        updated_at: "02/15/2018"
      },
      {
        id: "ID-3",
        line: "Uploading second data set...",
        updated_at: "02/15/2018"
      },
      {
        id: "ID-4",
        line: "Uploading third data set...",
        updated_at: "02/15/2018"
      },
      {
        id: "ID-5",
        line: "Finished Uploading...",
        updated_at: "02/15/2018"
      }
    ]
  };
  res.json(response);
});

router.route("/status6").get((req, res) => {
  const response = {
    title: "When Log Values are 'null'",
    percentage: 25,
    status: "Log Unavailable...",
    log: [
      {
        id: null,
        line: null,
        updated_at: null
      }
    ]
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
    ]
  };

  res.json(response);
});

router.route("/status8").get((req, res) => {
  const response = {
    title: null,
    percentage: null,
    status: null,
    log: []
  };

  res.json(response);
});

module.exports = router;
