# API Documentation

Base URL: `/api`

## Authentication
- POST `/auth/register` `{name,email,password,phone}`
- POST `/auth/login` `{email,password}`
- GET `/auth/me` Bearer token

## Properties
- GET `/properties?search=&type=&listing_type=&page=&limit=`
- GET `/properties/:id`
- POST `/properties` agent/admin protected

## Enquiries
- POST `/enquiries` customer/authenticated protected

## Dashboard
- GET `/dashboard` authenticated customer data

Health: GET `/health`.
