const sampleListings = [
  {
    "title": "Cozy Studio Apartment in Goa",
    "description": "A compact, thoughtfully furnished stay with a comfortable bed, kitchenette, and workspace. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 3557,
    "location": "Goa",
    "country": "India",
    "category": "Apartment"
  },
  {
    "title": "Luxury Beachfront Villa in Lonavala",
    "description": "A spacious villa with sea views, a private pool, and a relaxing outdoor lounge. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 10421,
    "location": "Lonavala",
    "country": "India",
    "category": "Apartment"
  },
  {
    "title": "Mountain View Cottage in Kochi",
    "description": "A peaceful cottage surrounded by hills, fresh air, and scenic walking trails. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 6767,
    "location": "Kochi",
    "country": "India",
    "category": "Apartment"
  },
  {
    "title": "Heritage Haveli Room in Phuket",
    "description": "A character-filled stay with traditional architecture, local decor, and warm hospitality. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 6274,
    "location": "Phuket",
    "country": "Thailand",
    "category": "Apartment"
  },
  {
    "title": "Modern City Penthouse in Rome",
    "description": "A stylish high-floor home with skyline views, modern interiors, and easy city access. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 12899,
    "location": "Rome",
    "country": "Italy",
    "category": "Apartment"
  },
  {
    "title": "Farmhouse Retreat in Colombo",
    "description": "A relaxed countryside property with open grounds, garden seating, and room for groups. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 11915,
    "location": "Colombo",
    "country": "Sri Lanka",
    "category": "Apartment"
  },
  {
    "title": "Boutique Hotel Suite in Jaipur",
    "description": "An elegant private suite with premium bedding, attentive service, and thoughtful amenities. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 9179,
    "location": "Jaipur",
    "country": "India",
    "category": "Apartment"
  },
  {
    "title": "Treehouse Hideaway in Shimla",
    "description": "A unique elevated hideaway surrounded by greenery, ideal for a quiet nature break. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 3263,
    "location": "Shimla",
    "country": "India",
    "category": "Apartment"
  },
  {
    "title": "Lakefront Wooden Chalet in Jaisalmer",
    "description": "A warm wooden chalet with peaceful water views and a private balcony. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 7458,
    "location": "Jaisalmer",
    "country": "India",
    "category": "Apartment"
  },
  {
    "title": "Budget Traveller Hostel in Dubai",
    "description": "A clean, social stay with practical facilities and convenient access to local attractions. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 869,
    "location": "Dubai",
    "country": "UAE",
    "category": "Apartment"
  },
  {
    "title": "Family Holiday Home in Barcelona",
    "description": "A roomy home with multiple bedrooms, a kitchen, and comfortable shared spaces. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 8296,
    "location": "Barcelona",
    "country": "Spain",
    "category": "Apartment"
  },
  {
    "title": "Desert Camp Tent in Pokhara",
    "description": "A memorable desert stay with sunset views, cultural experiences, and starry skies. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 4805,
    "location": "Pokhara",
    "country": "Nepal",
    "category": "Apartment"
  },
  {
    "title": "Eco-Friendly Jungle Lodge in Pune",
    "description": "A nature-focused lodge with simple comforts, local materials, and guided outdoor activities. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 5572,
    "location": "Pune",
    "country": "India",
    "category": "Apartment"
  },
  {
    "title": "Overwater Bungalow in Munnar",
    "description": "A tranquil bungalow with ocean views, a deck, and direct access to clear blue water. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 44235,
    "location": "Munnar",
    "country": "India",
    "category": "Apartment"
  },
  {
    "title": "Pet-Friendly Garden Cottage in Andaman Islands",
    "description": "A welcoming cottage with a private garden, outdoor seating, and pet-friendly space. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 6723,
    "location": "Andaman Islands",
    "country": "India",
    "category": "Apartment"
  },
  {
    "title": "Workation Loft in Kyoto",
    "description": "A bright loft with reliable-workspace setup, a desk, Wi-Fi, and a longer-stay layout. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 2850,
    "location": "Kyoto",
    "country": "Japan",
    "category": "Apartment"
  },
  {
    "title": "Romantic Honeymoon Suite in New York",
    "description": "An intimate suite with tasteful decor, a private balcony, and a peaceful atmosphere. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 10977,
    "location": "New York",
    "country": "United States",
    "category": "Apartment"
  },
  {
    "title": "Seaside Guesthouse in Istanbul",
    "description": "A relaxed guesthouse near the shore with simple rooms and easy beach access. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 3471,
    "location": "Istanbul",
    "country": "Turkey",
    "category": "Apartment"
  },
  {
    "title": "Ski Resort Apartment in Alibaug",
    "description": "A comfortable apartment near mountain activities with warm interiors and storage space. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 13454,
    "location": "Alibaug",
    "country": "India",
    "category": "Apartment"
  },
  {
    "title": "Design-Led Tiny Home in Varanasi",
    "description": "A cleverly designed small home with efficient storage, natural light, and a private patio. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 2480,
    "location": "Varanasi",
    "country": "India",
    "category": "Apartment"
  },
  {
    "title": "Royal Palace View Room in Bali",
    "description": "A refined room with landmark views, elegant furnishings, and a memorable location. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 6346,
    "location": "Bali",
    "country": "Indonesia",
    "category": "Apartment"
  },
  {
    "title": "Riverside Retreat in Paris",
    "description": "A restful property beside the river with outdoor seating and nature views. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 7350,
    "location": "Paris",
    "country": "France",
    "category": "Apartment"
  },
  {
    "title": "Converted Warehouse Stay in Queenstown",
    "description": "A distinctive industrial-style stay with high ceilings, open-plan interiors, and artful details. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 4584,
    "location": "Queenstown",
    "country": "New Zealand",
    "category": "Apartment"
  },
  {
    "title": "Private Pool Holiday Home in Manali",
    "description": "A private holiday home with a pool, sun loungers, and a generous living area. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "apartment-photo",
      "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 22509,
    "location": "Manali",
    "country": "India",
    "category": "Apartment"
  },
  {
    "title": "Cozy Studio Apartment Stay in Shimla",
    "description": "A compact, thoughtfully furnished stay with a comfortable bed, kitchenette, and workspace. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1878,
    "location": "Shimla",
    "country": "India",
    "category": "Villa"
  },
  {
    "title": "Luxury Beachfront Villa Escape in Jaisalmer",
    "description": "A spacious villa with sea views, a private pool, and a relaxing outdoor lounge. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 15376,
    "location": "Jaisalmer",
    "country": "India",
    "category": "Villa"
  },
  {
    "title": "Mountain View Cottage Retreat in Dubai",
    "description": "A peaceful cottage surrounded by hills, fresh air, and scenic walking trails. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 2709,
    "location": "Dubai",
    "country": "UAE",
    "category": "Villa"
  },
  {
    "title": "Heritage Haveli Room Getaway in Barcelona",
    "description": "A character-filled stay with traditional architecture, local decor, and warm hospitality. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1613490493576-7an3?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 2366,
    "location": "Barcelona",
    "country": "Spain",
    "category": "Villa"
  },
  {
    "title": "Modern City Penthouse Residence in Pokhara",
    "description": "A stylish high-floor home with skyline views, modern interiors, and easy city access. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 13579,
    "location": "Pokhara",
    "country": "Nepal",
    "category": "Villa"
  },
  {
    "title": "Farmhouse Retreat Stay in Pune",
    "description": "A relaxed countryside property with open grounds, garden seating, and room for groups. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 13903,
    "location": "Pune",
    "country": "India",
    "category": "Villa"
  },
  {
    "title": "Boutique Hotel Suite Escape in Munnar",
    "description": "An elegant private suite with premium bedding, attentive service, and thoughtful amenities. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 4408,
    "location": "Munnar",
    "country": "India",
    "category": "Villa"
  },
  {
    "title": "Treehouse Hideaway Retreat in Andaman Islands",
    "description": "A unique elevated hideaway surrounded by greenery, ideal for a quiet nature break. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1613490493576-7an3?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 8741,
    "location": "Andaman Islands",
    "country": "India",
    "category": "Villa"
  },
  {
    "title": "Lakefront Wooden Chalet Getaway in Kyoto",
    "description": "A warm wooden chalet with peaceful water views and a private balcony. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 6368,
    "location": "Kyoto",
    "country": "Japan",
    "category": "Villa"
  },
  {
    "title": "Budget Traveller Hostel Residence in New York",
    "description": "A clean, social stay with practical facilities and convenient access to local attractions. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 928,
    "location": "New York",
    "country": "United States",
    "category": "Villa"
  },
  {
    "title": "Family Holiday Home Stay in Istanbul",
    "description": "A roomy home with multiple bedrooms, a kitchen, and comfortable shared spaces. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 9542,
    "location": "Istanbul",
    "country": "Turkey",
    "category": "Villa"
  },
  {
    "title": "Desert Camp Tent Escape in Alibaug",
    "description": "A memorable desert stay with sunset views, cultural experiences, and starry skies. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1613490493576-7an3?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 5425,
    "location": "Alibaug",
    "country": "India",
    "category": "Villa"
  },
  {
    "title": "Eco-Friendly Jungle Lodge Retreat in Varanasi",
    "description": "A nature-focused lodge with simple comforts, local materials, and guided outdoor activities. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 6207,
    "location": "Varanasi",
    "country": "India",
    "category": "Villa"
  },
  {
    "title": "Overwater Bungalow Getaway in Bali",
    "description": "A tranquil bungalow with ocean views, a deck, and direct access to clear blue water. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 17522,
    "location": "Bali",
    "country": "Indonesia",
    "category": "Villa"
  },
  {
    "title": "Pet-Friendly Garden Cottage Residence in Paris",
    "description": "A welcoming cottage with a private garden, outdoor seating, and pet-friendly space. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 3425,
    "location": "Paris",
    "country": "France",
    "category": "Villa"
  },
  {
    "title": "Workation Loft Stay in Queenstown",
    "description": "A bright loft with reliable-workspace setup, a desk, Wi-Fi, and a longer-stay layout. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1613490493576-7an3?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 3528,
    "location": "Queenstown",
    "country": "New Zealand",
    "category": "Villa"
  },
  {
    "title": "Romantic Honeymoon Suite Escape in Manali",
    "description": "An intimate suite with tasteful decor, a private balcony, and a peaceful atmosphere. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 9992,
    "location": "Manali",
    "country": "India",
    "category": "Villa"
  },
  {
    "title": "Seaside Guesthouse Retreat in Rishikesh",
    "description": "A relaxed guesthouse near the shore with simple rooms and easy beach access. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 3315,
    "location": "Rishikesh",
    "country": "India",
    "category": "Villa"
  },
  {
    "title": "Ski Resort Apartment Getaway in Darjeeling",
    "description": "A comfortable apartment near mountain activities with warm interiors and storage space. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 11087,
    "location": "Darjeeling",
    "country": "India",
    "category": "Villa"
  },
  {
    "title": "Design-Led Tiny Home Residence in Bangkok",
    "description": "A cleverly designed small home with efficient storage, natural light, and a private patio. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1613490493576-7an3?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 6957,
    "location": "Bangkok",
    "country": "Thailand",
    "category": "Villa"
  },
  {
    "title": "Royal Palace View Room Stay in Santorini",
    "description": "A refined room with landmark views, elegant furnishings, and a memorable location. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 8163,
    "location": "Santorini",
    "country": "Greece",
    "category": "Villa"
  },
  {
    "title": "Riverside Retreat Escape in Kathmandu",
    "description": "A restful property beside the river with outdoor seating and nature views. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 8539,
    "location": "Kathmandu",
    "country": "Nepal",
    "category": "Villa"
  },
  {
    "title": "Converted Warehouse Stay Retreat in Udaipur",
    "description": "A distinctive industrial-style stay with high ceilings, open-plan interiors, and artful details. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 7277,
    "location": "Udaipur",
    "country": "India",
    "category": "Villa"
  },
  {
    "title": "Private Pool Holiday Home Getaway in Ooty",
    "description": "A private holiday home with a pool, sun loungers, and a generous living area. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "villa-photo",
      "url": "https://images.unsplash.com/photo-1613490493576-7an3?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 9087,
    "location": "Ooty",
    "country": "India",
    "category": "Villa"
  },
  {
    "title": "Cozy Studio Apartment Residence in Andaman Islands",
    "description": "A compact, thoughtfully furnished stay with a comfortable bed, kitchenette, and workspace. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 2897,
    "location": "Andaman Islands",
    "country": "India",
    "category": "Cabin"
  },
  {
    "title": "Luxury Beachfront Villa Stay in Kyoto",
    "description": "A spacious villa with sea views, a private pool, and a relaxing outdoor lounge. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 27687,
    "location": "Kyoto",
    "country": "Japan",
    "category": "Cabin"
  },
  {
    "title": "Mountain View Cottage Escape in New York",
    "description": "A peaceful cottage surrounded by hills, fresh air, and scenic walking trails. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 5137,
    "location": "New York",
    "country": "United States",
    "category": "Cabin"
  },
  {
    "title": "Heritage Haveli Room Retreat in Istanbul",
    "description": "A character-filled stay with traditional architecture, local decor, and warm hospitality. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 2585,
    "location": "Istanbul",
    "country": "Turkey",
    "category": "Cabin"
  },
  {
    "title": "Modern City Penthouse Getaway in Alibaug",
    "description": "A stylish high-floor home with skyline views, modern interiors, and easy city access. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 8466,
    "location": "Alibaug",
    "country": "India",
    "category": "Cabin"
  },
  {
    "title": "Farmhouse Retreat Residence in Varanasi",
    "description": "A relaxed countryside property with open grounds, garden seating, and room for groups. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 9737,
    "location": "Varanasi",
    "country": "India",
    "category": "Cabin"
  },
  {
    "title": "Boutique Hotel Suite Stay in Bali",
    "description": "An elegant private suite with premium bedding, attentive service, and thoughtful amenities. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 5538,
    "location": "Bali",
    "country": "Indonesia",
    "category": "Cabin"
  },
  {
    "title": "Treehouse Hideaway Escape in Paris",
    "description": "A unique elevated hideaway surrounded by greenery, ideal for a quiet nature break. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 3706,
    "location": "Paris",
    "country": "France",
    "category": "Cabin"
  },
  {
    "title": "Lakefront Wooden Chalet Retreat in Queenstown",
    "description": "A warm wooden chalet with peaceful water views and a private balcony. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 4115,
    "location": "Queenstown",
    "country": "New Zealand",
    "category": "Cabin"
  },
  {
    "title": "Budget Traveller Hostel Getaway in Manali",
    "description": "A clean, social stay with practical facilities and convenient access to local attractions. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1644,
    "location": "Manali",
    "country": "India",
    "category": "Cabin"
  },
  {
    "title": "Family Holiday Home Residence in Rishikesh",
    "description": "A roomy home with multiple bedrooms, a kitchen, and comfortable shared spaces. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 5270,
    "location": "Rishikesh",
    "country": "India",
    "category": "Cabin"
  },
  {
    "title": "Desert Camp Tent Stay in Darjeeling",
    "description": "A memorable desert stay with sunset views, cultural experiences, and starry skies. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 2140,
    "location": "Darjeeling",
    "country": "India",
    "category": "Cabin"
  },
  {
    "title": "Eco-Friendly Jungle Lodge Escape in Bangkok",
    "description": "A nature-focused lodge with simple comforts, local materials, and guided outdoor activities. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 4806,
    "location": "Bangkok",
    "country": "Thailand",
    "category": "Cabin"
  },
  {
    "title": "Overwater Bungalow Retreat in Santorini",
    "description": "A tranquil bungalow with ocean views, a deck, and direct access to clear blue water. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 34277,
    "location": "Santorini",
    "country": "Greece",
    "category": "Cabin"
  },
  {
    "title": "Pet-Friendly Garden Cottage Getaway in Kathmandu",
    "description": "A welcoming cottage with a private garden, outdoor seating, and pet-friendly space. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 3450,
    "location": "Kathmandu",
    "country": "Nepal",
    "category": "Cabin"
  },
  {
    "title": "Workation Loft Residence in Udaipur",
    "description": "A bright loft with reliable-workspace setup, a desk, Wi-Fi, and a longer-stay layout. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 3631,
    "location": "Udaipur",
    "country": "India",
    "category": "Cabin"
  },
  {
    "title": "Romantic Honeymoon Suite Stay in Ooty",
    "description": "An intimate suite with tasteful decor, a private balcony, and a peaceful atmosphere. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 9069,
    "location": "Ooty",
    "country": "India",
    "category": "Cabin"
  },
  {
    "title": "Seaside Guesthouse Escape in Srinagar",
    "description": "A relaxed guesthouse near the shore with simple rooms and easy beach access. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 5159,
    "location": "Srinagar",
    "country": "India",
    "category": "Cabin"
  },
  {
    "title": "Ski Resort Apartment Retreat in Abu Dhabi",
    "description": "A comfortable apartment near mountain activities with warm interiors and storage space. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 21553,
    "location": "Abu Dhabi",
    "country": "UAE",
    "category": "Cabin"
  },
  {
    "title": "Design-Led Tiny Home Getaway in London",
    "description": "A cleverly designed small home with efficient storage, natural light, and a private patio. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 2320,
    "location": "London",
    "country": "United Kingdom",
    "category": "Cabin"
  },
  {
    "title": "Royal Palace View Room Residence in Maldives",
    "description": "A refined room with landmark views, elegant furnishings, and a memorable location. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 11393,
    "location": "Maldives",
    "country": "Maldives",
    "category": "Cabin"
  },
  {
    "title": "Riverside Retreat Stay in Mumbai",
    "description": "A restful property beside the river with outdoor seating and nature views. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 5882,
    "location": "Mumbai",
    "country": "India",
    "category": "Cabin"
  },
  {
    "title": "Converted Warehouse Stay Escape in Coorg",
    "description": "A distinctive industrial-style stay with high ceilings, open-plan interiors, and artful details. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 6346,
    "location": "Coorg",
    "country": "India",
    "category": "Cabin"
  },
  {
    "title": "Private Pool Holiday Home Retreat in Agra",
    "description": "A private holiday home with a pool, sun loungers, and a generous living area. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "cabin-photo",
      "url": "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 10163,
    "location": "Agra",
    "country": "India",
    "category": "Cabin"
  },
  {
    "title": "Cozy Studio Apartment Getaway in Paris",
    "description": "A compact, thoughtfully furnished stay with a comfortable bed, kitchenette, and workspace. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 3825,
    "location": "Paris",
    "country": "France",
    "category": "Hotel"
  },
  {
    "title": "Luxury Beachfront Villa Residence in Queenstown",
    "description": "A spacious villa with sea views, a private pool, and a relaxing outdoor lounge. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 19022,
    "location": "Queenstown",
    "country": "New Zealand",
    "category": "Hotel"
  },
  {
    "title": "Mountain View Cottage Stay in Manali",
    "description": "A peaceful cottage surrounded by hills, fresh air, and scenic walking trails. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 7735,
    "location": "Manali",
    "country": "India",
    "category": "Hotel"
  },
  {
    "title": "Heritage Haveli Room Escape in Rishikesh",
    "description": "A character-filled stay with traditional architecture, local decor, and warm hospitality. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 5774,
    "location": "Rishikesh",
    "country": "India",
    "category": "Hotel"
  },
  {
    "title": "Modern City Penthouse Retreat in Darjeeling",
    "description": "A stylish high-floor home with skyline views, modern interiors, and easy city access. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 11848,
    "location": "Darjeeling",
    "country": "India",
    "category": "Hotel"
  },
  {
    "title": "Farmhouse Retreat Getaway in Bangkok",
    "description": "A relaxed countryside property with open grounds, garden seating, and room for groups. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 4831,
    "location": "Bangkok",
    "country": "Thailand",
    "category": "Hotel"
  },
  {
    "title": "Boutique Hotel Suite Residence in Santorini",
    "description": "An elegant private suite with premium bedding, attentive service, and thoughtful amenities. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 5052,
    "location": "Santorini",
    "country": "Greece",
    "category": "Hotel"
  },
  {
    "title": "Treehouse Hideaway Stay in Kathmandu",
    "description": "A unique elevated hideaway surrounded by greenery, ideal for a quiet nature break. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 7398,
    "location": "Kathmandu",
    "country": "Nepal",
    "category": "Hotel"
  },
  {
    "title": "Lakefront Wooden Chalet Escape in Udaipur",
    "description": "A warm wooden chalet with peaceful water views and a private balcony. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 9720,
    "location": "Udaipur",
    "country": "India",
    "category": "Hotel"
  },
  {
    "title": "Budget Traveller Hostel Retreat in Ooty",
    "description": "A clean, social stay with practical facilities and convenient access to local attractions. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1471,
    "location": "Ooty",
    "country": "India",
    "category": "Hotel"
  },
  {
    "title": "Family Holiday Home Getaway in Srinagar",
    "description": "A roomy home with multiple bedrooms, a kitchen, and comfortable shared spaces. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 4356,
    "location": "Srinagar",
    "country": "India",
    "category": "Hotel"
  },
  {
    "title": "Desert Camp Tent Residence in Abu Dhabi",
    "description": "A memorable desert stay with sunset views, cultural experiences, and starry skies. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 3568,
    "location": "Abu Dhabi",
    "country": "UAE",
    "category": "Hotel"
  },
  {
    "title": "Eco-Friendly Jungle Lodge Stay in London",
    "description": "A nature-focused lodge with simple comforts, local materials, and guided outdoor activities. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 8087,
    "location": "London",
    "country": "United Kingdom",
    "category": "Hotel"
  },
  {
    "title": "Overwater Bungalow Escape in Maldives",
    "description": "A tranquil bungalow with ocean views, a deck, and direct access to clear blue water. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 31820,
    "location": "Maldives",
    "country": "Maldives",
    "category": "Hotel"
  },
  {
    "title": "Pet-Friendly Garden Cottage Retreat in Mumbai",
    "description": "A welcoming cottage with a private garden, outdoor seating, and pet-friendly space. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 7260,
    "location": "Mumbai",
    "country": "India",
    "category": "Hotel"
  },
  {
    "title": "Workation Loft Getaway in Coorg",
    "description": "A bright loft with reliable-workspace setup, a desk, Wi-Fi, and a longer-stay layout. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 3636,
    "location": "Coorg",
    "country": "India",
    "category": "Hotel"
  },
  {
    "title": "Romantic Honeymoon Suite Residence in Agra",
    "description": "An intimate suite with tasteful decor, a private balcony, and a peaceful atmosphere. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 13742,
    "location": "Agra",
    "country": "India",
    "category": "Hotel"
  },
  {
    "title": "Seaside Guesthouse Stay in Tokyo",
    "description": "A relaxed guesthouse near the shore with simple rooms and easy beach access. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 2780,
    "location": "Tokyo",
    "country": "Japan",
    "category": "Hotel"
  },
  {
    "title": "Ski Resort Apartment Escape in Cape Town",
    "description": "A comfortable apartment near mountain activities with warm interiors and storage space. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 14420,
    "location": "Cape Town",
    "country": "South Africa",
    "category": "Hotel"
  },
  {
    "title": "Design-Led Tiny Home Retreat in Goa",
    "description": "A cleverly designed small home with efficient storage, natural light, and a private patio. Ideal for couples, families, and weekend travellers.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 5145,
    "location": "Goa",
    "country": "India",
    "category": "Hotel"
  },
  {
    "title": "Royal Palace View Room Getaway in Lonavala",
    "description": "A refined room with landmark views, elegant furnishings, and a memorable location. Designed for comfort with a welcoming, home-like atmosphere.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 14366,
    "location": "Lonavala",
    "country": "India",
    "category": "Hotel"
  },
  {
    "title": "Riverside Retreat Residence in Kochi",
    "description": "A restful property beside the river with outdoor seating and nature views. Enjoy a peaceful stay with carefully selected amenities.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 5777,
    "location": "Kochi",
    "country": "India",
    "category": "Hotel"
  },
  {
    "title": "Converted Warehouse Stay Stay in Phuket",
    "description": "A distinctive industrial-style stay with high ceilings, open-plan interiors, and artful details. A great base for exploring the destination at your own pace.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 7951,
    "location": "Phuket",
    "country": "Thailand",
    "category": "Hotel"
  },
  {
    "title": "Private Pool Holiday Home Escape in Rome",
    "description": "A private holiday home with a pool, sun loungers, and a generous living area. Close to popular attractions, cafés, and local transport.",
    "image": {
      "filename": "hotel-photo",
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 13494,
    "location": "Rome",
    "country": "Italy",
    "category": "Hotel"
  },
  {
    "title": "Affordable Female Dormitory in Kathmandu",
    "description": "A practical choice for backpackers, solo travellers, and guests looking for low-cost accommodation.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 750,
    "location": "Kathmandu",
    "country": "Nepal",
    "category": "Dormitory"
  },
  {
    "title": "Affordable Female Dormitory in Udaipur",
    "description": "A practical choice for backpackers, solo travellers, and guests looking for low-cost accommodation.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1000,
    "location": "Udaipur",
    "country": "India",
    "category": "Dormitory"
  },
  {
    "title": "Affordable Female Dormitory in Ooty",
    "description": "A practical choice for backpackers, solo travellers, and guests looking for low-cost accommodation.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1250,
    "location": "Ooty",
    "country": "India",
    "category": "Dormitory"
  },
  {
    "title": "Affordable Female Dormitory in Srinagar",
    "description": "A practical choice for backpackers, solo travellers, and guests looking for low-cost accommodation.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1500,
    "location": "Srinagar",
    "country": "India",
    "category": "Dormitory"
  },
  {
    "title": "Compact 6-Bed Dormitory in Abu Dhabi",
    "description": "A budget-friendly shared room with bunk beds, secure storage, and common areas for travellers.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 500,
    "location": "Abu Dhabi",
    "country": "UAE",
    "category": "Dormitory"
  },
  {
    "title": "Compact 6-Bed Dormitory in London",
    "description": "A budget-friendly shared room with bunk beds, secure storage, and common areas for travellers.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 750,
    "location": "London",
    "country": "United Kingdom",
    "category": "Dormitory"
  },
  {
    "title": "Compact 6-Bed Dormitory in Maldives",
    "description": "A budget-friendly shared room with bunk beds, secure storage, and common areas for travellers.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1000,
    "location": "Maldives",
    "country": "Maldives",
    "category": "Dormitory"
  },
  {
    "title": "Compact 6-Bed Dormitory in Mumbai",
    "description": "A budget-friendly shared room with bunk beds, secure storage, and common areas for travellers.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1250,
    "location": "Mumbai",
    "country": "India",
    "category": "Dormitory"
  },
  {
    "title": "Compact 6-Bed Dormitory in Coorg",
    "description": "A budget-friendly shared room with bunk beds, secure storage, and common areas for travellers.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1500,
    "location": "Coorg",
    "country": "India",
    "category": "Dormitory"
  },
  {
    "title": "Budget 8-Bed Dormitory in Agra",
    "description": "A sociable shared stay with comfortable bunks and convenient access to local attractions.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 500,
    "location": "Agra",
    "country": "India",
    "category": "Dormitory"
  },
  {
    "title": "Budget 8-Bed Dormitory in Tokyo",
    "description": "A sociable shared stay with comfortable bunks and convenient access to local attractions.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 750,
    "location": "Tokyo",
    "country": "Japan",
    "category": "Dormitory"
  },
  {
    "title": "Budget 8-Bed Dormitory in Cape Town",
    "description": "A sociable shared stay with comfortable bunks and convenient access to local attractions.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1000,
    "location": "Cape Town",
    "country": "South Africa",
    "category": "Dormitory"
  },
  {
    "title": "Budget 8-Bed Dormitory in Goa",
    "description": "A sociable shared stay with comfortable bunks and convenient access to local attractions.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1250,
    "location": "Goa",
    "country": "India",
    "category": "Dormitory"
  },
  {
    "title": "Budget 8-Bed Dormitory in Lonavala",
    "description": "A sociable shared stay with comfortable bunks and convenient access to local attractions.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1500,
    "location": "Lonavala",
    "country": "India",
    "category": "Dormitory"
  },
  {
    "title": "Solo Traveller Dormitory in Kochi",
    "description": "An affordable dormitory with shared facilities, individual sleeping spaces, and a relaxed atmosphere.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 500,
    "location": "Kochi",
    "country": "India",
    "category": "Dormitory"
  },
  {
    "title": "Solo Traveller Dormitory in Phuket",
    "description": "An affordable dormitory with shared facilities, individual sleeping spaces, and a relaxed atmosphere.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 750,
    "location": "Phuket",
    "country": "Thailand",
    "category": "Dormitory"
  },
  {
    "title": "Solo Traveller Dormitory in Rome",
    "description": "An affordable dormitory with shared facilities, individual sleeping spaces, and a relaxed atmosphere.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1000,
    "location": "Rome",
    "country": "Italy",
    "category": "Dormitory"
  },
  {
    "title": "Solo Traveller Dormitory in Colombo",
    "description": "An affordable dormitory with shared facilities, individual sleeping spaces, and a relaxed atmosphere.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1250,
    "location": "Colombo",
    "country": "Sri Lanka",
    "category": "Dormitory"
  },
  {
    "title": "Solo Traveller Dormitory in Jaipur",
    "description": "An affordable dormitory with shared facilities, individual sleeping spaces, and a relaxed atmosphere.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1500,
    "location": "Jaipur",
    "country": "India",
    "category": "Dormitory"
  },
  {
    "title": "Central Shared Dormitory in Shimla",
    "description": "A practical choice for backpackers, solo travellers, and guests looking for low-cost accommodation.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 500,
    "location": "Shimla",
    "country": "India",
    "category": "Dormitory"
  },
  {
    "title": "Central Shared Dormitory in Jaisalmer",
    "description": "A practical choice for backpackers, solo travellers, and guests looking for low-cost accommodation.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 750,
    "location": "Jaisalmer",
    "country": "India",
    "category": "Dormitory"
  },
  {
    "title": "Central Shared Dormitory in Dubai",
    "description": "A practical choice for backpackers, solo travellers, and guests looking for low-cost accommodation.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1000,
    "location": "Dubai",
    "country": "UAE",
    "category": "Dormitory"
  },
  {
    "title": "Central Shared Dormitory in Barcelona",
    "description": "A practical choice for backpackers, solo travellers, and guests looking for low-cost accommodation.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1250,
    "location": "Barcelona",
    "country": "Spain",
    "category": "Dormitory"
  },
  {
    "title": "Central Shared Dormitory in Pokhara",
    "description": "A practical choice for backpackers, solo travellers, and guests looking for low-cost accommodation.",
    "image": {
      "filename": "dormitory-photo",
      "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
    },
    "price": 1500,
    "location": "Pokhara",
    "country": "Nepal",
    "category": "Dormitory"
  }
];

module.exports = { data: sampleListings };