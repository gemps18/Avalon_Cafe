import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";
import { getCalendarLocale } from "../utils/dateLocale";

type InquiryType = "catering" | "event" | "other";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  date: Date | undefined;
  time: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
  date: undefined,
  time: "",
};

const inquiryTypes: InquiryType[] = ["catering", "event", "other"];

function Contact() {
  const { t, i18n } = useTranslation();
  const [inquiryType, setInquiryType] = useState<InquiryType>("catering");
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const calendarLocale = getCalendarLocale(i18n.language);

  const handleChange = (
    field: keyof ContactFormData,
    value: string | Date | undefined
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTypeChange = (type: InquiryType) => {
    setInquiryType(type);
    // Clear fields not relevant to the newly selected type
    setFormData((prev) => ({
      ...prev,
      date: type === "other" ? undefined : prev.date,
      time: type === "event" ? prev.time : "",
    }));
  };

  const needsDate = inquiryType === "catering" || inquiryType === "event";
  const needsTime = inquiryType === "event";

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.message &&
    (!needsDate || formData.date) &&
    (!needsTime || formData.time);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          inquiry_type: t(`contact.tabs.${inquiryType}`),
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
          date: formData.date ? formData.date.toLocaleDateString(i18n.language) : "",
          time: formData.time,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      setStatus("sent");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-cream min-h-screen relative">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-display text-3xl text-primary mb-2">{t("contact.title")}</h1>
        <p className="text-primary/70 mb-8">{t("contact.subtitle")}</p>

        {/* Inquiry type selector */}
        <div className="flex gap-3 mb-10">
          {inquiryTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleTypeChange(type)}
              className={`flex-1 text-center border rounded-full px-4 py-2 font-medium transition ${
                inquiryType === type
                  ? "bg-primary text-cream border-primary"
                  : "border-primary/30 text-primary hover:bg-primary/5"
              }`}
            >
              {t(`contact.tabs.${type}`)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold text-primary mb-2">{t("contact.name")}</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="w-full border border-primary/30 rounded-lg px-3 py-2 bg-white text-primary"
            />
          </div>

          <div>
            <label className="block font-semibold text-primary mb-2">{t("contact.email")}</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="w-full border border-primary/30 rounded-lg px-3 py-2 bg-white text-primary"
            />
          </div>

          {needsDate && (
            <div>
              <label className="block font-semibold text-primary mb-3">
                {t("contact.selectDate")}
              </label>
              <div className="rdp-wrapper border border-primary/20 rounded-lg p-2 inline-block">
                <DayPicker
                  mode="single"
                  selected={formData.date}
                  onSelect={(date) => handleChange("date", date)}
                  disabled={{ before: new Date() }}
                  locale={calendarLocale}
                />
              </div>
            </div>
          )}

          {needsTime && (
            <div>
              <label className="block font-semibold text-primary mb-2">{t("contact.time")}</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
                required
                className="w-full border border-primary/30 rounded-lg px-3 py-2 bg-white text-primary"
              />
            </div>
          )}

          <div>
            <label className="block font-semibold text-primary mb-2">
              {t("contact.message")}
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              rows={6}
              placeholder={t(`contact.placeholders.${inquiryType}`)}
              className="w-full border border-primary/30 rounded-lg px-3 py-2 bg-white text-primary"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || !isFormValid}
            className="w-full bg-primary text-cream px-6 py-3 rounded-full font-semibold hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "sending" ? t("contact.sending") : t(`contact.submit.${inquiryType}`)}
          </button>

          {status === "error" && (
            <p className="text-red-600 text-sm text-center">{t("contact.error")}</p>
          )}
        </form>
      </div>

      {status === "sent" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-6 z-50">
          <div className="bg-cream border border-primary/30 rounded-lg p-8 max-w-sm text-center shadow-lg">
            <h2 className="font-display text-2xl text-primary mb-2">
              {t("contact.confirmationTitle")}
            </h2>
            <p className="text-primary/80 mb-6">{t("contact.confirmationMessage")}</p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-primary text-cream px-6 py-2 rounded-full hover:opacity-90 transition"
            >
              {t("contact.close")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;