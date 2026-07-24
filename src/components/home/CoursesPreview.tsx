import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { featuredProgram } from "@/data/team";

import fallbackImage from "@/assets/course-ai-fundamentals.jpg";

const CoursesPreview = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: dbCourses, isLoading, error } = useQuery({
    queryKey: ['courses-preview'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .limit(9);
      if (error) throw error;
      return data;
    },
    retry: 1,
  });

  if (error) {
    console.error("Failed to load courses from Supabase:", error);
  }

  const courses = dbCourses
    ?.map(course => ({
      id: course.id,
      title: course.title,
      description: course.description || "",
      image: course.image_url || fallbackImage,
      duration: course.duration || "10 hours",
      rating: Number(course.rating) || 4.8,
      reviews: 1000,
      price: course.is_free ? "FREE" : `₹${Number(course.price).toLocaleString()}`,
      priceNum: Number(course.price),
      category: course.category || "General",
    }))
    // The Win-Win Code already has its own dedicated Featured Program spotlight below —
    // skip it here so it isn't shown twice on the homepage.
    .filter((c) => !c.title.toLowerCase().includes(featuredProgram.title.toLowerCase()))
    || [];

  const categories = useMemo(() => {
    const unique = Array.from(new Set(courses.map((c) => c.category)));
    return ["All", ...unique];
  }, [courses]);

  const filteredCourses =
    activeCategory === "All" ? courses : courses.filter((c) => c.category === activeCategory);

  const handleViewDetails = (courseId: string) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Explore Most Popular Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Grow your career with hands-on, in-demand skill lessons taught by industry experts.
          </p>
        </motion.div>

        {categories.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
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
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-[1.75rem] overflow-hidden shadow-soft animate-pulse">
                <div className="h-48 bg-white" />
                <div className="p-6 space-y-3 bg-card">
                  <div className="h-5 bg-muted rounded-full w-3/4" />
                  <div className="h-4 bg-muted rounded-full w-full" />
                  <div className="h-10 bg-muted rounded-full mt-4" />
                </div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center py-10 space-y-2">
              <p className="text-foreground font-semibold">Courses are temporarily unavailable.</p>
              <p className="text-sm text-muted-foreground">
                Please check back shortly, or{" "}
                <Link to="/contact" className="text-primary underline">
                  contact us
                </Link>{" "}
                if this keeps happening.
              </p>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="col-span-full text-center py-10 text-muted-foreground">
              Course is available - please check it!
            </div>
          ) : (
            filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card
                className="overflow-hidden hover-lift group border-0 shadow-soft cursor-pointer rounded-[1.75rem] bg-card"
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
                <div className="p-6 space-y-4">
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
                    className="w-full group"
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
            ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/courses">
            <Button size="lg" variant="outline">
              See All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesPreview;
