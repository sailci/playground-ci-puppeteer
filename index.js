module.exports = {
  async getLocation(page) {
    return page.evaluate(() => window.location.href);
  },
};
