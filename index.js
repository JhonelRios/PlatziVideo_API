const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth');
const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');

const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler')

// CORS y helmet
app.use(cors());
app.use(helmet());

// Body Parser
app.use(express.json());

// Routes
authApi(app);
moviesApi(app);
userMoviesApi(app);

app.get('/', (req, res) => {
    res.status(200).send('API para Platzivideos, el proyecto de la Escuela de JavaScript de Platzi');
})

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`Escuchando en http://localhost:${config.port}`);
});
