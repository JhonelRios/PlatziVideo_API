const MongoLib = require('../libs/mongo');

class UserMoviesService {
    constructor() {
        this.collection = 'user-movies';
        this.mongoDB = new MongoLib();
    }

    async getUserMovies({ userId }) {
        const query = userId && { userId };
        const userMovies = await this.mongoDB.getAll(this.collection, query);

        return userMovies || [];
    }

    async createUserMovie({ userMovie }) {
        const createdUserMovieId = await this.mongoDB.create(this.collection, userMovie);

        return createdUserMovieId;
    }

    async deleteUserMovie({ userMovieId }) {
        const deletedUserId = await this.mongoDB.delete(this.collection, userMovieId);

        return deletedUserId;
    }
}

module.exports = UserMoviesService;