// components/ThemeSwitcher.tsx
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'; // Assuming you're using Next.js
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component mounts
  }, []);
  
  if (!mounted) return null; // Prevents hydration errors

  return (
    <div>
      {resolvedTheme === 'ocean' ? (
        <FiSun onClick={() => {setTheme('light')
            console.log(resolvedTheme);
        }} size={22} />
      ) : (
        <FiMoon onClick={() => {setTheme('ocean')
            console.log(resolvedTheme);
        }} size={22} />
      )}
    </div>
  );
};

export default ThemeSwitcher;
