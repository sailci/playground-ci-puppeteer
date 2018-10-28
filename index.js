module.exports = function (page) {
  return {
    async navigate(url) {
      const response = await page.goto(url);
      return response.ok();
    },
    async getLocation() {
      return page.evaluate(() => window.location.href);
    },
    async getText(selector) {
      return page.$eval(selector, e => e.innerText);
    },
  };
};
