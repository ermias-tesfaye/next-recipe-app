import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Heart, Clock, Star } from 'lucide-react';

const colors = [
  'bg-red-50',
  'bg-red-100',
  'bg-orange-50',
  'bg-orange-100',
  'bg-amber-50',
  'bg-amber-100',
  'bg-yellow-50',
  'bg-yellow-100',
  'bg-lime-50',
  'bg-lime-100',
  'bg-green-50',
  'bg-green-100',
  'bg-emerald-50',
  'bg-emerald-100',
  'bg-teal-50',
  'bg-teal-100',
  'bg-cyan-50',
  'bg-cyan-100',
  'bg-sky-50',
  'bg-sky-100',
  'bg-blue-50',
  'bg-blue-100',
  'bg-indigo-50',
  'bg-indigo-100',
  'bg-violet-50',
  'bg-violet-100',
  'bg-purple-50',
  'bg-purple-100',
  'bg-fuchsia-50',
  'bg-fuchsia-100',
  'bg-pink-50',
  'bg-pink-100',
  'bg-rose-50',
  'bg-rose-100',
];


const Items = ({ name, image, cookTimeMinutes, cuisine, rating, mealType }) => {
  const starsArray = Array.from({ length: rating }, (_, index) => index);
  const mealTypeString = mealType.join(', ');
    const getRandomColorClass = () => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

    const randomColorClass = getRandomColorClass();


  return (
    <Card className={`p-7 rounded-3xl ${randomColorClass}`}>
      <CardHeader
        className="h-[150px] rounded-xl relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Badge className="bg-white  flex items-center justify-center p-2 rounded-full absolute right-3 top-3">
          <Heart color="#000" />
        </Badge>

        <div>
          <Badge className="bg-white  flex items-center justify-center p-2 rounded-full absolute text-black gap-2 bottom-3 left-3">
            <Clock color="#000" />{' '}
            <span className="text-base">{cookTimeMinutes} min</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="px-0 mt-4">
        <div className="flex justify-between items-center  gap-2">
          <p className="text-xl font-bold mb-2">{name}</p>
          <div className="flex gap-2 items-center">
            <div className="flex ">
              {' '}
              {starsArray.map((_, index) => (
                <Star key={index} color="#fde047" />
              ))}
            </div>
            <span className="text-lg">{rating}</span>
          </div>
        </div>
        <div>
          <p className="text-slate-700">{cuisine}</p>
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <Badge>{mealTypeString}</Badge>
      </CardFooter>
    </Card>
  );
};
export default Items;
