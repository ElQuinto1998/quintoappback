import server from './server';
import './database/mongo';

server.listen(server.get('port'), () => {
    console.log(`Server is running on port ${server.get('port')}`);
});
