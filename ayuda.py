Getting Data
Assuming you have a Person object in your models.py file.
# get all the people
people_query = Person.query.all()

# get only the ones named "Joe"
people_query = Person.query.filter_by(name='Joe')

# map the results and your list of people  inside of the all_people variable
all_people = list(map(lambda x: x.serialize(), people_query))

# get just one person
user1 = Person.query.get(person_id)
Inserting data
Assuming you have a Person object in your models.py file.
user1 = Person()
user1.username = "my_super_username"
user1.email = "my_super@email.com"
db.session.add(user1)
db.session.commit()
Updating data
user1 = Person.query.get(person_id)
if user1 is None:
    return jsonify({'msg':'User not found'},404

if "username" in body:
    user1.username = body["username"]
if "email" in body:
    user1.email = body["email"]
db.session.commit()
Delete data
user1 = Person.query.get(person_id)
if user1 is None:
   return jsonify({'msg':'User not found'},404
db.session.delete(user1)
db.session.commit()
Query Join and Serialize:
favorite_planets = db.session.query(FavoritePlanets, Planets).join(Planets).filter(FavoritePlanets.user_id == id).all()
favorite_planets_serialized = []
for favorite_planet, planet in favorite_planets:
    favorite_planets_serialized.append({'favorite_planet_id': favorite_planet.id,
    "planet": planet.serialize(),
    "user_id": id})