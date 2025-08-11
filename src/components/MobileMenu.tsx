import React from 'react';
import { Globe, Sun, Moon, X } from 'lucide-react';
import type { Lang } from '../i18n/translations';

export type NavItems = Record<string, string>;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItems;
  lang: Lang;
  isDark: boolean;
  onLangToggle: () => void;
  onThemeToggle: () => void;
}

const MobileMenu = ({ isOpen, onClose, navItems, lang, isDark, onLangToggle, onThemeToggle }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl">
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <span className="font-bold text-lg dark:text-white">Menu</span>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <X className="w-5 h-5 dark:text-gray-200" />
          </button>
        </div>

        <nav className="p-4 space-y-3">
          {Object.entries(navItems).map(([key, value]: [string, string]) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={onClose}
              className="block py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 transition-colors"
            >
              {value}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t dark:border-gray-700">
          <div className="flex justify-around">
            <button
              onClick={onLangToggle}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5 dark:text-gray-200" />
              <span className="text-sm dark:text-gray-200">{lang.toUpperCase()}</span>
            </button>
            <button
              onClick={onThemeToggle}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-gray-200" /> : <Moon className="w-5 h-5" />}
              <span className="text-sm dark:text-gray-200">{isDark ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;


