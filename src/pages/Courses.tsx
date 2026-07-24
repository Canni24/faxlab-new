import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, ArrowRight, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import fallbackImage from "@/assets/course-ai-fundamentals.jpg";

const Courses = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const [activeCategory, setActiveCategory] = useState("All");
  const [freeOnly, setFreeOnly] = useState<boolean>(Boolean((location.state as any)?.filterFree));

  const { data: dbCourses, isLoading, error } = useQuery({
    queryKey: ['courses-full'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .limit(50);
      if (error) throw error;
      return data;
    },
    retry: 1,
  });

  if (error) {
    // Surfaced in the console so it's visible in browser DevTools / terminal logs
    console.error("Failed to load courses from Supabase:", error);
  }

  const courses = dbCourses?.map(course => ({
    id: course.id,
    title: course.title,
    description: course.description || "",
    image: course.image_url || fallbackImage,
    duration: course.duration || "10 hours",
    rating: Number(course.rating) || 4.8,
    reviews: 1000,
    price: course.is_free ? "FREE" : `₹${Number(course.price).toLocaleString()}`,
    priceNum: Number(course.price),
    isFree: Boolean(course.is_free),
    category: course.category || "General",
    graphy_url: (course as any).graphy_url,
  })) || [];

  const categories = useMemo(() => {
    const unique = Array.from(new Set(courses.map((c) => c.category)));
    return ["All", ...unique];
  }, [courses]);

  const filteredCourses = courses.filter((c) => {
    const matchesCategory = activeCategory === "All" || c.category === activeCategory;
    const matchesFree = !freeOnly || c.isFree;
    return matchesCategory && matchesFree;
  });

  // View details: public, no login required
  const handleViewDetails = (courseId: string) => {
    navigate(`/courses/${courseId}`);
  };

  // Enroll: requires login, then redirect to Graphy
  const handleEnroll = async (course: typeof courses[0]) => {
    if (!user) {
      toast.error("Please sign in to enroll");
      navigate("/auth");
      return;
    }
    if (course.graphy_url) {
      window.location.href = course.graphy_url;
      return;
    }
    toast.error("Course URL not available. Please contact support.");
  };

  return (
    <div>
      <Navbar />
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground">
              Explore Our <span className="text-primary">AI Courses</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Grow your career with hands-on, in-demand skill lessons taught by industry experts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold smooth-transition ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-white text-foreground/70 hover:text-primary border border-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
            <button
              onClick={() => setFreeOnly((v) => !v)}
              className={`px-5 py-2 rounded-full text-sm font-semibold smooth-transition inline-flex items-center gap-1.5 ${
                freeOnly
                  ? "bg-coral text-coral-foreground shadow-soft"
                  : "bg-white text-foreground/70 hover:text-coral border border-coral/20"
              }`}
            >
              Free Only
              {freeOnly && <X className="h-3.5 w-3.5" onClick={(e) => { e.stopPropagation(); setFreeOnly(false); }} />}
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-[1.75rem] overflow-hidden shadow-soft animate-pulse">
                  <div className="h-48 bg-muted" />
                  <div className="p-6 space-y-3 bg-card">
                    <div className="h-5 bg-muted rounded-full w-3/4" />
                    <div className="h-4 bg-muted rounded-full w-full" />
                    <div className="h-4 bg-muted rounded-full w-2/3" />
                    <div className="h-10 bg-muted rounded-full mt-4" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16 max-w-lg mx-auto space-y-3">
              <p className="text-foreground font-semibold">
                We couldn't load courses right now.
              </p>
              <p className="text-sm text-muted-foreground">
                This usually means the Supabase project is unreachable, paused, or the
                connection details have changed. Check your Supabase dashboard, or open
                the browser console for the exact error.
              </p>
            </div>
          ) : filteredCourses.length === 0 && courses.length === 0 ? (
            <div className="text-center py-16 max-w-lg mx-auto space-y-3">
              <p className="text-foreground font-semibold">No courses found yet.</p>
              <p className="text-sm text-muted-foreground">
                Your Supabase <code className="px-1.5 py-0.5 rounded bg-muted">courses</code> table
                looks empty. If this project was just set up, re-run the seed data from{" "}
                <code className="px-1.5 py-0.5 rounded bg-muted">supabase/migrations</code> in your
                Supabase SQL Editor.
              </p>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              No courses match these filters yet — try a different category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
                >
                  <Card
                    className="overflow-hidden hover-lift group border-0 shadow-soft cursor-pointer rounded-[1.75rem] h-full flex flex-col"
                    onClick={() => handleViewDetails(course.id)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = fallbackImage;
                        }}
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-soft">
                        {course.price}
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-foreground/80 px-3 py-1 rounded-full text-xs font-semibold">
                        {course.category}
                      </div>
                    </div>
                    <div className="p-6 space-y-4 flex flex-col flex-1">
                      <h3 className="text-xl font-bold group-hover:text-primary smooth-transition">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-gold">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="font-semibold text-foreground">{course.rating}</span>
                          <span className="text-muted-foreground">({course.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      <Button
                        className="w-full group mt-auto"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewDetails(course.id);
                        }}
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
