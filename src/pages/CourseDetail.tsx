import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  BookOpen,
  Users,
  PlayCircle,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import fallbackCourseImage from "@/assets/course-ai-fundamentals.jpg";
import founderImage from "@/assets/founder-rishabh.jpg";
import defaultAvatar from "@/assets/founder-rishabh.jpg";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: course, isLoading } = useQuery({
    queryKey: ["course", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (!isLoading && !course) {
      toast.error("Course not found");
      navigate("/courses");
    }
  }, [course, isLoading, navigate]);

  // Open Graphy URL in a new tab
  const handleEnroll = () => {
    const graphyUrl = (course as any)?.graphy_url;
    if (graphyUrl) {
      window.open(graphyUrl, "_blank", "noopener,noreferrer");
    } else {
      toast.error("Course URL not available. Please contact support.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground text-lg">Loading course...</p>
      </div>
    );
  }

  if (!course) return null;

  const courseImage = course.image_url || fallbackCourseImage;
  const instructorName = (course as any).instructor || "Instructor";
  const studentsCount = (course as any).students_count || "0";
  const duration = course.duration || "Self-paced";
  const modulesCount = course.modules || 0;
  const priceDisplay = course.is_free
    ? "FREE"
    : `₹${Number(course.price).toLocaleString()}`;
  const rating = Number(course.rating) || 0;

  const instructorImage =
    instructorName === "Rishabh Agarwal" ? founderImage : defaultAvatar;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-16 bg-mist relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <Badge className="bg-primary text-primary-foreground rounded-full px-3 py-1">
                  {course.level || "All levels"}
                </Badge>
                <Badge variant="outline" className="border-primary/30 text-primary rounded-full px-3 py-1">
                  {course.category || "Course"}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
                {course.title}
              </h1>

              <p className="text-lg text-muted-foreground">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-foreground/70">
                {rating > 0 && (
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-gold text-gold" />
                    <span className="font-semibold text-foreground">{rating}</span>
                    <span>(reviews)</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{studentsCount} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  size="lg"
                  onClick={handleEnroll}
                >
                  Enroll Now - {priceDisplay}
                </Button>
                {!course.is_free && course.price > 0 && (
                  <div className="text-2xl font-extrabold text-primary">
                    {priceDisplay}
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={courseImage}
                alt={course.title}
                className="rounded-[2rem] shadow-elevated w-full aspect-video object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackCourseImage;
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {modulesCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="border-0 shadow-soft rounded-[1.75rem]">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <BookOpen className="h-6 w-6 text-primary" />
                        Course Curriculum ({modulesCount} modules)
                      </h2>
                      <div className="space-y-2">
                        {Array.from({ length: Math.min(modulesCount, 10) }).map(
                          (_, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-4 rounded-2xl hover:bg-mist smooth-transition"
                            >
                              <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                                  {idx + 1}
                                </div>
                                <div>
                                  <h3 className="font-medium">Module {idx + 1}</h3>
                                  <p className="text-sm text-muted-foreground">
                                    {duration} content
                                  </p>
                                </div>
                              </div>
                              <PlayCircle className="h-5 w-5 text-muted-foreground" />
                            </div>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="border-0 shadow-soft sticky top-24 rounded-[1.75rem]">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">Course Includes</h3>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-sm">{duration} on-demand video</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <span className="text-sm">{modulesCount} modules</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-primary" />
                        <span className="text-sm">Certificate of completion</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-sm">Lifetime access</span>
                      </div>
                    </div>
                    <Separator />
                    <Button
                      className="w-full"
                      onClick={handleEnroll}
                    >
                      Enroll Now - {priceDisplay}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Instructor Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="border-0 shadow-soft rounded-[1.75rem]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Instructor</h3>
                    <div className="flex items-start gap-4">
                      <img
                        src={instructorImage}
                        alt={instructorName}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{instructorName}</h4>
                        <p className="text-sm text-muted-foreground">
                          {instructorName === "Rishabh Agarwal"
                            ? "Engineer, IIM Calcutta alumnus, and author of four books with 20 years in strategy"
                            : "Course instructor"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
