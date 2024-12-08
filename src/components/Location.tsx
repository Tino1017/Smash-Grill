import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const schedule = [
  { day: "Monday", location: "Hatfield", time: "11:00 AM - 3:00 PM" },
  { day: "Tuesday", location: "Downtown Square", time: "11:00 AM - 8:00 PM" },
  { day: "Wednesday", location: "University Campus", time: "11:00 AM - 7:00 PM" },
];

export function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Find Our Truck</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Weekly Schedule</h3>
            {schedule.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-semibold">{item.day}</h4>
                  <p className="text-gray-600">{item.location}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.5097762643254!2d28.235688199999995!3d-25.75372039999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9561160bf2a191%3A0xe64577d7083c699f!2sThe%20Smash%20n%20Grill%20Box!5e0!3m2!1sen!2sza!4v1733670533811!5m2!1sen!2sza"
                className="w-full h-[300px] rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>Currently at: Hilda & South Street, Hatfield</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}