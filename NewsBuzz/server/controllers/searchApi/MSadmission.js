const MSad_n = require("../../models/MSadmission");
// const bodyparser = require("body-parser");

exports.Search_MSadmission_news = async (req, res) => {
  try {
    const search = req.body.searchData;
    console.log(search);
    await MSad_n.find(
      { discription: { $regex: new RegExp(".*" + search + ".*", "i") } },
      function(err, doc) {
        //I HAVE NO IDEA WHAT TO DO HERE??
        if (err) throw err;
        if (doc.length > 0) {
          console.log("data is fetching");
          console.log(doc);
          return res.json(doc);
        } else if (doc == null) {
          console.log("Not found");
          // return res.json(null);
          // return res.json({ tilte: "not found" }); // db.close();
        }
      }
    );
  } catch (error) {
    res.status(500);
  }

  return res.json(null);
};

// exports.getscholar = (req, res) => {};
