import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  BookOpen,
  FileText,
  Trophy,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },

    {
      name: "Courses",
      submenu: [
        {
          name: "Optional Mathematics",
          path: "/courses/optional-maths",
          icon: GraduationCap,
        },
        {
          name: "Foundation Batch",
          path: "/courses/foundation-batch",
          icon: BookOpen,
        },
        {
          name: "Test Series",
          path: "/courses/test-series",
          icon: FileText,
        },
      ],
    },

    {
      name: "PYQs",
      submenu: [
        {
          name: "Optional Maths PYQs",
          path: "/optional-math-pyq",
          icon: FileText,
        },
        {
          name: "Mock Papers",
          path: "/mock-papers",
          icon: BookOpen,
        },
      ],
    },

    {
      name: "Faculty",
      path: "/faculty",
    },

    {
      name: "Results",
      submenu: [
        {
          name: "Toppers",
          path: "/results/toppers",
          icon: Trophy,
        },
        {
          name: "Selections",
          path: "/results/selections",
          icon: Users,
        },
      ],
    },

    {
      name: "Resources",
      path: "/resources",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const isSubmenuActive = (submenu: any[]) => {
    return submenu.some((item) => item.path === location.pathname);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[74px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <img
                src={logo}
                alt="The CSE Circle"
                className="w-12 sm:w-14 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900 leading-tight">
                  The CSE Circle
                </h1>

                <p className="text-xs text-gray-500">Excellence in Education</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.path === location.pathname ||
                  (link.submenu && isSubmenuActive(link.submenu));

                // SUBMENU
                if (link.submenu) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`flex items-center gap-1 px-4 py-2 rounded-full text-md font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                        }`}
                      >
                        {link.name}

                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 10,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: 10,
                            }}
                            transition={{
                              duration: 0.2,
                            }}
                            className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-gray-100 bg-white shadow-2xl overflow-hidden"
                          >
                            <div className="p-2 ">
                              {link.submenu.map((item) => {
                                const Icon = item.icon;

                                return (
                                  <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-start gap-3 rounded-xl p-3 transition-all duration-200 ${
                                      location.pathname === item.path
                                        ? "bg-blue-50 text-blue-600"
                                        : "hover:bg-gray-50 text-gray-700"
                                    }`}
                                  >
                                    <div className="mt-1">
                                      <Icon size={18} />
                                    </div>

                                    <div>
                                      <h4 className="text-md font-bold">
                                        {item.name}
                                      </h4>

                                      <p className="text-xs text-gray-500">
                                        Explore details
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // NORMAL MENU
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 rounded-full text-md font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-blue-50 text-blue-600 "
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* CTA */}
              <Link
                to="/login"
                className="ml-3 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-md font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
              >
                Student Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
            >
              <div className="px-4 py-5 space-y-2 max-h-[85vh] overflow-y-auto">
                {navLinks.map((link) => {
                  // MOBILE SUBMENU
                  if (link.submenu) {
                    const expanded = activeDropdown === link.name;

                    return (
                      <div
                        key={link.name}
                        className="border border-gray-100 rounded-2xl overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setActiveDropdown(expanded ? null : link.name)
                          }
                          className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800 bg-gray-50"
                        >
                          {link.name}

                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              expanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {expanded && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                            >
                              <div className="p-2 bg-white">
                                {link.submenu.map((item) => {
                                  const Icon = item.icon;

                                  return (
                                    <Link
                                      key={item.path}
                                      to={item.path}
                                      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all ${
                                        location.pathname === item.path
                                          ? "bg-blue-50 text-blue-600"
                                          : "text-gray-700 hover:bg-gray-50"
                                      }`}
                                    >
                                      <Icon size={18} />

                                      {item.name}
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  // NORMAL MOBILE LINK
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        location.pathname === link.path
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {/* Mobile CTA */}
                <Link
                  to="/login"
                  className="mt-4 flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-all"
                >
                  Student Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-[74px]" />
    </>
  );
}
