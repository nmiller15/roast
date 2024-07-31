INSERT INTO users (first_name, last_name, email, username, password)
VALUES ( 'Nolan', 'Miller', 'mail@nolanmiller.me', 'nolanmiller', 'midnightcodermonkey');

INSERT INTO roasts (user_id, date_roasted, rating, origin, variety, name, starting_weight_g, ending_weight_g, heat_level, start_temp_f, lowest_temp_f, first_crack_seconds, temp_rise_seconds, opened_lid_seconds, heat_off_seconds, dumped_seconds, is_favorite, notes) VALUES 
(1, '2024-07-22', 3, 'Ethiopian', 'Yirgacheffe', 'Ethiopian Yirgacheffe', 228, 191, 'Med', 400, 325, 140, 180, 210, 235, 255, FALSE, 'Doesn''t taste as good as last time... I wonder if the weather is making the beans roast faster now that it''s warmer'),
(1, '2024-07-15', 4, 'Brazil', 'Daterra', 'Brazil Daterra', 228, 199, 'Med', 400, 240, 120, 150, 200, 225, 270, FALSE, 'This Brazil is very good! Took a chance and left it on longer than I usually leave things on for.'),
(1, '2024-07-01', 2, 'Colombia', 'Buesaco', 'Colombia Buesaco', 228, 187, 'Med', 400, 325, 100, 175, 212, 249, 260, FALSE, 'Too dark'),
(1, '2024-06-15', 5, 'Brazil', 'Daterra', 'Brazil Daterra', 228, 196, 'Med', 400, 340, 100, 145, 170, 190, 200, FALSE, 'Too quick again...'),
(1, '2024-06-11', 3, 'Ethiopian', 'Yirgacheffe', 'Ethiopian Yirgacheffe', 228, 187, 'Med', 400, 325, 132, 178, 210, 220, 260, FALSE, 'I''m starting to dial this one in!'),
(1, '2024-06-03', 3, 'Colombian', 'Buesaco', 'Colombia Buesaco', 228, 192, 'Med', 400, 325, 140, 180, 210, 235, 255, TRUE, 'Just got this roast, trying it out for the first time.'),
(1, '2024-04-15', 5, 'Brazil', 'Daterra', 'Brazil Daterra', 228, 196, 'Med', 400, 340, 100, 145, 170, 190, 200, FALSE, 'I was a little quick on the trigger for this one.'),
(1, '2024-04-02', 5, 'Ethiopian', 'Yirgacheffe', 'Ethiopian Yirgacheffe', 228, 191, 'Med', 400, 325, 140, 180, 210, 235, 255, TRUE, 'My first time trying this blend!');
