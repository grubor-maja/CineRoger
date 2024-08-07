const mongoose = require('mongoose');
const Movie = require('./models/movie');

// Povezivanje na MongoDB
mongoose.connect('mongodb://localhost/movies', )
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));



async function seedMovies() {
    try {
        await Movie.deleteMany({});
        console.log('Existing movies deleted.');
        const movies = [
            {
                id: 1,
                title: 'The Shawshank Redemption',
                rating: 5,
                image: 'https://www.hollywoodreporter.com/wp-content/uploads/2018/03/the_shawshank_redemption_-_h_-_1994.jpg?w=1296&h=730&crop=1',
                review: 'The Shawshank Redemption is a powerful and uplifting story of hope and resilience. The performances by Tim Robbins and Morgan Freeman are exceptional, bringing to life the deep friendship that forms between two prisoners over the years. The film&apos;s screenplay is masterfully written, highlighting the human spirit&apos;s capacity for endurance and redemption.\n\nThe direction by Frank Darabont is flawless, capturing the harsh realities of prison life while also portraying moments of beauty and humanity. The Shawshank Redemption is a timeless classic that continues to resonate with audiences around the world.'
            },
            {
                id: 2,
                title: 'The Godfather',
                rating: 5,
                image: 'https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg',
                review: 'The Godfather is a cinematic masterpiece that delves deep into the world of organized crime. Marlon Brando&apos;s portrayal of Don Vito Corleone is iconic, and the film&apos;s exploration of family, power, and loyalty is both compelling and thought-provoking. The Godfather&apos;s script is tightly woven, offering a perfect blend of drama, action, and suspense.\n\nThe direction by Francis Ford Coppola is superb, creating a rich and immersive atmosphere that draws viewers into the world of the Corleone family. The Godfather remains one of the greatest films ever made, a benchmark in the history of cinema.'
            },
            {
                id: 3,
                title: 'The Dark Knight',
                rating: 5,
                image: 'https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2008/07/15/thedarkknight460.jpg?width=465&dpr=1&s=none',
                review: 'The Dark Knight is a thrilling and intense superhero film that redefines the genre. Heath Ledger&apos;s performance as the Joker is nothing short of legendary, bringing a chaotic and menacing energy to the screen. The film&apos;s complex narrative and moral dilemmas set it apart from other superhero movies, making it a standout in the genre.\n\nChristopher Nolan&apos;s direction is masterful, balancing action, drama, and character development with precision. The Dark Knight is a film that challenges viewers and leaves a lasting impact, solidifying its place as a modern classic.'
            },
            {
                id: 4,
                title: 'Pulp Fiction',
                rating: 4,
                image: 'https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_.jpg',
                review: 'Pulp Fiction is a groundbreaking film that weaves multiple storylines into a cohesive and engaging narrative. Quentin Tarantino&apos;s signature style is on full display, with sharp dialogue, memorable characters, and an eclectic soundtrack. The performances by John Travolta, Samuel L. Jackson, and Uma Thurman are unforgettable, each bringing their unique flair to the film.\n\nThe nonlinear storytelling in Pulp Fiction keeps viewers on their toes, making for a captivating and unpredictable experience. It&apos;s a film that pushes the boundaries of traditional storytelling, earning its place as a cult classic.'
            },
            {
                id: 5,
                title: 'Inception',
                rating: 5,
                image: 'https://m.media-amazon.com/images/M/MV5BMTQ1ZmIzOTAtNDcwZi00NDVkLWE4NWItYWNhZGY1MmVlZGU0XkEyXkFqcGdeQWRvb2xpbmhk._V1_QL75_UY281_CR0,0,500,281_.jpg',
                review: 'Inception is a mind-bending thriller that explores the concept of dreams within dreams. Leonardo DiCaprio leads a stellar cast in this visually stunning and intellectually stimulating film. The plot is intricate and requires full attention, but the payoff is well worth it, offering a unique cinematic experience.\n\nChristopher Nolan&apos;s vision is brought to life with impressive special effects and a haunting score by Hans Zimmer. Inception is a film that invites multiple viewings, each time revealing new layers and details. It&apos;s a true masterpiece of modern cinema.'
            },
            {
                id: 6,
                title: 'Fight Club',
                rating: 4,
                image: 'https://m.media-amazon.com/images/M/MV5BMjk3NTYyMzc4Nl5BMl5BanBnXkFtZTcwODU3ODMzMw@@._V1_.jpg',
                review: 'Fight Club is a provocative and thought-provoking film that delves into themes of identity, consumerism, and rebellion. Edward Norton and Brad Pitt deliver powerful performances, bringing depth and complexity to their characters. The film’s dark humor and gritty aesthetic add to its unique and memorable style.\n\nDavid Fincher&apos;s direction is bold and unflinching, challenging viewers to question societal norms and the nature of reality. Fight Club is a film that leaves a lasting impression, sparking conversation and debate long after the credits roll.'
            },
            {
                id: 7,
                title: 'Forrest Gump',
                rating: 5,
                image: 'https://m.media-amazon.com/images/M/MV5BZjkwYzk2ZGUtMDFkMy00MjM3LTgwNTktZmYwMDBmMjczMmJjXkEyXkFqcGdeQWpnYW1i._V1_.jpg',
                review: 'Forrest Gump is a heartwarming and inspirational film that follows the life of a simple man with extraordinary experiences. Tom Hanks’ portrayal of Forrest is heartfelt and genuine, capturing the character’s innocence and unwavering optimism. The film’s narrative spans several decades, intertwining historical events with Forrest’s personal journey.\n\nRobert Zemeckis’ direction is masterful, balancing humor, drama, and emotion with ease. Forrest Gump is a timeless classic that continues to resonate with audiences, reminding us of the power of kindness and perseverance.'
            },
            {
                id: 8,
                title: 'The Matrix',
                rating: 5,
                image: 'https://townsquare.media/site/442/files/2018/05/the-matrix-reloaded.jpg',
                review: 'The Matrix is a revolutionary film that redefined the science fiction genre. Keanu Reeves stars as Neo, a hacker who discovers the true nature of reality and his role in the fight against oppressive machines. The film&apos;s innovative special effects, particularly the “bullet time” sequences, set a new standard for action scenes in cinema.\n\nThe Wachowskis’ direction is visionary, blending philosophical concepts with cutting-edge technology. The Matrix is a thought-provoking and visually stunning film that continues to influence and inspire filmmakers and audiences alike.'
            },
            {
                id: 9,
                title: 'Gladiator',
                rating: 5,
                image: 'https://m.media-amazon.com/images/M/MV5BMjIzMjM3NjUzMV5BMl5BanBnXkFtZTcwNjQ0NjcxNA@@._V1_.jpg',
                review: 'Gladiator is an epic historical drama that showcases the power of resilience and honor. Russell Crowe delivers a commanding performance as Maximus, a betrayed general who rises as a gladiator to seek justice. The film&apos;s grand scale and intense battle scenes are breathtaking, immersing viewers in the brutal world of ancient Rome.\n\nRidley Scott’s direction is masterful, capturing both the grandeur and the brutality of the era. Gladiator is a powerful and emotional film that leaves a lasting impact, earning its place as a modern classic.'
            },
            {
                id: 10,
                title: 'The Lord of the Rings: The Fellowship of the Ring',
                rating: 5,
                image: 'https://cdn.britannica.com/34/201734-050-2B1ECD3E/Dominic-Monaghan-Merry-scene-Elijah-Wood-Frodo.jpg',
                review: 'The Lord of the Rings: The Fellowship of the Ring is a breathtaking fantasy epic that brings J.R.R. Tolkien&apos;s world to life. The ensemble cast, led by Elijah Wood, delivers stellar performances, capturing the essence of their characters and the spirit of the journey. The film’s stunning visuals and expansive world-building are awe-inspiring.\n\nPeter Jackson’s direction is visionary, creating a rich and immersive experience that transports viewers to Middle-earth. The Fellowship of the Ring is a timeless adventure that continues to captivate audiences, setting the stage for an unforgettable trilogy.'
            }
        ];

        await Movie.insertMany(movies);
        console.log('New movies added.');

    } catch (error) {
        console.log(err);
    } finally {
        mongoose.connection.close();
    }
}

seedMovies();