const { expect, assert } = require('chai');
const puppeteer = require('puppeteer');
const example = require('./index');

describe('Puppeteer', () => {
  before(async function () {
    this.browser = await puppeteer.launch({ headless: false });
    this.page = await this.browser.newPage();
  });

  after(async function () {
    await this.browser.close();
    process.exit(0);
  });

  describe('Startup', () => {
    it('should start', async function () {
      assert.equal('object', typeof this.browser);
    });
  });

  describe('In Browser', () => {
    it('url should be blank', async function () {
      const url = await example.getLocation(this.page);
      expect(url).to.include('about:blank');
    });

    it('url should have example.com', async function () {
      await this.page.goto('http://example.com');
      const url = await example.getLocation(this.page);
      expect(url).to.include('example.com');
    });
  });
});
