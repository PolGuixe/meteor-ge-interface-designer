Package.describe({
  name: 'polguixe:meteor-ge-interface-designer',
  version: '4.4.3',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrapper for FIWARE GE Interface Designer',
  // URL to the Git repository containing the source code for this package.
  //git: 'https://github.com/PolGuixe/meteor-ge-interface-designer',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

//Dependencies
api.use('polguixe:meteor-xml3d@5.0.3');
api.use('polguixe:meteor-ge-2dui@4.0.0');
api.use('pfafman:filesaver@0.2.0');
api.addFiles([
  // "dependencies/xml3d.tools.js",
  "dependencies/jquery-ui.js",
  "dependencies/jquery.fancytree-all.min.js",
  "dependencies/jquery.ui-contextmenu.min.js"
],'client');

//Main Library
  api.addFiles('lib/InterfaceDesigner-main.js','client');
});
