const { expect, assert } = require('chai');
const puppeteer = require('puppeteer');
const example = require('./index');

describe('Puppeteer', () => {
  before(async function () {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
    this.example = example(this.page);
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
    describe('Empty Tab', () => {
      it('url should be blank', async function () {
        const url = await this.example.getLocation();
        expect(url).to.include('about:blank');
      });
    });
    describe('Example.com', async () => {
      it('navigate: should navigate example.com', async function () {
        const ok = await this.example.navigate('http://example.com');
        expect(ok).to.true;
      });
      it('getLocation: url should have example.com', async function () {
        const url = await this.example.getLocation(this.page);
        expect(url).to.include('example.com');
      });
      it('getText: body should have required elements', async function () {
        const header = await this.example.getText('h1');
        expect(header).to.include('Example');
      });
    });
  });
});
