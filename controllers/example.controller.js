module.exports.example = (req, res) => {
    res.status(200).json({ code: 200, status: "ok", message: "This route works, yay !" })
}