import express from 'express';
import basicAuth from 'express-basic-auth';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;
const stagingHost = process.env.STAGING_HOST;

// Basic authentication middleware
app.use((req, res, next) => {
  // disable any cache for index.html
  if (req.path === '' || req.path === '/' || req.path === '/index.html') {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
  }

  // redirect www to @
  const host = req.headers.host;
  if (host.match(/^www\..*/i)) {
    const rootHost = host.replace('www.', '');
    return res.redirect(301, `${req.protocol}://${rootHost}${req.originalUrl}`);
  }

  if (host === stagingHost) {
    return basicAuth({
      users: { developer: process.env.STAGING_BASIC_AUTH_PASSWORD },
      challenge: true
    })(req, res, next);
  }
  next();
});

// Serve the Svelte app
app.use(express.static(path.join(__dirname, '/dist')));

// Listen to port
app.listen(port, () => {
  console.log(`
Server is running on port ${port}
  `);
});
