const mongoose = require('mongoose');
const { User } = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const userData = [
    {
        username: 'lernantino',
        email: 'lernantino@gmail.com',
        
    },
    {
        username: 'Trenta',
        email: 'trenta@gmail.com',
       
    },
    {
        username: 'Pacos',
        email: 'Pacos@gmail.com',
      
    },
    {
        username: 'Slurpee',
        email: 'slurpee@gmail.com',
        
    },
    {
        username: 'Rasberry',
        email: 'rasberry@gmail.com',
        
    },
    {
        username: 'Driving',
        email: 'driving@gmail.com',
        
    },
    {
        username: 'HappyHour',
        email: 'happyhour2@gmail.com',
       
    },
    {
        username: 'Jpurmy',
        email: 'Journey@gmail.com',
      
    }
];

const seedDatabase = async () => {
    try {
        await User.deleteMany({});
        await User.create(userData);

        console.log('Seeding complete!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDatabase();