function getMostPopularPlaces(...places) {
    const counts = {};

    places.forEach(place => {
        counts[place] = (counts[place] || 0) + 1;
    });
    const sortedPlaces = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

    
    return `${sortedPlaces[0]} ${sortedPlaces[1]}`;
}
