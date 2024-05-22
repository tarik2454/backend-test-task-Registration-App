import mongoose from 'mongoose';

import app from './app.js';

mongoose
  .connect(process.env.DB_HOST, {
    writeConcern: { w: 'majority' },
  })
  .then(() => {
    app.listen(3000, () => {
      console.log(
        'Database connection successful. Server running. Use our API on port: 3000'
      );
    });
  })
  .catch(error => {
    console.warn(error.message);
    process.exit(1);
  });
