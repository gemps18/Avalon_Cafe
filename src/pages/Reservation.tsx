import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";
import {
  CLOSED_DAYS_OF_WEEK,
  generateTimeSlots,
  partySizeOptions,
  type SeatingOption,
} from "../data/reservationData";
import { getCalendarLocale } from "../utils/dateLocale";

interface ReservationFormData {
  date: Date | undefined;
  time: string;
  guests: number;
  seating: SeatingOption;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

const initialFormData: ReservationFormData = {
  date: undefined,
  time: "",
  guests: 2,
  seating: "indoor",
  name: "",
  email: "",
  phone: "",
  notes: "",
};

const timeSlots = generateTimeSlots();

function Reservation() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState<ReservationFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const calendarLocale = getCalendarLocale(i18n.language);

  const handleChange = (
    field: keyof ReservationFormData,
    value: string | number | Date | undefined
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.date && formData.time && formData.name && formData.email && formData.phone;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    // TODO: wire this up to a backend or email service (same as Contact page)
    console.log("Reservation submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-cream min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="font-display text-3xl text-primary mb-4">
            {t("reservation.confirmationTitle")}
          </h1>
          <p className="text-primary/80">
            {t("reservation.confirmationMessage", {
              name: formData.name,
              date: formData.date?.toLocaleDateString(i18n.language),
              time: formData.time,
              guests: t("reservation.guestsCount", { count: formData.guests }),
              seating: t(`reservation.${formData.seating}`).toLowerCase(),
            })}
          </p>
          <button
            onClick={() => {
              setFormData(initialFormData);
              setSubmitted(false);
            }}
            className="mt-6 bg-primary text-cream px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            {t("reservation.newReservation")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-3xl text-primary mb-2">{t("reservation.title")}</h1>
        <p className="text-primary/70 mb-10">{t("reservation.subtitle")}</p>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-10">
          {/* Calendar */}
          <div>
            <label className="block font-semibold text-primary mb-3">
              {t("reservation.selectDate")}
            </label>
            <div className="rdp-wrapper border border-primary/20 rounded-lg p-2 inline-block">
              <DayPicker
                mode="single"
                selected={formData.date}
                onSelect={(date) => handleChange("date", date)}
                disabled={[{ before: new Date() }, { dayOfWeek: CLOSED_DAYS_OF_WEEK }]}
                locale={calendarLocale}
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <label className="block font-semibold text-primary mb-2">
                {t("reservation.time")}
              </label>
              <select
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
                required
                className="w-full border border-primary/30 rounded-lg px-3 py-2 bg-white text-primary"
              >
                <option value="" disabled>
                  {t("reservation.selectTime")}
                </option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-primary mb-2">
                {t("reservation.guests")}
              </label>
              <select
                value={formData.guests}
                onChange={(e) => handleChange("guests", Number(e.target.value))}
                className="w-full border border-primary/30 rounded-lg px-3 py-2 bg-white text-primary"
              >
                {partySizeOptions.map((n) => (
                  <option key={n} value={n}>
                    {t("reservation.guestsCount", { count: n })}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-primary mb-2">
                {t("reservation.seating")}
              </label>
              <div className="flex gap-4">
                {(["indoor", "outdoor"] as SeatingOption[]).map((option) => (
                  <label
                    key={option}
                    className={`flex-1 text-center border rounded-lg px-4 py-2 cursor-pointer transition ${
                      formData.seating === option
                        ? "bg-primary text-cream border-primary"
                        : "border-primary/30 text-primary"
                    }`}
                  >
                    <input
                      type="radio"
                      name="seating"
                      value={option}
                      checked={formData.seating === option}
                      onChange={() => handleChange("seating", option)}
                      className="hidden"
                    />
                    {t(`reservation.${option}`)}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-semibold text-primary mb-2">
                {t("reservation.name")}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="w-full border border-primary/30 rounded-lg px-3 py-2 bg-white text-primary"
              />
            </div>

            <div>
              <label className="block font-semibold text-primary mb-2">
                {t("reservation.email")}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="w-full border border-primary/30 rounded-lg px-3 py-2 bg-white text-primary"
              />
            </div>

            <div>
              <label className="block font-semibold text-primary mb-2">
                {t("reservation.phone")}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                className="w-full border border-primary/30 rounded-lg px-3 py-2 bg-white text-primary"
              />
            </div>

            <div>
              <label className="block font-semibold text-primary mb-2">
                {t("reservation.notes")}{" "}
                <span className="font-normal text-primary/60">
                  {t("reservation.notesOptional")}
                </span>
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                rows={3}
                className="w-full border border-primary/30 rounded-lg px-3 py-2 bg-white text-primary"
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full bg-primary text-cream px-6 py-3 rounded-full font-semibold hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {t("reservation.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reservation;