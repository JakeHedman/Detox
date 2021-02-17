describe('webExpect', () => {
  let webExpect;
  let expect;

  let mockExecutor;
  let emitter;
  let deviceDriver;
  beforeEach(() => {
    jest.mock('tempfile');
    jest.mock('fs-extra');

    mockExecutor = new MockExecutor();

    const Emitter = jest.genMockFromModule('../utils/AsyncEmitter');
    emitter = new Emitter();

    deviceDriver = {
      typeText: jest.fn(),
    };

    const AndroidExpect = require('./AndroidExpect');
    expect = new AndroidExpect({
      invocationManager: mockExecutor,
      emitter,
    });

    const AndroidWebExpect = require('./AndroidWebExpect');
    webExpect = new AndroidWebExpect({
      invocationManager: mockExecutor,
      deviceDriver,
      emitter,
    });
  });

  describe('General', () => {
    it('should return undefined', async () => {
      mockExecutor.executeResult = Promise.resolve(undefined);
      await webExpect.getWebView(expect.by.id('webview_id')).element(webExpect.by.id('any')).tap();
    });
  })

  describe('getWebView', () => {

    it('default', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).tap();
    });

    it('with webview matcher', async () => {
      await webExpect.getWebView(expect.by.id('webview_id')).element(webExpect.by.id('id')).tap();
    });
  });

  describe('WebElement Actions', () => {
    it('tap', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).tap();
      await webExpect.getWebView().element(webExpect.by.className('className')).tap();
      await webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector')).tap();
      await webExpect.getWebView().element(webExpect.by.name('name')).tap();
      await webExpect.getWebView().element(webExpect.by.xpath('xpath')).tap();
      await webExpect.getWebView().element(webExpect.by.linkText('linkText')).tap();
      await webExpect.getWebView().element(webExpect.by.partialLinkText('partialLinkText')).tap();
      await webExpect.getWebView().element(webExpect.by.tag('tag')).tap();
    });

    it('typeText', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).typeText('text');
      await webExpect.getWebView().element(webExpect.by.className('className')).typeText('text');
      await webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector')).typeText('text');
      await webExpect.getWebView().element(webExpect.by.name('name')).typeText('text');
      await webExpect.getWebView().element(webExpect.by.xpath('xpath')).typeText('text');
      await webExpect.getWebView().element(webExpect.by.linkText('linkText')).typeText('text');
      await webExpect.getWebView().element(webExpect.by.partialLinkText('partialLinkText')).typeText('text');
      await webExpect.getWebView().element(webExpect.by.tag('tag')).typeText('text');
    });

    it('typeText with isContentEditable=false', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).typeText('text', false);
      global.expect(deviceDriver.typeText).not.toHaveBeenCalled();
    });

    it('typeText with isContentEditable=true', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).typeText('text', true);
      global.expect(deviceDriver.typeText).toHaveBeenCalled();
    });

    it('typeText default isContentEditable is false', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).typeText('text');
      global.expect(deviceDriver.typeText).not.toHaveBeenCalled();
    });

    it('replaceText', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).replaceText('text');
      await webExpect.getWebView().element(webExpect.by.className('className')).replaceText('text');
      await webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector')).replaceText('text');
      await webExpect.getWebView().element(webExpect.by.name('name')).replaceText('text');
      await webExpect.getWebView().element(webExpect.by.xpath('xpath')).replaceText('text');
      await webExpect.getWebView().element(webExpect.by.linkText('linkText')).replaceText('text');
      await webExpect.getWebView().element(webExpect.by.partialLinkText('partialLinkText')).replaceText('text');
      await webExpect.getWebView().element(webExpect.by.tag('tag')).replaceText('text');
    });

    it('clearText', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).clearText();
      await webExpect.getWebView().element(webExpect.by.className('className')).clearText();
      await webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector')).clearText();
      await webExpect.getWebView().element(webExpect.by.name('name')).clearText();
      await webExpect.getWebView().element(webExpect.by.xpath('xpath')).clearText();
      await webExpect.getWebView().element(webExpect.by.linkText('linkText')).clearText();
      await webExpect.getWebView().element(webExpect.by.partialLinkText('partialLinkText')).clearText();
      await webExpect.getWebView().element(webExpect.by.tag('tag')).clearText();
    });

    it('scrollToView', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).scrollToView();
      await webExpect.getWebView().element(webExpect.by.className('className')).scrollToView();
      await webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector')).scrollToView();
      await webExpect.getWebView().element(webExpect.by.name('name')).scrollToView();
      await webExpect.getWebView().element(webExpect.by.xpath('xpath')).scrollToView();
      await webExpect.getWebView().element(webExpect.by.linkText('linkText')).scrollToView();
      await webExpect.getWebView().element(webExpect.by.partialLinkText('partialLinkText')).scrollToView();
      await webExpect.getWebView().element(webExpect.by.tag('tag')).scrollToView();
    });

    it('getText', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).getText();
      await webExpect.getWebView().element(webExpect.by.className('className')).getText();
      await webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector')).getText();
      await webExpect.getWebView().element(webExpect.by.name('name')).getText();
      await webExpect.getWebView().element(webExpect.by.xpath('xpath')).getText();
      await webExpect.getWebView().element(webExpect.by.linkText('linkText')).getText();
      await webExpect.getWebView().element(webExpect.by.partialLinkText('partialLinkText')).getText();
      await webExpect.getWebView().element(webExpect.by.tag('tag')).getText();
    });

    it('focus', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).focus();
      await webExpect.getWebView().element(webExpect.by.className('className')).focus();
      await webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector')).focus();
      await webExpect.getWebView().element(webExpect.by.name('name')).focus();
      await webExpect.getWebView().element(webExpect.by.xpath('xpath')).focus();
      await webExpect.getWebView().element(webExpect.by.linkText('linkText')).focus();
      await webExpect.getWebView().element(webExpect.by.partialLinkText('partialLinkText')).focus();
      await webExpect.getWebView().element(webExpect.by.tag('tag')).focus();
    });

    it('selectAllText', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).selectAllText();
      await webExpect.getWebView().element(webExpect.by.className('className')).selectAllText();
      await webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector')).selectAllText();
      await webExpect.getWebView().element(webExpect.by.name('name')).selectAllText();
      await webExpect.getWebView().element(webExpect.by.xpath('xpath')).selectAllText();
      await webExpect.getWebView().element(webExpect.by.linkText('linkText')).selectAllText();
      await webExpect.getWebView().element(webExpect.by.partialLinkText('partialLinkText')).selectAllText();
      await webExpect.getWebView().element(webExpect.by.tag('tag')).selectAllText();
    });

    it('moveCursorToEnd', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).moveCursorToEnd();
      await webExpect.getWebView().element(webExpect.by.className('className')).moveCursorToEnd();
      await webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector')).moveCursorToEnd();
      await webExpect.getWebView().element(webExpect.by.name('name')).moveCursorToEnd();
      await webExpect.getWebView().element(webExpect.by.xpath('xpath')).moveCursorToEnd();
      await webExpect.getWebView().element(webExpect.by.linkText('linkText')).moveCursorToEnd();
      await webExpect.getWebView().element(webExpect.by.partialLinkText('partialLinkText')).moveCursorToEnd();
      await webExpect.getWebView().element(webExpect.by.tag('tag')).moveCursorToEnd();
    });

    it('runScript', async () => {
      const script = 'function foo(el) {}';
      await webExpect.getWebView().element(webExpect.by.id('id')).runScript(script);
      await webExpect.getWebView().element(webExpect.by.className('className')).runScript(script);
      await webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector')).runScript(script);
      await webExpect.getWebView().element(webExpect.by.name('name')).runScript(script);
      await webExpect.getWebView().element(webExpect.by.xpath('xpath')).runScript(script);
      await webExpect.getWebView().element(webExpect.by.linkText('linkText')).runScript(script);
      await webExpect.getWebView().element(webExpect.by.partialLinkText('partialLinkText')).runScript(script);
      await webExpect.getWebView().element(webExpect.by.tag('tag')).runScript(script);
    });

    it('runScriptWithArgs', async () => {
      const script = 'function bar(a,b) {}';
      const argsArr = ['fooA','barB'];
      await webExpect.getWebView().element(webExpect.by.id('id')).runScriptWithArgs(script, argsArr);
      await webExpect.getWebView().element(webExpect.by.className('className')).runScriptWithArgs(script, argsArr);
      await webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector')).runScriptWithArgs(script, argsArr);
      await webExpect.getWebView().element(webExpect.by.name('name')).runScriptWithArgs(script, argsArr);
      await webExpect.getWebView().element(webExpect.by.xpath('xpath')).runScriptWithArgs(script, argsArr);
      await webExpect.getWebView().element(webExpect.by.linkText('linkText')).runScriptWithArgs(script, argsArr);
      await webExpect.getWebView().element(webExpect.by.partialLinkText('partialLinkText')).runScriptWithArgs(script, argsArr);
      await webExpect.getWebView().element(webExpect.by.tag('tag')).runScriptWithArgs(script, argsArr);
    });

    it('getCurrentUrl', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).getCurrentUrl();
      await webExpect.getWebView().element(webExpect.by.className('className')).getCurrentUrl();
      await webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector')).getCurrentUrl();
      await webExpect.getWebView().element(webExpect.by.name('name')).getCurrentUrl();
      await webExpect.getWebView().element(webExpect.by.xpath('xpath')).getCurrentUrl();
      await webExpect.getWebView().element(webExpect.by.linkText('linkText')).getCurrentUrl();
      await webExpect.getWebView().element(webExpect.by.partialLinkText('partialLinkText')).getCurrentUrl();
      await webExpect.getWebView().element(webExpect.by.tag('tag')).getCurrentUrl();
    });

    it('getTitle', async () => {
      await webExpect.getWebView().element(webExpect.by.id('id')).getTitle();
      await webExpect.getWebView().element(webExpect.by.className('className')).getTitle();
      await webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector')).getTitle();
      await webExpect.getWebView().element(webExpect.by.name('name')).getTitle();
      await webExpect.getWebView().element(webExpect.by.xpath('xpath')).getTitle();
      await webExpect.getWebView().element(webExpect.by.linkText('linkText')).getTitle();
      await webExpect.getWebView().element(webExpect.by.partialLinkText('partialLinkText')).getTitle();
      await webExpect.getWebView().element(webExpect.by.tag('tag')).getTitle();
    });

    it('should allow for access to by via element', async () => {
      const webview = await webExpect.getWebView();
      await webview.element(webview.by.id('id')).tap();
    });
  })

  describe('Web Matchers',() => {
      it('by.id', async () => {
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.id('id'))).toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.id('id'))).not.toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.id('id'))).toHaveText('text');
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.id('id'))).not.toHaveText('text');
      });

      it('by.className', async () => {
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.className('className'))).toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.className('className'))).not.toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.className('className'))).toHaveText('text');
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.className('className'))).not.toHaveText('text');
      });

      it('by.cssSelector', async () => {
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector'))).toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector'))).not.toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector'))).toHaveText('text');
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.cssSelector('cssSelector'))).not.toHaveText('text');
      });

      it('by.name', async () => {
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.name('name'))).toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.name('name'))).not.toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.name('name'))).toHaveText('text');
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.name('name'))).not.toHaveText('text');
      });

      it('by.xpath', async () => {
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.xpath('xpath'))).toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.xpath('xpath'))).not.toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.xpath('xpath'))).toHaveText('text');
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.xpath('xpath'))).not.toHaveText('text');
      });

      it('by.linkText', async () => {
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.linkText('link'))).toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.linkText('link'))).not.toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.linkText('link'))).toHaveText('text');
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.linkText('link'))).not.toHaveText('text');
      });

      it('by.partialLinkText', async () => {
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.partialLinkText('lin'))).toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.partialLinkText('lin'))).not.toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.partialLinkText('lin'))).toHaveText('text');
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.partialLinkText('lin'))).not.toHaveText('text');
      });

      it('by.tag', async () => {
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.tag('tag'))).toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.tag('tag'))).not.toExist();
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.tag('tag'))).toHaveText('text');
        await webExpect.expect(webExpect.getWebView().element(webExpect.by.tag('tag'))).not.toHaveText('text');
      });

      it('should allow for access to except via element', async () => {
        const webview = await webExpect.getWebView();
        await webview.expect(webview.element(webview.by.id('id'))).toExist();
      });
  });
});


class MockExecutor {
  constructor() {
    this.executeResult = undefined;
  }

  async execute(invocation) {
    if (typeof invocation === 'function') {
      invocation = invocation();
    }
    expect(invocation.target).toBeDefined();
    expect(invocation.target.type).toBeDefined();
    expect(invocation.target.value).toBeDefined();

    this.recurse(invocation);
    await this.timeout(1);
    return this.executeResult ? {
      result: this.executeResult,
    } : undefined;
  }

  recurse(invocation) {
    for (const key in invocation) {
      if (invocation.hasOwnProperty(key)) {
        if (invocation[key] instanceof Object) {
          this.recurse(invocation[key]);
        }
        if (key === 'target' && invocation[key].type === 'Invocation') {
          const innerValue = invocation.target.value;
          expect(innerValue.target.type).toBeDefined();
          expect(innerValue.target.value).toBeDefined();
        }
      }
    }
  }

  async timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
