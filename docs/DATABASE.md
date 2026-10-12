# Database

Core tables: users, agents, properties, property_images, amenities, property_amenities, enquiries, appointments, saved_properties.

Relationships: users→agents is 1:1; agents→properties is 1:N; properties→property_images is 1:N; properties↔amenities is N:M; users→enquiries/appointments is 1:N; users↔properties saved is N:M.

Indexes support role, location/type/listing status, price, enquiry status/agent and appointment time/agent.
