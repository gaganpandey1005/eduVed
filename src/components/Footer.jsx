
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const primaryBlue = "rgb(0, 85, 255)";
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } }
  };
  
  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 5, transition: { duration: 0.2 } }
  };

  return (
    <footer className=" bg-black mt-10 text-white py-12 px-6 md:px-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-opacity-10"
            style={{
              
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              filter: "blur(80px)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <motion.div 
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Logo & Description */}
          <motion.div className="md:w-1/3" variants={itemVariants}>
            <motion.div 
              className="flex items-center mb-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                style={{ backgroundColor: primaryBlue }}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-lg font-bold">E</span>
              </motion.div>
              <h1 className="text-2xl font-bold">
                <span className="text-white">Edu</span>
                <span style={{ color: primaryBlue }}>Ved</span>
              </h1>
            </motion.div>
            <p className="text-gray-300 leading-relaxed">
              Simplifying learning with the best educational resources for students at every stage of their journey.
            </p>
            <motion.div 
              className="mt-6 flex gap-4 text-sm text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {["Learn", "Grow", "Succeed"].map((text, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span 
                    className="h-1 w-1 rounded-full" 
                    style={{ backgroundColor: primaryBlue }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="md:w-1/4" variants={itemVariants}>
            <h2 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <motion.span 
                className="absolute -bottom-2 left-0 h-1"
                style={{ backgroundColor: primaryBlue }}
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </h2>
            <ul className="space-y-3 text-gray-300">
              {[
                { name: "Home", path: "/" },
                { name: "Study Material", path: "/study-material" },
                { name: "Books", path: "/books" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a 
                    href={link.path} 
                    className="flex items-center hover:text-white transition-colors duration-300"
                    whileHover="hover"
                    initial="initial"
                    variants={linkVariants}
                  >
                    <motion.span 
                      className="w-0 h-px mr-2 opacity-0"
                      style={{ backgroundColor: primaryBlue }}
                      animate={{ opacity: 1 }}
                      whileHover={{ width: "12px", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Socials */}
          <motion.div className="md:w-1/3" variants={itemVariants}>
            <h2 className="text-lg font-semibold mb-6 relative inline-block">
              Connect With Us
              <motion.span 
                className="absolute -bottom-2 left-0 h-1"
                style={{ backgroundColor: primaryBlue }}
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </h2>
            <p className="text-gray-300 mb-4">Have questions? Reach out to us:</p>
            <motion.a 
              href="mailto:support@eduved.com" 
              className="inline-block px-4 py-2 rounded-lg text-gray-200 mb-6"
              style={{ backgroundColor: "rgba(0, 85, 255, 0.2)" }}
              whileHover={{ 
                backgroundColor: "rgba(0, 85, 255, 0.4)", 
                scale: 1.05 
              }}
              transition={{ duration: 0.3 }}
            >
              support@eduved.com
            </motion.a>
            
            <motion.div className="flex gap-4 mt-3">
              {[
                { icon: <FaFacebookF />, name: "Facebook" },
                { icon: <FaTwitter />, name: "Twitter" },
                { icon: <FaLinkedinIn />, name: "LinkedIn" },
                { icon: <FaInstagram />, name: "Instagram" },
                { icon: <FaYoutube />, name: "YouTube" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300"
                  style={{ backgroundColor: "rgba(0, 85, 255, 0.2)" }}
                  variants={iconVariants}
                  whileHover="hover"
                  initial="initial"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div 
          className="py-6 px-8 rounded-xl mb-12"
          style={{ backgroundColor: "rgba(0, 85, 255, 0.1)" }}
          variants={itemVariants}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
              <p className="text-gray-300 text-sm">Get weekly updates on new resources and special offers</p>
            </div>
            <motion.div 
              className="flex w-full md:w-auto"
              whileHover={{ scale: 1.02 }}
            >
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-black bg-opacity-30 rounded-l-lg focus:outline-none text-white w-full md:w-64"
              />
              <motion.button 
                className="px-4 py-2 rounded-r-lg font-medium text-white"
                style={{ backgroundColor: primaryBlue }}
                whileHover={{ backgroundColor: "rgb(0, 65, 195)" }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          variants={itemVariants}
        >
          <div>&copy; {new Date().getFullYear()} EduVed. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item, index) => (
              <motion.a 
                key={index}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="hover:text-white transition-colors duration-300"
                whileHover={{ color: primaryBlue }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
              {/* Bottom Footer */}
        <motion.div 
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          © {new Date().getFullYear()} EduVed. All rights reserved. | Made with 💙 by EduVed Team.
        </motion.div>
    </footer>
  );
};

export default Footer;
