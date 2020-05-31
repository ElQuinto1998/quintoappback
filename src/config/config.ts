export default {
    DB: {
        URL: process.env.MONGODB_URL || 'mongodb://localhost/prueba',
        USER: process.env.MONGODB_USER || '',
        PASSWORD: process.env.MONGODB_PASSWORD || ''
    }
}
