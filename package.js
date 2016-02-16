Package.describe({
  name: "natestrauser:statemachine",
  summary: "Javascript State Machine packaged for meteor",
  version: "2.3.6",
  git: "https://github.com/nate-strauser/meteor-statemachine.git"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files(
    [
      'before_export.js',
      'lib/javascript-state-machine/state-machine.js',
      'after_export.js'
    ], [
      'client',
      'server'
    ]);
});
