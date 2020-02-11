const sanityClient = require('@sanity/client')({
  projectId: 'd9oybh7m',
  dataset: 'production',
  token: '',
  useCdn: true,
});
exports.sanityClient = sanityClient;
