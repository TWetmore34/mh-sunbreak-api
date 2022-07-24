-- ok so im thinking we store the skills in a JSON datatype so far, where the key is the skill name, so we can access thru object.keys
-- and the value is the level, this should allow us to add like keys to one another? smth like doing a .filter for a particular key value, 
-- grabbing those values, and then doing our math stuff w them?
-- the rest should be p mundane to store i think
DROP DATABASE IF EXISTS armor_db;
CREATE DATABASE armor_db;

USE armor_db;
-- going to set this table up to take inserts dynamically
-- on a post request, well do a first query to make sure the set exists (it'll pull ids based on value from a dropdown list)
-- if it does exist, great! we go on to the next insert and it gets placed in- if it doesnt, and the id returns null, we do an insert to the table w the name and id
-- that does mean we need to set up our obj to send the id and value, so well do it in an obj where the name is the key, and the id is the val
-- we do it that way bc we wont always need the name, but will always need the id
-- so ill make the one we access more often easier to get to
CREATE TABLE armor_sets (
    id INT NOT NULL UNIQUE PRIMARY KEY,
    name VARCHAR(200)
);

CREATE TABLE armor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200),
    armor_type VARCHAR(200),
    -- armor_set_id INT NOT NULL,
    phys_defense VARCHAR(20) NOT NULL,
    fire_resist VARCHAR(20) NOT NULL,
    water_resist VARCHAR(20) NOT NULL,
    thunder_resist VARCHAR(20) NOT NULL,
    ice_resist VARCHAR(20) NOT NULL,
    dragon_resist VARCHAR(20) NOT NULL,
    skills VARCHAR(200),
    slots VARCHAR(200)
    -- FOREIGN KEY (armor_set_id)
    -- REFERENES armor_sets(id)
);

SHOW TABLES;