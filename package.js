Package.describe({
  summary: "glossy repackaged for Meteor"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];

  api.add_files('lib/glossy/lib/glossy/parse.js', where);
/*
  api.add_files('lib/glossy/lib/glossy/produce.js', where);

  api.add_files('lib/glossy/perf/parse-all.js', where);
  api.add_files('lib/glossy/perf/parse-bsd.js', where);
  api.add_files('lib/glossy/perf/parse-msg.js', where);
  api.add_files('lib/glossy/perf/parse-sdmsg.js', where);
  api.add_files('lib/glossy/perf/parse-ssigncert.js', where);
  api.add_files('lib/glossy/perf/parse-sd.js', where);
  api.add_files('lib/glossy/perf/parse-ssign.js', where);
*/
});
