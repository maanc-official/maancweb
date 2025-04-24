"use client"
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaCogs } from "react-icons/fa";

const BentoGrid = () => {
  // const services = [
  //   {
  //     id: 1,
  //     title: "Cloud Consulting",
  //     description: "Expert guidance for cloud migration and optimization strategies",
  //     icon: <FaCloud className="text-4xl mb-4 text-blue-500" />,
  //     bgImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
  //   },
  //   {
  //     id: 2,
  //     title: "IT Infrastructure",
  //     description: "Comprehensive infrastructure management and monitoring",
  //     icon: <FaServer className="text-4xl mb-4 text-green-500" />,
  //     bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
  //   },
  //   {
  //     id: 3,
  //     title: "Cybersecurity",
  //     description: "Advanced security solutions to protect your digital assets",
  //     icon: <FaShieldAlt className="text-4xl mb-4 text-red-500" />,
  //     bgImage: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87"
  //   },
  //   {
  //     id: 4,
  //     title: "Software Development",
  //     description: "Custom software solutions for your business needs",
  //     icon: <FaCode className="text-4xl mb-4 text-purple-500" />,
  //     bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  //   },
  //   {
  //     id: 5,
  //     title: "Data Analytics",
  //     description: "Transform your data into actionable insights",
  //     icon: <FaChartBar className="text-4xl mb-4 text-yellow-500" />,
  //     bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  //   }
  // ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
    <div className="min-h-screen bg-white p-6 md:p-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-12 gap-6 max-w-7xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="col-span-12 md:col-span-8 text-btncolor rounded-3xl p-8 relative overflow-hidden group border-grey border-1"
        >
          <motion.div
            className="absolute -right-4 -top-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <FaRocket className="w-24 h-24 opacity-20" color="#ff5151" />
          </motion.div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold  mb-4 text-black"><span className="text-btncolor">Innovating</span> the Future of Technology</h1>
            <p className="text-xl text-black">Transforming businesses through cutting-edge digital solutions</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="col-span-12 md:col-span-4 bg-gradient-to-br text-black rounded-3xl p-8 relative overflow-hidden group border-2 border-btncolor"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="absolute -right-4 -bottom-4 text-white/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <FaLightbulb className="w-20 h-20 opacity-20" color="#ff5151" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4">15+ Years</h2>
          <p className="">Of Digital Excellence</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="col-span-12 md:col-span-4 bg-gradient-to-br text-white bg-btncolor rounded-3xl p-8 relative overflow-hidden group border-1 border-grey"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="absolute -right-4 -bottom-4 text-white/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FaCogs className="w-20 h-20 opacity-20" color="#ffffff" />
          </motion.div>
          <h2 className="text-3xl font-bold  mb-4">500+</h2>
          <p className="">Global Clients</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="col-span-12 md:col-span-8 bg-gradient-to-br text-black rounded-3xl p-8 relative overflow-hidden group border-1 border-grey"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold text-btncolor  mb-4">Our Mission</h2>
          <p className=" text-lg">To empower businesses with innovative technology solutions that drive growth and success in the digital age.</p>
          <motion.div
            className="absolute -right-4 -bottom-4 text-white/20"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
          >
            <FaRocket className="w-24 h-24 opacity-20" color="#ff5151" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="col-span-12 md:col-span-4 bg-gradient-to-br border-1 border-grey text-white bg-btncolor rounded-3xl p-8 relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold  mb-4">24/7</h2>
          <p className="">Support & Maintenance</p>
          <motion.div
            className="absolute -right-4 -bottom-4 text-white/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaCogs className="w-20 h-20 opacity-20"  color="#ffffff"/>
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="col-span-12 md:col-span-8 bg-gradient-to-br border-1 border-grey text-black rounded-3xl p-8 relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold  mb-4 text-btncolor">Innovation Hub</h2>
          <p className=" text-lg">Discover the latest in tech trends and digital transformation strategies.</p>
          <motion.div
            className="absolute -right-4 -bottom-4 text-white/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <FaLightbulb className="w-24 h-24 opacity-20" color="#ff5151"/> 
          </motion.div>
        </motion.div>

        
      </motion.div>
    </div>
    </>
  );
};

export default BentoGrid;