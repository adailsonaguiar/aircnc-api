module.exports = {
  async store(req, res) {
    console.log(req.body, req.file)
    return res.json({ message: 'ok' });
  }
};
