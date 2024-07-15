const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 8 });
const URL = require('../models/url');

async function handlegenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'URL is required!' });

    const shortID = uid.rnd();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });

    return res.render("home", {
        id: shortID
    });

    // return res.json({ id: shortID });
    
}

async function handleGetAnalytics(req, res) {
    // console.log("inside handleGetAnalytics");
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId: shortId });

    // console.log(result);
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports = {
    handlegenerateNewShortURL,
    handleGetAnalytics,
};
