'use client';
import Items from '@/components/Items';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import useSWR from 'swr';
import Nav from '@/components/Nav';
import { useEffect, useState } from 'react';
import { Menu, UtensilsCrossed, X } from 'lucide-react'; // Import X icon for close button

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Recipes = () => {
  const [search, setSearch] = useState('');
  const [food, setFood] = useState([]);
  const [show, setShow] = useState(false);

  const { data, error, isLoading } = useSWR(
    'https://dummyjson.com/recipes',
    fetcher
  );

  useEffect(() => {
    if (data) {
      setFood(data.recipes);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      fetch(`https://dummyjson.com/recipes/search?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setFood(data.recipes);
          setSearch('');
        })
        .catch((err) => console.error('Error fetching search results:', err));
    } else {
      setFood(data.recipes); // Reset to all recipes if search is empty
    }
  };

  if (isLoading) return (
    <div className="w-full min-h-screen flex items-center justify-center text-3xl font-bold ">
      {' '}
      <p>Loading...</p>
    </div>
  );

  return (
    <main className="flex max-w-[100rem] mx-auto pt-8 relative">
      {/* Sidebar for tablet and larger screens */}
      <div className="hidden md:flex w-80 border-r border-slate-300 min-h-screen md:mt-20">
        <Nav />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        {show && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="flex justify-end p-4">
              <X size={32} onClick={() => setShow(false)} />
            </div>
            <Nav />
          </div>
        )}
      </div>

      <section className="md:mt-20 w-full px-4">
        <div className="flex justify-between items-center mb-16">
          <div className="flex gap-4 items-center">
            <UtensilsCrossed size={36} />
            <span className="text-[32px]">Recipes</span>
          </div>
          <Menu size={32} onClick={() => setShow(true)} className="md:hidden" />
        </div>
        <form
          className="flex w-full max-w-3xl items-center space-x-2 mb-16"
          onSubmit={handleSubmit}
        >
          <Input
            type="search"
            placeholder="What do you want to cook today?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit">Find</Button>
        </form>

        <div className="mb-8">
          <h1 className="text-4xl mb-2 font-bold">Recipes</h1>
          <p>Cooked by people that have the best experience in cooking</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {food.length > 0 ? (
            food.map((recipe) => (
              <Link href={`recipes/${recipe.id}`} key={recipe.id}>
                <Items {...recipe} />
              </Link>
            ))
          ) : (
            <div className='text-3xl font-bold '> <p>Food not found...</p></div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Recipes;
