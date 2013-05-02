Package.describe({
    summary: "Javascript State Machine packaged for meteor"
});

Package.on_use(function (api) {
    api.add_files('lib/javascript-state-machine/state-machine.js', ['client', 'server']);
});
