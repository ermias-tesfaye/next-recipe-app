import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { House, Compass, Users, Heart, Settings } from 'lucide-react';
import Link from 'next/link';
const Nav = () => {
  return (
    <Command className="border-none ">
      <CommandList>
        <CommandGroup className="flex flex-col">
          <Link href={'/'}>
            <CommandItem className="flex gap-4 cursor-pointer mb-4">
              <House />
              Home
            </CommandItem>
          </Link>
          <CommandItem className="flex gap-2 mb-4">
            <Compass />
            Explore
          </CommandItem>
          <CommandItem className="flex gap-2 mb-4">
            <Users />
            Community
          </CommandItem>
          <CommandItem className="flex gap-2 mb-4">
            <Heart />
            Favorites
          </CommandItem>
          <CommandItem className="flex gap-2">
            <Settings />
            Settings
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
export default Nav;
