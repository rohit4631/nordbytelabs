import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Code, Database, Smartphone, Activity } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#EAF3FF]/30">
      
      {/* Floating Particles Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#0066FF]/20"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              x: [null, (Math.random() - 0.5) * 100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0066FF]/20 text-[#003A8C] text-sm font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#0066FF] animate-pulse"></span>
              Building Digital Solutions For Modern Businesses
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
              Transform Your Business With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003A8C] to-[#0066FF]">Modern Technology Solutions</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              We help businesses build websites, mobile applications, CRM systems, blockchain solutions, digital marketing campaigns, cybersecurity infrastructure, and custom software that drive growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0066FF] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0066FF]/30 hover:bg-[#003A8C] transition-all hover:scale-105"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-gray-200 px-8 py-4 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center hidden md:flex"
          >
            {/* Professional Technology Dashboard Visuals */}
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#003A8C]/5 to-[#0066FF]/10 rounded-full blur-3xl animate-pulse-glow" />
              
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#003A8C] to-[#0066FF] rounded-xl flex items-center justify-center shadow-inner">
                  <Activity className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Orbiting Elements */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-4 border border-dashed border-[#0066FF]/30 rounded-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100" style={{ transform: 'translate(-50%, -50%) rotate(-360deg)' }}>
                  <Globe className="w-8 h-8 text-[#0066FF]" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100" style={{ transform: 'translate(-50%, 50%) rotate(-360deg)' }}>
                  <Shield className="w-8 h-8 text-[#003A8C]" />
                </div>
              </motion.div>

              <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute inset-16 border border-[#0066FF]/10 rounded-full">
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100" style={{ transform: 'translate(-50%, -50%) rotate(360deg)' }}>
                  <Code className="w-6 h-6 text-[#0066FF]" />
                </div>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100" style={{ transform: 'translate(50%, -50%) rotate(360deg)' }}>
                  <Database className="w-6 h-6 text-[#003A8C]" />
                </div>
              </motion.div>

              {/* Stats Cards */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-10 -right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#EAF3FF] rounded-lg flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">App Development</p>
                    <p className="text-sm font-bold text-gray-900">iOS & Android</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }} 
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute bottom-20 -left-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">System Uptime</p>
                    <p className="text-sm font-bold text-gray-900">99.99%</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
