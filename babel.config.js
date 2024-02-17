module.exports = {
    plugins: process.env.NODE_ENV === 'production' ? ['transform-remove-console'] : []
}