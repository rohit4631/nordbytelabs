import { useState } from "react";
import { Send, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // API call to our backend (placeholder for actual implementation)
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      // WhatsApp Redirect Logic
      const whatsappNumber = "918699655213"; // Updated WhatsApp number
      const textMessage = `Hello Nord Byte Labs,
      
I am interested in your services.

Name: ${data.fullName}
Company: ${data.companyName}
Service: ${data.service}
Budget: ${data.budget}
Requirements: ${data.requirements}

Please contact me.`;

      const encodedMessage = encodeURIComponent(textMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
      
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Ready to transform your business? Fill out the form, and our technology consultants will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EAF3FF] rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-[#0066FF]" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">Email Us</h4>
                  <p className="mt-1 text-gray-600">akd143129@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EAF3FF] rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-[#0066FF]" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">Call/WhatsApp Us</h4>
                  <p className="mt-1 text-gray-600">+91 86996 55213</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EAF3FF] rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-[#0066FF]" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">Global Headquarters</h4>
                  <p className="mt-1 text-gray-600">Chandigarh, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center bg-white p-12 rounded-2xl border border-gray-200 shadow-sm text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Sent Successfully!</h3>
                <p className="text-gray-600">We are redirecting you to WhatsApp to connect with our team instantly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input required type="text" name="fullName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                    <input required type="text" name="companyName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input required type="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number *</label>
                    <input required type="tel" name="whatsapp" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Required Service *</label>
                    <select required name="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] outline-none transition-all bg-white">
                      <option value="">Select a service...</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="CRM Systems">CRM Systems</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range *</label>
                    <select required name="budget" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] outline-none transition-all bg-white">
                      <option value="">Select budget...</option>
                      <option value="< $5,000">Less than $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                      <option value="$50,000+">$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Timeline *</label>
                    <select required name="timeline" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] outline-none transition-all bg-white">
                      <option value="">Select timeline...</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-3 Months">1-3 Months</option>
                      <option value="3-6 Months">3-6 Months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Requirements *</label>
                  <textarea required name="requirements" rows={4} placeholder="Tell us briefly about your project goals..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] outline-none transition-all resize-none"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0066FF] text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#003A8C] transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Processing..." : "Send Inquiry"}
                  <Send className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy. We will securely send your details to our team and redirect you to WhatsApp for instant connection.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
