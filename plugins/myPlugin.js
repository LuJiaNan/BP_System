class MyPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.done.tap("testDone", () => {
      console.log(compiler.hooks); // done,make,run,beforeRun等等
      console.log("Done");
    });
    compiler.hooks.make.tap("testMake", () => {
      console.log(this.options.author)
      console.log("make");
    });
    compiler.hooks.beforeRun.tap("testBeforeRun", () => {
      console.log("beforeRun");
    });
    compiler.hooks.run.tap("testRun", () => {
      console.log("run");
    });
  }
}

// MyPlugin.prototype.apply = compiler => {
//   compiler.hooks.make.tap("testMake", () => {
//     console.log("make");
//   });
// };

module.exports = MyPlugin;
