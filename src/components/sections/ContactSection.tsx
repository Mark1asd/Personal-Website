import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, ArrowUpRight, Loader2 } from "lucide-react";
import { site } from "../../config/site";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type SubmitState = "idle" | "sending" | "sent" | "error";

type ContactItem = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
};

const FORMSPREE_URL = "https://formspree.io/f/mdallzjl";

export function ContactSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  function resetForm() {
    setFormData({ name: "", email: "", message: "" });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitState === "sending") return;

    try {
      setSubmitState("sending");

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,

          // Helps email clients set "Reply-To" (Formspree supports _replyto)
          _replyto: formData.email,

          // Optional: a nicer email subject
          _subject: `Portfolio message from ${formData.name}`,
        }),
      });

      if (!res.ok) throw new Error("Formspree submit failed");

      setSubmitState("sent");
      resetForm();
      setTimeout(() => setSubmitState("idle"), 2500);
    } catch (err) {
      console.error(err);
      setSubmitState("error");
      setTimeout(() => setSubmitState("idle"), 2500);
    }
  }

  const contactInfo: ContactItem[] = [
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: site.location ?? "Tampa, FL",
    },
  ];

  const isSending = submitState === "sending";
  const isSent = submitState === "sent";
  const isError = submitState === "error";

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm tracking-wider text-blue-400">
            05. CONTACT
          </span>

          <h2 className="mt-4 mb-6 text-4xl font-bold md:text-5xl">
            Let&apos;s work <span className="text-white/40">together</span>
          </h2>

          <p className="mx-auto max-w-xl text-white/55">
            Want to collaborate or have an opportunity in mind? Send me a message
            and I’ll get back to you.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 lg:col-span-2"
          >
            <div>
              <h3 className="mb-3 text-2xl font-bold text-white">Get in touch</h3>
              <p className="text-white/55">
                I’m currently open to full-time roles and selective freelance work.
                If you have something you want to build, let’s talk.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const clickable = Boolean(item.href);

                const content = (
                  <>
                    <div className="rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3">
                      <Icon className="h-5 w-5 text-blue-300" />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-white/45">{item.label}</p>
                      <p className="font-medium text-white">{item.value}</p>
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-white/35 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300" />
                  </>
                );

                if (!clickable) {
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/55">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((s) => ({ ...s, name: e.target.value }))
                    }
                    placeholder="Mark Bychin"
                    className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-blue-500/60"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/55">
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((s) => ({ ...s, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-blue-500/60"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm text-white/55">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((s) => ({ ...s, message: e.target.value }))
                  }
                  placeholder="Tell me what you’re working on…"
                  rows={6}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-blue-500/60"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={[
                  "w-full rounded-xl px-5 py-4 font-medium text-white transition",
                  "bg-gradient-to-r from-blue-500 to-purple-500",
                  "hover:from-blue-600 hover:to-purple-600",
                  "disabled:cursor-not-allowed disabled:opacity-70",
                ].join(" ")}
              >
                {isSending ? (
                  <span className="inline-flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending…
                  </span>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    Send Message
                  </span>
                )}
              </button>

              {/* status line */}
              <div className="mt-4 min-h-[20px] text-center text-sm">
                {isSent && (
                  <span className="text-emerald-300">
                    Message sent ✅ I’ll reply soon.
                  </span>
                )}
                {isError && (
                  <span className="text-red-300">
                    Something went wrong. Please try again or email me directly.
                  </span>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}