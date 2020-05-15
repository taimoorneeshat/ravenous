const apiKey = 'p-vnsSkWD3c_oNzSopGI0G_VV028pfZqIM5YuabcGmZMRe_97ZdrimtZgwSBzjtR9SkrzPXPam9nvO0nYB2e8rKQxV9yMoSoK2tgqWGrrZmI2PsVpd6fA1-p-G--XnYx';

const Yelp = {
    search(term, location, sortBy) {
        const endpoint = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        return fetch('https://cors-anywhere.herokuapp.com/' + endpoint, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError =>{
            console.log(networkError);
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(b => { return {
                        id: b.id,
                        imageSrc: b.image_url,
                        name: b.name,
                        address: b.location.address1,
                        city: b.location.city,
                        state: b.location.state,
                        zipCode: b.location.zip_code,
                        category: b.categories[0].title,
                        rating: b.rating,
                        reviewCount: b.review_count
                    }
                })
            }
        });
    }
};

export default Yelp;