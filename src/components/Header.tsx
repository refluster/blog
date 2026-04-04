import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/20">
      <div className="flex items-center justify-between px-6 md:px-12 h-16 w-full max-w-[1440px] mx-auto">
        <nav className="hidden lg:flex gap-6 items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-bold tracking-[-0.02em] uppercase text-xs transition-colors pb-1 ${
                isActive
                  ? 'text-on-surface border-b-2 border-tertiary'
                  : 'text-outline hover:text-on-surface'
              }`
            }
          >
            INDEX
          </NavLink>
          <NavLink
            to="/design-system"
            className={({ isActive }) =>
              `font-bold tracking-[-0.02em] uppercase text-xs transition-colors pb-1 ${
                isActive
                  ? 'text-on-surface border-b-2 border-tertiary'
                  : 'text-outline hover:text-on-surface'
              }`
            }
          >
            Design System
          </NavLink>
          <NavLink
            to="/design-guide"
            className={({ isActive }) =>
              `font-bold tracking-[-0.02em] uppercase text-xs transition-colors pb-1 ${
                isActive
                  ? 'text-on-surface border-b-2 border-tertiary'
                  : 'text-outline hover:text-on-surface'
              }`
            }
          >
            Design Guide
          </NavLink>
        </nav>

        <NavLink to="/" className="text-2xl font-black tracking-tighter text-on-surface uppercase">
          AI NATIVE ARTICLE
        </NavLink>

        <span className="text-[10px] font-bold tracking-widest text-outline uppercase hidden md:block">
          L3 INSIGHTS / 2026
        </span>

        {/* Mobile nav */}
        <nav className="flex lg:hidden gap-4 items-center">
          <NavLink to="/design-system" className="text-[10px] font-bold tracking-widest text-outline uppercase hover:text-on-surface">
            DS
          </NavLink>
          <NavLink to="/design-guide" className="text-[10px] font-bold tracking-widest text-outline uppercase hover:text-on-surface">
            DG
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
