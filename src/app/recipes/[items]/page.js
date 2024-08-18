'use client';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const SingleRecipes = ({ params }) => {
  const [info, setInfo] = useState(null); // Initialize with null

  async function getRecipe() {
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/${params.items}`
      );
      const data = await response.json();
      setInfo(data); 
    } catch (error) {
      console.error('Failed to fetch recipe:', error);
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  if (!info) {
    return <div className='w-full min-h-screen flex items-center justify-center text-3xl font-bold '> <p>Loading...</p></div>; // Display loading state while fetching
  }

  return (
    <Card className="bg-white p-6 rounded-3xl shadow-lg max-w-5xl mx-auto my-4">
      <CardHeader className="relative h-[300px] rounded-xl">
        <img
          src={info.image}
          alt={info.name}
          className="w-full h-full object-cover rounded-xl"
        />
        <Badge className="bg-white text-black p-2 rounded-full absolute top-3 right-3">
          {info.difficulty}
        </Badge>
      </CardHeader>
      <CardContent className="mt-4">
        <h2 className="text-3xl font-bold mb-2">{info.name}</h2>
        <p className="text-lg mb-4">Cuisine: {info.cuisine}</p>
        <p className="text-lg mb-4">
          Prep Time: {info.prepTimeMinutes} minutes
        </p>
        <p className="text-lg mb-4">
          Cook Time: {info.cookTimeMinutes} minutes
        </p>
        <p className="text-lg mb-4">Servings: {info.servings}</p>
        <p className="text-lg mb-4">
          Calories per Serving: {info.caloriesPerServing} gm
        </p>

        <section className='flex gap-4 items-start'>
          <div className="mb-6 grow">
            <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc pl-5">
              {info.ingredients &&
                info.ingredients.map((ingredient, index) => (
                  <li key={index} className="mb-1">
                    {ingredient}
                  </li>
                ))}
            </ul>
          </div>
          <div className=''>
            <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
            <ol className="list-decimal pl-5">
              {info.instructions &&
                info.instructions.map((instruction, index) => (
                  <li key={index} className="mb-1">
                    {instruction}
                  </li>
                ))}
            </ol>
          </div>
        </section>
      </CardContent>
      <CardFooter className="mt-6 flex justify-between">
        <Link href={'/recipes'}>
          <Button>Back</Button>
        </Link>
        <Button>Add to Favorites</Button>
      </CardFooter>
    </Card>
  );
};

export default SingleRecipes;
