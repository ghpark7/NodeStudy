setInterval(() => {
    console.log('start');
    try {
        throw new Error('Error!');
    } catch (error) {
        console.error(error);
    }
}, 1000);