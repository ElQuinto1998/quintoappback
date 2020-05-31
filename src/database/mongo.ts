import mongoose, {ConnectionOptions} from 'mongoose';

import config from '../config/config';

const CONFIG_DB: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

mongoose.connect(config.DB.URL, CONFIG_DB);

const conection = mongoose.connection;

conection.once('open', () => {
    console.log('Db is connected');
});

conection.on('error', (error) => {
    console.log(error);
    process.exit(0);
});

