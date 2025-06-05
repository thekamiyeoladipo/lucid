import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DreamCard({ id, title, date, tag, imageUrl }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-md overflow-hidden w-full max-w-xs transition"
    >
      <Link to={`/dream/${id}`} className="block">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-t-2xl"
        />

        <div className="p-4">
          <h2 className="text-white font-semibold text-base mb-2">
            {title}
          </h2>

          <div className="flex justify-between items-center text-xs text-gray-300">
            <span>{date}</span>
            {tag && (
              <span className="flex items-center gap-1">
                {tag}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
