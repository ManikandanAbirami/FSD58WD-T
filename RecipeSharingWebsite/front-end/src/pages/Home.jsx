import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { List, Card, Image } from 'antd'

function Home() {
    // State to get the latest recipes from DB and maintain
    const [recipes, setRecipes] = useState([]);

    // This will get the recipes values from DB through api on every page load completion
    useEffect(() => {
        axios.get('http://localhost:3000/apiRecipe/recipes')
            .then(response => setRecipes(response.data))
            .catch(error => console.error('Error fetching recipes:', error))
    }, []);
    return (
        <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={recipes}
            renderItem={recipe => (
                <List.Item>
                    <Card title={recipe.title}>
                        <Image
                            width='100%'
                            src={recipe.images.length > 0 ? recipe.images[0] : 'https://via.placeholder.com/150'}
                            alt={recipe.title}
                            style={{ marginBottom: '1rem' }}
                        />
                        {recipe.description}
                    </Card>
                </List.Item>
            )}
        >

        </List>
    )
}

export default Home