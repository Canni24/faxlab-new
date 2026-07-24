import { motion } from "framer-motion";
import { Play, Youtube, ArrowUpRight } from "lucide-react";
import { youtube } from "@/data/team";

const cardAccents = ["from-primary/90 to-accent/90", "from-coral to-gold"];

const YoutubeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coral-light text-coral-foreground text-sm font-semibold mb-4">
              <Youtube className="h-4 w-4" />
              FaxLab AI on YouTube
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
              Watch us teach.
              <br />
              Judge us by our work.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Hands-on AI tutorials from the FaxLab AI team real tools, real
              workflows, no fluff. New sessions published regularly.
            </p>
          </div>
          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-2.5 smooth-transition shrink-0"
          >
            Visit {youtube.handle} on YouTube
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {youtube.videos.map((video, index) => (
            <motion.a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group block"
            >
              <div
                className={`relative aspect-video rounded-[1.75rem] bg-gradient-to-br ${cardAccents[index % cardAccents.length]} overflow-hidden shadow-soft group-hover:shadow-elevated smooth-transition`}
              >
                {/* Real YouTube thumbnail — falls back to a lower res if maxres isn't available for this video */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (img.src.includes("maxresdefault")) {
                      img.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    } else {
                      img.style.display = "none";
                    }
                  }}
                />
                {/* Scrim for play-button legibility over any thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-elevated"
                  >
                    <Play className="h-6 w-6 text-primary fill-primary ml-1" />
                  </motion.div>
                </div>
              </div>
              <h3 className="mt-4 font-bold text-foreground group-hover:text-primary smooth-transition">
                {video.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;
