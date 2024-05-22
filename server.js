import mongoose from 'mongoose';

import app from './app.js';

const DB_HOST =
  'mongodb+srv://tarik2454:Mongodb-voina2015@cluster0.nbrpxs5.mongodb.net/backend-test-task-Registration-App?retryWrites=true&w=majority&appName=Cluster0';

const PORT = 3000;

mongoose
  .connect(DB_HOST, {
    writeConcern: { w: 'majority' },
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        'Database connection successful. Server running. Use our API on port: 3000'
      );
    });
  })
  .catch(error => {
    console.warn(error.message);
    process.exit(1);
  });
